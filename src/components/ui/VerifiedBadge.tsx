import { BadgeCheck } from "lucide-react";
import type { VerificationTier } from "@/types";

const TIER_COLOR: Record<VerificationTier, string> = {
  unverified: "text-muted",
  nin: "text-tier-nin",
  business: "text-tier-business",
  premium: "text-gold",
};

export function VerifiedBadge({
  tier = "nin",
  size = 15,
}: {
  tier?: VerificationTier;
  size?: number;
}) {
  return <BadgeCheck size={size} className={TIER_COLOR[tier]} strokeWidth={2} />;
}
