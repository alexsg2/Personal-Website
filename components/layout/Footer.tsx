'use client';

import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Alex Georgiev
        </span>

        <div className="flex items-center gap-5">
          <a
            href="mailto:alex.s.georgiev@gmail.com"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
          <a
            href="https://github.com/alexsg2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandersg-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <span className="w-px h-3.5 bg-[var(--muted)]/20" />
          <button
            onClick={toggleTheme}
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </footer>
  );
}
