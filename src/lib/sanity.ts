import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '5qfj2coi',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}

export const bioQuery = `*[_type == "bio"][0]{ nome, sottotitolo, testo, foto }`

export const progettiAttiviQuery = `*[_type == "progetto" && categoria == "attivo"] | order(ordine asc) { _id, titolo, sottotitolo, descrizione, formazioni, immagine }`

export const progettiPassatiQuery = `*[_type == "progetto" && categoria == "passato"] | order(ordine asc) { _id, titolo, sottotitolo, descrizione, immagine }`

export const collaborazioniQuery = `*[_type == "progetto" && categoria == "collaborazione"] | order(ordine asc) { _id, titolo, sottotitolo, descrizione, formazione, immagine }`

export const nuovoDiscoQuery = `*[_type == "nuovoDisco"][0]{ titolo, testo, dataUscita, immagine }`

export const concertiQuery = `*[_type == "concerto"] | order(data asc) { _id, titolo, luogo, citta, data, link }`
