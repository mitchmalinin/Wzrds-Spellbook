import Image from "next/image"
import { Artist } from "./types"

const fetchFromNotion = async () =>
  await (
    await fetch("http://localhost:3000/api/notion", {
      next: { revalidate: 3600 },
    })
  ).json()

export default async function Home() {
  const artists: Artist[] = await fetchFromNotion()

  console.log("test 4", artists)
  return <main className="bg-gray-50 dark:bg-gray-700 min-h-screen">Test</main>
}
