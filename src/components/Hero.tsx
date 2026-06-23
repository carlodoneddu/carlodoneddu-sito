export default function Hero({ heroImage }: { heroImage?: string }) {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          position: relative;
          overflow: hidden;
          background: #0a0a0a;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 30%;
          background-repeat: no-repeat;
          filter: brightness(0.55);
          transition: transform 8s ease-out;
        }
        .hero-bg:hover { transform: scale(1.03); }
        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.92) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 2.5rem 5rem;
          max-width: 900px;
        }
        .hero-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 1.2rem;
          opacity: 0;
          animation: fadeUp 1s ease-out 0.3s forwards;
        }
        .hero-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4rem, 11vw, 9rem);
          font-weight: 300;
          line-height: 0.9;
          color: #f5f2eb;
          opacity: 0;
          animation: fadeUp 1s ease-out 0.6s forwards;
        }
        .hero-nome em { font-style: italic; display: block; color: rgba(245,242,235,0.85); }
        .hero-ruoli {
          margin-top: 1.8rem;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(245,242,235,0.5);
          opacity: 0;
          animation: fadeUp 1s ease-out 0.9s forwards;
        }
        .hero-ruoli span { margin-right: 1.8rem; }
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          right: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          animation: fadeUp 1s ease-out 1.5s forwards;
        }
        .hero-scroll-text { font-size: 0.55rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(245,242,235,0.35); writing-mode: vertical-rl; }
        .hero-scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, rgba(201,168,76,0.6), transparent); animation: scrollLine 2s ease-in-out 2s infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scrollLine { 0% { transform: scaleY(0); transform-origin: top; opacity: 1; } 50% { transform: scaleY(1); transform-origin: top; opacity: 1; } 51% { transform: scaleY(1); transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; } }
        @media (max-width: 768px) { .hero-content { padding: 0 1.5rem 4rem; } .hero-scroll { display: none; } }
      `}</style>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none', background: heroImage ? undefined : '#111' }} />
        <div className="hero-gradient" />
        <div className="hero-content">
          <p className="hero-eyebrow">Sardegna · Barcellona · Berlino</p>
          <h1 className="hero-nome">Carlo<br /><em>Doneddu</em></h1>
          <p className="hero-ruoli"><span>Cantautore</span><span>Chitarrista</span><span>Compositore</span></p>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-text">Scorri</span>
        </div>
      </section>
    </>
  )
}
