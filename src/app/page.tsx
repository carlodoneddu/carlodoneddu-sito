import { client, bioQuery, progettiAttiviQuery, progettiPassatiQuery, collaborazioniQuery, nuovoDiscoQuery, concertiQuery, urlFor } from '../lib/sanity'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import NuovoDisco from '../components/NuovoDisco'
import Progetti from '../components/Progetti'
import Collaborazioni from '../components/Collaborazioni'
import Discografia from '../components/Discografia'
import Concerti from '../components/Concerti'
import Footer from '../components/Footer'

export const revalidate = 60

const siteSettingsQuery = `*[_type == "siteSettings"][0]{ heroImmagine }`
const discografiaQuery = `*[_type == "disco"] | order(ordine asc) { _id, titolo, anno, link, copertina{ asset->{ _id, url } } }`

async function getData() {
  try {
    const [bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti, siteSettings, discografia] = await Promise.all([
      client.fetch(bioQuery),
      client.fetch(progettiAttiviQuery),
      client.fetch(progettiPassatiQuery),
      client.fetch(collaborazioniQuery),
      client.fetch(nuovoDiscoQuery),
      client.fetch(concertiQuery),
      client.fetch(siteSettingsQuery),
      client.fetch(discografiaQuery),
    ])
    return { bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti, siteSettings, discografia }
  } catch {
    return { bio: null, progettiAttivi: [], progettiPassati: [], collaborazioni: [], nuovoDisco: null, concerti: [], siteSettings: null, discografia: [] }
  }
}

export default async function Home() {
  const { bio, progettiAttivi, progettiPassati, collaborazioni, nuovoDisco, concerti, siteSettings, discografia } = await getData()
  const heroImageUrl = siteSettings?.heroImmagine
    ? urlFor(siteSettings.heroImmagine).width(1920).quality(85).url()
    : undefined
  return (
    <>
      <Nav />
      <main>
        <Hero heroImage={heroImageUrl} />
        <Bio data={bio} />
        <NuovoDisco data={nuovoDisco} />
        <Progetti attivi={progettiAttivi} passati={progettiPassati} />
        <Collaborazioni data={collaborazioni} />
        <Discografia data={discografia} />
        <Concerti data={concerti} />
      </main>
      <Footer />
    </>
  )
}