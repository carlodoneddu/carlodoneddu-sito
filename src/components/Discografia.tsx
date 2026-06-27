'use client'

const SANITY_PROJECT = '5qfj2coi';
const SANITY_DATASET = 'production';

function copertina(ref: string) {
  if (!ref) return null;
  const id = ref.replace('image-', '').replace(/-jpg$/, '').replace(/-png$/, '');
  const parts = id.split('-');
  const dims = parts[parts.length - 1];
  const hash = parts.slice(0, -1).join('-');
  return `https://cdn.sanity.io/images/${SANITY_PROJECT}/${SANITY_DATASET}/${hash}-${dims}.jpg`;
}

const discografiaDefault = [
  { _id: '1', titolo: "Le canzoni dell'estate", anno: '2014', link: 'https://bfan.link/le-canzoni-dell-estate', copertina: { asset: { _ref: 'image-8a047ab0c19126965cd488fde39faf899cf13d91-1401x1437-jpg' } } },
  { _id: '2', titolo: 'Figli di Iubal', anno: '2003', link: 'https://bfan.link/figli-di-iubal', copertina: { asset: { _ref: 'image-ea86129ef97dea516fa634a4a7ffff47d6fab8b3-726x744-jpg' } } },
  { _id: '3', titolo: "Un anno sull'altipiano - Opera da due soldi", anno: '2006', link: 'https://bfan.link/un-anno-sull-altipiano-opera-da-due-soldi', copertina: { asset: { _ref: 'image-0d70d81b3fe608cb2ef0b900f0142a4604de96c6-1485x1476-jpg' } } },
]

export default function Discografia({ data }: { data: any[] }) {
  const dischi = data?.length ? data : discografiaDefault
  return (
    <section id="discografia" style={{ background: 'var(--sfondo)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="sezione-titolo">Discografia</h2>
        <div className="sezione-linea" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {dischi.map(d => {
            const imgUrl = d.copertina?.asset?._ref ? copertina(d.copertina.asset._ref) : null;
            return (
              <a key={d._id} href={d.link} target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.2)', background: 'var(--sfondo)', overflow: 'hidden' }}>
                {imgUrl && (
                  <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img src={imgUrl} alt={d.titolo} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                )}
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--oro)', marginBottom: '0.5rem' }}>{d.anno}</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 300, color: 'var(--testo)', marginBottom: '1rem', lineHeight: 1.3 }}>{d.titolo}</h3>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--testo-chiaro)', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '2px' }}>
                    Ascolta →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  )
}