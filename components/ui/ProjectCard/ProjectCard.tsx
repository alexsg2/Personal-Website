'use client';

import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/info/projects';

function DevpostIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
    >
      <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853h-1.336z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const year = project.date.split('-')[0];

  return (
    <div
      className="group relative flex flex-col h-full border border-[var(--border)] rounded-sm bg-[var(--card-bg)] p-4 sm:p-5 lg:p-4 2xl:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_30%,transparent)] hover:shadow-[0_4px_20px_rgba(100,255,218,0.04)]"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Top row — type label + links */}
      <div className="flex items-center justify-between mb-3 lg:mb-2 2xl:mb-4">
        <span className="font-mono text-[10px] sm:text-xs tracking-wide text-[var(--muted)] capitalize">
          {project.type} · {year}
        </span>
        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={16} />
            </a>
          )}
          {project.devpostUrl && (
            <a
              href={project.devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="Devpost"
            >
              <DevpostIcon size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Title — clickable to open modal */}
      <button
        onClick={onClick}
        className="text-left mb-2 lg:mb-1.5 2xl:mb-3"
      >
        <h3 className="font-display text-base sm:text-lg lg:text-base 2xl:text-xl group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
      </button>

      {/* Description */}
      <p className="font-sans text-xs sm:text-sm lg:text-xs 2xl:text-sm text-[var(--muted)] leading-relaxed mb-4 lg:mb-3 2xl:mb-5 flex-1">
        {project.shortDescription}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 lg:gap-1 2xl:gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] lg:text-[10px] 2xl:text-xs tracking-wide text-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] rounded-full px-2.5 py-0.5 lg:px-2 2xl:px-3"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
