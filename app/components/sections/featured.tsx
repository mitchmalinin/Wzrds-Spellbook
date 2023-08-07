"use client"

import { Artist } from "@/app/types"
import { FC } from "react"
import { ArtistCard } from "../artist/ArtistCard"
interface IFeaturedProps {
  artists: Artist[]
}

export const Featured: FC<IFeaturedProps> = ({ artists }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {artists.slice(0, 5).map((artistDetails) => (
        <ArtistCard key={artistDetails.id} artistDetails={artistDetails} />
      ))}
    </div>
  )
}
