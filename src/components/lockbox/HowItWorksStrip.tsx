import { Wallet, Lock, Truck, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: Wallet, label: "Buyer pays" },
  { icon: Lock, label: "Money locked" },
  { icon: Truck, label: "Item delivered" },
  { icon: CheckCircle2, label: "Buyer confirms, seller paid" },
];

export function HowItWorksStrip() {
  return (
    <div className="mx-4 rounded-2xl border border-border bg-surface p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">How Lockbox Works</h3>
        <span className="text-xs font-medium text-accent">Learn more</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {STEPS.map((step) => (
          <div key={step.label} className="flex flex-col items-center gap-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
              <step.icon size={16} className="text-accent" />
            </div>
            <span className="text-center text-[9px] leading-tight text-muted">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
