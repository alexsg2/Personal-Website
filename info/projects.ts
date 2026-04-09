// export type ProjectType = 'professional' | 'personal' | 'school' | 'game';
export type ProjectType = 'personal' | 'school';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  date: string;
  type: ProjectType;
  technologies: string[];
  featured: boolean;
  liveUrl?: string;
  repoUrl?: string;
  devpostUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'this-website',
    title: 'Personal Website v2',
    shortDescription: 'A redesigned portfolio built with Next.js, TypeScript, and Tailwind CSS.',
    longDescription:
      'A full rework of my original personal website, rebuilt with Next.js 14, TypeScript, and Tailwind CSS. The first version was a simple React app that got the job done but felt dated. This time around I went for a cleaner, more intentional design with warm tones, better typography, and plenty of breathing room. Includes Framer Motion animations, a filterable project gallery, and static export for GitHub Pages.',
    thumbnail: '/images/projects/this-website.svg',
    date: '2026-04',
    type: 'personal',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
    repoUrl: 'https://github.com/alexsg2/Personal-Website',
    liveUrl: 'https://alexsg2.github.io/Personal-Website',
  },
  {
    id: 'lost-and-found',
    title: 'VT Lost and Found',
    shortDescription: 'An AI-powered lost item reporting platform built at VTHacks 11.',
    longDescription:
      'A hackathon project (VTHacks 11) that streamlines lost item reporting using AI. Users submit a form with a photo and contact info for found items. Google Vision AI identifies and categorizes objects automatically, storing results in MongoDB Atlas. Built with a React frontend, Flask API backend, and Python-powered AI image recognition for quick item identification.',
    thumbnail: '/images/projects/lost-and-found.avif',
    date: '2023-10',
    type: 'school',
    technologies: ['Flask', 'MongoDB', 'React', 'Google Vision', 'Python'],
    featured: true,
    repoUrl: 'https://github.com/alexsg2/VTHacks11-Lost-and-Found',
    devpostUrl: 'https://devpost.com/software/vt-lost-and-found',
  },
  {
    id: 'sudoku',
    title: 'Sudoku Puzzle Game',
    shortDescription: 'A fully playable Sudoku game with dynamic board generation and adjustable difficulty.',
    longDescription:
      'A Sudoku puzzle game that generates a unique experience every time, with customizable difficulty levels. Built with a Java backend that handles board generation and solving via a custom algorithm, and a React frontend for the interactive UI. Features include pause/resume, a solve button, board refresh, and a new game option.',
    thumbnail: '/images/projects/sudoku.png',
    date: '2023-09',
    type: 'personal',
    technologies: ['Java', 'React', 'Node.js'],
    featured: true,
    repoUrl: 'https://github.com/alexsg2/Sudoku',
  },
  {
    id: 'old-website',
    title: 'Old Personal Website',
    shortDescription: 'My first portfolio site — a learning experience in React and web development.',
    longDescription:
      'My first personal website, built to showcase skills and projects. Through the process I learned the importance of component organization, routing, and project structure in React. While basic, it was an invaluable learning experience that shaped how I approach web development today — and directly led to building this current site.',
    thumbnail: '/images/projects/old-website.png',
    date: '2023-06',
    type: 'personal',
    technologies: ['JavaScript', 'React', 'HTML', 'CSS'],
    featured: true,
    repoUrl: 'https://github.com/alexsg2/Old-Personal-Website',
  },
  {
    id: 'sister-circle',
    title: 'Sister Circle',
    shortDescription: 'A mobile safety app with real-time location sharing for women during social outings.',
    longDescription:
      'Sister Circle is a mobile app designed to enhance safety for women during social gatherings. It offers real-time location tracking and notifications so friends always know each other\'s whereabouts. Creating and managing groups is seamless. Built with React Native on the frontend and Firebase Firestore for real-time data — profiles, groups, and live location updates.',
    thumbnail: '/images/projects/sister-circle.png',
    date: '2023-02',
    type: 'school',
    technologies: ['React Native', 'Node.js', 'Firebase'],
    featured: true,
    repoUrl: 'https://github.com/Flucc/SisterCircleVT',
    devpostUrl: 'https://devpost.com/software/hangout-helper',
  },
  {
    id: 'musentence',
    title: 'MuSentence',
    shortDescription: 'A music discovery platform that recommends songs based on sentence sentiment.',
    longDescription:
      'MuSentence is an innovative music discovery platform that helps users find songs matching their emotions. It analyzes user-input sentences and identifies songs that resonate with the emotional context. Built collaboratively using Django to connect Python-based sentiment analysis with a React frontend. Users can click album covers to access recommended songs on their preferred streaming service.',
    thumbnail: '/images/projects/musentence.png',
    date: '2022-11',
    type: 'school',
    technologies: ['Python', 'Django', 'React'],
    featured: true,
    repoUrl: 'https://github.com/Flucc/MUSENTENCE',
    devpostUrl: 'https://devpost.com/software/musentence',
  },
];
