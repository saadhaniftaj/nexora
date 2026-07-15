'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const cards = [
  {
    id: 1,
    number: '01',
    title: 'Curated Equipment',
    body: 'Every machine is purposefully selected. No filler. We brought in Atlantis, Shua, XMaster, Torque, Bootybuilder, and Atlantis cable setups — the gold standard of strength equipment. Each piece was tested for biomechanics, durability, and feel.',
    img: '/images/sections/card-equipment.png',
  },
  {
    id: 2,
    number: '02',
    title: 'Space & Atmosphere',
    body: 'Train in 5,000 sq ft of unobstructed open floor facing the Fraser River. While other gyms pack in bodies, we pack in space. Every session is uninterrupted. Every set is yours.',
    img: '/images/sections/card-space.png',
  },
  {
    id: 3,
    number: '03',
    title: 'Privacy & Comfort',
    body: 'Private change rooms, premium showers, and secure lockers are standard. Because where you recover matters as much as where you train.',
    img: '/images/sections/card-privacy.png',
  },
  {
    id: 4,
    number: '04',
    title: 'Inbody Assessment',
    body: 'Medical-grade body composition analyzer helps you differentiate between fat, protein, minerals, and body water — giving you a real snapshot of your health and progress.',
    img: '/images/sections/card-inbody.png',
  },
  {
    id: 5,
    number: '05',
    title: 'Active Rehab & Wellness',
    body: 'On-site physiotherapy, massage therapy, active rehab, and RMT. Expert support woven directly into your training journey.',
    img: '/images/sections/card-rehab.png',
  },
]

const NAV_ROW_H = 56   // px — height of each nav button row
const SLIDE_VH  = 180  // viewport-heights each card gets to scroll through

