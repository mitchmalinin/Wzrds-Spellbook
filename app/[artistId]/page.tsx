import { FetchedArtist } from "@/types"
import { FC } from "react"
import { fetchArtist } from "../api/fetchArtist"
interface IArtistPageProps {
  params: {
    artistId: string
  }
}

const ArtistPage: FC<IArtistPageProps> = async ({ params }) => {
  const scrapedArtistProfile: FetchedArtist = await fetchArtist(params.artistId)

  return (
    <div>
      <div className="">{params.artistId}</div>
      <div>Followers: {scrapedArtistProfile?.followers}</div>
    </div>
  )
}

export default ArtistPage
