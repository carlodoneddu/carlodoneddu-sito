export default function Footer() {
  return (
    <>
      <style>{`
        footer {
          background: #050505;
          border-top: 1px solid #1a1a1a;
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
          color: #f5f2eb;
        }
        .footer-ruolo {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #444;
          margin-top: 0.3rem;
        }
        .footer-contatti {
          text-align: right;
        }
        .footer-contatti-titolo {
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 0.8rem;
        }
        .footer-email {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: #c9a84c;
          transition: color 0.3s;
        }
        .footer-email:hover { color: #f5f2eb; }
        .footer-bottom {
          border-top: 1px solid #1a1a1a;
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-copy {
          font-size: 0.7rem;
          color: #333;
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
