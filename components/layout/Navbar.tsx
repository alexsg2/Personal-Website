'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  return (
    <nav className="relative z-50 pt-8 sm:pt-10 pb-4">
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
        {navLinks.map((link) => {
          const isActive = link.href === '/'
            ? normalizedPath === '/'
            : normalizedPath.startsWith(link.href);
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`font-sans text-xs sm:text-sm md:text-base lg:text-lg tracking-wide px-3 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-[var(--foreground)] border border-[var(--accent)]/40 bg-[var(--accent)]/5'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
