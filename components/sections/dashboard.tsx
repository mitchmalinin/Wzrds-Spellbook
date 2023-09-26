"use client"

import { Artist, MultiSelectOption } from "@/types"
import { FC, useEffect, useState } from "react"
import { Filter } from "../filter"
import { Artists } from "./artists"
import { Featured } from "./featured"

interface IDashboardProps {
  artists: Artist[]
  artistsStyles: MultiSelectOption[]
}

export const Dashboard: FC<IDashboardProps> = ({ artists, artistsStyles }) => {
  const [filter, setFilter] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("filter") || "all"
    }
    return "all"
  })
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([])

  useEffect(() => {
    if (filter === "all") {
      setFilteredArtists(artists)
      return
    }
    const foundFilteredArtists = artists.filter((artist) =>
      artist.art_style.multi_select.some((option) => option.name === filter)
    )
    setFilteredArtists(foundFilteredArtists)
  }, [filter, artists])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("filter", filter)
    }
  }, [filter])

  return (
    <main className="bg-gray-50 dark:bg-gray-700 min-h-screen p-4">
      <Featured artists={artists} />
      <Filter
        artistStyles={artistsStyles}
        setFilter={setFilter}
        filter={filter}
      />
      <Artists artists={filteredArtists} />
    </main>
  )
}

export default Dashboard
