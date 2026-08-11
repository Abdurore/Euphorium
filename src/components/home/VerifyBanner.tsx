import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";

export function VerifyBanner() {
  return (
    <Link
      href="/profile/verify"
      className="mx-4 mb-4 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
        <ShieldCheck size={20} className="text-forest" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-forest">Verify with NIN</p>
        <p className="text-xs text-muted">Unlock more features, higher trust</p>
      </div>
      <div className="flex items-center gap-1 rounded-full bg-forest px-3 py-1.5 text-xs font-semibold text-cream">
        Verify Now
      </div>
      <ChevronRight size={16} className="text-muted" />
    </Link>
  );
}
