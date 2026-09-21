# Alejandro Arevalo — Front-End Developer Portfolio

Personal portfolio website developed to showcase my work, skills and progression as a Front-End Developer.

Built with **Astro, Tailwind CSS and TypeScript**, the project focuses on clean component architecture, responsive design, accessibility, performance and modern front-end development practices.

The portfolio presents a selection of web development projects built with different technologies, ranging from HTML, CSS and JavaScript to Astro, React and Next.js.

---

## Live Website

https://alejandroarevalorojas.com

---

## Overview

This project is the main portfolio for my work as a Front-End Developer.

The website was rebuilt with Astro and Tailwind CSS to replace the previous Bootstrap-based version with a cleaner, more maintainable and modern architecture.

Rather than using a large client-side framework for a primarily content-driven website, Astro was selected to keep the frontend lightweight while still providing reusable components, structured TypeScript data and a scalable project organization.

The portfolio includes information about my background, education, technical skills and selected web development projects, together with a production contact system.

---

## Features

- Responsive single-page portfolio
- Reusable Astro components
- Structured project and skills data with TypeScript
- Responsive desktop, tablet and mobile navigation
- Active navigation section highlighting
- Accessible mobile navigation
- Semantic HTML structure
- Keyboard-friendly interaction
- Visible focus states
- Reduced-motion support
- Optimized static assets
- SEO metadata
- Open Graph and Twitter metadata
- JSON-LD structured data
- XML sitemap
- Robots.txt
- Web app manifest
- Responsive favicons and application icons
- Production contact form
- Server-side form validation
- Anti-spam protection
- Authenticated email delivery
- Automated production deployment

---

## Technologies Used

### Frontend

- Astro
- Tailwind CSS
- TypeScript
- HTML5
- CSS3
- JavaScript

### Backend

- PHP
- PHPMailer
- Composer

### Hosting & Infrastructure

- Git
- GitHub
- GitHub Actions
- Apache
- SSH
- rsync
- GoDaddy Web Hosting

---

## Project Structure

A simplified view of the project architecture:

```text
src/
├── components/
│   ├── About.astro
│   ├── Contact.astro
│   ├── Education.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ProjectCard.astro
│   ├── Projects.astro
│   └── Skills.astro
│
├── data/
│   ├── projects.ts
│   └── skills.ts
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   └── index.astro
│
└── styles/
    └── global.css

public/
├── icons/
├── images/
│   └── projects/
├── .htaccess
├── robots.txt
├── sitemap.xml
└── site.webmanifest

backend/
├── composer.json
├── composer.lock
└── contact.php

.github/
└── workflows/
    └── deploy.yml
```

The project separates reusable UI components, structured content, layout logic, global styles, static assets and backend functionality.

Project and skill information is stored separately from the components responsible for rendering it, making the content easier to maintain and update.

---

## Contact Form & Security

The portfolio includes a custom contact form connected to a PHP endpoint running on the production server.

The frontend submits form data to the backend, where requests are validated before email delivery.

The contact system includes:

- Client-side form validation
- Server-side validation
- Honeypot bot detection
- IP-based rate limiting
- Maximum request size validation
- Email header injection protection
- Input length validation
- JSON API responses
- Authenticated SMTP email delivery
- Reply-To support for visitor email addresses

The rate limiter allows a maximum of **3 valid submissions per IP within 10 minutes**.

Email delivery is handled with **PHPMailer** through the hosting mail server using authenticated SMTP.

Domain email authentication is configured with:

- SPF
- DKIM
- DMARC

Sensitive SMTP credentials are stored in a private server configuration file outside the public web directory and are not included in the repository.

PHP dependencies are managed through Composer, while the generated `vendor` directory is excluded from version control.

---

## Accessibility

Accessibility was considered throughout the interface.

The project includes:

- Semantic HTML
- Logical heading structure
- Keyboard-accessible navigation
- Accessible mobile menu controls
- Visible focus states
- Alternative text for relevant images
- Appropriate ARIA attributes where required
- Responsive and readable typography
- Reduced-motion support through `prefers-reduced-motion`

Accessibility was reviewed during development and production testing using Lighthouse.

---

## SEO

SEO support is integrated into the main Astro layout.

The project includes:

- Page title and meta description
- Canonical URL
- Robots directives
- Open Graph metadata
- Twitter metadata
- JSON-LD structured data
- XML sitemap
- Robots.txt
- Web app manifest
- Theme color
- Favicons and application icons
- Social sharing image
- Canonical HTTPS and non-www redirects

