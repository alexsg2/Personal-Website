'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const year = project.date.split('-')[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 bg-[var(--card-bg)] border border-[var(--border)] rounded-t-lg md:rounded-sm w-full max-w-2xl max-h-[85vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Thumbnail */}
        <div className="relative w-full aspect-[16/9] bg-[var(--background)]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-contain"
          />
        </div>

        <div className="p-6 md:p-8">
          {/* Title */}
          <h2 className="font-display text-2xl md:text-3xl mb-2">
            {project.title}
          </h2>

          {/* Type + date */}
          <p className="font-mono text-xs tracking-wide text-[var(--muted)] mb-6 capitalize">
            {project.type} · {year}
          </p>

          {/* Description */}
          <p className="font-sans text-base leading-relaxed text-[var(--foreground)] mb-6">
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs tracking-wide text-[var(--muted)] border border-[var(--border)] rounded-sm px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs md:text-sm tracking-wide text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Live demo ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs md:text-sm tracking-wide text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                GitHub ↗
              </a>
            )}
            {project.devpostUrl && (
              <a
                href={project.devpostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs md:text-sm tracking-wide text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <DevpostIcon size={14} />
                Devpost ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
