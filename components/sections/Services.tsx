import { services } from '@/lib/data';
import { Icon } from '@/components/Icon';

// Stagger por columna: el delay reinicia cada 3 tarjetas ('', d1, d2).
const DELAY = ['', ' d1', ' d2'];

export function Services() {
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
            <article className={`card reveal${DELAY[i % 3]}`} key={service.num}>
              <span className="num">{service.num}</span>
              <div className="card-icon">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p className="baja">{service.baja}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
