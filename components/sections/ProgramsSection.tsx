'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    id: 1,
    label: 'Strength & Power',
    headline: 'Build the body\nyou\'re capable of.',
    body: 'Plate-loaded machines, free weights, and structured progressive overload for those who train with intention.',
    img: '/images/sections/card-strength.png',
    href: '/programs',
  },
  {
    id: 2,
    label: 'Conditioning',
    headline: 'Push your\ncardiovascular ceiling.',
    body: 'Curved treadmills, bikes, and HIIT protocols designed to build real-world endurance and metabolic output.',
    img: '/images/sections/card-conditioning.png',
    href: '/programs',
  },
  {
    id: 3,
    label: 'Functional Training',
    headline: 'Move better.\nPerform harder.',
    body: 'Sled drives, kettlebell circuits, and TRX — movement patterns that translate to every goal.',
    img: '/images/sections/card-functional.png',
    href: '/programs',
  },
  {
    id: 4,
    label: 'Sculpt & Shape',
    headline: 'Define every\ndetail.',
    body: 'Isolation machines and targeted routines for those focused on body composition and sculpting a specific physique.',
    img: '/images/sections/card-sculpt.png',
    href: '/programs',
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="programs section" aria-labelledby="programs-heading">
      <div className="container">
        <span className="section-label">Training Programs</span>
        <div className="programs__header">
          <h2 id="programs-heading">
            A Program For<br />
            <span className="text-cyan">Every Goal.</span>
          </h2>
          <Link href="/programs" className="btn-outline">
            View All Programs <ArrowRight size={15} />
          </Link>
        </div>

        <div className="programs__grid">
          {programs.map((prog) => (
            <article key={prog.id} className="prog-card">
              <div className="prog-card__img">
                <Image src={prog.img} alt={prog.label} fill sizes="(max-width:900px) 100vw, 25vw" style={{ objectFit: 'cover' }} />
                <div className="prog-card__overlay" />
              </div>
              <div className="prog-card__body">
                <span className="prog-card__label">{prog.label}</span>
                <h3 className="prog-card__title" style={{ whiteSpace: 'pre-line' }}>{prog.headline}</h3>
                <p className="prog-card__desc">{prog.body}</p>
                <Link href={prog.href} className="prog-card__cta">
                  Explore Program <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .programs__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin: 8px 0 52px;
          gap: 24px;
          flex-wrap: wrap;
        }
        .programs__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .prog-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-card);
          overflow: hidden;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
          min-height: 480px;
          cursor: default;
        }
        .prog-card:hover {
          transform: translateY(-8px);
          border-color: var(--cyan-border);
          box-shadow: var(--glow-md);
        }
        .prog-card__img {
          position: relative;
          height: 260px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .prog-card__img :global(img) {
          transition: transform 0.5s ease;
        }
        .prog-card:hover .prog-card__img :global(img) {
          transform: scale(1.06);
        }
        .prog-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, var(--surface) 100%);
        }
        .prog-card__body {
          padding: 20px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .prog-card__label {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--cyan);
        }
        .prog-card__title {
          font-size: clamp(18px, 1.8vw, 24px);
          color: var(--white);
          margin: 4px 0 6px;
          line-height: 1.1;
          letter-spacing: 0.04em;
        }
        .prog-card__desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
          flex: 1;
        }
        .prog-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cyan);
          text-decoration: none;
          margin-top: 8px;
          transition: gap 0.2s ease;
        }
        .prog-card__cta:hover { gap: 10px; }
        .prog-card:hover .prog-card__cta { gap: 10px; }

        @media (max-width: 1024px) {
          .programs__grid { grid-template-columns: repeat(2, 1fr); }
          .prog-card { min-height: 400px; }
        }
        @media (max-width: 560px) {
          .programs__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
