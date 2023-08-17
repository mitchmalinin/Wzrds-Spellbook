"use client"

import { Artist } from "@/app/types"
import { FC } from "react"
import { ArtistCard } from "../artist/artistCard"
interface IFeaturedProps {
  artists: Artist[]
}

export const Featured: FC<IFeaturedProps> = ({ artists }) => {
  const filteredArtists = artists
    .sort((artist1, artist2) =>
      artist1.time_added > artist2.time_added
        ? -1
        : artist1.time_added < artist2.time_added
        ? 1
        : 0
    )
    .slice(0, 4)

  return (
    <div className="grid gap-4">
      <span className="font-bold text-xl">Fresh Finds 🔥</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredArtists.map((artistDetails) => (
          <ArtistCard key={artistDetails.id} artistDetails={artistDetails} />
        ))}
      </div>
    </div>
  )
}
