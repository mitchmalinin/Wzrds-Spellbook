"use client"

import { Artist } from "@/app/types"
import { FC } from "react"
interface IArtistCardProps {
  artistDetails: Artist
}

export const ArtistCard: FC<IArtistCardProps> = ({ artistDetails }) => {
  return (
    <div className="flex p-4 rounded-md bg-gray-500 text-black dark:text-white min-h-[200px]">
      <h2> {artistDetails.username.formula.string}</h2>
    </div>
  )
}
