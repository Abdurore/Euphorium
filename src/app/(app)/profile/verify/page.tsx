import { MessageCircle, ShieldAlert } from "lucide-react";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { VerificationStep } from "@/components/verification/VerificationStep";

export default function VerifyPage() {
  return (
    <div>
      <ScreenHeader title="Get Verified" />

      <div className="px-4 pt-4 pb-2">
        <h2 className="text-sm font-semibold text-ink">
          Identity Verification (NIN)
        </h2>
        <p className="mt-1 text-xs text-muted">
          Verified accounts get a trust badge, higher visibility, and access
          to high-ticket sales.
        </p>
      </div>

      <div className="mt-3">
        <VerificationStep
          index={1}
          title="Confirm your details"
          detail="Full name, date of birth, phone number"
          status="done"
        />
        <VerificationStep
          index={2}
          title="Submit your NIN"
          detail="11-digit National Identification Number"
          status="active"
        />
        <VerificationStep
          index={3}
          title="Selfie match"
          detail="Quick photo to match your NIN record"
          status="pending"
        />
        <VerificationStep
          index={4}
          title="Get your badge"
          detail="Trust badge appears on your profile & posts"
          status="pending"
        />
      </div>

      <div className="mx-4 mt-2 rounded-2xl border border-gold/40 bg-gold/10 p-4">
        <div className="flex items-center gap-2">
          <ShieldAlert size={18} className="shrink-0 text-terracotta" />
          <h3 className="text-sm font-semibold text-ink">
            High-Ticket Items (₦30,000+)
          </h3>
        </div>
        <p className="mt-1.5 text-xs text-muted">
          Listings above ₦30,000 need an extra DM-based check with our
          verification team before they go live — this protects both buyers
          and sellers on big-ticket trades.
        </p>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5">
          <MessageCircle size={16} className="shrink-0 text-gold" />
          <p className="text-xs text-ink">
            Euphorium Support will DM you a short checklist (proof of item,
            purchase receipt, video walkthrough) once your NIN step is
            complete.
          </p>
        </div>
        <button className="mt-3 w-full rounded-full bg-forest py-2.5 text-xs font-semibold text-cream">
          Start DM Verification
        </button>
      </div>
    </div>
  );
}
