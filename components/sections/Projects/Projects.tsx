'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/info/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';
import type { Project } from '@/info/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  return (
    <section
      id="projects"
      className="snap-section lg:flex lg:flex-col lg:justify-center py-16 sm:py-20 lg:py-24 xl:py-10 2xl:py-20"
    >
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl mb-6 sm:mb-8 lg:mb-10 xl:mb-6 2xl:mb-12">
          Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-4 xl:gap-4 2xl:gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
            >
              <ProjectCard
                project={project}
                index={index}
                onClick={() => setSelected(project)}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-6 2xl:mt-10">
          <Link
            href="/projects"
            className="font-mono text-xs sm:text-sm tracking-wide text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
