import { MultiSelectOption } from "@/app/types"
import { FC } from "react"
interface IFilterProps {
  artistStyles: MultiSelectOption[]
}

export const Filter: FC<IFilterProps> = ({ artistStyles }) => {
  return (
    <div className="flex gap-4 flex-wrap my-8">
      {artistStyles.map((style) => {
        return (
          <div
            key={style.id}
            className={`bg-cyan-400 rounded-lg p-2 hover:bg-cyan-200 transition-all cursor-pointer`}
          >
            {style.name}
          </div>
        )
      })}
    </div>
  )
}
