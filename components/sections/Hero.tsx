'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

function FloatingGraphic() {
  return (
    <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px]">
      <motion.div
        className="absolute inset-8 rounded-full border border-[var(--border)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-16 rounded-full border border-[var(--border)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '0 -80px' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] opacity-80" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '0 -120px' }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)] opacity-40" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '0 -60px' }}
      >
        <div className="w-2 h-2 rounded-full bg-[var(--muted)] opacity-50" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--accent)]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[var(--muted)] opacity-30"
          style={{ top: `${25 + i * 12}%`, left: `${20 + i * 15}%` }}
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}
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
            I build things for the web — and occasionally just for fun.
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
