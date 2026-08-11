import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import type { Author } from "@/types";

export function SellerMiniCard({ seller }: { seller: Author }) {
  return (
    <Link
      href="/profile"
      className="mx-4 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3"
    >
      <Avatar name={seller.name} size={40} />
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-ink">{seller.name}</span>
          {seller.verified && <VerifiedBadge tier={seller.tier} />}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted">
          <Star size={12} className="fill-gold text-gold" />
          {seller.rating} ({seller.ratingCount?.toLocaleString()})
        </div>
      </div>
      <ChevronRight size={16} className="text-muted" />
    </Link>
  );
}
