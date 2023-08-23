import { Artist, MultiSelectOption } from "@/types"
import { FC, useState } from "react"
import { ArtistCard } from "../artistCard"
import { ArtistCardSkeleton } from "../artistCard/artistCardSkeleton"

interface IArtistsProps {
  artists?: Artist[]
  loading?: boolean
}

export const Artists: FC<IArtistsProps> = ({ artists = [], loading }) => {
  return (
    <div className="grid gap-4">
      <span className="font-bold text-xl">Filtered Artists</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {loading ? (
          Array(10)
            .fill(null)
            .map((_, index) => <ArtistCardSkeleton key={index} />)
        ) : artists.length > 0 ? (
          artists.map((artistDetails) => (
            <ArtistCard key={artistDetails.id} artistDetails={artistDetails} />
          ))
        ) : (
          <div className="">No artists with that tag yet...</div>
        )}
      </div>
    </div>
  )
}
