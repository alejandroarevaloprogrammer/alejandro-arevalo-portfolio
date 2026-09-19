<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Method not allowed.",
    ]);

    exit;
}

/*
 * Reject unusually large requests.
 */
$contentLength = (int) ($_SERVER["CONTENT_LENGTH"] ?? 0);

if ($contentLength > 15000) {
    http_response_code(413);

    echo json_encode([
        "success" => false,
        "message" => "Request too large.",
    ]);

    exit;
}

/*
 * Honeypot.
 *
 * Real users never see or fill this field.
 * Many automated bots fill every input they find.
 *
 * Return a normal success response so bots
 * cannot easily detect that they were blocked.
 */
$website = trim($_POST["website"] ?? "");

if ($website !== "") {
    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully.",
    ]);

    exit;
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

if (
    $name === "" ||
    $email === "" ||
    $message === ""
) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "All required fields must be completed.",
    ]);

    exit;
}

if (
    strlen($name) < 2 ||
    strlen($name) > 100
) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid name.",
    ]);

    exit;
}

if (
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($email) > 254
) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid email address.",
    ]);

    exit;
}

if (
    strlen($message) < 10 ||
    strlen($message) > 3000
) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid message length.",
    ]);

    exit;
}

/*
 * Prevent email header injection.
 */
if (
    preg_match("/[\r\n]/", $name) ||
    preg_match("/[\r\n]/", $email)
) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid form data.",
    ]);

    exit;
}

/*
 * Basic IP rate limiting.
 *
 * Maximum:
 * 3 valid submissions every 10 minutes
 * from the same IP address.
 */
$clientIp = $_SERVER["REMOTE_ADDR"] ?? "unknown";

$rateLimitWindow = 600;
$rateLimitMaximum = 3;

$rateLimitFile =
    sys_get_temp_dir() .
    "/programmer-contact-" .
    hash("sha256", $clientIp) .
    ".json";

$now = time();

$handle = fopen($rateLimitFile, "c+");

if ($handle !== false) {
    if (flock($handle, LOCK_EX)) {
        rewind($handle);

        $storedData = stream_get_contents($handle);
        $timestamps = [];

        if ($storedData !== false && $storedData !== "") {
            $decodedData = json_decode(
                $storedData,
                true
            );

            if (is_array($decodedData)) {
                $timestamps = $decodedData;
            }
        }

        $timestamps = array_values(
            array_filter(
                $timestamps,
                static function ($timestamp) use (
                    $now,
                    $rateLimitWindow
                ) {
                    return
                        is_int($timestamp) &&
                        $timestamp > ($now - $rateLimitWindow);
                }
            )
        );

        if (count($timestamps) >= $rateLimitMaximum) {
            flock($handle, LOCK_UN);
            fclose($handle);

            http_response_code(429);

            echo json_encode([
                "success" => false,
                "message" =>
                    "Too many messages. Please try again later.",
            ]);

            exit;
        }

        $timestamps[] = $now;

        rewind($handle);
        ftruncate($handle, 0);

        fwrite(
            $handle,
            json_encode($timestamps)
        );

        fflush($handle);

        flock($handle, LOCK_UN);
    }

    fclose($handle);
}

/*
 * Load private configuration and Composer dependencies.
 *
 * These files live outside public_html on the production server.
 */
$configPath =
    "/home/w0zo7nqf5w0i/programmer-backend/config.php";

$autoloadPath =
    "/home/w0zo7nqf5w0i/programmer-backend/vendor/autoload.php";

if (
    !is_file($configPath) ||
    !is_file($autoloadPath)
) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Server configuration error.",
    ]);

    exit;
}

$config = require $configPath;
require $autoloadPath;

if (
    !is_array($config) ||
    empty($config["smtp_password"])
) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Server configuration error.",
    ]);

    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();

    $mail->Host = "mail.alejandroarevalorojas.com";
    $mail->SMTPAuth = true;

    $mail->Username =
        "contact@alejandroarevalorojas.com";

    $mail->Password =
        $config["smtp_password"];

    $mail->SMTPSecure =
        PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;

    $mail->CharSet = "UTF-8";

    /*
     * Do not expose the mailer library and version
     * in outgoing email headers.
     */
    $mail->XMailer = null;

    $mail->setFrom(
        "contact@alejandroarevalorojas.com",
        "Alejandro Arévalo Rojas"
    );

    /*
     * Deliver portfolio form messages directly to Gmail.
     *
     * The contact@ forwarder remains available for messages
     * sent manually to the public contact address.
     */
    $mail->addAddress(
        "alejandroarevalo.programmer@gmail.com"
    );

    /*
     * Replying to the received email will reply directly
     * to the person who submitted the form.
     */
    $mail->addReplyTo(
        $email,
        $name
    );

    $mail->Subject =
        "[Portfolio] New contact - " . $name;

    $mail->Body =
        "New message from alejandroarevalorojas.com.\n\n" .
        "Name: " . $name . "\n" .
        "Email: " . $email . "\n\n" .
        "Message:\n" .
        $message . "\n";

    $mail->send();
} catch (Exception $exception) {
    error_log(
        "Portfolio contact form mail error: " .
        $mail->ErrorInfo
    );

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "The message could not be sent.",
    ]);

    exit;
}

echo json_encode([
    "success" => true,
    "message" => "Message sent successfully.",
]);