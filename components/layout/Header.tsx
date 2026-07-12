'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Facilities', href: '/facility' },
  { label: 'Community', href: '/#community' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner container">
          {/* Logo */}
          <Link href="/" className="header__logo">
            <Image
              src="/logos/nexora-wordmark.png"
              alt="Nexora Fitness"
              width={174}
              height={36}
              priority
              style={{ objectFit: 'contain', height: 'auto' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="header__nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link href="/#waitlist" className="btn-primary header__cta">
            <span className="header__cta-slash">/</span> Join Nexora
          </Link>

          {/* Hamburger */}
          <button
            className={`header__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <nav className="mobile-menu__nav">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mobile-menu__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="btn-primary mobile-menu__cta" onClick={() => setMenuOpen(false)}>
            Join Nexora
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 8px 0;
          background: linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.6) 50%, transparent 100%);
          transition: all 0.35s ease;
        }
        .header--scrolled {
          background: linear-gradient(to bottom, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.6) 50%, transparent 100%);
          padding: 0;
        }
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .header__logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .header__nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .header__nav-link {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240, 240, 240, 0.70);
          text-decoration: none;
          position: relative;
          padding: 2px 0;
          transition: all 0.25s ease;
        }
        .header__nav-link:hover {
          color: var(--cyan);
          text-shadow: 0 0 20px rgba(31, 178, 254, 0.8);
        }
        .header__nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--cyan);
          box-shadow: 0 0 8px rgba(31, 178, 254, 0.8);
          transition: width 0.25s ease;
        }
        .header__nav-link:hover::after { width: 100%; }

        /* CTA neon glow effect */
        .header__cta {
          display: none;
          font-size: 11px;
          padding: 6px 16px;
          letter-spacing: 0.16em;
          gap: 6px;
          box-shadow: 0 0 16px rgba(31, 178, 254, 0.25);
          transition: all 0.25s ease;
        }
        .header__cta-slash {
          color: rgba(8,8,8,0.5);
          font-size: 14px;
          font-weight: 900;
          line-height: 1;
        }
        .header__cta:hover {
          box-shadow: 0 0 32px rgba(31, 178, 254, 0.7), 0 0 60px rgba(31, 178, 254, 0.2);
          transform: translateY(-2px);
        }
        .header__cta:hover .header__cta-slash { color: rgba(0,0,0,0.35); }

        /* Hamburger */
        .header__hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .header__hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--white);
          transition: all 0.25s ease;
          transform-origin: center;
        }
        .header__hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .header__hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .header__hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: rgba(8, 8, 8, 0.98);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-menu--open { transform: translateX(0); }
        .mobile-menu__nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
        }
        .mobile-menu__link {
          font-family: var(--font-display);
          font-size: clamp(28px, 6vw, 52px);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--white);
          text-decoration: none;
          padding: 10px 24px;
          transition: color 0.2s ease, text-shadow 0.2s ease;
        }
        .mobile-menu__link:hover {
          color: var(--cyan);
          text-shadow: 0 0 30px rgba(31,178,254,0.5);
        }
        .mobile-menu__cta { margin-top: 24px; }

        @media (min-width: 900px) {
          .header__cta { display: inline-flex; }
          .header__hamburger { display: none; }
        }
        @media (max-width: 900px) {
          .header__nav { display: none; }
        }
      `}</style>
    </>
  )
}
