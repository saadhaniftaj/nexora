'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Dumbbell, Heart, Zap, Leaf } from 'lucide-react'

const programs = [
  {
    id: 1,
    Icon: Dumbbell,
    label: 'STRENGTH',
    body: 'Build muscle, increase power and dominate your limits.',
    img: '/images/sections/card-strength.png',
    href: '/programs',
  },
  {
    id: 2,
    Icon: Heart,
    label: 'LEAN & FIT',
    body: 'Sculpt your body, burn fat and boost your energy.',
    img: '/images/sections/card-conditioning.png',
    href: '/programs',
  },
  {
    id: 3,
    Icon: Zap,
    label: 'PERFORMANCE',
    body: 'Improve speed, agility and athletic performance.',
    img: '/images/sections/card-functional.png',
    href: '/programs',
  },
  {
    id: 4,
    Icon: Leaf,
    label: 'MIND & WELLNESS',
    body: 'Strengthen your mind, reduce stress and find balance.',
    img: '/images/sections/card-sculpt.png',
    href: '/programs',
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="programs section" aria-labelledby="programs-heading">
      <div className="container">
        <div className="programs__header">
          <span className="section-label programs__eyebrow">TRAIN. TRANSFORM. THRIVE.</span>
          <h2 id="programs-heading" style={{ whiteSpace: 'nowrap' }}>
            PROGRAMS FOR EVERY YOU.
          </h2>
        </div>

        <div className="programs__grid">
          {programs.map((prog) => (
            <article key={prog.id} className="prog-card">
              <div className="prog-card__img">
                <Image src={prog.img} alt={prog.label} fill sizes="(max-width:900px) 100vw, 25vw" style={{ objectFit: 'cover' }} />
                <div className="prog-card__overlay" />
              </div>
              <div className="prog-card__icon-wrapper">
                <prog.Icon size={22} />
              </div>
              <div className="prog-card__body">
                <h3 className="prog-card__label">{prog.label}</h3>
                <p className="prog-card__desc">{prog.body}</p>
                <Link href={prog.href} className="prog-card__cta">
                  Explore Program <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="programs__footer">
          <Link href="/programs" className="btn-outline">
            View All Programs <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .programs__header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: 0 auto 52px;
          max-width: 600px;
        }
        .programs__header :global(.programs__eyebrow::before) {
          display: none;
        }
        .programs__footer {
          display: flex;
          justify-content: center;
          margin-top: 50px;
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
          background: linear-gradient(to bottom, transparent 30%, var(--surface) 100%);
        }
        .prog-card__icon-wrapper {
          position: absolute;
          top: 260px;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          box-shadow: 0 0 15px rgba(255,255,255,0.15);
          transition: all 0.3s ease;
          z-index: 10;
        }
        .prog-card:hover .prog-card__icon-wrapper {
          color: var(--white);
          box-shadow: 0 0 25px rgba(255,255,255,0.6);
          border-color: rgba(255,255,255,0.4);
        }
        .prog-card__body {
          padding: 46px 22px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          flex: 1;
        }
        .prog-card__label {
          font-size: clamp(18px, 1.8vw, 24px);
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--white);
          margin: 0;
        }
        .prog-card__desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
          flex: 1;
          margin: 0;
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
          transition: all 0.2s ease;
          text-shadow: 0 0 8px rgba(31, 178, 254, 0.4);
        }
        .prog-card__cta:hover { gap: 10px; text-shadow: 0 0 16px rgba(31, 178, 254, 0.9); }
        .prog-card:hover .prog-card__cta { gap: 10px; text-shadow: 0 0 16px rgba(31, 178, 254, 0.9); }

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
