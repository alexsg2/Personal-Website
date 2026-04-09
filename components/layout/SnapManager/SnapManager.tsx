'use client';

import { useEffect } from 'react';

const LG_BREAKPOINT = 1024;

export default function SnapManager() {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const check = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Only enable snap at lg+ screens
        if (window.innerWidth < LG_BREAKPOINT) {
          document.documentElement.classList.remove('snap-enabled');
          return;
        }

        const sections = document.querySelectorAll('.snap-section');
        const vh = window.innerHeight;
        const tolerance = vh * 0.12;

        const allFit = Array.from(sections).every(
          (el) => el.scrollHeight <= vh + tolerance
        );

        document.documentElement.classList.toggle('snap-enabled', allFit);
      }, 150);
    };

    setTimeout(check, 300);

    window.addEventListener('resize', check);
    window.addEventListener('load', check);

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', check, { once: true });
      }
    });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', check);
      window.removeEventListener('load', check);
    };
  }, []);

  return null;
}
