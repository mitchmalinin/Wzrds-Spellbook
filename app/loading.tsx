import { Artists } from "@/components/sections/artists"
import { Featured } from "@/components/sections/featured"
import { FC } from "react"

export default function Loading() {
  return (
    <main className="bg-gray-50 dark:bg-gray-700 min-h-screen p-4">
      <Featured loading />
      <div className="flex gap-4 flex-wrap my-8">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`bg-cyan-600 rounded-lg p-2 hover:bg-cyan-200 transition-all cursor-pointer w-24 h-10`}
            ></div>
          ))}
      </div>
      <Artists loading />
    </main>
  )
}
