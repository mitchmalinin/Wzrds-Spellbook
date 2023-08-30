import { Skeleton } from "../skeleton"

export const ArtistCardSkeleton = () => {
  return (
    <div className="flex flex-col p-4 rounded-md bg-gray-500 text-black dark:text-white min-h-[200px] items-left justify-center gap-1">
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} className="h-6 rounded" />
        ))}
    </div>
  )
}
