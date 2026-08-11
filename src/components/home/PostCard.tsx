import Link from "next/link";
import {
  MessageCircle,
  Repeat2,
  Heart,
  Share,
  MoreHorizontal,
  MapPin,
  Package,
  Bookmark,
} from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import type { Post } from "@/types";

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="border-b border-border px-4 py-4 transition-colors lg:mb-4 lg:rounded-2xl lg:border lg:px-5 lg:hover:bg-surface/60">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Avatar name={post.author.name} size={38} />
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-1">
              <span className="shrink-0 text-sm font-semibold text-ink">
                {post.author.name}
              </span>
              {post.author.verified && (
                <VerifiedBadge tier={post.author.tier} />
              )}
              <span className="truncate text-xs text-muted">
                @{post.author.handle} · {post.timeAgo}
              </span>
            </div>
          </div>
        </div>
        <MoreHorizontal size={18} className="shrink-0 text-muted" />
      </div>

      <Link href={`/product/${post.id}`} className="block">
        <h3 className="line-clamp-1 text-sm font-semibold text-ink">
          {post.title}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-sm text-muted">
          {post.description}
        </p>
        <div className="mt-1.5 flex items-center gap-1 text-[11px] text-muted">
          <MapPin size={11} className="shrink-0" />
          <span className="truncate">{post.location}</span>
        </div>

        <div className="relative mt-3 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
          <Package size={40} className="text-gold" />
          <span className="absolute bottom-3 right-3 rounded-full bg-forest px-3 py-1.5 text-sm font-bold text-cream shadow-sm">
            {formatNaira(post.price)}
          </span>
        </div>
      </Link>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex flex-1 items-center gap-4 text-muted sm:gap-6">
          <span className="flex items-center gap-1.5 text-xs">
            <MessageCircle size={16} /> {post.comments}
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <Repeat2 size={16} /> {post.reposts}
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <Heart size={16} /> {post.likes}
          </span>
          <Bookmark size={15} />
          <Share size={15} />
        </div>
        <Link
          href={`/messages`}
          className="shrink-0 rounded-full bg-forest px-4 py-1.5 text-xs font-semibold text-cream"
        >
          Message
        </Link>
      </div>
    </article>
  );
}
