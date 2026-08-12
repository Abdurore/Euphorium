"use client";

import { useMemo, useState } from "react";
import { TopHeader } from "@/components/home/TopHeader";
import { SearchBar } from "@/components/home/SearchBar";
import { StoryRow } from "@/components/home/StoryRow";
import { VerifyBanner } from "@/components/home/VerifyBanner";
import { FilterTabs, type FilterTab } from "@/components/home/FilterTabs";
import { PostCard } from "@/components/home/PostCard";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { PromoBanner } from "@/components/home/PromoBanner";
import { RightRail } from "@/components/layout/RightRail";
import { posts } from "@/lib/mock-data";
import { filterPosts } from "@/lib/filter-posts";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<FilterTab>("For You");

  const visiblePosts = useMemo(
    () => filterPosts(posts, { tab, query }),
    [tab, query]
  );

  return (
    <div className="lg:flex lg:gap-8">
      <div className="lg:max-w-[600px] lg:flex-1">
        <TopHeader />
        <SearchBar value={query} onChange={setQuery} />
        <StoryRow />
        <div className="lg:hidden">
          <CategoryGrid />
          <PromoBanner />
          <VerifyBanner />
        </div>
        <FilterTabs active={tab} onChange={setTab} />
        <div>
          {visiblePosts.length > 0 ? (
            visiblePosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="px-4 py-10 text-center text-sm text-muted">
              No results for &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      </div>
      <RightRail />
    </div>
  );
}
