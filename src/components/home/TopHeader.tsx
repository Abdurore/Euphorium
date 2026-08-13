"use client";

import { Search } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function TopHeader({ onSearchClick }: { onSearchClick?: () => void }) {
  return (
    <div className="night-header sticky top-0 z-30 flex items-center justify-center px-4 py-4">
      <Logo size={28} small light />
      <button
        onClick={onSearchClick}
        aria-label="Search"
        className="absolute right-4 text-white transition-opacity hover:opacity-80 active:scale-95"
      >
        <Search size={20} />
      </button>
    </div>
  );
}
