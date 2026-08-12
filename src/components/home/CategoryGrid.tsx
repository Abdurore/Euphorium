import Link from "next/link";
import {
  Smartphone,
  Shirt,
  Headphones,
  BookOpen,
  Utensils,
  Grid2x2,
} from "lucide-react";
import { categories } from "@/lib/mock-data";

const ICONS: Record<string, typeof Smartphone> = {
  smartphone: Smartphone,
  shirt: Shirt,
  headphones: Headphones,
  "book-open": BookOpen,
  utensils: Utensils,
  "grid-2x2": Grid2x2,
};

export function CategoryGrid({ activeId }: { activeId?: string }) {
  return (
    <div className="grid grid-cols-6 gap-2 px-4 py-4">
      {categories.map((category) => {
        const Icon = ICONS[category.icon];
        const active = activeId === category.id;
        return (
          <Link
            key={category.id}
            href={
              category.id === "more"
                ? "/discover"
                : `/discover?category=${category.id}`
            }
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all ${
                active ? "bubble-active" : "glass-panel"
              }`}
            >
              <Icon size={19} className={active ? "text-cream" : "text-forest"} />
            </div>
            <span className="text-center text-[10px] text-ink">
              {category.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
