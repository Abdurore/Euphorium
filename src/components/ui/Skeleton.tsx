export function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`skeleton rounded-lg ${className}`} />;
}

export function PostCardSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-5" aria-hidden>
      <div className="mb-4 flex items-center gap-3">
        <Skeleton className="h-11 w-11 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3.5 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="mb-2 h-5 w-3/4" />
      <Skeleton className="mb-4 h-4 w-full" />
      <Skeleton className="aspect-[16/10] w-full rounded-xl" />
      <div className="mt-4 flex gap-6 border-t border-border pt-4">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  );
}

export function ConversationRowSkeleton() {
  return (
    <div className="flex items-center gap-3 border-b border-border px-4 py-3" aria-hidden>
      <Skeleton className="h-11 w-11 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3.5 w-1/3" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <Skeleton className="h-3 w-8" />
    </div>
  );
}

export function HeaderSkeleton() {
  return (
    <div className="glass-header flex items-center justify-between px-4 py-4" aria-hidden>
      <Skeleton className="h-6 w-28" />
      <Skeleton className="h-6 w-6 rounded-full" />
    </div>
  );
}
