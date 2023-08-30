import { Artist, MultiSelectOption } from "@/types"
import { Dispatch, FC, SetStateAction } from "react"
import createColorTags from "../utils/generateStyleColors"

interface IFilterProps {
  artistStyles: MultiSelectOption[]
  setFilter: Dispatch<SetStateAction<string>>
  filter: string
}

export const Filter: FC<IFilterProps> = ({
  artistStyles,
  setFilter,
  filter,
}) => {
  return (
    <div className="flex gap-4 flex-wrap my-8">
      <div
        className={` ${
          filter === "all" ? "bg-gray-500" : "bg-cyan-500 hover:bg-cyan-200"
        } rounded-lg p-2  transition-all cursor-pointer`}
        onClick={() => setFilter("all")}
      >
        all
      </div>
      {artistStyles.map((style) => {
        return (
          <div
            key={style.id}
            className={`${
              style.name === filter
                ? "bg-gray-500"
                : "bg-cyan-500 hover:bg-cyan-200"
            } rounded-lg p-2  transition-all cursor-pointer`}
            onClick={() => setFilter(style.name)}
          >
            {style.name}
          </div>
        )
      })}
    </div>
  )
}
