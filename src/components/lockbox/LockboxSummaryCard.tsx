import { Lock } from "lucide-react";

export function LockboxSummaryCard({ total }: { total: number }) {
  return (
    <div className="floating-card mx-4 flex items-center justify-between rounded-2xl bg-forest px-5 py-4">
      <div>
        <p className="text-xs text-cream/70">Total Locked</p>
        <p className="text-xl font-bold text-cream">
          ₦{total.toLocaleString("en-NG")}
        </p>
      </div>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10">
        <Lock size={20} className="text-gold" />
      </div>
    </div>
  );
}
