export default function Footer() {
  return (
    <>
      <style>{`
        footer {
          background: var(--sfondo-alt);
          border-top: 1px solid rgba(0,0,0,0.1);
          padding: 4rem 0 2rem;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 300;
          color: var(--testo);
        }
        .footer-ruolo {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--testo-chiaro);
          margin-top: 0.3rem;
        }
        .footer-contatti { text-align: right; }
        .footer-contatti-titolo {
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--testo-chiaro);
          margin-bottom: 0.8rem;
        }
        .footer-email {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: var(--oro);
          transition: color 0.3s;
        }
        .footer-email:hover { color: var(--testo); }
        .footer-bottom {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-copy {
          font-size: 0.7rem;
          color: var(--testo-chiaro);
          letter-spacing: 0.1em;
        }
        @media (max-width: 600px) {
          .footer-inner { flex-direction: column; gap: 2rem; }
          .footer-contatti { text-align: left; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>

      <footer id="contatti">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-nome">Carlo Doneddu</div>
              <div className="footer-ruolo">Cantautore · Chitarrista · Compositore</div>
            </div>
            <div className="footer-contatti">
              <div className="footer-contatti-titolo">Contatti</div>
              <a href="mailto:donedduc@gmail.com" className="footer-email">donedduc@gmail.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© {new Date().getFullYear()} Carlo Doneddu</span>
            <span className="footer-copy">Sardegna · Barcellona · Berlino</span>
          </div>
        </div>
      </footer>
    </>
  )
}
