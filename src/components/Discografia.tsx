const discografiaDefault = [
  { _id: '1', titolo: "Le canzoni dell'estate", anno: '2014', link: 'https://bfan.link/le-canzoni-dell-estate' },
  { _id: '2', titolo: 'Figli di Iubal', anno: '2003', link: 'https://bfan.link/figli-di-iubal' },
  { _id: '3', titolo: "Un anno sull'altipiano - Opera da due soldi", anno: '2006', link: 'https://bfan.link/un-anno-sull-altipiano-opera-da-due-soldi' },
]

export default function Discografia({ data }: { data: any[] }) {
  const dischi = data?.length ? data : discografiaDefault
  return (
    <section id="discografia" style={{ background: 'var(--sfondo)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="sezione-titolo">Discografia</h2>
        <div className="sezione-linea" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {dischi.map(d => (
            <a key={d._id} href={d.link} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', padding: '2rem', border: '1px solid rgba(201,168,76,0.2)', background: 'var(--sfondo)', textDecoration: 'none', transition: 'border-color 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.6)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.2)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--oro)', marginBottom: '0.8rem' }}>{d.anno}</p>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300, color: 'var(--testo)', marginBottom: '1.5rem', lineHeight: 1.3 }}>{d.titolo}</h3>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--testo-chiaro)', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '2px' }}>
                Ascolta →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}