import type { Post } from "@/types";
import type { FilterTab } from "@/components/home/FilterTabs";

export function filterPosts(
  posts: Post[],
  { tab, query }: { tab?: FilterTab; query?: string }
): Post[] {
  let result = posts;

  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    result = result.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.author.name.toLowerCase().includes(q) ||
        post.author.handle.toLowerCase().includes(q) ||
        post.location.toLowerCase().includes(q)
    );
  }

  if (tab === "Trending") {
    result = [...result].sort((a, b) => b.likes - a.likes);
  } else if (tab === "Nearby") {
    result = result.filter((post) => post.nearby);
  } else if (tab === "Sponsored") {
    result = result.filter((post) => post.sponsored);
  }

  return result;
}
