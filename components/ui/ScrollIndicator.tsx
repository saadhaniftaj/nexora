'use client'

import { useEffect, useState, useRef } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'essence', label: 'Essence' },
  { id: 'programs', label: 'Programs' },
  { id: 'community', label: 'Community' },
  { id: 'waitlist', label: 'Join' },
]

export default function ScrollIndicator() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pulseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0)

      // Find active section
      const sectionEls = SECTIONS.map((s) => document.getElementById(s.id))
      let current = 0
      sectionEls.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          current = i
        }
      })
      setActiveIndex(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="scroll-indicator" aria-hidden="true">
      {/* Track line */}
      <div className="scroll-indicator__track">
        {/* Running neon pulse */}
        <div
          ref={pulseRef}
          className="scroll-indicator__pulse"
          style={{ top: `${scrollProgress * 100}%` }}
        />
        {/* Filled progress */}
        <div
          className="scroll-indicator__fill"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Section dots */}
      <div className="scroll-indicator__dots">
        {SECTIONS.map((section, i) => (
          <button
            key={section.id}
            className={`scroll-indicator__dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => scrollTo(section.id)}
            title={section.label}
            aria-label={`Scroll to ${section.label}`}
          >
            <span className="scroll-indicator__dot-label">{section.label}</span>
          </button>
        ))}
      </div>

      <style jsx>{`
        .scroll-indicator {
          position: fixed;
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 500;
          display: flex;
          align-items: center;
          gap: 12px;
          pointer-events: none;
        }
        .scroll-indicator__track {
          position: relative;
          width: 2px;
          height: 160px;
          background: rgba(255, 255, 255, 0.07);
          border-radius: 2px;
          overflow: visible;
        }
        .scroll-indicator__fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to bottom, var(--cyan), var(--cyan-light));
          border-radius: 2px;
          transition: height 0.1s ease;
          box-shadow: 0 0 8px rgba(31, 178, 254, 0.6);
        }
        .scroll-indicator__pulse {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: var(--cyan-light);
          border-radius: 50%;
          box-shadow:
            0 0 6px 2px rgba(90, 240, 250, 0.9),
            0 0 16px 4px rgba(31, 178, 254, 0.5);
          transition: top 0.15s ease;
          animation: pulseGlow 1.4s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px 2px rgba(90,240,250,0.9), 0 0 16px 4px rgba(31,178,254,0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 12px 4px rgba(90,240,250,0.9), 0 0 28px 8px rgba(31,178,254,0.5); }
        }
        .scroll-indicator__dots {
          display: flex;
          flex-direction: column;
          gap: 20px;
          pointer-events: all;
        }
        .scroll-indicator__dot {
          position: relative;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
        }
        .scroll-indicator__dot.active {
          background: var(--cyan);
          box-shadow: 0 0 10px rgba(31, 178, 254, 0.8);
          transform: scale(1.4);
        }
        .scroll-indicator__dot:hover {
          background: var(--cyan);
          transform: scale(1.3);
        }
        .scroll-indicator__dot-label {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cyan);
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }
        .scroll-indicator__dot:hover .scroll-indicator__dot-label,
        .scroll-indicator__dot.active .scroll-indicator__dot-label {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .scroll-indicator { display: none; }
        }
      `}</style>
    </div>
  )
}
