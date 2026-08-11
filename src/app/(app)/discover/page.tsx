"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { PostCard } from "@/components/home/PostCard";
import { SearchBar } from "@/components/home/SearchBar";
import { SectionHeader } from "@/components/ui/Pill";
import { posts, categories } from "@/lib/mock-data";

function DiscoverContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let result = posts;
    if (categoryParam) {
      result = result.filter((post) => post.categoryId === categoryParam);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.description.toLowerCase().includes(q) ||
          post.author.name.toLowerCase().includes(q) ||
          post.location.toLowerCase().includes(q)
      );
    }
    return result;
  }, [categoryParam, query]);

  const activeCategory = categories.find((c) => c.id === categoryParam);

  return (
    <div>
      <div className="px-4 pt-4 pb-2 lg:px-0">
        <h1 className="text-lg font-bold text-ink">Discover</h1>
      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search products, sellers, categories..."
      />

      <div className="mb-2 flex items-center justify-between px-4 lg:px-0">
        <SectionHeader
          title={
            activeCategory ? `${activeCategory.label}` : "Browse Categories"
          }
        />
        {activeCategory && (
          <Link href="/discover" className="text-xs font-medium text-terracotta">
            Clear
          </Link>
        )}
      </div>
      <CategoryGrid activeId={categoryParam ?? undefined} />

      <div className="mb-2 mt-2 px-4 lg:px-0">
        <SectionHeader
          title={
            query || activeCategory ? "Results" : "Trending Near You"
          }
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {filtered.length > 0 ? (
          filtered.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="col-span-2 px-4 py-10 text-center text-sm text-muted">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}

export default function DiscoverPage() {
  return (
    <Suspense>
      <DiscoverContent />
    </Suspense>
  );
}
