import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Carlo Doneddu — Cantautore, Chitarrista, Compositore',
  description: 'Sito ufficiale di Carlo Doneddu, cantautore, chitarrista e compositore sardo.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}