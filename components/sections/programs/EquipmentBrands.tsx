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
        <h2 id="equipment-heading" style={{ fontSize: 'clamp(28px, 4vw, 52px)', opacity: 0.9 }}>
          Equipment makes the difference
        </h2>
        <p className="equipment__intro">
          Every brand on this floor was chosen after rigorous research into biomechanics, durability, and athlete performance. We don&apos;t carry fillers.
        </p>

        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track">
              {brands.map((brand) => (
                <a key={brand.name} href={brand.url} target="_blank" rel="noopener noreferrer" className="equip-logo-link">
                  <div className="equip-logo-wrap">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="200px"
                      style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                </a>
              ))}
            </div>
            <div className="marquee-track" aria-hidden="true">
              {brands.map((brand) => (
                <a key={`${brand.name}-dup`} href={brand.url} target="_blank" rel="noopener noreferrer" className="equip-logo-link" tabIndex={-1}>
                  <div className="equip-logo-wrap">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="200px"
                      style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .equipment h2 { margin: 8px 0 16px; }
        .equipment__intro { max-width: 520px; margin-bottom: 52px; }
        .marquee-wrapper {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 60px 0;
          mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 15%, black 50%, rgba(0,0,0,0.1) 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 15%, black 50%, rgba(0,0,0,0.1) 85%, transparent 100%);
        }
        .marquee-container {
          display: flex;
          gap: 100px;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 100px;
          flex-shrink: 0;
          animation: marquee-desktop 35s linear infinite;
        }
        
        .equip-logo-link {
          display: block;
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 0.8;
        }
        .equip-logo-link:hover {
          transform: scale(1.05);
          opacity: 1;
        }
        
        .equip-logo-wrap {
          position: relative;
          width: 300px;
          height: 110px;
        }
        
        @media (max-width: 900px) {
          .marquee-wrapper {
            padding: 40px 0;
          }
          .marquee-container {
            gap: 20px;
          }
          .marquee-track {
            gap: 20px;
            animation: marquee-mobile 35s linear infinite;
          }
        }
        
        @keyframes marquee-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 100px)); }
        }
        @keyframes marquee-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 20px)); }
        }
      `}</style>
    </section>
  )
}
