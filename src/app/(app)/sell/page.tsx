import { Camera, Grid2x2, Tag, Truck, ChevronRight } from "lucide-react";
import { ScreenHeader } from "@/components/layout/ScreenHeader";

const STEPS = [
  {
    icon: Camera,
    title: "Upload Photos",
    detail: "Add up to 10 clear photos",
  },
  {
    icon: Grid2x2,
    title: "Choose Category",
    detail: "Select the right category",
  },
  {
    icon: Tag,
    title: "Set Price",
    detail: "How much are you selling for?",
  },
  {
    icon: Truck,
    title: "Delivery Options",
    detail: "Set your preferred delivery method",
  },
];

export default function SellPage() {
  return (
    <div>
      <ScreenHeader title="Sell an Item" />
      <div className="mt-3 px-4">
        {STEPS.map((step, index) => (
          <button
            key={step.title}
            className="flex w-full items-center gap-3 border-b border-border py-4 text-left"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
              {index + 1}
            </div>
            <step.icon size={18} className="shrink-0 text-gold" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">{step.title}</p>
              <p className="text-xs text-muted">{step.detail}</p>
            </div>
            <ChevronRight size={16} className="text-muted" />
          </button>
        ))}
      </div>

      <div className="mt-6 px-4">
        <button className="w-full rounded-full bg-forest py-3 text-sm font-semibold text-cream">
          Continue
        </button>
      </div>
    </div>
  );
}
