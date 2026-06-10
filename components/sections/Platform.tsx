import { platform } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Platform() {
  const { dash } = platform;
  return (
    <section className="section platform">
      <div className="container">
        <div className="grid">
          <div className="reveal">
            <span className="eyebrow on-dark">{platform.eyebrow}</span>
            <h2>{platform.title}</h2>
            <p className="lead">{platform.lead}</p>
            <div className="caps">
              {platform.caps.map((cap) => (
                <div className="cap" key={cap}>
                  <Icon name="check" />
                  {cap}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal d2">
            <div className="dash">
              <div className="dash-bar">
                <div className="dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="title">{dash.title}</span>
                <span className="live">En vivo</span>
              </div>
              <div className="dash-body">
                <div className="dash-stats">
                  {dash.stats.map((stat) => (
                    <div className={`dstat ${stat.state}`} key={stat.l}>
                      <div className="k">{stat.k}</div>
                      <div className="l">{stat.l}</div>
                    </div>
                  ))}
                </div>
                <div className="dash-table">
                  {dash.rows.map((row) => (
                    <div className="drow" key={row.co}>
                      <div>
                        <div className="co">{row.co}</div>
                        <div className="meta">{row.meta}</div>
                      </div>
                      <div className="meta">{row.expiry}</div>
                      <span className={`pill ${row.status}`}>{row.statusLabel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
