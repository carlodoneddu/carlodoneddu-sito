export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: #0a0a0a;
        }
        .hero-spotlight {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 800px;
          background: radial-gradient(ellipse at top, rgba(201,168,76,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 2rem;
        }
        .hero-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeUp 1s ease-out 0.3s forwards;
        }
        .hero-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 10vw, 8rem);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.01em;
          color: #f5f2eb;
          opacity: 0;
          animation: fadeUp 1s ease-out 0.6s forwards;
        }
        .hero-nome em {
          font-style: italic;
          color: #c9a84c;
        }
        .hero-ruoli {
          margin-top: 1.5rem;
          font-size: 0.8rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #555;
          opacity: 0;
          animation: fadeUp 1s ease-out 0.9s forwards;
        }
        .hero-ruoli span {
          margin: 0 0.8rem;
        }
        .hero-ruoli span:not(:last-child)::after {
          content: '·';
          margin-left: 1.6rem;
          color: #c9a84c;
        }
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          animation: fadeUp 1s ease-out 1.5s forwards;
        }
        .hero-scroll span {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #555;
        }
        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #c9a84c, transparent);
          animation: scrollLine 2s ease-in-out 2s infinite;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-spotlight" />
        <div className="hero-content">
          <p className="hero-eyebrow">Sardegna · Barcellona · Berlino</p>
          <h1 className="hero-nome">
            Carlo<br /><em>Doneddu</em>
          </h1>
          <p className="hero-ruoli">
            <span>Cantautore</span>
            <span>Chitarrista</span>
            <span>Compositore</span>
          </p>
        </div>
        <div className="hero-scroll">
          <span>Scorri</span>
          <div className="hero-scroll-line" />
        </div>
      </section>
    </>
  )
}
