'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        // Parallax shift — combine with CSS zoom-out animation
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="hero" aria-label="Homepage Hero">
      {/* Background Image with parallax */}
      <div className="hero__bg-wrap" ref={bgRef}>
        <Image
          src="/images/hero/hero-home.png"
          alt="Nexora Fitness gym floor with Fraser River view, Downtown New Westminster"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Overlays */}
      <div className="hero__overlay-left" />
      <div className="hero__overlay-bottom" />

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__eyebrow">Downtown New Westminster · Coming Soon</span>

          <h1 className="hero__headline">
            <span className="hero__line">Power Fuels You</span>
            <span className="hero__line">Progress Shapes You</span>
            <span className="hero__line hero__line--cyan">Nexora Transforms You</span>
          </h1>

          <p className="hero__sub-tagline">Become Your Next Self</p>

          <div className="hero__actions">
            <Link href="#waitlist" className="btn-primary hero__btn-primary">
              Start Your Journey <ArrowRight size={16} />
            </Link>
            <Link href="/programs" className="btn-outline">
              Explore Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <ChevronDown size={20} />
        <span>Scroll</span>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero__bg-wrap {
          position: absolute;
          top: -15%;
          bottom: -15%;
          left: 0;
          right: 0;
          will-change: transform;
          /* Slow Ken Burns zoom-out: starts slightly in, slowly pulls back */
          animation: heroZoomOut 14s ease-out forwards;
        }
        @keyframes heroZoomOut {
          from { scale: 1.14; }
          to   { scale: 1.0; }
        }
        .hero__overlay-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(8,8,8,0.95) 0%,
            rgba(8,8,8,0.75) 55%,
            rgba(8,8,8,0.15) 100%
          );
          z-index: 1;
        }
        .hero__overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 220px;
          background: linear-gradient(to top, var(--black), transparent);
          z-index: 1;
        }
        .hero__content {
          position: relative;
          z-index: 2;
          padding-top: 24px;
        }
        .hero__text { max-width: 700px; }

        .hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 24px;
        }
        .hero__eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: var(--cyan);
          box-shadow: 0 0 8px rgba(31,178,254,0.6);
        }

        .hero__headline {
          display: flex;
          flex-direction: column;
          margin: 0 0 20px;
          font-size: clamp(42px, 6.5vw, 90px);
          line-height: 1.0;
        }
        .hero__line { display: block; }
        .hero__line--cyan { color: var(--cyan); text-shadow: 0 0 30px rgba(31,178,254,0.4); }

        .hero__sub-tagline {
          font-family: var(--font-display);
          font-size: clamp(14px, 1.6vw, 20px);
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(240,240,240,0.55);
          margin-bottom: 40px;
        }

        .hero__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero__btn-primary {
          position: relative;
          overflow: hidden;
        }
        .hero__btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.3), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hero__btn-primary:hover::after { opacity: 1; }

        .hero__scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          animation: heroScrollBounce 2s ease-in-out infinite;
        }
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.5; }
          50% { transform: translateX(-50%) translateY(7px); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
