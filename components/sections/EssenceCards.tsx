'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight, ChevronLeft } from 'lucide-react'

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
]

const extendedCards = [...cards, ...cards, ...cards, ...cards].map((c, i) => ({ ...c, uniqueId: i }))

export default function EssenceCards() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Initialize at the second set so user can scroll left immediately
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth / 4, behavior: 'auto' })
    }
  }, [])

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth } = scrollRef.current
    const singleSetWidth = scrollWidth / 4

    // If we've scrolled into the 4th set, silently jump back to the 3rd set
    if (scrollLeft >= singleSetWidth * 3) {
      scrollRef.current.scrollTo({ left: scrollLeft - singleSetWidth, behavior: 'auto' })
    } 
    // If we've scrolled into the 1st half of the 1st set, silently jump forward
    else if (scrollLeft <= singleSetWidth * 0.5) {
      scrollRef.current.scrollTo({ left: scrollLeft + singleSetWidth, behavior: 'auto' })
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="essence" className="essence section" aria-labelledby="essence-heading">
      <div className="essence__bg">
        <Image src="/images/nexora_reception_bg.png" alt="Nexora Reception" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="essence__bg-overlay" />
      </div>
      <div className="container">
        <span className="section-label">Nexora Essence</span>
        <h2 id="essence-heading">
          The gym New Westminster deserved
        </h2>
        <p className="essence__intro">
          Nexora isn't an upgrade to what's already here — it's what's been missing. A facility built around real training, real recovery, and a location that nothing else in the city can match.
        </p>

        <div className="essence__content-wrapper">
          <button className="essence__side-arrow" onClick={() => scroll('left')} aria-label="Scroll left">
            <ChevronLeft size={36} strokeWidth={1} />
          </button>

          <div className="essence__grid-container">
            <div className="essence__grid" ref={scrollRef} onScroll={handleScroll}>
              {extendedCards.map((card) => (
                <article key={card.uniqueId} className="essence__card">
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
          </div>
          
          <button className="essence__side-arrow" onClick={() => scroll('right')} aria-label="Scroll right">
            <ChevronRight size={36} strokeWidth={1} />
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
          overflow: hidden;
          margin: 0 -10px; /* offset padding */
          padding: 10px; /* space for shadows */
        }

        .essence__grid {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 0;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 20px;
        }
        .essence__grid::-webkit-scrollbar { 
          display: none; 
        }

        .essence__card {
          flex: 0 0 350px;
          scroll-snap-align: start;
          position: relative;
          background: var(--surface);
          border-radius: 0;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
          border-right: none;
          border-bottom: 2px solid var(--cyan);
          box-shadow: 0 4px 16px rgba(31, 178, 254, 0.2);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .essence__card:last-child {
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .essence__card:hover {
          transform: scale(1.03) translateY(-4px);
          border-color: var(--cyan-border);
          box-shadow: 0 0 40px rgba(31,178,254,0.15);
        }
        .essence__card :global(img) {
          filter: brightness(0.5) grayscale(0.6);
          transition: transform 0.5s ease, filter 0.5s ease !important;
        }
        .essence__card:hover :global(img) {
          transform: scale(1.06);
          filter: brightness(1.1) grayscale(0);
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
          font-size: 12px;
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
        .essence__card-body-text {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.65;
          margin: 10px 0 0 0;
        }

        .essence__side-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: rgba(31, 178, 254, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
          padding: 8px;
        }
        .essence__side-arrow:hover {
          color: var(--cyan);
          transform: scale(1.15);
          filter: drop-shadow(0 0 12px var(--cyan)) drop-shadow(0 0 24px rgba(31,178,254,0.6));
        }
        .essence__side-arrow:disabled {
          opacity: 0.1;
          cursor: not-allowed;
          pointer-events: none;
        }

        @media (max-width: 900px) { 
          .essence__content-wrapper { display: block; }
          .essence__side-arrow { display: none; }

          .essence__grid-container {
            margin: 0 -20px; /* Bleed to edges on mobile */
            padding: 0;
          }

          .essence__grid {
            padding: 0 20px 40px; /* Padding for scroll shadow & edges */
            gap: 0;
          }
          
          .essence__card { 
            flex: 0 0 85%; 
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  )
}
