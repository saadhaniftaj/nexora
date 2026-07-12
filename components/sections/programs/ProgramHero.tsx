'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ProgramHero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="prog-hero" aria-label="Programs page hero">
      <div className="prog-hero__bg" ref={bgRef}>
        <Image
          src="/images/hero/hero-program.png"
          alt="Nexora Fitness intense training - programs for every goal"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
      <div className="prog-hero__overlay" />

      <div className="prog-hero__content container">
        <div className="prog-hero__text">
          <div className="prog-hero__tagline">
            <span>Train</span>
            <span className="slash-divider">·</span>
            <span className="text-cyan">Transform</span>
            <span className="slash-divider">·</span>
            <span>Thrive</span>
          </div>
          <h1>
            Programs Built<br />
            For <span className="text-cyan">Every</span><br />
            Version Of You
          </h1>
          <p>
            From elite strength athletes to those starting their first serious fitness journey —
            Nexora has a structured program to get you where you're going.
          </p>
        </div>
      </div>

      <style jsx>{`
        .prog-hero {
          position: relative;
          margin-top: 60px;
          height: 75vh;
          min-height: 560px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .prog-hero__bg {
          position: absolute;
          top: -15%;
          bottom: -15%;
          left: 0;
          right: 0;
          z-index: 0;
          will-change: transform;
          animation: heroZoomOut 14s ease-out forwards;
        }
        @keyframes heroZoomOut {
          from { scale: 1.14; }
          to   { scale: 1.0; }
        }
        .prog-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(8,8,8,0.90) 0%,
            rgba(8,8,8,0.65) 55%,
            rgba(8,8,8,0.15) 100%
          );
          z-index: 1;
        }
        .prog-hero__content {
          position: relative;
          z-index: 2;
          padding-top: 24px;
        }
        .prog-hero__text {
          max-width: 700px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .prog-hero__tagline {
          display: flex;
          align-items: center;
          gap: 0;
          font-family: var(--font-display);
          font-size: clamp(12px, 1.5vw, 16px);
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(240,240,240,0.6);
        }
        .prog-hero__content h1 {
          font-size: clamp(44px, 7vw, 96px);
          line-height: 0.92;
        }
        .prog-hero__content p { max-width: 440px; font-size: 16px; }
      `}</style>
    </section>
  )
}
