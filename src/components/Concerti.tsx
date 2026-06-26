export default function Concerti({ data }: { data: any[] }) {
  const concerti = data?.length ? data : []

  return (
    <>
      <style>{`
        .concerti { background: var(--sfondo); }
        .concerti-lista { max-width: 700px; }
        .concerto-item {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 1.5rem;
          align-items: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          transition: opacity 0.3s;
        }
        .concerto-item:hover { opacity: 0.7; }
        .concerto-data { text-align: center; }
        .concerto-data-giorno {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: var(--oro);
          line-height: 1;
        }
        .concerto-data-mese {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--testo-chiaro);
        }
        .concerto-titolo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: var(--testo);
          margin-bottom: 0.2rem;
        }
        .concerto-luogo {
          font-size: 0.75rem;
          color: var(--testo-chiaro);
          letter-spacing: 0.05em;
        }
        .concerto-link {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--oro);
          border: 1px solid rgba(201,168,76,0.4);
          padding: 0.3rem 0.8rem;
          transition: border-color 0.3s;
        }
        .concerto-link:hover { border-color: var(--oro); }
        .concerti-vuoti {
          color: var(--testo-chiaro);
          font-style: italic;
          font-size: 0.9rem;
        }
        @media (max-width: 600px) {
          .concerto-item { grid-template-columns: 60px 1fr; }
          .concerto-link { display: none; }
        }
      `}</style>

      <section className="concerti" id="concerti">
        <div className="container">
          <h2 className="sezione-titolo">Concerti</h2>
          <div className="sezione-linea" />
          <div className="concerti-lista">
            {concerti.length === 0 ? (
              <p className="concerti-vuoti">Nuove date in arrivo.</p>
            ) : (
              concerti.map((c: any) => {
                const d = new Date(c.data)
                return (
                  <div key={c._id} className="concerto-item">
                    <div className="concerto-data">
                      <div className="concerto-data-giorno">{d.getDate()}</div>
                      <div className="concerto-data-mese">{d.toLocaleString('it', { month: 'short' })} {d.getFullYear()}</div>
                    </div>
                    <div>
                      <div className="concerto-titolo">{c.titolo}</div>
                      <div className="concerto-luogo">{c.luogo} — {c.citta}</div>
                    </div>
                    {c.link && <a href={c.link} target="_blank" rel="noopener" className="concerto-link">Info</a>}
                  </div>
                )
              })
            )}
          </div>
        </div>
      </section>
    </>
  )
}
