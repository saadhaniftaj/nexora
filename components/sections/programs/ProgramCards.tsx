'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    id: 1,
    label: 'Strength',
    tagline: 'Build strength that carries forward.',
    body: 'From foundational lifts to advanced machine work. Our equipment from Atlantis Strength to Shua, to Xmaster on our curated strength floor, will help you build muscle, increase power, and train with purpose.',
    hooks: ['Atlantis Strength', 'Shua', 'Xmaster'],
    hook: '"Strength is the foundation of your next self"',
    img: '/images/sections/card-strength.png',
    anchor: 'strength',
  },
  {
    id: 2,
    label: 'Conditioning',
    tagline: 'Push your pace. Own your energy.',
    body: 'Conditioning at Nexora is designed with Core Health & Wellness high-performance treadmills, StairMasters, cycles, and cardio equipment — all specifically selected to improve endurance, energy, and long-term health.',
    hooks: ['Core Health & Wellness', 'StairMasters', 'Cardio Cycles'],
    hook: '"Your Energy is Trainable"',
    img: '/images/sections/card-conditioning.png',
    anchor: 'conditioning',
  },
  {
    id: 3,
    label: 'Functional Training',
    tagline: 'Move better. Perform better. Live stronger.',
    body: 'Focused on movement quality, control, coordination, balance, and real-world performance. Torque Multistation will help you build strength that moves beyond the machine.',
    hooks: ['Torque Multistation', 'Multi-Planar Movement', 'TRX & Kettlebell'],
    hook: '"Train movement, not just muscle"',
    img: '/images/sections/card-functional.png',
    anchor: 'functional',
  },
  {
    id: 4,
    label: 'Sculpt & Shape',
    tagline: 'Precision training for the shape you strive to build.',
    body: 'Bootybuilder Line is built for members who want focused, intentional training for glutes, legs, definition, and physique tone-up. Nexora gives you the tools to train with detail, control, and confidence.',
    hooks: ['Bootybuilder Line', 'Isolation & Cable Machines', 'Physique Focus'],
    hook: '"Build the shape. Own the standard."',
    img: '/images/sections/card-sculpt.png',
    anchor: 'sculpt',
  },
  {
    id: 5,
    label: 'Active Rehab & Wellness',
    tagline: 'Train with longevity.',
    body: "Nexora's wellness direction connects movement, recovery, mobility and stability with consistency. With on-site physio and massage, we support our members in a long-term active lifestyle.",
    hooks: ['On-Site Physiotherapy', 'InBody Assessments', 'Mobility & Recovery'],
    hook: null,
    img: '/images/sections/card-wellness.png',
    anchor: 'rehab',
  },
]

const TABS = ['All', 'Strength', 'Conditioning', 'Functional Training', 'Sculpt & Shape', 'Active Rehab & Wellness']

export default function ProgramCards() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All'
      ? programs
      : programs.filter((p) => p.label === activeTab)

  return (
    <section className="prog-cards section" aria-labelledby="prog-cards-heading">
      <div className="container">
        <h2 id="prog-cards-heading">
          FIND YOUR PATH
        </h2>
        {/* Category tabs */}
        <div className="prog-tabs" role="tablist" aria-label="Program categories">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`prog-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div className="prog-cards__grid">
          {filtered.map((prog, i) => (
            <article key={prog.id} id={prog.anchor} className={`prog-detail-card ${i % 2 === 1 ? 'prog-detail-card--reverse' : ''}`}>
              <div className="prog-detail-card__img">
                <Image
                  src={prog.img}
                  alt={prog.label}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div className="prog-detail-card__img-overlay" />
              </div>
              <div className="prog-detail-card__body">
                <span className="prog-detail-card__label">{prog.label}</span>
                <h3 className="prog-detail-card__tagline">{prog.tagline}</h3>
                <p className="prog-detail-card__desc">{prog.body}</p>
                <ul className="prog-detail-card__hooks">
                  {prog.hooks.map((h) => (
                    <li key={h}>
                      <span className="hook-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
                {prog.hook && (
                  <p className="prog-detail-card__marketing-hook">{prog.hook}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="prog-cards__footer">
          <Link href="/contact" className="btn-primary">
            Get Early Access <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .prog-cards__footer {
          display: flex;
          justify-content: center;
          margin-top: 52px;
        }
        .prog-cards h2 { margin: 8px 0 36px; }
        .prog-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 52px;
          flex-wrap: wrap;
        }
        .prog-tab {
          padding: 10px 20px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.10);
          color: var(--muted);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .prog-tab:hover { border-color: var(--cyan-border); color: var(--white); }
        .prog-tab.active {
          background: var(--cyan);
          color: var(--black);
          border-color: var(--cyan);
          box-shadow: 0 0 16px rgba(31,178,254,0.3);
        }
        .prog-cards__grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .prog-detail-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 2px;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .prog-detail-card--reverse { direction: rtl; }
        .prog-detail-card--reverse > * { direction: ltr; }
        .prog-detail-card:hover {
          border-color: var(--cyan-border);
          box-shadow: 0 0 40px rgba(31,178,254,0.08);
        }
        .prog-detail-card__img :global(img) {
          filter: brightness(0.5) grayscale(0.6);
          transition: transform 0.5s ease, filter 0.5s ease !important;
        }
        .prog-detail-card:hover .prog-detail-card__img :global(img) {
          transform: scale(1.04);
          filter: brightness(1.1) grayscale(0);
        }
        .prog-detail-card__img {
          position: relative;
          min-height: 340px;
        }
        .prog-detail-card__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 55%, var(--surface) 100%);
        }
        .prog-detail-card--reverse .prog-detail-card__img-overlay {
          background: linear-gradient(to left, transparent 55%, var(--surface) 100%);
        }
        .prog-detail-card__body {
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          justify-content: center;
        }
        .prog-detail-card__label {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cyan);
        }
        .prog-detail-card__tagline {
          font-size: clamp(20px, 2.2vw, 30px);
          letter-spacing: 0.04em;
          line-height: 1.1;
          color: var(--white);
          margin: 0;
        }
        .prog-detail-card__desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.75;
        }
        .prog-detail-card__hooks {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .prog-detail-card__hooks li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text);
        }
        .hook-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--cyan);
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(31,178,254,0.6);
        }
        .prog-detail-card__marketing-hook {
          font-family: var(--font-body);
          font-size: 14px;
          font-style: italic;
          color: var(--cyan);
          opacity: 0.85;
        }
        .prog-detail-card__btn { align-self: flex-start; }

        @media (max-width: 900px) {
          .prog-cards__grid {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            padding: 0 20px 40px;
            margin: 0 -20px;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          .prog-cards__grid::-webkit-scrollbar { display: none; }
          .prog-detail-card { 
            grid-template-columns: 1fr; 
            direction: ltr; 
            flex: 0 0 85%;
            max-width: 85%;
            scroll-snap-align: center;
          }
          .prog-detail-card--reverse { direction: ltr; }
          .prog-detail-card__img { min-height: 260px; }
          .prog-detail-card__img-overlay {
            background: linear-gradient(to bottom, transparent 50%, var(--surface) 100%) !important;
          }
          .prog-detail-card__body { padding: 28px 24px; }
        }
      `}</style>
    </section>
  )
}
