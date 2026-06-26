export default function Hero({ heroImage }: { heroImage?: string }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .hero {
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #1a2530;
          min-height: 42vw;
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
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.65) 78%, rgba(0,0,0,0.85) 100%);
        }
        .hero-content {
          z-index: 2;
          padding: 0 2rem 3rem;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .hero-nome {
          font-family: 'Bebas Neue', 'Arial Black', sans-serif;
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 400;
          line-height: 0.9;
          color: #8b1a1a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.7), 3px 3px 10px rgba(0,0,0,0.5);
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .hero-ruoli {
          font-size: clamp(0.55rem, 1.2vw, 0.8rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          font-weight: 300;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
          text-align: center;
          padding-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
          .hero { min-height: 56vw; }
          .hero-content { padding: 0 1rem 2rem; }
        }
      `}</style>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none', background: heroImage ? undefined : '#1a2530' }} />
        <div className="hero-gradient" />
        <div className="hero-content">
          <h1 className="hero-nome">Carlo Doneddu</h1>
          <p className="hero-ruoli">Cantautore · Chitarrista · Compositore</p>
        </div>
      </section>
    </>
  )
}
