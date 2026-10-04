import { SmartImage } from "@/components/ui/SmartImage";
import { MASCOT_BLUR } from "@/lib/blur-data";
import { MoreHorizontal } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { currentUser } from "@/lib/mock-data";

export function PromoPostCard() {
  return (
    <article className="floating-card glass-card mb-4 rounded-2xl p-5 lg:mb-0">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface p-1.5">
          <LogoMark size={32} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-ink">
              Euphorium Official
            </span>
            <VerifiedBadge tier="premium" />
          </div>
          <p className="truncate text-xs text-muted">
            {currentUser.name} · Unilag, Lagos
          </p>
        </div>
        <MoreHorizontal size={18} aria-hidden className="shrink-0 text-muted" />
      </div>

      <div className="relative mb-4 aspect-[16/11] w-full overflow-hidden rounded-xl bg-surface">
        <SmartImage
          src="/mascot.jpg"
          alt="Mr. Euphorium"
          fill
          sizes="(min-width: 1024px) 600px, 430px"
          placeholder="blur"
          blurDataURL={MASCOT_BLUR}
          className="object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 to-transparent p-5">
          <h2 className="text-xl font-semibold text-white">
            Catch the vibe. Win big.
          </h2>
        </div>
      </div>

      <button type="button" className="glass-panel w-full rounded-xl py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface">
        Join the Movement
      </button>
    </article>
  );
}
