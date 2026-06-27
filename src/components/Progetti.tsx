import Image from 'next/image'
import { urlFor } from '../lib/sanity'

function VideoEmbed({ youtubeId }: { youtubeId?: string }) {
  if (!youtubeId) return null
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '1.5rem' }}>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
  )
}

function ProgettoCard({ p }: { p: any }) {
  return (
    <div style={{ border: '1px solid rgba(201,168,76,0.2)', padding: '2rem', background: 'var(--sfondo)' }}>
      <VideoEmbed youtubeId={p.youtubeId} />
      {p.immagine && !p.youtubeId && (
        <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <Image src={urlFor(p.immagine).width(600).url()} alt={p.titolo} width={600} height={338} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
      )}
      <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 300, color: 'var(--testo)', marginBottom: '0.3rem' }}>{p.titolo}</h3>
      {p.sottotitolo && <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--oro)', marginBottom: '1rem' }}>{p.sottotitolo}</p>}
      {p.descrizione && <p style={{ fontSize: '0.9rem', color: 'var(--testo-medio)', lineHeight: 1.7 }}>{p.descrizione}</p>}
      {p.formazioni && p.formazioni.length > 0 && (
        <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {p.formazioni.map((f: string) => (
            <span key={f} style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--testo-chiaro)', border: '1px solid rgba(0,0,0,0.15)', padding: '0.2rem 0.6rem' }}>{f}</span>
          ))}
        </div>
      )}
    </div>
  )
}

const progettiAttiviDefault = [
  { _id: '1', titolo: 'Concerto Degenerativo', sottotitolo: 'in solo · duo · trio · quartetto', descrizione: 'Il Concerto Degenerativo unisce musica strumentale, forma canzone e performance improvvisativa.', formazioni: ['Solo','Duo','Trio','Quartetto'], youtubeId: 'mxLZVkNm4eY' },
  { _id: '2', titolo: 'La Buona Novella', sottotitolo: "dall'opera di Fabrizio De’ André", descrizione: "Con l'Ensemble Laborintus e il coro della Polifonica Santa Cecilia di Sassari.", youtubeId: '3TndNJ9iZPQ' },
]

const progettiPassatiDefault = [
  { _id: '3', titolo: 'Figli di Iubal', sottotitolo: '2002 – 2014', descrizione: "Premio Tenco 2014.", youtubeId: 'oyLknedCLWw' },
  { _id: '4', titolo: 'Carraioru Social Band', sottotitolo: 'World music', youtubeId: 'VEemZ-cgZG4' },
  { _id: '5', titolo: "Un anno sull'altipiano", sottotitolo: 'Opera da due soldi', youtubeId: 'cLeaRTWwqu8' },
  { _id: '6', titolo: 'Nuar', sottotitolo: 'Rock · Barcellona', youtubeId: 'Oj1TtEXIhaY' },
  { _id: '7', titolo: 'Gatticattivi', sottotitolo: 'Duo di chitarre classiche', youtubeId: 'VoZ2Mp19vPo' },
  { _id: '8', titolo: 'Omaggio a Mercedes Sosa', sottotitolo: 'con Andrea Lubino', youtubeId: 'wwCAzxuHE5E' },
]

export default function Progetti({ attivi, passati }: { attivi: any[], passati: any[] }) {
  const progettiAttivi = attivi?.length ? attivi : progettiAttiviDefault
  const progettiPassati = passati?.length ? passati : progettiPassatiDefault
  return (
    <section id="progetti" style={{ background: 'var(--sfondo)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="sezione-titolo">Progetti</h2>
        <div className="sezione-linea" />
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--testo-chiaro)', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Progetti attivi</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {progettiAttivi.map(p => <ProgettoCard key={p._id} p={p} />)}
        </div>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--testo-chiaro)', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Progetti passati</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {progettiPassati.map(p => <ProgettoCard key={p._id} p={p} />)}
        </div>
      </div>
    </section>
  )
}