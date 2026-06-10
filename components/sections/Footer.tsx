import { Brand } from '@/components/sections/Brand';
import { navLinks, footer } from '@/lib/data';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p className="footer-desc">{footer.desc}</p>
          </div>
          <div className="footer-col">
            <h4>{footer.navTitle}</h4>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>{footer.contactTitle}</h4>
            {footer.contactLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <span>{footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
