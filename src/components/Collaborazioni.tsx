const collaborazioniDefault = [
  {
    _id: '1',
    titolo: 'Vanessa Bissiri',
    sottotitolo: 'Empatica',
    descrizione: 'Cantante e artista multidisciplinare sarda. Album Empatica (Segell Microscopi, 2023), fonde pop d\'autore, jazz e atmosfere mediterranee. Duo presentato al festival Forma e Poesia nel Jazz — Teatro Massimo di Cagliari, 2025.',
    formazione: 'Chitarra'
  },
  {
    _id: '2',
    titolo: 'Manuel Attanasio',
    sottotitolo: 'Opodiptera',
    descrizione: 'Cantante e polistrumentista sassarese. Opodiptera (Tronos Digital, 2025), viaggio in dieci "terre" tra italiano, inglese e sassarese. Con Peppino Anfossi. Presentato al Teatro Civico di Sassari, maggio 2025.',
    formazione: 'Chitarra classica ed elettrica'
  },
  {
    _id: '3',
    titolo: 'Federico Marras Perantoni',
    sottotitolo: 'Canzoni di Mari',
    descrizione: 'Cantautore, poeta e artista multidisciplinare di Porto Torres. Canta in lingua turritana. Canzoni di Mari (Tronos Digital, 2021), viaggio piratesco nel Mediterraneo del Golfo dell\'Asinara.',
    formazione: 'Chitarra'
  },
  {
    _id: '4',
    titolo: 'Fior de\' Limone',
    sottotitolo: 'Tributo a Gabriella Ferri',
    descrizione: 'Concerto-spettacolo con Silvia Pilia, Federico Marras Perantoni, Paolo Zuddas, Alessandro Zolo. Presentato al Festival Abbabula 2024 e al Cala d\'Ambra Music Festival 2025.',
    formazione: 'con Silvia Pilia · Federico Marras Perantoni · Paolo Zuddas · Alessandro Zolo'
  },
]

export default function Collaborazioni({ data }: { data: any[] }) {
  const collab = data?.length ? data : collaborazioniDefault

  return (
    <>
      <style>{`
        .collaborazioni { background: #080808; }
        .collab-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2px;
          background: #151515;
        }
        .collab-item {
          background: #080808;
          padding: 2.5rem 2rem;
          transition: background 0.3s;
          position: relative;
        }
        .collab-item:hover { background: #0e0e0e; }
        .collab-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px;
          height: 0;
          background: #c9a84c;
          transition: height 0.4s ease;
        }
        .collab-item:hover::before { height: 100%; }
        .collab-titolo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #f5f2eb;
          margin-bottom: 0.2rem;
        }
        .collab-sottotitolo {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 1rem;
        }
        .collab-desc {
          font-size: 0.88rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .collab-formazione {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: #444;
          font-style: italic;
        }
      `}</style>

      <section className="collaborazioni" id="collaborazioni">
        <div className="container">
          <h2 className="sezione-titolo">Collaborazioni</h2>
          <div className="sezione-linea" />
          <div className="collab-grid">
            {collab.map(c => (
              <div key={c._id} className="collab-item">
                <h3 className="collab-titolo">{c.titolo}</h3>
                {c.sottotitolo && <p className="collab-sottotitolo">{c.sottotitolo}</p>}
                {c.descrizione && <p className="collab-desc">{c.descrizione}</p>}
                {c.formazione && <p className="collab-formazione">{c.formazione}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
