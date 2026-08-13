import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function VerifyBanner() {
  return (
    <Link
      href="/profile/verify"
      className="relative mx-4 mb-4 block overflow-hidden rounded-2xl border border-white/10 bg-night p-5 lg:mx-0"
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 opacity-50 blur-2xl" />
      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck size={22} className="text-gold" />
          <h4 className="text-sm font-semibold text-white">Verify with NIN</h4>
        </div>
        <p className="mb-4 text-sm text-night-muted">
          Unlock more features, higher trust scores, and sell faster on
          Euphorium.
        </p>
        <span className="text-sm font-semibold text-white hover:underline">
          Verify Now →
        </span>
      </div>
    </Link>
  );
}
