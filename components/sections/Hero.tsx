import { hero } from '@/lib/data';

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        {/* Logo arriba, centrado (oficia de marca mientras el nav está oculto). */}
        <div className="hero-logo anim a1">
          {/* <img> normal por el export estático */}
          <img src="/logocompleto.png" alt="Pragma Controllers" />
        </div>

        <div className="hero-inner">
          <span className="eyebrow anim a2">{hero.eyebrow}</span>
          <h1 className="anim a3">
            {hero.titleBefore}
            <span className="accent">{hero.titleAccent}</span>
            {hero.titleAfter}
          </h1>
          <p className="lead anim a4">{hero.lead}</p>
          <div className="hero-actions anim a5">
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
          <div className="hero-stats anim a6">
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
