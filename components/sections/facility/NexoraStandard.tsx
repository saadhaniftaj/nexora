'use client'

export default function NexoraStandard() {
  return (
    <section className="standard section" aria-labelledby="standard-heading">
      <div className="container">
        <div className="standard__inner">
          <div className="standard__left">
            <span className="section-label">The Nexora Standard</span>
            <h2 id="standard-heading">
              Every detail<br />
              <span className="text-cyan">has a purpose.</span>
            </h2>
          </div>
          <div className="standard__right">
            <p>
              Nexora was not built around shortcuts. Every part of the facility was planned around how people actually train, move, recover, and feel in a gym. From the equipment lineup to the open floor plan, from private washrooms to the riverfront view, the goal is simple: create a space that helps you train better, feel better, and stay consistent.
            </p>
            <p>
              We don&apos;t run daily deals or hold discount membership drives. We hold a standard. And that standard is reflected in every inch of this facility — from the lighting to the rubber underfoot.
            </p>
            <div className="standard__pillars">
              {[
                'Intentional Design',
                'Premium Equipment',
                'Open Floor Policy',
                'Private Washrooms',
                'Riverfront Setting',
                'No Contracts',
              ].map((p) => (
                <div key={p} className="standard__pillar">
                  <span className="standard__pillar-dot" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .standard__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .standard__left { position: sticky; top: 100px; }
        .standard__left h2 { margin: 8px 0 0; }
        .standard__right { display: flex; flex-direction: column; gap: 22px; }
        .standard__right p { font-size: 16px; color: var(--muted); line-height: 1.82; }
        .standard__pillars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 12px;
        }
        .standard__pillar {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white);
        }
        .standard__pillar-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 8px rgba(31,178,254,0.7);
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .standard__inner { grid-template-columns: 1fr; gap: 40px; }
          .standard__left { position: static; }
        }
        @media (max-width: 560px) { .standard__pillars { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
