import { methodology } from '@/lib/data';

const DELAY = ['', ' d1', ' d2', ' d3'];

export function Methodology() {
  return (
    <section className="section method" id="metodologia">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">{methodology.eyebrow}</span>
          <h2 className="h2">{methodology.title}</h2>
          <p className="lead">{methodology.lead}</p>
        </div>
        <div className="steps">
          {methodology.steps.map((step, i) => (
            <div className={`step reveal${DELAY[i % 4]}`} key={step.num}>
              <div className="badge">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
