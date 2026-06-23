export default function NuovoDisco({ data }: { data: any }) {
  return (
    <>
      <style>{`
        .nuovo-disco {
          background: #0d0d0d;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
        }
        .disco-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 680px;
          margin: 0 auto;
        }
        .disco-badge {
          display: inline-block;
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #c9a84c;
          border: 1px solid rgba(201,168,76,0.3);
          padding: 0.4rem 1.2rem;
          margin-bottom: 2.5rem;
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { border-color: rgba(201,168,76,0.3); }
          50% { border-color: rgba(201,168,76,0.7); }
        }
        .disco-titolo {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: #f5f2eb;
          margin-bottom: 1.5rem;
        }
        .disco-testo {
          color: #888;
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }
        .disco-data {
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #555;
        }
      `}</style>

      <section className="nuovo-disco" id="nuovo-disco">
        <div className="container">
          <div className="disco-inner">
            <span className="disco-badge">In arrivo</span>
            <h2 className="disco-titolo">
              {data?.titolo || 'Nuovo Disco'}
            </h2>
            <p className="disco-testo">
              {data?.testo || 'Un nuovo capitolo è in preparazione. Un lavoro che attraversa la canzone d\'autore, le radici sarde e il paesaggio sonoro contemporaneo. Presto disponibile.'}
            </p>
            {data?.dataUscita && (
              <p className="disco-data">Uscita prevista: {data.dataUscita}</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
