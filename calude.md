# CLAUDE.md — Alex Georgiev Personal Website

Read this entire file before writing a single line of code.
This is the source of truth for every decision in this project.

---

## Project Overview

Personal website for Alex Georgiev — full stack software engineer.
This is a personal site first, portfolio second. The tone is human,
confident, and unhurried. Recruiters should leave feeling like they
know who Alex is — and then go find the resume. Not the other way around.

Repo: https://github.com/alexsg2/PersonalWebsite
Live URL: https://alexsg2.github.io/PersonalWebsite

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework — static export for GitHub Pages |
| TypeScript | Language — no `.js` files ever |
| Tailwind CSS | Styling — no custom CSS files unless unavoidable |
| Framer Motion | Animations — scroll reveals, transitions |
| shadcn/ui | UI primitives — use before building custom |
| lucide-react | Icons — only icon library used |
| next/font | Fonts — self-hosted, zero layout shift |

---

## Commands

```bash
npm run dev          # dev server at localhost:3000
npm run build        # static export to /out — what gets deployed
npx tsc --noEmit     # type check — must pass before any task is "done"
npm run lint         # lint — must pass before any task is "done"
```

---

## GitHub Pages Config

**`next.config.ts`:**
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/PersonalWebsite',
  images: { unoptimized: true },
};

export default nextConfig;
```

**Critical:** The `basePath` of `/PersonalWebsite` affects all asset paths.
- Next.js `<Link>` and `<Image>` handle this automatically — always prefer these
- If a raw `<img>` or `<a href>` is ever needed, prefix with `/PersonalWebsite`
- Never use plain `<img src="/images/...">` — it will 404 in production

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, navbar
│   ├── page.tsx                # Main page: Hero + About + Projects + Contact
│   ├── projects/
│   │   └── page.tsx            # Full filterable project list
│   └── globals.css             # Tailwind base + CSS variables + grain texture
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx           # Photo + bio + skills + resume link
│   │   ├── Projects.tsx        # Featured 6 on main page
│   │   └── Contact.tsx
│   └── ui/
│       ├── ProjectCard.tsx     # Used on both main page and /projects
│       ├── ProjectModal.tsx    # Detail view on card click
│       ├── ProjectFilter.tsx   # Filter bar — /projects page only
│       └── SkillBadge.tsx
├── data/
│   ├── projects.ts             # All project data — only file to touch when adding projects
│   └── skills.ts               # Skills grouped by category
└── public/
    ├── resume.pdf
    └── images/
        ├── headshot.jpg
        └── projects/           # One thumbnail per project, ~1200x630px
```

---

## Routes

| Route | What it is |
|---|---|
| `/` | Hero + About + Projects (6 featured) + Contact |
| `/projects` | Full project list with filters |

---

## Aesthetic Direction

**Reference:** https://braydenfriesen.com

Editorial minimalism. Handcrafted, calm, confident. Not a typical dev
portfolio. Not flashy. Every element earns its place. The design should
feel like a considered magazine spread, not a UI component showcase.

### Color Palette

Define these in `globals.css` as CSS variables:

```css
:root {
  --background: #111008;              /* near-black with warm undertone */
  --foreground: #e8e0d0;              /* warm cream — never pure white */
  --muted: #7a7060;                   /* warm gray for secondary text */
  --accent: #c9a96e;                  /* warm amber — the only pop of color */
  --card-bg: #1a180f;                 /* slightly lighter than background */
  --border: rgba(232, 224, 208, 0.08);
}
```

### Grain Texture

Add to `globals.css` — applies subtle film grain over the entire page:

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 100;
  opacity: 0.4;
}
```

### Typography

Three fonts — each has a specific role. Do not swap them.

```tsx
// app/layout.tsx
import { Playfair_Display, DM_Mono, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});
```

**Font roles — follow these strictly:**
- `--font-display` (Playfair Display): Hero name, all section headings, project titles in modal
- `--font-mono` (DM Mono): Nav links, labels, tags, tech stack items, "currently" block, small UI text
- `--font-sans` (DM Sans): Bio paragraph, project descriptions, all body prose

**Type scale:**
- Hero name: `text-7xl md:text-8xl lg:text-9xl font-bold font-display`
- Section headings: `text-4xl md:text-5xl font-display`
- Body prose: `text-base leading-relaxed font-sans`
- Labels / tags / nav: `text-xs md:text-sm font-mono tracking-wide`
- Muted labels: add `text-[var(--muted)]`

### Spacing

Generous. Emptiness is intentional — do not fill it.

- Section padding: `py-24 md:py-36`
- Content max width: `max-w-5xl mx-auto px-6 md:px-12`
- Use this exact wrapper in every section — consistency matters
- Between heading and content: `mt-12 md:mt-16`
- Let headings sit alone — don't crowd them with content above

### Animation Rules

Subtle. Nothing draws attention to itself.

```tsx
// Standard scroll reveal — use this exact pattern for all sections
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-80px' });

