export type SkillCategory = 'Core' | 'Frameworks' | 'Styling';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: readonly Skill[] = [
  { name: 'HTML5', category: 'Core' },
  { name: 'CSS3', category: 'Core' },
  { name: 'JavaScript', category: 'Core' },
  { name: 'TypeScript', category: 'Core' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'Astro', category: 'Frameworks' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Bootstrap 5', category: 'Styling' },
];