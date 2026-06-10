'use client';

import { useEffect } from 'react';

/**
 * useScrollReveal — revela elementos con la clase `.reveal` al hacer scroll.
 * Usa IntersectionObserver y agrega `.is-visible` cuando el elemento entra
 * en viewport. El stagger se controla desde el CSS con `.d1..d4`.
 *
 * Fallback: si no hay soporte de IntersectionObserver, muestra todo.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (els.length === 0) return;

    // Fallback sin IntersectionObserver: mostrar todo.
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
