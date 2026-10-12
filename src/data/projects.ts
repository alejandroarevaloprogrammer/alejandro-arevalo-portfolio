export interface Project {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: readonly Project[] = [
  {
    title: 'Noisechip Portfolio',
    description:
      'A modern portfolio website for a freelance pixel artist, built with Next.js and featuring responsive layouts, project galleries, interactive lightboxes and dark/light themes.',
    image: '/images/projects/project-noisechip.png',
    imageWidth: 1920,
    imageHeight: 1080,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://noisechip.com/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/noisechip-portfolio',
    featured: true,
  },
  {
    title: 'GameDan Team',
    description:
      'A production website for an indie game studio featuring a data-driven architecture, dynamic game pages, playable HTML5 titles and automated deployment.',
    image: '/images/projects/project-gamedanteam.png',
    imageWidth: 1200,
    imageHeight: 630,
    technologies: ['React', 'Next.js', 'TypeScript', 'CSS'],
    liveUrl: 'https://gamedanteam.com/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/gamedan-team-web',
  },
  {
    title: 'Café Alejandro',
    description:
      'A multilingual website for a fictional specialty coffee shop, featuring reusable components, responsive design, accessibility, SEO and internationalization in Spanish, Catalan and English.',
    image: '/images/projects/project-coffeeshopalejandro.png',
    imageWidth: 1200,
    imageHeight: 630,
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://coffee-shop-alejandro.netlify.app/en/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/coffee-shop-alejandro-web',
  },
  {
    title: 'Martos & Mystik',
    description:
      'Official website for a Catalan-Czech music duo, featuring multilingual content, dynamic discography, Bandcamp integration and a responsive interface.',
    image: '/images/projects/project-martosandmystik.png',
    imageWidth: 1200,
    imageHeight: 630,
    technologies: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    liveUrl:
      'https://alejandroarevaloprogrammer.github.io/martos-and-mystik-web/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/martos-and-mystik-web',
  },
  {
    title: 'Juan Carlos Suarez Portfolio',
    description:
      'A responsive portfolio website created for a Unity and gameplay programmer, featuring dynamic project modals, interactive UI elements, animations and multimedia content.',
    image: '/images/projects/project-juancarlossuarez.png',
    imageWidth: 1200,
    imageHeight: 630,
    technologies: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    liveUrl:
      'https://alejandroarevaloprogrammer.github.io/juan-carlos-suarez-portfolio/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/juan-carlos-suarez-portfolio',
  },
];