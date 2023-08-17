"use client"

import { useEffect, useState } from "react"
import { Filter } from "./components/filter"
import { Featured } from "./components/sections/featured"
import { Artist, MultiSelectOption } from "./types"

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [artistsStyles, setArtistsStyles] = useState<MultiSelectOption[]>([])

  useEffect(() => {
    try {
      const fetchArtistsFromNotion = async () => {
        const {
          artistInfo,
          artistStyles,
        }: { artistInfo: Artist[]; artistStyles: MultiSelectOption[] } = await (
          await fetch("http://localhost:3000/api/notion", { cache: "no-store" })
        ).json()
        setArtists(artistInfo)
        setArtistsStyles(artistStyles)
      }
      fetchArtistsFromNotion()
    } catch (err) {
      console.log("error", err)
    }
  }, [])

  return (
    <main className="bg-gray-50 dark:bg-gray-700 min-h-screen p-4">
      <Featured artists={artists} />
      <Filter artistStyles={artistsStyles} />
    </main>
  )
}
