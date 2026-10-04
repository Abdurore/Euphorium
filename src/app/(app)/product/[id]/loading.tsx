import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="space-y-4 px-4 pt-4">
      <Skeleton className="h-64 rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-16 rounded-2xl" />
      <Skeleton className="h-12 rounded-2xl" />
      <Skeleton className="h-24 rounded-2xl" />
    </div>
  );
}
