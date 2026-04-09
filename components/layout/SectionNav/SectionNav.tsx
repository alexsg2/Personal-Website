'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    // Track which sections are currently intersecting and pick the best one
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        // Pick the section with the highest intersection ratio
        let best = '';
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        });

        if (best) setActive(best);
      },
      {
        // Multiple thresholds for granular tracking
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group relative flex items-center"
          aria-label={label}
        >
          {/* Label on hover */}
          <span className="absolute right-full mr-3 font-mono text-xs tracking-wide text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
          </span>

          {/* Dot */}
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? 'w-3 h-3 bg-[var(--accent)]'
                : 'w-2 h-2 bg-[var(--muted)] opacity-40 group-hover:opacity-100'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
