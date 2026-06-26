export default function NuovoDisco({ data }: { data: any }) {
  return (
    <>
      <style>{`
        .nuovo-disco {
          background: var(--sfondo-alt);
          border-top: 1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .disco-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 680px;
          margin: 0 auto;
        }
        .disco-badge {
          display: inline-block;
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #cc1212;
          border: 1px solid rgba(204,18,18,0.4);
          padding: 0.4rem 1.2rem;
          margin-bottom: 2.5rem;
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { border-color: rgba(204,18,18,0.3); }
          50% { border-color: rgba(204,18,18,0.8); }
        }
        .disco-titolo {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: var(--testo);
          margin-bottom: 1.5rem;
        }
        .disco-testo {
          color: var(--testo-medio);
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }
        .disco-data {
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--testo-chiaro);
        }
      `}</style>

      <section className="nuovo-disco"
