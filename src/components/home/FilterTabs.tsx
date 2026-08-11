import { SlidersHorizontal } from "lucide-react";
import { Pill } from "@/components/ui/Pill";

export const FILTER_TABS = ["For You", "Trending", "Nearby", "Sponsored"] as const;
export type FilterTab = (typeof FILTER_TABS)[number];

export function FilterTabs({
  active,
  onChange,
}: {
  active: FilterTab;
  onChange: (tab: FilterTab) => void;
}) {
  return (
    <div className="mb-3 flex items-center gap-2 px-4">
      <div className="flex flex-1 items-center gap-1 overflow-x-auto">
        {FILTER_TABS.map((tab) => (
          <Pill key={tab} active={active === tab} onClick={() => onChange(tab)}>
            {tab}
          </Pill>
        ))}
      </div>
      <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface">
        <SlidersHorizontal size={15} className="text-ink" />
      </button>
    </div>
  );
}
