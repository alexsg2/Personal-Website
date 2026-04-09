# Alex Georgiev — Personal Website

My personal portfolio site built with Next.js, TypeScript, and Tailwind CSS. Designed with an editorial, minimalist aesthetic featuring warm tones, intentional typography, and Framer Motion animations.

**Live:** [alexsg2.github.io/Personal-Website](https://alexsg2.github.io/Personal-Website)

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React + Devicons
- **Hosting:** GitHub Pages

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alexsg2/Personal-Website.git
   cd Personal-Website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Generate a static export to the `out/` directory:

```bash
npm run build
```

### Other Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on localhost:3000 |
| `npm run build` | Static export to `/out` |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type check without emitting |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, navbar, footer)
│   ├── page.tsx            # Home page (Hero section)
│   ├── about/              # About page
│   └── projects/           # Filterable project gallery
├── components/
│   ├── layout/             # App-wide layout components
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   ├── SectionNav/
│   │   ├── SnapManager/
│   │   └── ThemeProvider/
│   ├── sections/           # Page-level content sections
│   │   ├── About/
│   │   ├── Hero/
│   │   └── Projects/
│   └── ui/                 # Reusable UI components
│       ├── ProjectCard/
│       ├── ProjectFilter/
│       └── ProjectModal/
├── info/                   # Content data (projects, skills)
│   ├── projects.ts
│   └── skills.ts
└── public/                 # Static assets (images, resume)
```

Each component lives in its own folder, making it easy to add co-located styles, tests, or utilities alongside it.

## Adding a New Project

Edit `info/projects.ts` and add an entry to the `projects` array:

```ts
{
  id: 'my-project',
  title: 'My Project',
  shortDescription: 'One-line summary for the card.',
  longDescription: 'Full description shown in the modal.',
  thumbnail: '/images/projects/my-project.png',
  date: '2026-01',
  type: 'personal',
  technologies: ['React', 'TypeScript'],
  featured: true,
  repoUrl: 'https://github.com/...',
  liveUrl: 'https://...',
}
```

Set `featured: true` to show it on the home page (top 6 by date).

Drop the thumbnail image into `public/images/projects/`.
