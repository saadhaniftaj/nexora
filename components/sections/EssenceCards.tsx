'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const cards = [
  {
    id: 1,
    eyebrow: 'World-class Equipment',
    title: 'Curated Equipment',
    sub: 'Atlantis, Core Health & Wellness, Shua, Xmaster, Torque, Bootybuilder. Every machine is personally selected.',
    body: 'A zero-compromise strength environment. Every piece of equipment chosen with intention — from biomechanics to durability to feel.',
    img: '/images/sections/card-equipment.png',
  },
  {
    id: 2,
    eyebrow: 'Space & Atmosphere',
    title: 'A Massive Floor. World-Class Views.',
    sub: 'Fraser River views from every angle. No crowded corridors, no waiting for equipment — ample room to train.',
    body: 'Nexora gives you an open, premium training environment with views of the Fraser River. Just a clean, modern floor designed to give you room to train with intention.',
    img: '/images/sections/card-space.png',
  },
  {
    id: 3,
    eyebrow: 'Privacy & Comfort',
    title: 'Private Washrooms',
    sub: 'Your space, own showers, zero waiting, all gender-neutral by design, complete privacy.',
    body: 'Five private individual washrooms with showers give every member a more comfortable experience — no shared locker room pressure.',
    img: '/images/sections/card-privacy.png',
  },
  {
    id: 4,
    eyebrow: 'Medical Grade',
    title: 'Inbody Assessment',
    sub: 'Body Composition analyzer to better understand your body.',
    body: 'The machine helps you differentiate between fat, protein, minerals, and body water — giving you a real snapshot of your health and progress.',
    img: '/images/sections/card-inbody.png',
  },
  {
    id: 5,
    eyebrow: 'Active Rehab & Wellness',
    title: 'Train and Recover Here',
    sub: 'On-site physio and RMT.',
    body: 'Nexora is designed to support more than workouts. Our on-site physio and massage room creates a direct connection between training, recovery, and long-term performance.',
    img: '/images/sections/card-rehab.png',
  },
  {
    id: 6,
    eyebrow: 'Recovery — Coming Soon',
    title: 'Cold Plunge & Sauna',
    sub: 'Recovery infrastructure already built in. True progress doesn\'t end when your workout does.',
    body: 'Cold plunge and sauna infrastructure have been planned into the Nexora experience — giving our members access to tools that support performance, longevity, and better training.',
    img: '/images/sections/card-recovery.png',
  },
]

export default function EssenceCards() {
  const pages = [cards.slice(0, 3), cards.slice(3, 6)]
  const [page, setPage] = useState(0)
  const visible = pages[page]

  return (
    <section id="essence" className="essence section" aria-labelledby="essence-heading">
      <div className="essence__bg">
        <Image src="/images/nexora_reception_bg.png" alt="Nexora Reception" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="essence__bg-overlay" />
      </div>
      <div className="container">
        <span className="section-label">Nexora Essence</span>
        <h2 id="essence-heading">
          The gym New Westminster deserved.
        </h2>
        <p className="essence__intro">
          Nexora isn't an upgrade to what's already here — it's what's been missing. A facility built around real training, real recovery, and a location that nothing else in the city can match.
        </p>

        <div className="essence__content-wrapper">
          <div className="essence__grid-container">
            <div className="essence__grid">
              {visible.map((card) => (
                <article key={card.id} className="essence__card">
                  <div className="essence__card-img">
                    <Image src={card.img} alt={card.title} fill sizes="400px" style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <div className="essence__card-img-overlay" />
                  </div>
                  <div className="essence__card-body">
                    <span className="essence__card-eyebrow">{card.eyebrow}</span>
                    <h3 className="essence__card-title">{card.title}</h3>
                    <p className="essence__card-sub">{card.sub}</p>
                    <p className="essence__card-body-text">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="essence__grid-bar" />
          </div>
          
          <button
            className="essence__side-arrow"
            onClick={() => setPage((p) => (p === 0 ? 1 : 0))}
            aria-label="Next cards"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .essence { 
          position: relative;
          padding-top: 100px; 
          z-index: 1;
        }
        .essence__bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.15;
          pointer-events: none;
        }
        .essence__bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, var(--black) 0%, transparent 15%, transparent 85%, var(--black) 100%);
        }

        .essence h2 { 
          margin: 8px 0 18px; 
          font-size: clamp(32px, 4.5vw, 64px);
          white-space: nowrap;
        }
        .essence__intro { max-width: 580px; margin-bottom: 52px; font-size: 16px; line-height: 1.75; }

        .essence__content-wrapper {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .essence__grid-container {
          flex: 1;
          position: relative;
        }

        .essence__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .essence__card {
          position: relative;
          background: var(--surface);
          border-radius: var(--radius-card);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .essence__card:hover {
          transform: scale(1.03) translateY(-4px);
          border-color: var(--cyan-border);
          box-shadow: 0 0 40px rgba(31,178,254,0.15);
        }
        .essence__card:hover :global(img) {
          transform: scale(1.06);
        }
        .essence__card-img {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .essence__card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, var(--surface) 100%);
        }
        .essence__card-body {
          padding: 18px 22px 26px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .essence__card-eyebrow {
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cyan);
        }
        .essence__card-title {
          font-size: clamp(16px, 1.8vw, 22px);
          letter-spacing: 0.04em;
          color: var(--white);
          margin: 0;
        }
        .essence__card-sub {
          font-size: 13px;
          color: var(--text);
          line-height: 1.5;
          margin: 0;
        }
        /* Fixed text (no expansion) */
        .essence__card-body-text {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.65;
          margin: 10px 0 0 0;
        }

        .essence__grid-bar {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: var(--cyan);
          box-shadow: 0 0 16px rgba(31,178,254,0.6);
          opacity: 1;
          pointer-events: none;
          z-index: 10;
        }

        .essence__side-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: var(--cyan);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .essence__side-arrow:hover {
          background: var(--cyan);
          color: var(--black);
          border-color: var(--cyan);
          box-shadow: var(--glow-sm);
        }

        @media (max-width: 900px) { 
          .essence__content-wrapper { flex-direction: column; align-items: stretch; }
          .essence__grid { grid-template-columns: repeat(2, 1fr); } 
          .essence__side-arrow { align-self: flex-end; }
        }
        @media (max-width: 560px) { .essence__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
