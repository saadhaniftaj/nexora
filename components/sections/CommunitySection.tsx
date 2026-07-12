'use client'

import Image from 'next/image'

export default function CommunitySection() {
  return (
    <section id="community" className="community section" aria-labelledby="community-heading">
      <div className="container">
        <div className="community__inner">
          {/* Text side */}
          <div className="community__text">
            <span className="section-label">Together We Evolve.</span>
            <h2 id="community-heading">
              More Than A Gym.<br />
              <span className="text-cyan">We Are A Community.</span>
            </h2>
            <p className="community__maybe-sub">
              We Don&apos;t Just Train Together. We Evolve Together.
            </p>
            <p className="community__body">
              Nexora is built on connection, not competition. Train alongside people who push you further, celebrate your wins, and grow with you. Your next chapter starts here.
            </p>
            <a href="#waitlist" className="community__cta-link">
              Join The Community →
            </a>
            <div className="community__stats">
              <div className="community__stat">
                <span className="community__stat-num">5,000</span>
                <span className="community__stat-label">Sq Ft Training Floor</span>
              </div>
              <div className="community__stat-divider" />
              <div className="community__stat">
                <span className="community__stat-num">6</span>
                <span className="community__stat-label">Premium Equipment Brands</span>
              </div>
              <div className="community__stat-divider" />
              <div className="community__stat">
                <span className="community__stat-num">17hr</span>
                <span className="community__stat-label">Open Daily</span>
              </div>
            </div>
          </div>

          {/* Image / video side */}
          <div className="community__img-wrap">
            <Image
              src="/images/sections/card-space.png"
              alt="Nexora Fitness community training together — Level Up. Together."
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover', borderRadius: '2px' }}
            />
            {/* Video play button overlay */}
            <button className="community__play" aria-label="Play community video">
              <span className="community__play-icon">▶</span>
            </button>
            <div className="community__img-label">
              <span>Level Up.</span>
              <span className="text-cyan"> Together.</span>
            </div>
            <div className="community__img-glow" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .community__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .community__text { display: flex; flex-direction: column; gap: 0; }
        .community__text h2 { margin: 8px 0 14px; }
        .community__maybe-sub {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,240,240,0.45);
          margin-bottom: 20px;
        }
        .community__body {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.75;
          max-width: 460px;
        }
        .community__cta-link {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cyan);
          text-decoration: none;
          margin-top: 24px;
          margin-bottom: 40px;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }
        .community__cta-link:hover { opacity: 0.75; letter-spacing: 0.18em; }

        .community__stats {
          display: flex;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 2px;
          overflow: hidden;
        }
        .community__stat {
          flex: 1;
          padding: 22px 18px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: var(--surface);
        }
        .community__stat-num {
          font-family: var(--font-display);
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 900;
          color: var(--cyan);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .community__stat-label {
          font-size: 11px;
          color: var(--muted);
          font-family: var(--font-display);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          line-height: 1.3;
        }
        .community__stat-divider {
          width: 1px;
          background: rgba(255,255,255,0.06);
        }

        /* Image side */
        .community__img-wrap {
          position: relative;
          height: 560px;
          border-radius: 2px;
          overflow: hidden;
        }
        .community__play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(8,8,8,0.7);
          border: 2px solid rgba(31,178,254,0.4);
          color: var(--cyan);
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
        }
        .community__play:hover {
          background: rgba(31,178,254,0.15);
          border-color: var(--cyan);
          box-shadow: 0 0 30px rgba(31,178,254,0.4);
          transform: translate(-50%, -50%) scale(1.08);
        }
        .community__play-icon { margin-left: 4px; }
        .community__img-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 3;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--white);
        }
        .community__img-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(8,8,8,0.6) 100%);
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .community__inner { grid-template-columns: 1fr; gap: 40px; }
          .community__img-wrap { height: 320px; }
        }
      `}</style>
    </section>
  )
}
