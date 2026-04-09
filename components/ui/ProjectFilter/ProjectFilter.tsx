'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ProjectType } from '@/info/projects';

const typeFilters: { label: string; value: ProjectType | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Personal', value: 'personal' },
  { label: 'School', value: 'school' },
  // { label: 'Professional', value: 'professional' },
  // { label: 'Game', value: 'game' },
];

interface ProjectFilterProps {
  activeType: ProjectType | 'all';
  activeTechs: string[];
  allTechs: string[];
  onTypeChange: (type: ProjectType | 'all') => void;
  onTechToggle: (tech: string) => void;
}

export default function ProjectFilter({
  activeType,
  activeTechs,
  allTechs,
  onTypeChange,
  onTechToggle,
}: ProjectFilterProps) {
  const [techOpen, setTechOpen] = useState(false);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (techRef.current && !techRef.current.contains(e.target as Node)) {
        setTechOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const techLabel =
    activeTechs.length === 0
      ? 'All Technologies'
      : activeTechs.length === 1
        ? activeTechs[0]
        : `${activeTechs.length} selected`;

  return (
    <div className="mb-12 flex flex-col gap-6">
      {/* Type tabs — inline row */}
      <div className="flex flex-wrap gap-4">
        {typeFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onTypeChange(filter.value)}
            className={`font-mono text-xs md:text-sm tracking-wide transition-colors ${
              activeType === filter.value
                ? 'text-[var(--accent)] underline underline-offset-4'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Tech dropdown */}
      <div ref={techRef} className="relative w-fit">
        <button
          onClick={() => setTechOpen(!techOpen)}
          className="flex items-center gap-2 font-mono text-xs md:text-sm tracking-wide text-[var(--muted)] hover:text-[var(--foreground)] transition-colors border border-[var(--border)] rounded-sm px-4 py-2"
        >
          {techLabel}
          <ChevronDown
            size={14}
            className={`transition-transform ${techOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {techOpen && (
          <div className="absolute top-full left-0 mt-2 min-w-[200px] max-h-[280px] overflow-y-auto bg-[var(--card-bg)] border border-[var(--border)] rounded-sm py-2 z-20">
            {activeTechs.length > 0 && (
              <button
                onClick={() => activeTechs.forEach((t) => onTechToggle(t))}
                className="block w-full text-left px-4 py-2 font-mono text-xs tracking-wide text-[var(--muted)] hover:text-[var(--foreground)] transition-colors border-b border-[var(--border)] mb-1"
              >
                Clear all
              </button>
            )}
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => onTechToggle(tech)}
                className={`block w-full text-left px-4 py-2 font-mono text-xs md:text-sm tracking-wide transition-colors ${
                  activeTechs.includes(tech)
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
