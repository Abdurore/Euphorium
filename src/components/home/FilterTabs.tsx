import { SlidersHorizontal } from "lucide-react";

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
    <div className="mb-4 flex items-center gap-2 border-b border-border px-4 pb-4">
      <div className="flex flex-1 items-center gap-6 overflow-x-auto">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`relative shrink-0 whitespace-nowrap pb-1 text-sm font-medium transition-colors after:absolute after:-bottom-[17px] after:left-0 after:h-0.5 after:w-full after:transition-opacity ${
              active === tab
                ? "text-ink after:opacity-100 after:bg-ink"
                : "text-muted hover:text-ink after:opacity-0"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
        <SlidersHorizontal size={15} />
      </button>
    </div>
  );
}
