import { PostCardSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="px-4 pt-4">
      <Skeleton className="mb-4 h-6 w-28" />
      <Skeleton className="mb-5 h-11 rounded-full" />
      <div className="mb-5 grid grid-cols-6 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-11 w-11 rounded-2xl" />
        ))}
      </div>
      <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </div>
  );
}
