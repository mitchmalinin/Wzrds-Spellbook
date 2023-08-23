import Dashboard from "@/components/sections/dashboard"
import { fetchArtists } from "@/utils/fetchArtists"

export default async function Home() {
  const { artists, artistStyles } = await fetchArtists()

  return (
    <main className="bg-gray-50 dark:bg-gray-700 min-h-screen p-4">
      <Dashboard artists={artists} artistsStyles={artistStyles} />
    </main>
  )
}
