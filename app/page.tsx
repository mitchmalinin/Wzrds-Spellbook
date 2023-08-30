import { fetchArtists } from "@/app/api/fetchArtists"
import Dashboard from "@/components/sections/dashboard"

export default async function Home() {
  const { artists, artistStyles } = await fetchArtists()
  return (
    <main>
      <Dashboard artists={artists} artistsStyles={artistStyles} />
    </main>
  )
}
