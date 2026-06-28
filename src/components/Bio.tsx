import Image from 'next/image'
import { urlFor } from '../lib/sanity'

export default function Bio({ data }: { data: any }) {
  const testo = data?.testo || `Carlo Doneddu è cantautore, chitarrista e compositore. Nato in Sardegna, ha costruito nel tempo un percorso artistico che attraversa la canzone d'autore, la musica da camera, il teatro musicale e la composizione per il cinema.\n\nIl suo lavoro si muove lungo l'asse Sardegna – Barcellona – Berlino, intrecciando radici mediterranee e ricerca contemporanea.\n\nFondatore dei Figli di Iubal, porta oggi avanti il Concerto Degenerativo — una ricerca continua tra scrittura, improvvisazione e performance.`

  return (
    <>
      <style>{`
        .bio { background: var(--sfondo); }
        .bio-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .bio-foto { position: relative; aspect-ratio: 3/4; overflow: hidden; }
        .bio-foto::after { content: ''; position: absolute; inset: 0; border: 1px solid rgba(201,168,76,0.3); pointer-events: none; }
        .bio-foto-placeholder { width: 100%; height: 100%; background: var(--sfondo-alt); display: flex; align-items: center; justify-content: center; color: var(--testo-chiaro); font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; }
        .bio-testo p { font-size: 1.05rem; line-height: 1.85; color: var(--testo-medio); margin-bottom: 1.5rem; }
        .bio-testo p:first-of-type { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: var(--testo); line-height: 1.5; }
        @media (max-width: 768px) { .bio-inner { grid-template-columns: 1fr; gap: 3rem; } .bio-foto { aspect-ratio: 1/1; max-width: 320px; } }
      `}</style>
      <section className="bio" id="bio" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h2 className="sezione-titolo">Bio</h2>
            <img src="https://cdn.sanity.io/images/5qfj2coi/production/6985a8f37369fb7929c5076ee2b609095a4ec533-1920x1860.png" alt="" style={{ width: 90, height: 'auto', marginLeft: '1rem', filter: 'drop-shadow(1px 2px 6px rgba(0,0,0,0.12))', transform: 'rotate(-4deg)' }} />
          </div>
          <div className="sezione-linea" />
          <div className="bio-inner">
            <div className="bio-foto">
              {data?.foto ? (
                <Image src={urlFor(data.foto).width(600).url()} alt="Carlo Doneddu" fill style={{ objectFit: 'cover' }} />
              ) : (
                <div className="bio-foto-placeholder">Foto</div>
              )}
            </div>
            <div className="bio-testo">
              {testo.split('\n\n').map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}