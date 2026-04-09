'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

function FloatingGraphic() {
  return (
    <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px]">
      {/* Inner capsule — clockwise */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: '34%', height: '68%', top: '16%', left: '33%', border: '1px solid color-mix(in srgb, var(--accent) 40%, transparent)' }}
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{
          rotate: { duration: 36, repeat: Infinity, ease: 'linear' },
          scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      {/* Outer capsule — counter-clockwise */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: '52%', height: '92%', top: '4%', left: '24%', border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)' }}
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{
          rotate: { duration: 28, repeat: Infinity, ease: 'linear' },
          scale: { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 },
        }}
      />

      {/* Inner ring orbiters — paired, 120° apart */}
      {[0, 120, 240].map((offset) => (
        <motion.div
          key={`inner-${offset}`}
          className="absolute top-1/2 left-1/2"
          style={{ transformOrigin: '0 -60px', rotate: offset }}
          animate={{ rotate: offset + 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]"
            style={{ opacity: 0.8 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: offset / 360 * 2 }}
          />
        </motion.div>
      ))}

      {/* Outer ring orbiters — paired, 180° apart, counter-clockwise */}
      {[0, 180].map((offset) => (
        <motion.div
          key={`outer-${offset}`}
          className="absolute top-1/2 left-1/2"
          style={{ transformOrigin: '0 -120px', rotate: offset }}
          animate={{ rotate: offset - 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]"
            style={{ opacity: 0.5 }}
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: offset / 360 * 3 }}
          />
        </motion.div>
      ))}

      {/* Center dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[calc(100svh-6rem)] sm:min-h-[calc(100vh-8rem)] px-6 sm:px-8 md:px-12 py-12 sm:py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-20 xl:gap-28 2xl:gap-36 items-center">
        {/* Left — Text */}
        <div className="text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0 }}
            className="font-mono text-xs sm:text-sm tracking-wide text-[var(--muted)] mb-3 sm:mb-4 lg:mb-6 2xl:mb-8"
          >
            Full Stack Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-display font-bold leading-[0.9] tracking-tight text-[clamp(2.5rem,12vw,12rem)] sm:text-[clamp(3rem,10vw,12rem)]"
          >
            Alex
            <br />
            Georgiev
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
            className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--muted)] mt-4 sm:mt-6 lg:mt-8 2xl:mt-12 max-w-xl sm:mx-0 mx-auto"
          >
            I like to build new things and bring ideas to life.
          </motion.p>

          {/* Resume + Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10 2xl:mt-16"
          >
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm tracking-wide text-[var(--accent)] border border-[var(--accent)]/40 rounded-full px-5 py-2 hover:bg-[var(--accent)]/10 transition-colors"
            >
              Resume ↗
            </Link>
            <a
              href="mailto:alex.s.georgiev@gmail.com"
              className="font-mono text-xs sm:text-sm tracking-wide text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              Email ↗
            </a>
            <a
              href="https://github.com/alexsg2"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm tracking-wide text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/alexandersg-"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm tracking-wide text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* Right — Animated graphic (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="hidden lg:flex lg:items-center lg:justify-center"
        >
          <div className="w-[300px] h-[300px] xl:w-[360px] xl:h-[360px] 2xl:w-[420px] 2xl:h-[420px]">
            <FloatingGraphic />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
