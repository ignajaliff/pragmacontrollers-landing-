'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { SectorsBand } from '@/components/sections/SectorsBand';
import { Clients } from '@/components/sections/Clients';
import { Problem } from '@/components/sections/Problem';
import { Services } from '@/components/sections/Services';
import { Methodology } from '@/components/sections/Methodology';
import { Platform } from '@/components/sections/Platform';
import { WhyPragma } from '@/components/sections/WhyPragma';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';

/**
 * Landing — ensambla las 11 secciones de la home en orden.
 *
 * Entrada del hero: el estado base es VISIBLE (así SSR / sin-JS / print muestran
 * el hero igual). Tras montar, agregamos `.preload` (oculta el hero) y la
 * quitamos en el siguiente frame para disparar la transición escalonada.
 */
export function Landing() {
  useScrollReveal();
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    setPreload(true);
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setPreload(false))
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={preload ? 'preload' : undefined}>
      <Header />
      <span id="top" />
      <main>
        <Hero />
        <SectorsBand />
        <Clients />
        <Problem />
        <Services />
        <Methodology />
        <Platform />
        <WhyPragma />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