// Apply:
<motion.div
  ref={ref}
  variants={fadeUp}
  initial="hidden"
  animate={isInView ? 'visible' : 'hidden'}
>
```

No bouncing. No spinning. No parallax. Fade up only.
Stagger children with `transition: { delay: index * 0.1 }` where appropriate.

---

## Sections — Detailed Spec

### Navbar

- Minimal. Floats over the Hero with no background.
- Left: `Alex Georgiev` or `AG` in DM Mono, small, `text-[var(--muted)]`
- Right: nav links in DM Mono — `About · Projects · Contact`
- On scroll past Hero: add `backdrop-blur-sm` and `border-b border-[var(--border)]`
- Resume: plain text link on the far right — `Resume ↓` in DM Mono
- Mobile: hamburger icon (lucide `Menu`) → shadcn `Sheet` from right
- Smooth scroll to `#about`, `#projects`, `#contact` on main page
- `/projects` uses Next.js `<Link>` — it's a real route

### Hero

Full viewport height (`min-h-screen`). Typography does all the work.

Layout (vertically centered or upper-third):
1. Small label in DM Mono, muted: `Full Stack Software Engineer`
2. Name in Playfair Display, massive: `Alex Georgiev`
3. One personal line in DM Sans below: *"I build things for the web — and occasionally just for fun."*
4. Two plain text links at the bottom in DM Mono:
   - `See my work ↓` → smooth scroll to `#projects`
   - `Get in touch ↓` → smooth scroll to `#contact`

No background effects. No gradient. No particles. The grain texture and
typography are the entire visual. Trust the type.

Staggered Framer Motion entrance on load:
label (0s) → name (0.1s) → tagline (0.25s) → links (0.4s)

### About

Section id: `#about`

Consolidated section — replaces old separate About + Skills pages.

**Two-column layout on desktop. Single column stacked on mobile.**

Left column — photo:
- Headshot image — not circular, use `rounded-sm`
- Wrap in `border border-[var(--border)]`
- DM Mono label below: `Alex Georgiev · Vienna, VA` in muted color

Right column — content:
- Section heading: `About` in Playfair Display
- Bio in DM Sans — 3-4 sentences, first person, conversational:
  - Who you are as an engineer and a person
  - What you enjoy building and why
  - Mention the roguelike — shows you build because you love it, not just for work
  - Where you're headed (Charlotte, fintech/AI/ML roles)
- "Currently" block — DM Mono, small, muted label `Currently:` above:
  ```
  ↳ Software Engineer @ CoStar Group
  ↳ B.S. Computer Science, Virginia Tech '24
  ↳ Relocating to Charlotte, NC
  ↳ Building a roguelike in Unity
  ```
- Resume links in DM Mono, plain text:
  `Download resume ↓`  `View resume ↗`

**Skills — full width below the two columns, still inside About:**

Four columns: Languages · Frontend · Backend · Tools
Column label in DM Mono, small, muted, with a thin `border-b border-[var(--border)]` separator.
Skills listed as plain DM Mono text beneath each label — no badge components, no icons.

```
Languages          Frontend           Backend            Tools
───────────        ───────────        ───────────        ───────────
TypeScript         React              Node.js            Git / GitHub
JavaScript         Next.js            Express            Azure
C# / .NET 8        Tailwind CSS       REST APIs          Docker
SQL                HTML / CSS         .NET 8             Jira
Python                                                   Figma
```

On mobile: 2 columns. On small mobile: 1 column.

### Projects (main page)

Section id: `#projects`

- Heading: `Work` in Playfair Display
- Shows 6 projects where `featured: true`, sorted by `date` descending
- Layout: 2-column grid on desktop, 1-column on mobile
- Cards feel editorial — not uniform SaaS UI boxes
- Below the grid: `View all projects →` in DM Mono, plain text link to `/projects`
- Framer Motion staggered fade-up on scroll

Each `ProjectCard`:
- Thumbnail image, full width of card, `rounded-sm`
- Project title in Playfair Display
- One-line description in DM Sans, muted
- Tech tags in DM Mono, small: `TypeScript · React · Node.js`
- Hover: `translateY(-2px)` lift, border brightens to `rgba(232,224,208,0.16)`
- Click → opens `ProjectModal`

### Projects Page (`/projects`)

- Heading: `All Projects` in Playfair Display
- Count label in DM Mono, muted: `12 projects` (dynamic)
- `ProjectFilter` bar:
  - Type filter: `All · Professional · Personal · Game`
    Active filter gets `text-[var(--accent)]` and underline
  - Tech filter: unique tech tags from all projects, toggle on/off
    Active tags: `text-[var(--accent)]`, inactive: `text-[var(--muted)]`
  - All filtering is client-side, instant, no loading state
