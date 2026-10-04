import { Settings } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";

export function ProfileHeader({
  name,
  title,
  handle,
  verified,
  trustScore,
}: {
  name: string;
  title: string;
  handle: string;
  verified: boolean;
  trustScore: string;
}) {
  return (
    <div className="flex items-center justify-between px-4 pt-4 pb-3">
      <div className="flex items-center gap-3">
        <Avatar name={name} size={56} ring />
        <div>
          <div className="flex items-center gap-1">
            <span className="text-base font-bold text-ink">{name}</span>
            {verified && <VerifiedBadge />}
          </div>
          <p className="text-xs text-accent">{title}</p>
          <p className="text-xs text-muted">
            @{handle} · {trustScore}
          </p>
        </div>
      </div>
      <button type="button" aria-label="Settings" className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-ink transition-transform active:scale-95">
        <Settings size={18} />
      </button>
    </div>
  );
}
