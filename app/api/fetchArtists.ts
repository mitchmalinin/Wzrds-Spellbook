import { Artist, MultiSelectOption } from "@/types"

export const fetchArtists = async (): Promise<{
  artists: Artist[]
  artistStyles: MultiSelectOption[]
}> => {
  const {
    artists,
    artistStyles,
  }: { artists: Artist[]; artistStyles: MultiSelectOption[] } = await (
    await fetch("http://localhost:3000/api/notion", {
      next: { revalidate: 3600 },
    })
  ).json()
  return { artists, artistStyles }
}