- Same `ProjectCard` components, no Framer Motion stagger (too slow when filtering)
- Same `ProjectModal` on click

### ProjectModal

Use shadcn `Dialog` on desktop, shadcn `Sheet` (bottom) on mobile.

Contents:
- Project name in Playfair Display, large
- Type + date in DM Mono, muted: `Professional · 2024`
- Thumbnail image
- Full description in DM Sans
- Tech stack: DM Mono tags
- Links in DM Mono: `Live demo ↗` · `GitHub ↗` (only render if URL exists)

### Contact

Section id: `#contact`

- Heading: `Let's Talk` in Playfair Display
- 1-2 sentences in DM Sans, casual: *"Always open to interesting conversations — about work, side projects, or anything in between."*
- Links stacked vertically in DM Mono with arrows:
  ```
  Email ↗
  GitHub ↗
  LinkedIn ↗
  Resume ↓
  ```
- Hover: `text-[var(--foreground)]` from muted, subtle transition
- No contact form in v1

### Footer

- Minimal one-line footer
- DM Mono, small, muted
- `© 2025 Alex Georgiev` on the left
- `Built with Next.js` on the right
- `border-t border-[var(--border)]` top border, `py-8`

---

## Data Structures

### `data/projects.ts`

```typescript
export type ProjectType = 'professional' | 'personal' | 'game';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;     // one line — shown on card
  longDescription: string;      // full paragraph — shown in modal
  thumbnail: string;            // '/PersonalWebsite/images/projects/name.jpg'
  date: string;                 // 'YYYY-MM' — controls sort order
  type: ProjectType;
  technologies: string[];
  featured: boolean;            // true = shows in main page 6
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [];
```

### `data/skills.ts`

```typescript
export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'C# / .NET 8', 'SQL', 'Python'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML / CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', '.NET 8'] },
  { category: 'Tools', skills: ['Git / GitHub', 'Azure', 'Docker', 'Jira', 'Figma'] },
];
```

---

## Code Rules

1. **TypeScript everywhere.** No `any`. Define interfaces for all data shapes.
2. **Tailwind only.** No custom CSS files. Only CSS variables in `globals.css`.
3. **Mobile-first.** Base styles are mobile. Use `sm:` `md:` `lg:` to scale up.
4. **shadcn/ui first.** Check shadcn before building any custom component.
5. **Data stays in `/data`.** No hardcoded content in components.
6. **`"use client"` only when necessary.** State, effects, browser APIs. Default to server components.
7. **One component per file.**
8. **Always use Next.js `<Image>` and `<Link>`.** They handle basePath automatically.
9. **No `<form>` tags.** Use `onClick` handlers.
10. **Only approved colors.** Use CSS variables only — no hardcoded hex in components.
11. **Only approved fonts.** Playfair Display, DM Mono, DM Sans. Nothing else.
12. **No electric accent colors.** Only `var(--accent)` — warm amber.
13. **`npx tsc --noEmit` must pass before any task is complete.**
14. **`npm run lint` must pass before any task is complete.**

---

## What NOT to Build

- No Experience / timeline section
- No blog
- No contact form (v1 is links only)
- No dark/light mode toggle (dark only)
- No hero background effects — grain + typography only
- No heavy card hover animations — 2px lift max
- No colored skill badges or icon-heavy skill grids
- No circular profile photo crops
- No purple gradients, glows, or neon effects
- Nothing that looks like a generic developer portfolio template

---

## Build Order

One at a time. Each step is independently testable before moving on.

1. Empty file/folder structure — create all files from the structure above
2. `globals.css` — CSS variables, Tailwind base, grain texture
3. `app/layout.tsx` — three fonts loaded and applied to `<html>` via variables
4. `data/projects.ts` + `data/skills.ts` — populate with real content before any UI
5. `Navbar`
6. `Hero`
7. `About` (photo + bio + currently + resume links + skills columns)
8. `ProjectCard` + `ProjectModal`
9. `Projects` section — main page, featured 6
10. `/projects` page — full list + `ProjectFilter`
11. `Contact`
12. `Footer`
13. Polish — spacing, mobile QA at 375/768/1280px, Lighthouse audit

---

## Definition of Done (per task)

- [ ] Renders correctly at 375px, 768px, and 1280px viewport widths
- [ ] All content sourced from data files — zero hardcoded strings in components
- [ ] Only approved fonts and CSS color variables used
- [ ] Framer Motion animation implemented where specified
- [ ] `npx tsc --noEmit` — zero errors
- [ ] `npm run lint` — zero errors
- [ ] Looks calm, editorial, and intentional — not like a template