'use client'

import Image from 'next/image'

const brands = [
  {
    name: 'CORE Health and Wellness',
    logo: '/logos/core haelth and fitness logo.png',
    url: 'https://www.corehandf.com/',
    ig: 'https://instagram.com/corehandf',
    igHandle: '@corehandf',
  },
  {
    name: 'Atlantis Strength',
    logo: '/logos/atlantis logo.png',
    url: 'https://atlantisstrength.com/',
    ig: 'https://instagram.com/atlantisstrength',
    igHandle: '@atlantisstrength',
  },
  {
    name: 'Shua Fitness',
    logo: '/logos/shua logo.png',
    url: 'https://shuafitness.com/',
    ig: 'https://instagram.com/shuafitnessofficial',
    igHandle: '@shuafitnessofficial',
  },
  {
    name: 'Xmaster Fitness',
    logo: '/logos/xmaster logo.png',
    url: 'https://www.xmasterfitness.com/',
    ig: 'https://instagram.com/xmasterfitness_official',
    igHandle: '@xmasterfitness_official',
  },
  {
    name: 'Torque Fitness',
    logo: '/logos/torque logo.png',
    url: 'https://commercial.torquefitness.com/',
    ig: 'https://instagram.com/torquefitnessusa',
    igHandle: '@torquefitnessusa',
  },
  {
    name: 'BootyBuilder',
    logo: '/logos/Bootybuilder logo.png',
    url: 'https://bootybuilder.com/',
    ig: 'https://instagram.com/bootybuilder.official',
    igHandle: '@bootybuilder.official',
  },
]

export default function EquipmentBrands() {
  return (
    <section className="equipment section" aria-labelledby="equipment-heading">
      <div className="container">
        <span className="section-label">Why Programs Feel Different Here</span>
        <h2 id="equipment-heading">
          Equipment makes the difference.<br />
          <span className="text-cyan">Environment keeps you consistent.</span>
        </h2>
        <p className="equipment__intro">
          Every brand on this floor was chosen after rigorous research into biomechanics, durability, and athlete performance. We don&apos;t carry fillers.
        </p>

        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track">
              {brands.map((brand) => (
                <div key={brand.name} className="equip-card">
                  <div className="equip-card__logo-wrap">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="200px"
                      style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.75 }}
                    />
                  </div>
                  <span className="equip-card__name">{brand.name}</span>
                  <div className="equip-card__links">
                    <a href={brand.url} target="_blank" rel="noopener noreferrer" className="equip-card__link">
                      Website ↗
                    </a>
                    <span className="equip-card__sep">·</span>
                    <a href={brand.ig} target="_blank" rel="noopener noreferrer" className="equip-card__link equip-card__link--ig">
                      {brand.igHandle}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="marquee-track mobile-only" aria-hidden="true">
              {brands.map((brand) => (
                <div key={`${brand.name}-dup`} className="equip-card">
                  <div className="equip-card__logo-wrap">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="200px"
                      style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.75 }}
                    />
                  </div>
                  <span className="equip-card__name">{brand.name}</span>
                  <div className="equip-card__links">
                    <a href={brand.url} target="_blank" rel="noopener noreferrer" className="equip-card__link" tabIndex={-1}>
                      Website ↗
                    </a>
                    <span className="equip-card__sep">·</span>
                    <a href={brand.ig} target="_blank" rel="noopener noreferrer" className="equip-card__link equip-card__link--ig" tabIndex={-1}>
                      {brand.igHandle}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .equipment h2 { margin: 8px 0 16px; }
        .equipment__intro { max-width: 520px; margin-bottom: 52px; }
        
        .marquee-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .marquee-track.mobile-only {
          display: none;
        }

        .equip-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 36px 24px 28px;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 2px;
          transition: all 0.3s ease;
          text-align: center;
        }
        .equip-card:hover {
          border-color: var(--cyan-border);
          box-shadow: 0 0 40px rgba(31,178,254,0.08);
          transform: translateY(-5px);
        }
        .equip-card__logo-wrap {
          position: relative;
          width: 150px;
          height: 56px;
        }
        .equip-card__name {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white);
        }
        .equip-card__links {
          display: flex;
          gap: 8px;
          align-items: center;
          font-size: 12px;
        }
        .equip-card__sep { color: rgba(255,255,255,0.2); }
        .equip-card__link {
          color: var(--cyan);
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: opacity 0.2s ease;
        }
        .equip-card__link:hover { opacity: 0.65; }

        @media (max-width: 900px) {
          .marquee-wrapper {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            overflow: hidden;
            padding: 10px 0;
          }
          .marquee-container {
            display: flex;
            gap: 16px;
          }
          .marquee-track {
            display: flex;
            gap: 16px;
            flex-shrink: 0;
            animation: marquee 25s linear infinite;
          }
          .marquee-track.mobile-only {
            display: flex;
          }
          .equip-card {
            width: 260px;
            flex-shrink: 0;
          }
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 16px)); }
        }
      `}</style>
    </section>
  )
}
