import Image from 'next/image'
import { urlFor } from '../lib/sanity'

function ProgettoCard({ p }: { p: any }) {
  return (
    <>
      <style>{`
        .progetto-card {
          border: 1px solid rgba(201,168,76,0.2);
          padding: 2rem;
          transition: border-color 0.3s, box-shadow 0.3s;
          background: var(--sfondo);
        }
        .progetto-card:hover {
          border-color: rgba(201,168,76,0.5);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .progetto-card-img {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          margin-bottom: 1.5rem;
          background: var(--sfondo-alt);
        }
        .progetto-titolo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 300;
          color: var(--testo);
          margin-bottom: 0.3rem;
        }
        .progetto-sottotitolo {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--oro);
          margin-bottom: 1rem;
        }
        .progetto-desc {
          font-size: 0.9rem;
          color: var(--testo-medio);
          line-height: 1.7;
        }
        .progetto-formazioni {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .formazione-tag {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--testo-chiaro);
          border: 1px solid rgba(0,0,0,0.15);
          padding: 0.2rem 0.6rem;
        }
      `}</style>
      <div className="progetto-card">
        {p.immagine && (
          <div className="progetto-card-img">
            <Image src={urlFor(p.immagine).width(600).url()} alt={p.titolo} width={600} height={338} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
        )}
        <h3 className="progetto-titolo">{p.titolo}</h3>
        {p.sottotitolo && <p className="progetto-sottotitolo">{p.sottotitolo}</p>}
        {p.descrizione && <p className="progetto-desc">{p.descrizione}</p>}
        {p.formazioni && p.formazioni.length > 0 && (
          <div className="progetto-formazioni">
            {p.formazioni.map((f: string) => (
              <span key={f} className="formazione-tag">{f}</span>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const progettiAttiviDefault = [
  { _id: '1', titolo: 'Concerto Degenerativo', sottotitolo: 'in solo · duo · trio · quartetto', descrizione: 'Il Concerto Degenerativo unisce musica strumentale, forma canzone e performance improvvisativa. Si declina in formazioni diverse adattandosi allo spazio e al contesto.', formazioni: ['Solo', 'Duo', 'Trio', 'Quartetto'] },
  { _id: '2', titolo: 'La Buona Novella', sottotitolo: "dall'opera di Fabrizio De André", descrizione: 'Con l\'Ensemble Laborintus e il coro della Polifonica Santa Cecilia di Sassari. Dal 2008 una produzione che attraversa i più importanti palchi della Sardegna.' },
]

const progettiPassatiDefault = [
  { _id: '3', titolo: 'Figli di Iubal', sottotitolo: '2002 – 2014', descrizione: 'Primo grande progetto cantautorale. Due album: Figli di Iubal (2003) e Un anno sull\'altipiano – Opera da due soldi (2006). Premio Tenco 2014.' },
  { _id: '4', titolo: 'Carraioru Social Band', sottotitolo: 'World music · Festival Abbabula', descrizione: 'Omaggio alla canzone tradizionale sassarese reinterpretata con apporti stilistici eterogenei.' },
  { _id: '5', titolo: 'Un anno sull\'altipiano', sottotitolo: 'Opera da due soldi', descrizione: 'Concept album antimilitarista ispirato al romanzo di Emilio Lussu. Premio Tenco 2014.' },
  { _id: '6', titolo: 'Nuar', sottotitolo: 'Rock · Barcellona', descrizione: '' },
  { _id: '7', titolo: 'Gatticattivi', sottotitolo: 'Duo di chitarre classiche', descrizione: '' },
  { _id: '8', titolo: 'Omaggio a Mercedes Sosa', sottotitolo: 'con Andrea Lubino', descrizione: '' },
]

export default function Progetti({ attivi, passati }: { attivi: any[], passati: any[] }) {
  const progettiAttivi = attivi?.length ? attivi : progettiAttiviDefault
  const progettiPassati = passati?.length ? passati : progettiPassatiDefault

  return (
    <>
      <style>{`
        .progetti { background: var(--sfondo); }
        .progetti-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 5rem;
        }
        .sottosezione-titolo {
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--testo-chiaro);
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        .passati-lista {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1px;
          background: rgba(0,0,0,0.08);
          margin-bottom: 5rem;
        }
        .passato-item {
          background: var(--sfondo);
          padding: 1.5rem;
          transition: background 0.3s;
        }
        .passato-item:hover { background: var(--sfondo-alt); }
        .passato-titolo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          color: var(--testo);
          margin-bottom: 0.2rem;
        }
        .passato-sottotitolo {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--testo-chiaro);
          margin-bottom: 0.5rem;
        }
        .passato-desc {
          font-size: 0.85rem;
          color: var(--testo-medio);
          line-height: 1.6;
        }
      `}</style>

      <section className="progetti" id="progetti">
        <div className="container">
          <h2 className="sezione-titolo">Progetti</h2>
          <div className="sezione-linea" />
          <p className="sottosezione-titolo">Progetti attivi</p>
          <div className="progetti-grid">
            {progettiAttivi.map(p => <ProgettoCard key={p._id} p={p} />)}
          </div>
          <p className="sottosezione-titolo">Progetti passati</p>
          <div className="passati-lista">
            {progettiPassati.map(p => (
              <div key={p._id} className="passato-item">
                <h3 className="passato-titolo">{p.titolo}</h3>
                {p.sottotitolo && <p className="passato-sottotitolo">{p.sottotitolo}</p>}
                {p.descrizione && <p className="passato-desc">{p.descrizione}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
