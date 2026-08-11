import type { ReactNode } from "react";

export function IconButton({
  children,
  badge,
  className = "",
}: {
  children: ReactNode;
  badge?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink ${className}`}
    >
      {children}
      {typeof badge === "number" && badge > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta px-1 text-[10px] font-semibold text-cream">
          {badge}
        </span>
      )}
    </div>
  );
}
