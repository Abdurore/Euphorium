import { ConversationRowSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading">
      <div className="px-4 pt-4 pb-2">
        <Skeleton className="h-6 w-32" />
      </div>
      <Skeleton className="mx-4 mb-3 h-11 rounded-full" />
      {Array.from({ length: 7 }).map((_, i) => (
        <ConversationRowSkeleton key={i} />
      ))}
    </div>
  );
}
