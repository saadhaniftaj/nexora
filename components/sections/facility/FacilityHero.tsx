'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import ScrollDown from '@/components/ui/ScrollDown'
import { ArrowRight } from 'lucide-react'

export default function FacilityHero() {
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
    <section className="facility-hero" aria-label="Facility page hero">
      <div className="facility-hero__bg" ref={bgRef}>
        <Image
          src="/images/hero/hero-facility.png"
          alt="Nexora Fitness premium training floor, Downtown New Westminster"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      {/* Left-to-right gradient per client spec */}
      <div className="facility-hero__overlay" />

      <div className="facility-hero__content container">
        <div className="facility-hero__text">
          <span className="section-label">The Nexora Facility</span>
          <h1>
            Built for serious training<br />
            <span className="text-cyan">Designed for your next self</span>
          </h1>
          <p>
            A premium fitness environment in Downtown New Westminster — curated equipment, open training space, private washrooms, on-site recovery, and a riverfront setting unlike anything else in the city.
          </p>
        </div>
      </div>
      <ScrollDown />

      <style jsx>{`
        .facility-hero {
          position: relative;
          margin-top: 60px;
          height: 78vh;
          min-height: 580px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .facility-hero__bg {
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
        /* Black gradient from left to right per client spec §5.1 */
        .facility-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(8,8,8,0.95) 0%,
            rgba(8,8,8,0.75) 45%,
            rgba(8,8,8,0.15) 100%
          );
          z-index: 1;
        }
        .facility-hero__content {
          position: relative;
          z-index: 2;
          padding-top: 24px;
        }
        .facility-hero__text {
          max-width: 660px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .facility-hero__content h1 { font-size: clamp(40px, 6vw, 82px); }
        .facility-hero__content p { max-width: 460px; font-size: 16px; line-height: 1.7; }
        .facility-hero__cta {
          align-self: flex-start;
          box-shadow: 0 0 24px rgba(31,178,254,0.2);
        }
        .facility-hero__cta:hover {
          box-shadow: 0 0 40px rgba(31,178,254,0.5);
        }
      `}</style>
    </section>
  )
}
