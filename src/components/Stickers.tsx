'use client'
import { useEffect, useRef } from 'react'

const STICKERS = [
  { id: 'image-6985a8f37369fb7929c5076ee2b609095a4ec533-1920x1860-png', top: '8%',  left: '-3%',  size: 120, rotate: -12 },
  { id: 'image-4907023319272c8bcdcd5720c142e5ff6bf201de-1920x1279-png', top: '15%', right: '-2%', size: 140, rotate: 8  },
  { id: 'image-83f6f066f4af8929f8f27610ce96eecd4a0709d1-1920x1138-png', top: '35%', left: '-4%',  size: 160, rotate: 5  },
  { id: 'image-8ec8d0492e505b75516d1153fdf8f04572414575-1920x1279-png', top: '45%', right: '-3%', size: 130, rotate: -8 },
  { id: 'image-ec8d3708e66a1e20ec6e76af27b6067161dddb80-1920x1632-png', top: '62%', left: '-2%',  size: 150, rotate: 15 },
  { id: 'image-3817e41a943e9c004eaf95e368588ca7c82377a5-1920x1237-png', top: '72%', right: '-4%', size: 120, rotate: -5 },
  { id: 'image-d65af93372e0a05a302394899f3f974606caae91-1920x1289-jpg', top: '85%', left: '-3%',  size: 140, rotate: 10 },
]

function stickerUrl(id: string) {
  const clean = id.replace(/^image-/, '').replace(/-(png|jpg)$/, '')
  const parts = clean.split('-')
  const dims = parts[parts.length - 1]
  const hash = parts.slice(0, -1).join('-')
  const ext = id.endsWith('-jpg') ? 'jpg' : 'png'
  return `https://cdn.sanity.io/images/5qfj2coi/production/${hash}-${dims}.${ext}`
}

export default function Stickers() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      refs.current.forEach((el, i) => {
        if (!el) return
        const speed = (i % 3 === 0) ? 0.08 : (i % 3 === 1) ? 0.05 : 0.11
        el.style.transform = `translateY(${scrollY * speed}px) rotate(${STICKERS[i].rotate}deg)`
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {STICKERS.map((s, i) => (
        <div
          key={s.id}
          ref={el => { refs.current[i] = el }}
          style={{
            position: 'absolute',
            top: s.top,
            left: 'left' in s ? (s as any).left : undefined,
            right: 'right' in s ? (s as any).right : undefined,
            width: s.size,
            transform: `rotate(${s.rotate}deg)`,
            opacity: 0.55,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img
            src={stickerUrl(s.id)}
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.12))' }}
          />
        </div>
      ))}
    </div>
  )
}