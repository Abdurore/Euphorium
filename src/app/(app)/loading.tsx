import { HeaderSkeleton, PostCardSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading">
      <HeaderSkeleton />
      <div className="flex gap-6 border-b border-border px-4 py-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Skeleton className="h-16 w-16 rounded-full" />
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>
      <Skeleton className="mx-4 mt-4 mb-4 h-11 rounded-full" />
      <div className="flex gap-6 px-4 pb-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-16" />
        ))}
      </div>
      <div className="space-y-4 px-4">
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </div>
  );
}
