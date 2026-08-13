import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { currentUser } from "@/lib/mock-data";

export function PromoPostCard() {
  return (
    <article className="floating-card mb-4 rounded-2xl bg-night p-5 lg:mb-0">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 p-1.5">
          <LogoMark size={32} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-white">
              Euphorium Official
            </span>
            <VerifiedBadge tier="premium" />
          </div>
          <p className="truncate text-xs text-night-muted">
            {currentUser.name} · Unilag, Lagos
          </p>
        </div>
        <MoreHorizontal size={18} className="shrink-0 text-night-muted" />
      </div>

      <div className="relative mb-4 aspect-[16/11] w-full overflow-hidden rounded-xl bg-white/5">
        <Image
          src="/mascot.jpg"
          alt="Mr. Euphorium"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-5">
          <h2 className="text-xl font-semibold text-white">
            Catch the vibe. Win big.
          </h2>
        </div>
      </div>

      <button className="w-full rounded-lg border border-white/20 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
        Join the Movement
      </button>
    </article>
  );
}
