export default function Hero({ heroImage }: { heroImage?: string }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          position: relative;
          overflow: hidden;
          background: #2d3a4a;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          filter: brightness(0.75);
        }
        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.45) 80%, rgba(0,0,0,0.7) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 2rem 3.5rem;
          width: 100%;
        }
        .hero-nome {
          font-family: 'Anton', 'Arial Black', sans-serif;
          font-size: clamp(4rem, 13vw, 10rem);
          font-weight: 900;
          line-height: 0.9;
          color: #cc1212;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          text-shadow: 3px 3px 8px rgba(0,0,0,0.5), 1px 1px 0px rgba(0,0,0,0.8);
          opacity: 0;
          animation: fadeUp 0.8s ease-out 0.4s forwards;
          margin-bottom: 0.6rem;
        }
        .hero-ruoli {
          font-size: clamp(0.6rem, 1.5vw, 0.85rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          opacity: 0;
          animation: fadeUp 0.8s ease-out 0.7s forwards;
          font-weight: 300;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
        }
        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          animation: fadeUp 1s ease-out 1.2s forwards;
        }
        .hero-scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent); animation: scrollLine 2s ease-in-out 1.5s infinite; }
        .hero-scroll-text { font-size: 0.55rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.35); writing-mode: vertical-rl; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scrollLine { 0% { transform: scaleY(0); transform-origin: top; opacity:1; } 50% { transform: scaleY(1); transform-origin: top; opacity:1; } 51% { transform: scaleY(1); transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; opacity:0; } }
        @media (max-width: 768px) { .hero-content { padding: 0 1.2rem 2.5rem; } .hero-scroll { display: none; } }
      `}</style>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none', background: heroImage ? undefined : '#2d3a4a' }} />
        <div className="hero-gradient" />
        <div className="hero-content">
          <h1 className="hero-nome">Carlo Doneddu</h1>
          <p className="hero-ruoli">Cantautore · Chitarrista · Compositore</p>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-text">Scorri</span>
        </div>
      </section>
    </>
  )
}