The portfolio uses structured person information to provide additional context to search engines.

---

## Performance

The portfolio is generated as a static Astro website, minimizing unnecessary client-side JavaScript and server-side processing.

Performance considerations include:

- Static production output
- Lightweight component architecture
- Optimized static assets
- Explicit image dimensions
- Lazy-loaded project images where appropriate
- Reduced unnecessary JavaScript
- Browser caching configuration
- HTTP compression configuration
- Reduced-motion support

The production website was tested with Lighthouse in a clean mobile test environment and achieved:

- **Performance: 100**
- **Accessibility: 100**
- **Best Practices: 100**
- **SEO: 100**

Lighthouse results can vary depending on the browser, hardware, network conditions and installed extensions.

---

## Apache Configuration

Production-specific Apache configuration is maintained in:

```text
public/.htaccess
```

Astro copies this file into the production build.

The configuration includes:

- HTTPS redirection
- Canonical non-www redirection
- URL normalization
- Browser caching
- Compression
- Security headers

Keeping this configuration inside the repository makes the production server behavior part of the version-controlled project configuration.

---

## Automated Deployment

The production website is automatically deployed through **GitHub Actions** whenever changes are pushed to the `main` branch.

The deployment workflow:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs frontend dependencies.
4. Builds the static Astro website.
5. Sets up PHP and Composer.
6. Installs production backend dependencies.
7. Establishes a secure SSH connection to the hosting server.
8. Deploys the generated frontend with `rsync`.
9. Deploys the PHP contact endpoint.
10. Deploys the required backend dependencies.

The frontend is synchronized with the production web directory while server-specific files and private configuration are kept separate from the public repository.

Deployment credentials are stored securely using GitHub Actions secrets and are never committed to the repository.

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/alejandroarevaloprogrammer/alejandro-arevalo-portfolio.git
```

Enter the project directory:

```bash
cd alejandro-arevalo-portfolio
```

Install frontend dependencies:

```bash
npm install
```

Start the Astro development server:

```bash
npm run dev
```

Astro will provide the local development URL, normally:

```text
http://localhost:4321
```

Create a production build:

```bash
npm run build
```

The generated static website will be available in:

```text
dist/
```

### Backend dependencies

PHP dependencies are managed separately with Composer.

From the project root:

```bash
composer install --working-dir=backend
```

The generated `backend/vendor/` directory is intentionally excluded from version control.

The private production SMTP configuration is not included in the repository.

### Contact form in local development

The frontend uses the relative production endpoint:

```text
/contact-api/
```

Because the PHP endpoint runs on the production hosting environment, the contact form is not available through the standard Astro development server without a separate local PHP setup or proxy.

---

## What I Learned

Rebuilding my portfolio gave me the opportunity to apply a more modern front-end architecture to a website that directly represents my work as a developer.

Some of the main areas I worked on include:

- Building reusable components with Astro
- Organizing structured content with TypeScript
- Working with Tailwind CSS
- Designing responsive layouts across different viewport sizes
- Implementing accessible navigation and interaction states
- Improving semantic HTML structure
- Applying reduced-motion accessibility preferences
- Creating SEO and social metadata
- Adding JSON-LD structured data
- Managing favicons and web app metadata
- Configuring Apache behavior through version-controlled `.htaccess`
- Connecting a static frontend to a PHP backend
- Implementing server-side form validation
- Adding honeypot and rate-limiting protection
- Managing PHP dependencies with Composer
- Sending authenticated email with PHPMailer
- Configuring SPF, DKIM and DMARC for domain email
- Separating private server configuration from public source code
- Creating an automated CI/CD deployment workflow with GitHub Actions
- Deploying securely through SSH and rsync
- Testing accessibility, performance, SEO and responsive behavior in production

The project also helped me better understand how frontend development, backend form handling, email authentication, automated deployment, hosting and production configuration work together in a real website.

---

## Author

**Alejandro Arevalo Rojas**  
Front-End Developer

Portfolio: https://alejandroarevalorojas.com

GitHub: https://github.com/alejandroarevaloprogrammer

LinkedIn: https://www.linkedin.com/in/alejandro-ar%C3%A9valo-rojas-755335365/

---

## License

Copyright © 2026 Alejandro Arevalo Rojas.

This repository is publicly available for portfolio and reference purposes.

The source code, design and portfolio content may be viewed for learning and evaluation purposes, but may not be copied, redistributed, republished or used in other projects without permission.

All rights reserved.