export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: readonly Project[] = [
  {
    title: 'GameDan Team',
    description:
      'A production website for an indie game studio featuring a data-driven architecture, dynamic game pages, playable HTML5 titles and automated deployment.',
    image: '/images/projects/project-gamedanteam.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'CSS'],
    liveUrl: 'https://gamedanteam.com/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/gamedan-team-web',
    featured: true,
  },
  {
    title: 'Café Alejandro',
    description:
      'A multilingual website for a fictional specialty coffee shop, built with Astro, Tailwind CSS and TypeScript. Features reusable components, responsive design, accessibility, SEO and internationalization in Spanish, Catalan and English.',
    image: '/images/projects/project-coffeeshopalejandro.png',
    technologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://coffee-shop-alejandro.netlify.app/es/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/coffee-shop-alejandro-web',
  },
  {
    title: 'Martos & Mystik',
    description:
      'Official website for a Catalan-Czech music duo, featuring multilingual content, dynamic discography, Bandcamp integration and a responsive interface.',
    image: '/images/projects/project-martosandmystik.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
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
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl:
      'https://alejandroarevaloprogrammer.github.io/juan-carlos-suarez-portfolio/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/juan-carlos-suarez-portfolio',
  },
  {
    title: 'Noisechip Portfolio',
    description:
      'A responsive portfolio website for a freelance pixel artist, featuring project filtering, dynamic galleries, modal navigation and visual-focused project presentation.',
    image: '/images/projects/project-noisechip.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://noisechip.com/',
    githubUrl:
      'https://github.com/alejandroarevaloprogrammer/noisechip-portfolio',
  },
];