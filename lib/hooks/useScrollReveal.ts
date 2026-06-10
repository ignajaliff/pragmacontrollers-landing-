'use client';

import { useEffect } from 'react';

/**
 * useScrollReveal — revela elementos con la clase `.reveal` al hacer scroll.
 *
 * SSR / sin-JS: los `.reveal` se ven (base visible en CSS), así la página
 * carga completa y ordenada. Al montar:
 *   1) marca como `is-visible` lo que YA está en viewport (sin parpadeo),
 *   2) activa `reveal-on` en el <html> (ahí el CSS oculta lo que falta),
 *   3) observa el resto con IntersectionObserver para animarlo al scrollear.
 *
 * El stagger se controla desde el CSS con `.d1..d4`.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (els.length === 0) return;

    const reduceMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    const inViewport = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    };

    // 1) Lo que ya está visible al entrar no debe animar ni parpadear.
    els.forEach((el) => {
      if (inViewport(el)) el.classList.add('is-visible');
    });

    // 2) Recién ahora activamos el estado "oculto" del CSS para el resto.
    document.documentElement.classList.add('reveal-on');

    // Sin animación (reduce / sin soporte): mostrar todo y listo.
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    // 3) Observamos solo lo que aún no es visible.
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

    els.forEach((el) => {
      if (!el.classList.contains('is-visible')) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
