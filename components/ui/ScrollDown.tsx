export default function ScrollDown() {
  return (
    <>
      <div className="scroll-down" aria-hidden="true">
        <span className="scroll-down__text">Scroll</span>
        <div className="scroll-down__track">
          <div className="scroll-down__pulse" />
        </div>
      </div>
      <style jsx>{`
        .scroll-down {
          position: absolute;
          bottom: 32px;
          left: 16px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .scroll-down__text {
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .scroll-down__track {
          width: 2px;
          height: 60px;
          background: rgba(255, 255, 255, 0.07);
          position: relative;
          overflow: hidden;
        }
        .scroll-down__pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(to bottom, transparent, var(--cyan));
          box-shadow: 0 0 8px rgba(31, 178, 254, 0.6);
          animation: flowDown 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes flowDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @media (min-width: 1200px) {
          .scroll-down {
            left: 32px;
          }
        }
        @media (min-width: 1600px) {
          .scroll-down {
            left: 48px;
          }
        }
      `}</style>
    </>
  )
}
