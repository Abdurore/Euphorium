import type { RefObject } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  placeholder = "Search products, people, services...",
  inputRef,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  inputRef?: RefObject<HTMLInputElement | null>;
}) {
  return (
    <div className="glass-panel mx-4 mt-2 mb-4 flex items-center gap-2 rounded-full px-4 py-2.5 shadow-[inset_0_1px_0_var(--glass-highlight)] transition-shadow focus-within:ring-2 focus-within:ring-gold/60">
      <Search size={17} aria-hidden className="text-muted" />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 appearance-none bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none [&::-webkit-search-cancel-button]:appearance-none"
      />
      <div className="hidden items-center gap-1 border-l border-border pl-2 text-xs text-muted sm:flex">
        <MapPin size={14} />
        <span>Lagos, NG</span>
        <ChevronDown size={13} />
      </div>
    </div>
  );
}
