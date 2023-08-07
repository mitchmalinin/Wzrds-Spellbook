"use client"

import { useEffect, useState } from "react"
import { Featured } from "./components/sections/featured"
import { Artist } from "./types"

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([])

  useEffect(() => {
    //TODO: make the sort by created time work
    try {
      const fetchArtistsFromNotion = async () => {
        const returnedArtists = await (
          await fetch("http://localhost:3000/api/notion", {
            next: { revalidate: 3600 },
          })
        ).json()
        setArtists(
          returnedArtists.sort((artist1: Artist, artist2: Artist) =>
            artist1.time_added.created_time > artist2.time_added.created_time
              ? 1
              : artist1.time_added.created_time <
                artist2.time_added.created_time
              ? -1
              : 0
          )
        )
      }
      fetchArtistsFromNotion()
    } catch (err) {
      console.log("error", err)
    }
  }, [])

  return (
    <main className="bg-gray-50 dark:bg-gray-700 min-h-screen p-4">
      test
      <Featured artists={artists} />
    </main>
  )
}
