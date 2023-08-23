import { Artist, MultiSelectOption } from "@/types"
import { Dispatch, FC, SetStateAction } from "react"
interface IFilterProps {
  artistStyles: MultiSelectOption[]
  setFilter: Dispatch<SetStateAction<string>>
}

export const Filter: FC<IFilterProps> = ({ artistStyles, setFilter }) => {
  return (
    <div className="flex gap-4 flex-wrap my-8">
      <div
        className={`bg-cyan-400 rounded-lg p-2 hover:bg-cyan-200 transition-all cursor-pointer`}
        onClick={() => setFilter("all")}
      >
        all
      </div>
      {artistStyles.map((style) => {
        return (
          <div
            key={style.id}
            className={`bg-cyan-400 rounded-lg p-2 hover:bg-cyan-200 transition-all cursor-pointer`}
            onClick={() => setFilter(style.name)}
          >
            {style.name}
          </div>
        )
      })}
    </div>
  )
}
