import { Bell, HelpCircle, Settings, LogOut, ChevronRight } from "lucide-react";

const ITEMS = [
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help Center" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Log Out", danger: true },
];

export function SettingsList() {
  return (
    <div className="mx-4 overflow-hidden rounded-2xl border border-border">
      {ITEMS.map((item) => (
        <button
          key={item.label}
          className="flex w-full items-center gap-3 border-b border-border bg-surface px-4 py-3 last:border-b-0"
        >
          <item.icon
            size={17}
            className={item.danger ? "text-terracotta" : "text-gold"}
          />
          <span
            className={`flex-1 text-left text-sm ${
              item.danger ? "text-terracotta" : "text-ink"
            }`}
          >
            {item.label}
          </span>
          <ChevronRight size={15} className="text-muted" />
        </button>
      ))}
    </div>
  );
}
