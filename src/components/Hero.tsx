export default function Hero({ heroImage }: { heroImage?: string }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .hero-wrap { width: 100%; }
        .hero-foto {
          width: 100%;
          position: relative;
          overflow: hidden;
          aspect-ratio: 2;
          background: #1a2530;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          filter: brightness(0.88) saturate(1.25);
        }
        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.88) 100%);
        }
        .hero-nome {
          position: absolute;
          bottom: 1.5rem;
          left: 0;
          width: 100%;
          text-align: center;
          font-family: 'Bebas Neue', 'Arial Black', sans-serif;
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 400;
          line-height: 1;
          color: #8b1a1a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.7), 3px 3px 10px rgba(0,0,0,0.5);
          z-index: 2;
        }
        .hero-band {
          width: 100%;
          background: var(--sfondo);
          padding: 1.5rem 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .hero-ruoli {
          font-size: clamp(0.6rem, 1.2vw, 0.82rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--testo-medio);
          font-weight: 300;
        }
        @media (max-width: 768px) {
          .hero-foto { aspect-ratio: 1.6; }
          .hero-band { padding: 1.2rem 1rem; }
        }
      `}</style>
      <div className="hero-wrap">
        <div className="hero-foto">
          <div className="hero-bg" style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }} />
          <div className="hero-gradient" />
          <h1 className="hero-nome">Carlo Doneddu</h1>
        </div>
        <div className="hero-band">
          <p className="hero-ruoli">Cantautore · Chitarrista · Compositore</p>
        </div>
      </div>
    </>
  )
}