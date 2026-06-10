import { hero } from '@/lib/data';

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <span className="eyebrow anim a1">{hero.eyebrow}</span>
          <h1 className="anim a2">
            {hero.titleBefore}
            <span className="accent">{hero.titleAccent}</span>
            {hero.titleAfter}
          </h1>
          <p className="lead anim a3">{hero.lead}</p>
          <div className="hero-actions anim a4">
            {hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`btn ${action.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
              >
                {action.label}
                {action.arrow && <span className="arrow">→</span>}
              </a>
            ))}
          </div>
          <div className="hero-stats anim a5">
            {hero.stats.map((stat) => (
              <div className="stat" key={stat.k}>
                <div className="k">{stat.k}</div>
                <div className="v">{stat.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
