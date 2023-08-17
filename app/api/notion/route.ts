import { Artist, ArtistStyles } from "@/app/types"
import { ARTIST_STYLES_ID } from "@/contants"
import { Client } from "@notionhq/client"
import { NextResponse } from "next/server"

const notionSecret = process.env.NOTION_API_KEY
const notionDBId = process.env.NOTION_DB_ID

export async function GET() {
  if (!notionDBId || !notionSecret)
    throw new Error("Notion connection not working")

  const notion = new Client({ auth: notionSecret })

  const query = await notion.databases.query({
    database_id: notionDBId,
  })

  const dataBaseOptions = await notion.databases.retrieve({
    database_id: notionDBId,
  })

  const artistStyles = (dataBaseOptions.properties["art_style"] as ArtistStyles)
    .multi_select.options

  const artistInfo = query.results
    .map((res) => {
      //@ts-ignore
      return { ...res.properties, id: res.id }
    })
    .filter((artist: Artist) => artist.publish.checkbox) as Artist[]

  return NextResponse.json({ artistInfo, artistStyles })
}
