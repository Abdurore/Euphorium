import { Search, MapPin, ChevronDown } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  placeholder = "Search products, people, services...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="glass-panel mx-4 mt-2 mb-4 flex items-center gap-2 rounded-full px-4 py-2.5">
      <Search size={17} className="text-muted" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
      />
      <div className="hidden items-center gap-1 border-l border-border pl-2 text-xs text-muted sm:flex">
        <MapPin size={14} />
        <span>Lagos, NG</span>
        <ChevronDown size={13} />
      </div>
    </div>
  );
}
