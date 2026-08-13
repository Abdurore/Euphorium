"use client";

import { useMemo, useRef, useState } from "react";
import { TopHeader } from "@/components/home/TopHeader";
import { SearchBar } from "@/components/home/SearchBar";
import { StoryRow } from "@/components/home/StoryRow";
import { VerifyBanner } from "@/components/home/VerifyBanner";
import { FilterTabs, type FilterTab } from "@/components/home/FilterTabs";
import { PostCard } from "@/components/home/PostCard";
import { CategoryChips } from "@/components/home/CategoryChips";
import { PromoPostCard } from "@/components/home/PromoPostCard";
import { RightRail } from "@/components/layout/RightRail";
import { posts } from "@/lib/mock-data";
import { filterPosts } from "@/lib/filter-posts";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<FilterTab>("For You");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const visiblePosts = useMemo(
    () => filterPosts(posts, { tab, query }),
    [tab, query]
  );

  return (
    <div>
      <TopHeader onSearchClick={() => searchInputRef.current?.focus()} />
      <StoryRow />
      <SearchBar value={query} onChange={setQuery} inputRef={searchInputRef} />

      <div className="pb-6 lg:flex lg:gap-8 lg:px-6">
        <div className="lg:max-w-[600px] lg:flex-1">
          <FilterTabs active={tab} onChange={setTab} />
          <CategoryChips />
          <div className="px-4 lg:hidden">
            <VerifyBanner />
          </div>

          <div className="space-y-4 px-4">
            <PromoPostCard />
            {visiblePosts.length > 0 ? (
              visiblePosts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <p className="py-10 text-center text-sm text-muted">
                No results for &ldquo;{query}&rdquo;.
              </p>
            )}
          </div>
        </div>
        <RightRail />
      </div>
    </div>
  );
}
