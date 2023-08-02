"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return <main className="bg-gray-50 dark:bg-gray-700 min-h-screen">Test</main>
}
