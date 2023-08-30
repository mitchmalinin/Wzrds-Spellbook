import { FetchedArtist } from "@/types"
import puppeteer from "puppeteer"

export const fetchArtist = async (username: string): Promise<FetchedArtist> => {
  if (!username) {
    throw new Error("Invalid username")
  }

  const URL = `https://twitter.com/${username}`

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
    ],
  })
  const page = await browser.newPage()
  await page.goto(URL, { waitUntil: "networkidle0" })

  try {
    const userData = await page.evaluate(() => {
      const username = document
        .querySelector('[data-testid="UserName"]')
        ?.textContent?.split("@")[0]

      const followers = document
        .querySelector(`a[href*="/followers"]`)
        ?.textContent?.split("Followers")[0]
        .trim()

      return {
        username,
        followers,
      }
    })

    return userData
  } catch (error) {
    throw new Error("Failed to fetch artist data")
  }
}
