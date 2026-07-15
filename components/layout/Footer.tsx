'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Youtube, MapPin } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Col 1 — Brand */}
        <div className="footer__brand">
          <Image
            src="/logos/nexora-wordmark.png"
            alt="Nexora Fitness"
            width={130}
            height={38}
            style={{ objectFit: 'contain', height: 'auto' }}
          />
          <p className="footer__tagline">
            The next evolution of you.<br />
            Empower. Transform. Nexora.
          </p>
          <div className="footer__social">
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Col 4 — Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <address className="footer__address">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=River+Market+at+Westminster+Quay,+New+Westminster,+BC+V3M+6G5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__link footer__link--address"
            >
              <MapPin size={16} className="footer__map-icon" />
              <span>
                River Market at Westminster Quay<br />
                New Westminster, BC V3M 6G5
              </span>
            </a>
            <a href="tel:+16041234567" className="footer__link">604-123-4567</a>
            <Link href="/contact" className="footer__link">Leave a Message</Link>
            <a href="mailto:info@nexorafitness.ca" className="footer__link">info@nexorafitness.ca</a>
            <p className="footer__hours">24/7</p>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Nexora Fitness. All Rights Reserved.</p>
          <div className="footer__legal">
            <Link href="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--surface);
          border-top: 1px solid rgba(31, 178, 254, 0.08);
        }
        .footer__top {
          display: flex;
          justify-content: space-between;
          gap: 48px;
          padding-top: 18px;
          padding-bottom: 15px;
        }
        .footer__brand { display: flex; flex-direction: column; gap: 9px; }
        .footer__tagline { font-size: 14px; color: var(--muted); line-height: 1.4; max-width: 210px; }

        .footer__heading {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 9px;
        }
        .footer__col { display: flex; flex-direction: column; }
        .footer__nav {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 10px;
        }
        .footer__link {
          font-size: 14px;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
          font-style: normal;
        }
        .footer__link:hover { color: var(--cyan); }
        .footer__link--address {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          text-shadow: 0 0 12px rgba(31, 178, 254, 0.4);
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .footer__link--address:hover {
          color: var(--cyan);
          text-shadow: 0 0 20px rgba(31, 178, 254, 0.9);
        }
        .footer__link--address :global(.footer__map-icon) {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--cyan);
        }
        /* Social icons — under Quick Links per client spec */
        .footer__social {
          display: flex;
          gap: 12px;
          margin-top: 2px;
        }
        .footer__social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          color: var(--muted);
          transition: all 0.25s ease;
        }
        .footer__social a:hover {
          color: var(--cyan);
          border-color: var(--cyan-border);
          box-shadow: 0 0 12px rgba(31,178,254,0.25);
        }

        .footer__address {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-style: normal;
        }
        .footer__address p { font-size: 14px; color: var(--muted); margin: 0; }
        .footer__hours { color: var(--cyan) !important; }

        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.04);
          padding: 10px 0;
        }
        .footer__bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer__bottom p {
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.04em;
          margin: 0;
        }
        .footer__legal {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 12px;
          color: var(--muted);
        }
        .footer__legal a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer__legal a:hover { color: var(--cyan); }

        @media (max-width: 560px) {
          .footer__top { flex-direction: column; gap: 48px; }
          .footer__bottom-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
