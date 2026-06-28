import type { Metadata } from 'next'
import '../styles/globals.css'
import Stickers from '../components/Stickers'

export const metadata: Metadata = {
  title: 'Carlo Doneddu — Cantautore, Chitarrista, Compositore',
  description: 'Sito ufficiale di Carlo Doneddu, cantautore, chitarrista e compositore sardo.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Stickers />
        {children}
      </body>
    </html>
  )
}