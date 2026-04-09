'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { skillGroups } from '@/info/skills';
import { getImagePath } from '@/lib/image-path';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const currentlyItems = [
  'Full Stack Software Engineer @ CoStar Group',
  'B.S. Computer Science, Virginia Tech \u201924',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 sm:py-20 lg:py-24">
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full"
      >
        {/* Two-column layout on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 sm:gap-10 lg:gap-14 2xl:gap-16">
          {/* Left — Photo + socials */}
          <div className="flex flex-col">
            <div className="border border-[var(--border)] rounded-xl overflow-hidden flex-1">
              <Image
                src={getImagePath('/images/headshot.png')}
                alt="Alex Georgiev"
                width={400}
                height={500}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex items-center justify-center gap-5 mt-5">
              <a
                href="mailto:alex.s.georgiev@gmail.com"
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com/alexsg2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexandersg-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 lg:mb-8">
              About
            </h2>

            <div className="space-y-3 sm:space-y-4 lg:space-y-4 mb-4 sm:mb-5 lg:mb-6">
              <p className="font-sans text-sm lg:text-base leading-relaxed">
                Hello, my name is Alex. I am a Full Stack Software Engineer
                specializing in building web applications across React, Node.js, .NET,
                and SQL.
              </p>
              <p className="font-sans text-sm lg:text-base leading-relaxed">
                I graduated from Virginia Tech with a B.S. in Computer Science and a
                minor in Human-Computer Interaction. Since then I&apos;ve been working
                at CoStar Group building and maintaining production systems across the
                full stack.
              </p>
              <p className="font-sans text-sm lg:text-base leading-relaxed">
                Outside of work I&apos;m always building something. I like taking ideas
                and turning them into real projects, whether it&apos;s a game, a tool,
                or just something I want to learn. This site is where I keep all of
                that and share what I&apos;ve been working on.
              </p>
            </div>

            {/* Currently block */}
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <p className="font-mono text-xs text-[var(--muted)] tracking-wide mb-1.5 sm:mb-2">
                Currently:
              </p>
              <div className="space-y-0.5">
                {currentlyItems.map((item) => (
                  <p key={item} className="font-mono text-xs sm:text-sm tracking-wide">
                    ↳ {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Resume links */}
            <div className="flex gap-5 sm:gap-6">
              <Link
                href="/resume.pdf"
                download
                className="font-mono text-xs tracking-wide text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                Download resume ↓
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-wide text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                View resume ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Skills — full width below */}
        <div className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-xs text-[var(--muted)] tracking-wide pb-2 mb-2.5 sm:mb-3 lg:mb-3 border-b border-[var(--border)]">
                {group.category}
              </p>
              <div className="space-y-2 sm:space-y-2.5 lg:space-y-2">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 lg:gap-2.5">
                    <i className={`${skill.icon} text-sm sm:text-base lg:text-base`} style={{ color: skill.color }} />
                    <span className="font-mono text-xs sm:text-sm tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
