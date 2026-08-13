import type { RefObject } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  placeholder = "Search products, people, services...",
  dark = false,
  inputRef,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  dark?: boolean;
  inputRef?: RefObject<HTMLInputElement | null>;
}) {
  return (
    <div
      className={
        dark
          ? "mx-4 mt-2 mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5"
          : "glass-panel mx-4 mt-2 mb-4 flex items-center gap-2 rounded-full px-4 py-2.5"
      }
    >
      <Search size={17} className={dark ? "text-night-muted" : "text-muted"} />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={
          dark
            ? "flex-1 bg-transparent text-sm text-white placeholder:text-night-muted focus:outline-none"
            : "flex-1 bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
        }
      />
      <div
        className={
          dark
            ? "hidden items-center gap-1 border-l border-white/10 pl-2 text-xs text-night-muted sm:flex"
            : "hidden items-center gap-1 border-l border-border pl-2 text-xs text-muted sm:flex"
        }
      >
        <MapPin size={14} />
        <span>Lagos, NG</span>
        <ChevronDown size={13} />
      </div>
    </div>
  );
}
