import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css" // Import the CSS
import type { Metadata } from "next"

import { Inter } from "next/font/google"
import { Nav } from "../components/nav"
import { ThemeWrapper } from "../context/themeWrapper"
import "./globals.css"
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wzrd's SpellBook De' Artists",
  description: "An artist wiki on cool mfers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeWrapper>
          <div className="bg-gray-50 dark:bg-gray-700 min-h-screen p-4">
            <Nav />
            {children}
          </div>
        </ThemeWrapper>
      </body>
    </html>
  )
}
