export default function NuovoDisco({ data }: { data: any }) {
  const titolo = data?.titolo || 'Nuovo Disco'
  const testo = data?.testo || "Un nuovo capitolo è in preparazione. Un lavoro che attraversa la canzone d'autore, le radici sarde e il paesaggio sonoro contemporaneo. Presto disponibile."

  return (
    <section id="nuovo-disco" style={{ background: 'var(--sfondo-alt)', borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#cc1212', border: '1px solid rgba(204,18,18,0.4)', padding: '0.4rem 1.2rem', marginBottom: '2.5rem', display: 'inline-block' }}>
            In arrivo
          </span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--testo)', marginBottom: '1.5rem' }}>
            {titolo}
          </h2>
          <p style={{ color: 'var(--testo-medio)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            {testo}
          </p>
          {data?.dataUscita && (
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--testo-chiaro)' }}>
              Uscita prevista: {data.dataUscita}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
