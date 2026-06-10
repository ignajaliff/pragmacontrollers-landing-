import { sectors } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function SectorsBand() {
  return (
    <section className="sectors" id="sectores">
      <div className="container">
        <p className="sectors-lead">
          {sectors.leadBefore}
          <b>{sectors.leadAccent}</b>
          {sectors.leadAfter}
        </p>
        <div className="sectors-list">
          {sectors.list.map((sector) => (
            <div className="sector" key={sector.label}>
              <Icon name={sector.icon} />
              <span>{sector.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
