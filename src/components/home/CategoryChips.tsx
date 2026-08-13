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
            className="whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted transition-colors hover:text-ink"
          >
            {category.label}
          </Link>
        ))}
    </div>
  );
}
