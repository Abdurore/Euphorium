import Link from "next/link";
import { categories } from "@/lib/mock-data";

export function CategoryChips() {
  return (
    <div className="hide-scrollbar mb-4 flex gap-3 overflow-x-auto px-4 pb-2">
      {categories
        .filter((category) => category.id !== "more")
        .map((category) => (
          <Link
            key={category.id}
            href={`/discover?category=${category.id}`}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-night-muted transition-colors hover:bg-white/10 hover:text-white"
          >
            {category.label}
          </Link>
        ))}
    </div>
  );
}
