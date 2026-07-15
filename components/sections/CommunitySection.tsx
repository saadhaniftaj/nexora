'use client'

import Image from 'next/image'

export default function CommunitySection() {
  return (
    <section id="community" className="community" aria-labelledby="community-heading">
      <div className="community__split">
        {/* Text side */}
        <div className="community__content">
          <div className="community__text-inner">
            <span className="community__eyebrow">TOGETHER WE EVOLVE.</span>
            <h2 id="community-heading">
              MORE THAN A GYM<br />
              WE ARE A COMMUNITY
            </h2>
            <p className="community__body">
              Nexora is built on connections, support and elevation. Train with people who push you to be better, celebrate your wins and grow with you. This is where your next chapter begins.
            </p>
            <a href="#waitlist" className="community__cta-link">
              JOIN THE COMMUNITY &rarr;
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="community__img-wrap">
          <Image
            src="/images/sections/card-space.png"
            alt="Nexora Fitness community"
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            style={{ objectFit: 'cover' }}
          />
          {/* Video play button overlay */}
          <button className="community__play" aria-label="Play community video">
            <span className="community__play-icon">▶</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .community {
          position: relative;
          background: var(--bg);
        }
        .community__split {
          display: flex;
          min-height: 950px;
        }
        .community__content {
          flex: 0 0 50%;
          display: flex;
          align-items: center;
          padding: var(--section-pad-y) 40px;
          box-sizing: border-box;
        }
        .community__text-inner {
          max-width: 500px;
          margin-left: auto;
          margin-right: 40px;
        }
        .community__eyebrow {
          display: block;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 12px;
        }
        .community__content h2 {
          font-size: clamp(28px, 3.5vw, 42px);
          line-height: 1.15;
          margin: 0 0 24px;
          color: var(--white);
          text-transform: uppercase;
        }
        .community__body {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
          max-width: 440px;
          margin: 0 0 40px;
        }
        .community__cta-link {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--cyan);
          text-decoration: none;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(31, 178, 254, 0.4);
          transition: all 0.2s ease;
        }
        .community__cta-link:hover {
          border-bottom-color: var(--cyan);
          text-shadow: 0 0 8px rgba(31, 178, 254, 0.6);
        }

        .community__img-wrap {
          flex: 1;
          position: relative;
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
          margin-left: -5%;
        }
        .community__play {
          position: absolute;
          bottom: 35%;
          left: 25%;
          transform: translate(-50%, -50%);
          z-index: 3;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(8,8,8,0.7);
          border: 1px solid rgba(31,178,254,0.4);
          color: var(--cyan);
          font-size: 20px;
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

        @media (max-width: 1024px) {
          .community__text-inner { margin-right: 0; }
        }
        @media (max-width: 900px) {
          .community__split { flex-direction: column; }
          .community__content { flex: none; justify-content: center; padding: 60px 24px; }
          .community__text-inner { margin: 0 auto; text-align: center; }
          .community__img-wrap { height: 400px; clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%); margin-left: 0; }
          .community__play { left: 50%; bottom: 50%; }
        }
      `}</style>
    </section>
  )
}
