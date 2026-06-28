'use client'
export default function Concerti({ data }: { data: any[] }) {
  const concerti = data?.length ? data : []
  return (
    <section id="concerti" style={{ background: 'var(--sfondo)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="sezione-titolo">Concerti</h2>
        <div className="sezione-linea" />
        <div style={{ maxWidth: '800px' }}>
          {concerti.length === 0 ? (
            <p style={{ color: 'var(--testo-chiaro)', fontStyle: 'italic', fontSize: '1rem' }}>Nuove date in arrivo.</p>
          ) : (
            concerti.map((c: any) => {
              const d = new Date(c.data)
              return (
                <div key={c._id} style={{ display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: '2rem', alignItems: 'center', padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: 'var(--oro)', lineHeight: 1 }}>{d.getDate()}</div>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--testo-chiaro)', marginTop: '0.2rem' }}>{d.toLocaleString('it', { month: 'long' })} {d.getFullYear()}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: 'var(--testo)', marginBottom: '0.3rem' }}>{c.titolo}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--testo-chiaro)', letterSpacing: '0.05em' }}>{c.luogo}{c.luogo && c.citta ? ' — ' : ''}{c.citta}</div>
                  </div>
                  {c.link && <a href={c.link} target="_blank" rel="noopener" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--oro)', border: '1px solid rgba(201,168,76,0.4)', padding: '0.4rem 1rem' }}>Info</a>}
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}