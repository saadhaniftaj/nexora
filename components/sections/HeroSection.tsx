'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ScrollDown from '@/components/ui/ScrollDown'

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

          <div className="hero__headline-wrapper">
            <div className="hero__left-line" />
            <h1 className="hero__headline">
              <span className="hero__line"><span className="text-cyan text-glow-cyan">POWER</span></span>
              <span className="hero__line"><span className="text-glow-white">FUELS YOU.</span></span>
              <span className="hero__line"><span className="text-cyan text-glow-cyan">PROGRESS</span></span>
              <span className="hero__line"><span className="text-glow-white">SHAPES YOU.</span></span>
              <span className="hero__line"><span className="text-cyan text-glow-cyan">NE<img src="/logos/HERONEXORAX.png" alt="X" className="nexora-img-x" />ORA</span></span>
              <span className="hero__line"><span className="text-glow-white">TRANSFORMS YOU.</span></span>
            </h1>
          </div>

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
      <ScrollDown />

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
          inset: -100px;
          z-index: 0;
          will-change: transform;
          animation: heroZoomOut 14s ease-out forwards;
        }
        @keyframes heroZoomOut {
          from { transform: scale(1.15); }
          to { transform: scale(1); }
        }
        .hero__overlay-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.7) 40%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }
        .hero__overlay-bottom {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(8,8,8,1) 0%, rgba(8,8,8,0) 25%);
          z-index: 1;
          pointer-events: none;
        }

        .hero__content {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .hero__text { max-width: 800px; }

        .hero__eyebrow {
          display: flex;
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

        .hero__headline-wrapper {
          position: relative;
          padding-left: 24px;
          margin: 0 0 20px;
        }
        .hero__left-line {
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 4px;
          background: var(--cyan);
          box-shadow: 0 0 16px rgba(31, 178, 254, 0.8), 0 0 32px rgba(31, 178, 254, 0.4);
          transform: skewX(-8deg);
          border-radius: 2px;
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 40%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 0%, black 40%, transparent 100%);
        }

        .hero__headline {
          display: flex;
          flex-direction: column;
          font-family: var(--font-orbitron);
          font-size: clamp(42px, 6.5vw, 90px);
          font-weight: 800;
          line-height: 0.85;
          margin: 0;
          text-transform: uppercase;
        }
        .hero__line { display: block; }
        .hero__line:nth-child(1) { margin-left: clamp(40px, 6vw, 80px); }
        .hero__line:nth-child(2) { margin-left: clamp(32px, 4.8vw, 64px); margin-top: -0.15em; }
        .hero__line:nth-child(3) { margin-left: clamp(24px, 3.6vw, 48px); }
        .hero__line:nth-child(4) { margin-left: clamp(16px, 2.4vw, 32px); margin-top: -0.15em; }
        .hero__line:nth-child(5) { margin-left: clamp(8px, 1.2vw, 16px); }
        .hero__line:nth-child(6) { margin-left: 0; margin-top: -0.35em; }
        .text-cyan { color: var(--cyan); }
        .text-glow-cyan { text-shadow: 0 0 30px rgba(31,178,254,0.6); }
        .text-glow-white { 
          text-shadow: 0 0 24px rgba(255,255,255,0.4); 
          font-size: 0.7em;
        }

        .nexora-img-x {
          height: 1.4em;
          width: auto;
          margin: 0 -0.55em 0 -0.5em;
          display: inline-block;
          vertical-align: middle;
          transform: translateY(0%);
          filter: drop-shadow(0 0 24px rgba(31, 178, 254, 0.8));
        }

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
      `}</style>
    </section>
  )
}
