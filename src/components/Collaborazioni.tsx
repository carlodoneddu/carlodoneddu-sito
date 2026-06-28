'use client'

const collaborazioniDefault = [
  { _id: '1', titolo: 'Vanessa Bissiri', sottotitolo: 'Empatica', descrizione: "Album Empatica (Segell Microscopi, 2023). Festival Forma e Poesia nel Jazz — Teatro Massimo di Cagliari, 2025.", formazione: 'Chitarra', youtubeId: 'a5D9eKhHnbc' },
  { _id: '2', titolo: 'Manuel Attanasio', sottotitolo: 'Opodiptera', descrizione: 'Opodiptera (Tronos Digital, 2025). Con Peppino Anfossi. Teatro Civico di Sassari, maggio 2025.', formazione: 'Chitarra classica ed elettrica', youtubeId: 'bEC6jWd6M3s' },
  { _id: '3', titolo: 'Federico Marras Perantoni', sottotitolo: 'Canzoni di Mari', descrizione: "Cantautore e poeta di Porto Torres. Canta in lingua turritana. Canzoni di Mari (Tronos Digital, 2021).", formazione: 'Chitarra', youtubeId: 'hkx-k8py6DI' },
  { _id: '4', titolo: "Fior de' Limone", sottotitolo: 'Tributo a Gabriella Ferri', descrizione: "Concerto-spettacolo che attraversa il repertorio di Gabriella Ferri. Festival Abbabula 2024 e Cala d'Ambra Music Festival 2025.", formazione: 'con Silvia Pilia · Federico Marras Perantoni · Paolo Zuddas · Alessandro Zolo' },
]

function VideoEmbed({ youtubeId }: { youtubeId?: string }) {
  if (!youtubeId) return null
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '1.5rem' }}>
      <iframe src={`https://www.youtube.com/embed/${youtubeId}`} title="Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
  )
}

export default function Collaborazioni({ data }: { data: any[] }) {
  const collab = data?.length ? data : collaborazioniDefault
  return (
    <section id="collaborazioni" style={{ background: 'var(--sfondo-alt)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="sezione-titolo">Collaborazioni</h2>
        <div className="sezione-linea" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {collab.map(c => (
            <div key={c._id} style={{ background: 'var(--sfondo-alt)', padding: '2rem', borderLeft: '2px solid rgba(201,168,76,0.2)' }}>
              <VideoEmbed youtubeId={c.youtubeId} />
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--testo)', marginBottom: '0.2rem' }}>{c.titolo}</h3>
              {c.sottotitolo && <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--oro)', marginBottom: '1rem' }}>{c.sottotitolo}</p>}
              {c.descrizione && <p style={{ fontSize: '0.88rem', color: 'var(--testo-medio)', lineHeight: 1.7, marginBottom: '1rem' }}>{c.descrizione}</p>}
              {c.formazione && <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--testo-chiaro)', fontStyle: 'italic' }}>{c.formazione}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}