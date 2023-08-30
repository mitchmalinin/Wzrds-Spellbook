import { Skeleton } from "@/components/skeleton"

export default function Loading() {
  return (
    <main className="bg-gray-50 dark:bg-gray-700 min-h-screen p-4">
      <div className="grid gap-4">
        <Skeleton className="h-6 rounded" />
        <Skeleton className="h-6 rounded w-48" />
        <Skeleton className="h-6 rounded" />
        <Skeleton className="h-6 rounded w-48" />
        <Skeleton className="h-6 rounded" />
      </div>
    </main>
  )
}
