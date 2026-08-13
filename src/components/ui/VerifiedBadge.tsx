import { BadgeCheck } from "lucide-react";
import type { VerificationTier } from "@/types";

const TIER_COLOR: Record<VerificationTier, string> = {
  unverified: "text-muted",
  nin: "text-[#1D9BF0]",
  business: "text-forest",
  premium: "text-gold",
};

const TIER_COLOR_DARK: Record<VerificationTier, string> = {
  unverified: "text-night-muted",
  nin: "text-[#4FC3F7]",
  business: "text-[#6FCF97]",
  premium: "text-gold",
};

export function VerifiedBadge({
  tier = "nin",
  size = 15,
  dark = false,
}: {
  tier?: VerificationTier;
  size?: number;
  dark?: boolean;
}) {
  return (
    <BadgeCheck
      size={size}
      className={dark ? TIER_COLOR_DARK[tier] : TIER_COLOR[tier]}
      strokeWidth={2}
    />
  );
}
