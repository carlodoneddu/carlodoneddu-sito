export default function Footer() {
  return (
    <footer id="contatti" style={{ background: 'var(--sfondo-alt)', borderTop: '1px solid rgba(0,0,0,0.1)', padding: '5rem 0 2.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, color: 'var(--testo)', marginBottom: '0.4rem' }}>Carlo Doneddu</div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--testo-chiaro)' }}>Cantautore · Chitarrista · Compositore</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--testo-chiaro)', marginBottom: '1rem' }}>Contatti</div>
            <a href="mailto:donedduc@gmail.com" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: 'var(--testo)', textDecoration: 'none', display: 'block', marginBottom: '0.3rem' }}>donedduc@gmail.com</a>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--testo-chiaro)', marginBottom: '1.2rem' }}>Seguimi</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="https://www.youtube.com/@carlodoneddu" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--testo)', textDecoration: 'none', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                YouTube
              </a>
              <a href="https://www.facebook.com/donedduc/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--testo)', textDecoration: 'none', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.4l-.5 3.5h-2.8V24C19.6 23 24 18.1 24 12.1z"/></svg>
                Facebook
              </a>
              <a href="https://www.instagram.com/carlodoneddu/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--testo)', textDecoration: 'none', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--testo-chiaro)', letterSpacing: '0.1em' }}>© {new Date().getFullYear()} Carlo Doneddu</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--testo-chiaro)', letterSpacing: '0.1em' }}>Sardegna · Barcellona · Berlino</span>
        </div>
      </div>
    </footer>
  )
}