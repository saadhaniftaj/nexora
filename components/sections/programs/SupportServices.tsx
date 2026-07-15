'use client'

import { useRef } from 'react'
import { UserPlus, LineChart, ShieldCheck, Dumbbell, Stethoscope, ChevronRight, ChevronLeft } from 'lucide-react'

const services = [
  {
    icon: UserPlus,
    title: 'Member Onboarding',
    body: 'Start with a clear understanding of the space, the equipment, and the training paths available to you. We direct you into the right path: Power, Energy, Performance, Precision, or Balance.',
    tag: null,
  },
  {
    icon: LineChart,
    title: 'InBody Assessment',
    body: 'Medical-grade Body Composition analyzer to better understand your body — fat, protein, minerals, and body water for a real snapshot of your progress.',
    tag: null,
  },
  {
    icon: ShieldCheck,
    title: 'Physical Assessment',
    body: 'A performance-driven approach to lower your injury chances and identify movement patterns that may be limiting your progress.',
    tag: null,
  },
  {
    icon: Dumbbell,
    title: 'Personal Training',
    body: 'For members who want a structured plan, coaching can help with technique, consistency, progression, and accountability.',
    tag: null,
  },
  {
    icon: Stethoscope,
    title: 'Physio & RMT',
    body: 'When movement, pain, or recovery needs more attention — on-site registered physiotherapists and massage therapists are here.',
    tag: null,
  },
]

export default function SupportServices() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="support section" aria-labelledby="support-heading">
      <div className="container">
        <span className="section-label">Support That Moves With You</span>
        <h2 id="support-heading">
          A better program starts with<br />
          <span className="text-cyan">better guidance</span>
        </h2>
        <p className="support__intro">
          World-class equipment is the foundation. Expert support is what makes the difference.
        </p>

        <div className="support__carousel-wrapper">
          <button className="slider-arrow slider-arrow--left" onClick={() => scroll('left')} aria-label="Scroll left">
            <ChevronLeft size={36} strokeWidth={1} />
          </button>
          
          <div className="support__grid" ref={scrollRef}>
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <article key={svc.title} className="support-card">
                  {svc.tag && <span className="support-card__tag">{svc.tag}</span>}
                  <div className="support-card__icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="support-card__title">{svc.title}</h3>
                  <p className="support-card__body">{svc.body}</p>
                  <div className="support-card__bar" />
                </article>
              )
            })}
          </div>

          <button className="slider-arrow slider-arrow--right" onClick={() => scroll('right')} aria-label="Scroll right">
            <ChevronRight size={36} strokeWidth={1} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .support h2 { margin: 8px 0 16px; }
        .support__intro { max-width: 480px; margin-bottom: 52px; }

        .support__carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .slider-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: rgba(31, 178, 254, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
          z-index: 10;
          padding: 8px;
        }
        .slider-arrow:hover {
          color: var(--cyan);
          transform: scale(1.15);
          filter: drop-shadow(0 0 12px var(--cyan)) drop-shadow(0 0 24px rgba(31,178,254,0.6));
        }

        .support__grid {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 20px;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE */
          -webkit-overflow-scrolling: touch;
          padding-bottom: 20px;
        }
        .support__grid::-webkit-scrollbar { 
          display: none; 
        }

        .support-card {
          flex: 0 0 350px; /* Fixed width for slider cards */
          scroll-snap-align: start;
          position: relative;
          padding: 32px 26px 36px;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 2px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .support-card:hover {
          border-color: var(--cyan-border);
          box-shadow: 0 0 40px rgba(31,178,254,0.08);
          transform: translateY(-4px);
        }
        .support-card__tag {
          position: absolute;
          top: 16px;
          right: 16px;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cyan);
          border: 1px solid rgba(31,178,254,0.3);
          padding: 3px 8px;
          border-radius: 2px;
        }
        .support-card__icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(31,178,254,0.07);
          border: 1px solid rgba(31,178,254,0.14);
          border-radius: 2px;
          color: var(--cyan);
          margin-bottom: 20px;
        }
        .support-card__title {
          font-size: clamp(16px, 1.6vw, 21px);
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }
        .support-card__body {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.7;
        }
        .support-card__bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, var(--cyan), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .support-card:hover .support-card__bar { transform: scaleX(1); }

        @media (max-width: 900px) {
          .slider-arrow { display: none; }
          .support__carousel-wrapper {
            margin: 0 -20px;
          }
          .support__grid {
            padding: 0 20px 40px;
            gap: 16px;
          }
          .support-card {
            flex: 0 0 85%;
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  )
}
