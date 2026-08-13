import { Check } from "lucide-react";

export type StepStatus = "done" | "active" | "pending";

export function VerificationStep({
  index,
  title,
  detail,
  status,
}: {
  index: number;
  title: string;
  detail: string;
  status: StepStatus;
}) {
  return (
    <div className="flex gap-3 px-4">
      <div className="flex flex-col items-center">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            status === "done"
              ? "bg-forest text-cream"
              : status === "active"
              ? "border-2 border-accent text-accent"
              : "border-2 border-border text-muted"
          }`}
        >
          {status === "done" ? <Check size={15} /> : index}
        </div>
        <div className="w-0.5 flex-1 bg-border last:hidden" />
      </div>
      <div className="pb-6">
        <p
          className={`text-sm font-semibold ${
            status === "pending" ? "text-muted" : "text-ink"
          }`}
        >
          {title}
        </p>
        <p className="mt-0.5 text-xs text-muted">{detail}</p>
        {status === "active" && (
          <button className="mt-2 rounded-full bg-forest px-4 py-1.5 text-xs font-semibold text-cream">
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
