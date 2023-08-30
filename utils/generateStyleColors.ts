import { ArtistStyles, MultiSelectOption } from "../types"

// Function to generate a random Tailwind CSS color class
const getRandomColorClass = (): string => {
  const colors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

// Function to generate the object with style names and random colors
export default function generateStyleColors(
  options: MultiSelectOption[]
): Record<string, string> {
  const styleColors: Record<string, string> = {}

  options.forEach((option: MultiSelectOption) => {
    const styleName = option.name
    const randomColorClass = getRandomColorClass()
    styleColors[styleName] = randomColorClass
  })

  return styleColors
}
