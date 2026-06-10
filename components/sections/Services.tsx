'use client';

import { useState } from 'react';
import { services, type Service } from '@/lib/data';
import { Icon } from '@/components/Icon';

// Stagger por columna: el delay reinicia cada 3 tarjetas ('', d1, d2).
const DELAY = ['', ' d1', ' d2'];

/**
 * ServiceCard — tarjeta acordeón. Muestra título + descripción y una flecha;
 * al tocar/clickear la tarjeta completa se despliegan los ítems hacia abajo.
 * El estado abierto/seleccionado lo controla el padre (una sola abierta a la vez).
 */
function ServiceCard({
  service,
  delay,
  open,
  onToggle,
}: {
  service: Service;
  delay: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `svc-${service.num}`;

  return (
    <article
      className={`card reveal${delay}`}
      data-open={open}
      onClick={onToggle}
    >
      <span className="num">{service.num}</span>
      <div className="card-icon">
        <Icon name={service.icon} />
      </div>
      <h3>{service.title}</h3>
      <p className="baja">{service.baja}</p>

      {/* El click del botón burbujea al <article>, así toggle ocurre una sola vez.
          El botón aporta foco/teclado y el estado accesible (aria-expanded). */}
      <button
        type="button"
        className="card-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Ocultar detalles' : 'Ver detalles'}
      >
        <Icon name="chevron-down" />
      </button>

      <div className="card-collapse" id={panelId}>
        <div className="card-collapse-inner">
          <ul>
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  // Solo una tarjeta abierta a la vez (acordeón exclusivo).
  const [openNum, setOpenNum] = useState<string | null>(null);

  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="h2">{services.title}</h2>
          <p className="lead">{services.lead}</p>
        </div>
        <div className="cards">
          {services.items.map((service, i) => (
            <ServiceCard
              key={service.num}
              service={service}
              delay={DELAY[i % 3]}
              open={openNum === service.num}
              onToggle={() =>
                setOpenNum((prev) => (prev === service.num ? null : service.num))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
