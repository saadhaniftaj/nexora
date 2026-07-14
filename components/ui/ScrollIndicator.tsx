'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'essence', label: 'Essence' },
  { id: 'programs', label: 'Programs' },
  { id: 'community', label: 'Community' },
  { id: 'waitlist', label: 'Join' },
]

export default function ScrollIndicator() {
  const [activeIndex, setActiveIndex] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return

    const handleScroll = () => {
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
  }, [pathname])

  if (pathname !== '/') return null

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="scroll-indicator" aria-hidden="true">
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
