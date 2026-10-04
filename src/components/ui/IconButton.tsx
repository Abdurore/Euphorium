import type { ReactNode } from "react";

export function IconButton({
  children,
  badge,
  label,
  onClick,
  className = "",
}: {
  children: ReactNode;
  badge?: number;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`glass-panel relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-transform active:scale-95 ${className}`}
    >
      {children}
      {typeof badge === "number" && badge > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta px-1 text-[10px] font-semibold text-cream">
          {badge}
        </span>
      )}
    </button>
  );
}
