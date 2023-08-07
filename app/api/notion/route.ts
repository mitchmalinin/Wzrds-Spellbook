import { Artist } from "@/app/types"
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

  const artistInfo = query.results.map((res) => {
    //@ts-ignore
    return { ...res.properties, id: res.id }
  }) as Artist[]

  return NextResponse.json(artistInfo)
}
