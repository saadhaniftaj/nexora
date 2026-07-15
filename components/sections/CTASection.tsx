'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      })
    } catch {
      // fall through to success state
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <section id="waitlist" className="cta-section" aria-labelledby="cta-heading">
      {/* BG */}
      <div className="cta-section__bg">
        <Image
          src="/images/sections/cta-bg.png"
          alt="Nexora Fitness training"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      </div>
      <div className="cta-section__overlay" />

      <div className="cta-section__content container">
        <div className="cta-section__text">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Your Next Evolution Starts Here
          </span>
          <h2 id="cta-heading" style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', whiteSpace: 'nowrap' }}>
            Become Your <span className="text-cyan">Next Self</span>
          </h2>
          <p>
            Commit to yourself. Trust the process. Become your next self.
          </p>
        </div>

        <div className="cta-section__form-wrap">
          {submitted ? (
            <div className="cta-section__success">
              <div className="cta-section__success-icon">
                <CheckCircle size={40} color="var(--cyan)" />
              </div>
              <h3>You're on the list.</h3>
              <p>
                You'll be among the first 100 to lock in founding member pricing — for life. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form className="cta-section__form" onSubmit={handleSubmit} noValidate>
              <p className="cta-section__form-eyebrow">JOIN NEXORA</p>
              <h3 style={{ marginBottom: '28px', fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
                Secure Your Spot
              </h3>
              <div className="cta-section__field">
                <label htmlFor="cta-name">Full Name</label>
                <input
                  id="cta-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="cta-section__field">
                <label htmlFor="cta-phone">Phone Number</label>
                <input
                  id="cta-phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                />
              </div>
              <div className="cta-section__field">
                <label htmlFor="cta-email">Email Address</label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <button
                type="submit"
                className="btn-primary cta-section__submit"
                disabled={loading}
              >
                {loading ? 'Submitting...' : <>Join Nexora Today <ArrowRight size={16} /></>}
              </button>
              <p className="cta-section__disclaimer">
                No spam. Unsubscribe anytime. Founding member pricing locked in for life.
              </p>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          position: relative;
          padding: var(--section-pad-y) 0;
          overflow: hidden;
          min-height: 950px;
          display: flex;
          align-items: center;
        }
        .cta-section__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .cta-section__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(8,8,8,0.95) 0%,
            rgba(8,8,8,0.85) 50%,
            rgba(8,8,8,0.55) 100%
          );
          z-index: 1;
        }
        .cta-section__content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .cta-section__text { display: flex; flex-direction: column; }
        .cta-section__text h2 { margin: 8px 0 20px; }
        .cta-section__text p { font-size: 16px; max-width: 420px; }

        .cta-section__form-wrap {
          background: rgba(14, 14, 14, 0.92);
          border: 1px solid rgba(31, 178, 254, 0.15);
          border-radius: 2px;
          padding: 44px 40px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .cta-section__form-eyebrow {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 8px;
        }
        .cta-section__form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cta-section__field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cta-section__field label {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .cta-section__field input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 2px;
          padding: 14px 16px;
          color: var(--white);
          font-family: var(--font-body);
          font-size: 15px;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .cta-section__field input:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 0 2px rgba(31,178,254,0.12);
        }
        .cta-section__field input::placeholder { color: rgba(255,255,255,0.22); }
        .cta-section__submit {
          width: 100%;
          justify-content: center;
          padding: 16px 32px;
          font-size: 14px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 24px rgba(255, 255, 255, 0.2);
          transition: all 0.25s ease;
          color: var(--black) !important;
        }
        .cta-section__submit::before {
          transform: none !important;
          border-radius: var(--radius-btn) !important;
          background: var(--white) !important;
        }
        .cta-section__submit:hover {
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }
        .cta-section__disclaimer {
          font-size: 11px;
          text-align: center;
          color: rgba(136,136,136,0.7);
          line-height: 1.5;
          margin-top: -4px;
        }
        .cta-section__success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          padding: 24px 0;
        }
        .cta-section__success-icon {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(31,178,254,0.08);
          border: 1px solid rgba(31,178,254,0.2);
          border-radius: 50%;
        }
        .cta-section__success h3 {
          font-size: clamp(24px, 2.5vw, 34px);
          letter-spacing: 0.04em;
        }
        .cta-section__success p { font-size: 15px; line-height: 1.7; max-width: 340px; }

        @media (max-width: 900px) {
          .cta-section__content { grid-template-columns: 1fr; gap: 40px; }
          .cta-section__form-wrap { padding: 32px 24px; }
        }
      `}</style>
    </section>
  )
}
