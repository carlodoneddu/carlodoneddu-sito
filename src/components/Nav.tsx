'use client'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#bio', label: 'Bio' },
    { href: '#nuovo-disco', label: 'Nuovo Disco' },
    { href: '#progetti', label: 'Progetti' },
    { href: '#collaborazioni', label: 'Collaborazioni' },
    { href: '#discografia', label: 'Discografia' },
    { href: '#concerti', label: 'Concerti' },
    { href: '#contatti', label: 'Contatti' },
  ]
  return (
    <>
      <style>{`
        nav { width: 100%; padding: 1.2rem 2rem; display: flex; justify-content: space-between; align-items: center; background: var(--sfondo); border-bottom: 1px solid rgba(0,0,0,0.08); }
        .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1rem; letter-spacing: 0.22em; color: var(--testo); text-transform: uppercase; }
        .nav-links { display: flex; gap: 1.5rem; list-style: none; }
        .nav-links a { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--testo-medio); transition: color 0.3s; }
        .nav-links a:hover { color: var(--oro); }
        .nav-burger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .nav-burger span { display: block; width: 24px; height: 1px; background: var(--testo); }
        .nav-mobile { display: none; position: fixed; inset: 0; background: rgba(26,37,48,0.97); z-index: 99; flex-direction: column; align-items: center; justify-content: center; gap: 2.5rem; }
        .nav-mobile.open { display: flex; }
        .nav-mobile a { font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #e0e6ea; letter-spacing: 0.1em; }
        .nav-mobile a:hover { color: var(--oro); }
        @media (max-width: 768px) { .nav-links { display: none; } .nav-burger { display: flex; } }
      `}</style>
      <nav>
        <span className="nav-logo">Carlo Doneddu</span>
        <ul className="nav-links">
          {links.map(l => (<li key={l.href}><a href={l.href}>{l.label}</a></li>))}
        </ul>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (<a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>))}
      </div>
    </>
  )
}