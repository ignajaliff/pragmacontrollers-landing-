import { why } from '@/lib/data';
import { Icon } from '@/components/Icon';

const DELAY = ['', ' d1', ' d2', ' d3'];

export function WhyPragma() {
  return (
    <section className="section why">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">{why.eyebrow}</span>
          <h2 className="h2">{why.title}</h2>
          <p className="lead">{why.lead}</p>
        </div>
        <div className="pillars">
          {why.pillars.map((pillar, i) => (
            <div className={`pillar reveal${DELAY[i % 4]}`} key={pillar.title}>
              <div className="pic">
                <Icon name={pillar.icon} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
