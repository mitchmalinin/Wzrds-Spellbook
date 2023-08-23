import { Artist } from "@/types"
import { FC } from "react"
import { ArtistCard } from "../artistCard"
import { ArtistCardSkeleton } from "../artistCard/artistCardSkeleton"
interface IFeaturedProps {
  artists?: Artist[]
  loading?: boolean
}

export const Featured: FC<IFeaturedProps> = ({ artists = [], loading }) => {
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
        {loading
          ? Array(4)
              .fill(null)
              .map((_, index) => <ArtistCardSkeleton key={index} />)
          : filteredArtists.map((artistDetails) => (
              <ArtistCard
                key={artistDetails.id}
                artistDetails={artistDetails}
              />
            ))}
      </div>
    </div>
  )
}
