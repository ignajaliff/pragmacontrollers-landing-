import { problem } from '@/lib/data';

export function Problem() {
  const { diagram } = problem;
  const [empresa, contratistaA, contratistaB, subcontratista] = diagram.nodes;

  return (
    <section className="section problem">
      <div className="container">
        <div className="grid">
          <div className="reveal">
            <span className="eyebrow">{problem.eyebrow}</span>
            <h2>{problem.title}</h2>
            <p className="lead">{problem.body}</p>
            <p className="hl">{problem.highlight}</p>
          </div>

          <div className="diagram reveal d2">
            <div className="diagram-head">
              <div className="t">{diagram.title}</div>
              <div className="n">
                {diagram.bigNumber}
                <small>{diagram.bigNumberSub}</small>
              </div>
            </div>

            <div className="node-row">
              <div className="node empresa">
                <span className="dot" />
                <span className="lbl">{empresa.lbl}</span>
                <span className="sub">{empresa.sub}</span>
              </div>
            </div>

            <div className="connector" />

            <div className="node-row node-indent">
              <div className="node">
                <span className="dot" />
                <span className="lbl">{contratistaA.lbl}</span>
                <span className="sub">{contratistaA.sub}</span>
              </div>
            </div>

            <div className="node-row node-indent">
              <div className="node risk">
                <span className="dot" />
                <span className="lbl">{contratistaB.lbl}</span>
                <span className="sub">{contratistaB.sub}</span>
              </div>
            </div>

            <div className="connector" style={{ marginLeft: 54 }} />

            <div className="node-row node-indent" style={{ marginLeft: 60 }}>
              <div className="node">
                <span className="dot" />
                <span className="lbl">{subcontratista.lbl}</span>
                <span className="sub">{subcontratista.sub}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
