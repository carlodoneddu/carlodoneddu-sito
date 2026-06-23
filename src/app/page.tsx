import { client, bioQuery, progettiAttiviQuery, progettiPassatiQuery, collaborazioniQuery, nuovoDiscoQuery, concertiQuery, urlFor } from '../lib/sanity'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import NuovoDisco from '../components/NuovoDisco'
import Progetti from '../components/Progetti'
import Collaborazioni from '../components/Collaborazioni'
import Concerti from '../components/Concerti'
import Footer from '../components/Footer'

export const revalidate = 60

const siteSettingsQuery = `*[_type == "siteSettings"][0]{ heroImmagine }`

async function getData() {
  try {
    const [bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti, siteSettings] = await Promise.all([
      client.fetch(bioQuery),
      client.fetch(progettiAttiviQuery),
      client.fetch(progettiPassatiQuery),
      client.fetch(collaborazioniQuery),
      client.fetch(nuovoDiscoQuery),
      client.fetch(concertiQuery),
      client.fetch(siteSettingsQuery),
    ])
    return { bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti, siteSettings }
  } catch {
    return { bio: null, progettiAttivi: [], progettiPassati: [], collaborazioni: [], nuovoDisco: null, concerti: [], siteSettings: null }
  }
}

export default async function Home() {
  const { bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti, siteSettings } = await getData()

  const heroImageUrl = siteSettings?.heroImmagine
    ? urlFor(siteSettings.heroImmagine).width(1920).quality(85).url()
    : null

  return (
    <>
      <Nav />
      <main>
        <Hero heroImage={heroImageUrl} />
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
