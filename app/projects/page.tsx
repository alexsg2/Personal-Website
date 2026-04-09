'use client';

import { useState, useMemo, useEffect } from 'react';
import { projects } from '@/info/projects';
import type { ProjectType, Project } from '@/info/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';
import ProjectFilter from '@/components/ui/ProjectFilter';

export default function ProjectsPage() {
  const [activeType, setActiveType] = useState<ProjectType | 'all'>('all');
  const [activeTechs, setActiveTechs] = useState<string[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);

  const allTechs = useMemo(() => {
    const typeFiltered = activeType === 'all'
      ? projects
      : projects.filter((p) => p.type === activeType);
    const techs = new Set<string>();
    typeFiltered.forEach((p) => p.technologies.forEach((t) => techs.add(t)));
    return Array.from(techs).sort();
  }, [activeType]);

  const filtered = useMemo(() => {
    return projects
      .filter((p) => activeType === 'all' || p.type === activeType)
      .filter(
        (p) =>
          activeTechs.length === 0 ||
          activeTechs.some((t) => p.technologies.includes(t))
      )
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [activeType, activeTechs]);

  // Clear tech filters that no longer apply when type changes
  useEffect(() => {
    setActiveTechs((prev) => prev.filter((t) => allTechs.includes(t)));
  }, [allTechs]);

  const handleTechToggle = (tech: string) => {
    setActiveTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <main className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
          All Projects
        </h1>
        <p className="font-mono text-xs md:text-sm text-[var(--muted)] tracking-wide mb-12 md:mb-16">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </p>

        <ProjectFilter
          activeType={activeType}
          activeTechs={activeTechs}
          allTechs={allTechs}
          onTypeChange={setActiveType}
          onTechToggle={handleTechToggle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-sans text-base text-[var(--muted)] text-center py-16">
            No projects match the current filters.
          </p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
