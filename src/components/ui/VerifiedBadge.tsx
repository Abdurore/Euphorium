import { BadgeCheck } from "lucide-react";
import type { VerificationTier } from "@/types";

const TIER_COLOR: Record<VerificationTier, string> = {
  unverified: "text-muted",
  nin: "text-[#1D9BF0]",
  business: "text-forest",
  premium: "text-gold",
};

export function VerifiedBadge({
  tier = "nin",
  size = 15,
}: {
  tier?: VerificationTier;
  size?: number;
}) {
  return (
    <BadgeCheck
      size={size}
      className={TIER_COLOR[tier]}
      strokeWidth={2}
    />
  );
}
