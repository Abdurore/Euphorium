import type { ReactNode } from "react";

export function Pill({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
        active
          ? "bubble-active text-cream"
          : "bg-transparent text-muted hover:bg-surface"
      }`}
    >
      {children}
    </button>
  );
}

export function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-between px-4">
      <h2 className="text-base font-semibold text-ink">{title}</h2>
      {action && (
        <span className="text-xs font-medium text-accent">{action}</span>
      )}
    </div>
  );
}
