import { clients, type Logo } from '@/lib/data';

/** Una fila marquee: duplica el set de logos para el loop continuo. */
function LogoMarquee({ logos, reverse }: { logos: Logo[]; reverse?: boolean }) {
  return (
    <div className="logo-marquee">
      <div className={`logo-track${reverse ? ' rev' : ''}`}>
        {logos.map((logo) => (
          <div className="logo-chip" key={`a-${logo.src}`}>
            {/* <img> normal por el export estático (sin next/image) */}
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
        {logos.map((logo) => (
          <div className="logo-chip" key={`b-${logo.src}`} aria-hidden="true">
            <img src={logo.src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section className="clients" id="clientes">
      <div className="container">
        <div className="chead reveal">
          <span className="eyebrow">{clients.eyebrow}</span>
          <h2>{clients.title}</h2>
          <p className="lead">{clients.lead}</p>
        </div>
        <div className="logo-rows">
          <LogoMarquee logos={clients.rowA} />
          <LogoMarquee logos={clients.rowB} reverse />
        </div>
      </div>
    </section>
  );
}
