"use client";

import { Bell, HelpCircle, Settings, LogOut, ChevronRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

const ITEMS = [
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help Center" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Log Out", danger: true },
];

export function SettingsList() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mx-4 overflow-hidden rounded-2xl border border-border">
      <div className="flex w-full items-center gap-3 border-b border-border bg-surface px-4 py-3">
        {theme === "dark" ? (
          <Moon size={17} className="text-accent" />
        ) : (
          <Sun size={17} className="text-accent" />
        )}
        <span className="flex-1 text-left text-sm text-ink">Appearance</span>
        <div className="flex items-center gap-1 rounded-full border border-border p-1">
          <button
            onClick={() => setTheme("light")}
            aria-label="Light mode"
            aria-pressed={theme === "light"}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
              theme === "light" ? "bubble-active text-cream" : "text-muted"
            }`}
          >
            <Sun size={14} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            aria-label="Dark mode"
            aria-pressed={theme === "dark"}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
              theme === "dark" ? "bubble-active text-cream" : "text-muted"
            }`}
          >
            <Moon size={14} />
          </button>
        </div>
      </div>
      {ITEMS.map((item) => (
        <button
          key={item.label}
          className="flex w-full items-center gap-3 border-b border-border bg-surface px-4 py-3 last:border-b-0"
        >
          <item.icon
            size={17}
            className={item.danger ? "text-terracotta" : "text-accent"}
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