export default function FacilityCards() {
  const [activeIdx, setActiveIdx] = useState(0)
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([])

  // IntersectionObserver: each sentinel fires when it hits the middle of the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sentinelRefs.current.forEach((el, idx) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(idx) },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNavClick = (idx: number) => {
    sentinelRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="facility-cards" aria-labelledby="fc-heading">
      {/* Section header — outside the scroll-lock zone */}
      <div className="container fc__header">
        <span className="section-label">Every Detail</span>
        <h2 id="fc-heading">
          Designed With <span className="text-cyan">Purpose</span>
        </h2>
      </div>

      {/*
       * fc__scroll-zone: a tall div whose height = cards × SLIDE_VH.
       * It provides the scroll travel needed to move through all 6 cards.
       * Inside it we have:
       *   1. fc__sticky  — the pinned 100vh viewport (layout lives here)
       *   2. fc__sentinels — absolutely stacked, each 100vh, drive IO
       */}
      <div className="fc__scroll-zone">
        {/* 1 ── Sticky viewport: stays fixed while user scrolls through scroll-zone */}
        <div className="fc__sticky">
          <div className="fc__layout">

            {/* ── LEFT: vertically centred nav ── */}
            <nav className="fc__nav" aria-label="Facility features">
              {/* Neon track line */}
              <div className="fc__line">
                <div
                  className="fc__line-fill"
                  style={{ height: `${((activeIdx + 1) / cards.length) * 100}%` }}
                />
              </div>

              {/* Traveling glow pill */}
              <div
                className="fc__glow-bar"
                style={{ transform: `translateY(${activeIdx * NAV_ROW_H}px)` }}
              />

              {cards.map((card, idx) => (
                <button
                  key={card.id}
                  className={`fc__nav-item${activeIdx === idx ? ' active' : ''}`}
                  onClick={() => handleNavClick(idx)}
                  aria-current={activeIdx === idx ? 'true' : undefined}
                >
                  <span className="fc__nav-num">{card.number}</span>
                  <span className="fc__nav-title">{card.title}</span>
                </button>
              ))}
            </nav>

            {/* ── RIGHT: crossfading images + crossfading text ── */}
            <div className="fc__panel">
              {/* All images stacked — only active fades in */}
              <div className="fc__images">
                {cards.map((card, idx) => (
                  <div
                    key={card.id}
                    className={`fc__img${activeIdx === idx ? ' active' : ''}`}
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="60vw"
                      style={{ objectFit: 'cover' }}
                      priority={idx === 0}
                    />
                    <div className="fc__img-overlay" />
                    <div className={`fc__img-glow${activeIdx === idx ? ' active' : ''}`} />
                  </div>
                ))}
              </div>

              {/* All text blocks stacked — only active fades in */}
              <div className="fc__texts">
                {cards.map((card, idx) => (
                  <div
                    key={card.id}
                    className={`fc__text${activeIdx === idx ? ' active' : ''}`}
                  >
                    <span className="fc__text-num">{card.number}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 2 ── Invisible sentinels — absolutely positioned, drive scroll detection */}
        <div className="fc__sentinels" aria-hidden="true">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="fc__sentinel"
              ref={el => { sentinelRefs.current[idx] = el }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ── Section header ── */
        .facility-cards { padding: 40px 0 0; }
        .fc__header { padding-bottom: 16px; }
        .fc__header h2 { margin: 8px 0 0; }

        /* ── Scroll zone: total height = 6 × 100vh ── */
        .fc__scroll-zone {
          position: relative;
          height: ${cards.length * SLIDE_VH}vh;
        }

        /* ── Sentinels: stacked invisibly over full scroll height ── */
        .fc__sentinels {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          pointer-events: none;
        }
        .fc__sentinel {
          flex: 1;              /* each sentinel = 1/6 of the total height */
          width: 100%;
        }

        /* ── Sticky viewport: pins to top, height = 100vh ── */
        .fc__sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }

        /* ── Two-column grid inside the sticky viewport ── */
        .fc__layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
          height: 100%;
          margin-top: -80px;
          align-items: center;          /* vertically centers both columns */
          padding: 0 max(32px, calc((100vw - 1200px) / 2));
        }

        /* ════════════════════════════
           LEFT NAV
        ════════════════════════════ */
        .fc__nav {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* Vertical track */
        .fc__line {
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: rgba(31,178,254,0.12);
          z-index: 0;
          border-radius: 2px;
        }
        .fc__line-fill {
          width: 100%;
          background: linear-gradient(to bottom, #1FB2FE, #5AF0FA);
          box-shadow: 0 0 12px rgba(31,178,254,0.9), 0 0 32px rgba(31,178,254,0.4);
          transition: height 0.5s cubic-bezier(0.25,1,0.5,1);
          min-height: ${NAV_ROW_H}px;
          border-radius: 2px;
        }

        /* Glow pill */
        .fc__glow-bar {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: ${NAV_ROW_H}px;
          background: linear-gradient(90deg, rgba(31,178,254,0.12), transparent 80%);
          border-left: 2px solid #1FB2FE;
          transition: transform 0.45s cubic-bezier(0.25,1,0.5,1);
          pointer-events: none;
          z-index: 0;
        }

        /* Nav buttons */
        .fc__nav-item {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 20px;
          height: ${NAV_ROW_H}px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: padding-left 0.2s ease;
        }
        .fc__nav-item:hover { padding-left: 26px; }

        .fc__nav-num {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: rgba(31,178,254,0.35);
          letter-spacing: 0.15em;
          flex-shrink: 0;
          transition: color 0.35s ease;
        }
        .fc__nav-item.active .fc__nav-num { color: #1FB2FE; }

        .fc__nav-title {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          transition: color 0.35s ease, text-shadow 0.35s ease;
        }
        .fc__nav-item.active .fc__nav-title {
          color: #ffffff;
          text-shadow: 0 0 24px rgba(31,178,254,0.5);
        }

        /* ════════════════════════════
           RIGHT PANEL
        ════════════════════════════ */
        .fc__panel {
          position: relative;
          height: 78vh;
          border-radius: 2px;
          overflow: hidden;
        }

        /* Image stack */
        .fc__images {
          position: absolute;
          inset: 0;
        }
        .fc__img {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.65s ease;
        }
        .fc__img :global(img) {
          filter: brightness(0.5) grayscale(0.6);
          transition: filter 0.5s ease, transform 0.5s ease !important;
        }
        .fc__panel:hover .fc__img :global(img) {
          filter: brightness(1.1) grayscale(0);
          transform: scale(1.03);
        }
        .fc__img.active { opacity: 1; }

        .fc__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(8,8,8,0.85) 100%
          );
          z-index: 1;
        }
        .fc__img-glow {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 1px rgba(31,178,254,0),
                      inset 0 0 80px rgba(31,178,254,0);
          transition: box-shadow 0.65s ease;
          z-index: 2;
          pointer-events: none;
        }
        .fc__img-glow.active {
          box-shadow: inset 0 0 0 1px rgba(31,178,254,0.18),
                      inset 0 0 80px rgba(31,178,254,0.07);
        }

        /* Text stack */
        .fc__texts {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px 36px;
          z-index: 3;
        }
        .fc__text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px 36px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.55s ease, transform 0.55s ease;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .fc__text.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .fc__text-num {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--cyan);
          text-transform: uppercase;
        }
        .fc__text h3 {
          font-size: clamp(20px, 2vw, 30px);
          color: var(--white);
          margin: 0;
        }
        .fc__text p {
          font-size: 14px;
          color: rgba(240,240,240,0.8);
          line-height: 1.7;
          max-width: 560px;
          margin: 0;
        }

        /* ── Mobile layout ── */
        @media (max-width: 900px) {
          .fc__layout {
            grid-template-columns: 1fr;
            padding: 0 16px;
            align-items: center;
            margin-top: 0;
          }
          .fc__nav { display: none; }
          .fc__panel { 
            height: 65vh; 
            max-height: 500px;
          }
          .fc__text { 
            padding: 24px 20px; 
          }
          .fc__text h3 {
            font-size: 24px;
          }
          .fc__text p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  )
}
