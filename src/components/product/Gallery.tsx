import { Package } from "lucide-react";

export function Gallery({ label }: { label: string }) {
  return (
    <div className="mx-4 flex h-64 items-center justify-center rounded-2xl border border-border bg-surface">
      <div className="flex flex-col items-center gap-2 text-gold">
        <Package size={48} />
        <span className="text-xs text-muted">{label}</span>
      </div>
    </div>
  );
}
