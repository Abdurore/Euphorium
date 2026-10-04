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
    <div className="mb-4 flex items-center gap-2 border-b border-border px-4">
      {/* overflow-y-hidden + hide-scrollbar: the underline lives inside the
          box, so the browser never draws native scroll arrows here. */}
      <div
        role="tablist"
        className="hide-scrollbar flex flex-1 items-center gap-6 overflow-x-auto overflow-y-hidden"
      >
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => onChange(tab)}
            className={`relative shrink-0 whitespace-nowrap py-3 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent after:transition-opacity ${
              active === tab
                ? "text-ink after:opacity-100"
                : "text-muted hover:text-ink after:opacity-0"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <button
        type="button"
        aria-label="Filters"
        className="glass-panel flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink transition-transform hover:bg-surface active:scale-95"
      >
        <SlidersHorizontal size={15} />
      </button>
    </div>
  );
}
