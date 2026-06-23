import { client, bioQuery, progettiAttiviQuery, progettiPassatiQuery, collaborazioniQuery, nuovoDiscoQuery, concertiQuery } from '../lib/sanity'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import NuovoDisco from '../components/NuovoDisco'
import Progetti from '../components/Progetti'
import Collaborazioni from '../components/Collaborazioni'
import Concerti from '../components/Concerti'
import Footer from '../components/Footer'

export const revalidate = 60

async function getData() {
  try {
    const [bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti] = await Promise.all([
      client.fetch(bioQuery),
      client.fetch(progettiAttiviQuery),
      client.fetch(progettiPassatiQuery),
      client.fetch(collaborazioniQuery),
      client.fetch(nuovoDiscoQuery),
      client.fetch(concertiQuery),
    ])
    return { bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti }
  } catch {
    return { bio: null, progettiAttivi: [], progettiPassati: [], collaborazioni: [], nuovoDisco: null, concerti: [] }
  }
}

export default async function Home() {
  const { bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti } = await getData()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bio data={bio} />
        <NuovoDisco data={nuovoDisco} />
        <Progetti attivi={progettiAttivi} passati={progettiPassati} />
        <Collaborazioni data={collaborazioni} />
        <Concerti data={concerti} />
      </main>
      <Footer />
    </>
  )
}
