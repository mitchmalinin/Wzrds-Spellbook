import { FC } from "react"
import { fetchArtist } from "../api/fetchArtist"
interface IArtistPageProps {
  params: {
    artistId: string
  }
}

const ArtistPage: FC<IArtistPageProps> = async ({ params }) => {
  const scrapedArtistProfile = await fetchArtist("uczine")

  console.log("scraped artist profile", scrapedArtistProfile)

  return <div className="">{params.artistId}</div>
}

export default ArtistPage
