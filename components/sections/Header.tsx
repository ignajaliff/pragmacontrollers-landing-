'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';
import { navLinks } from '@/lib/data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky header blur: agrega .scrolled cuando scrollY > 16.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
        <div className="container">
          <a href="#top" className="brand" aria-label="Pragma Controllers — inicio">
            <img src="/icono.png" alt="Pragma Controllers" className="nav-logo" />
          </a>
          <nav className="nav">
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <a href="#contacto" className="btn btn-primary">
              Solicitar diagnóstico
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contacto" className="btn btn-primary" onClick={closeMenu}>
          Solicitar diagnóstico
        </a>
      </div>
    </>
  );
}
