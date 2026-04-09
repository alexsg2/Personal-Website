export interface Skill {
  name: string;
  icon: string; // devicon class name
  color: string; // brand color for the icon
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain', color: '#3776ab' },
      { name: 'Java', icon: 'devicon-java-plain', color: '#ed8b00' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178c6' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#f7df1e' },
      { name: 'C#', icon: 'devicon-csharp-plain', color: '#68217a' },
      { name: 'C', icon: 'devicon-c-plain', color: '#a8b9cc' },
      { name: 'C++', icon: 'devicon-cplusplus-plain', color: '#00599c' },
      { name: 'HTML / CSS', icon: 'devicon-html5-plain', color: '#e34f26' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: 'devicon-react-original', color: '#61dafb' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' },
      { name: 'Express.js', icon: 'devicon-express-original', color: 'var(--foreground)' },
      { name: '.NET', icon: 'devicon-dotnetcore-plain', color: '#512bd4' },
      { name: 'React Native', icon: 'devicon-react-original', color: '#61dafb' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain', color: 'var(--foreground)' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original', color: '#06b6d4' },
      { name: 'Jest', icon: 'devicon-jest-plain', color: '#c21325' },
      { name: 'Cypress', icon: 'devicon-cypressio-plain', color: 'var(--foreground)' },
      { name: 'Django', icon: 'devicon-django-plain', color: '#092e20' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'SQL', icon: 'devicon-azuresqldatabase-plain', color: '#e38c00' },
      { name: 'Git', icon: 'devicon-git-plain', color: '#f05032' },
      { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ed' },
      { name: 'Podman', icon: 'devicon-podman-plain', color: '#892ca0' },
      { name: 'Redis', icon: 'devicon-redis-plain', color: '#dc382d' },
      { name: 'Helm', icon: 'devicon-helm-original', color: '#0f1689' },
      { name: 'Datadog', icon: 'devicon-datadog-plain', color: '#632ca6' },
      { name: 'Firebase', icon: 'devicon-firebase-plain', color: '#ffca28' },
      { name: 'Azure', icon: 'devicon-azure-plain', color: '#0078d4' },
      { name: 'CI/CD', icon: 'devicon-githubactions-plain', color: '#2088ff' },
    ],
  },
];
