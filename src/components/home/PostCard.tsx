import Link from "next/link";
import {
  MessageCircle,
  Repeat2,
  Heart,
  MoreHorizontal,
  MapPin,
  Package,
  ArrowRight,
} from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import type { Post } from "@/types";

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="floating-card rounded-2xl bg-night p-5">
      <div className="mb-4 flex items-start gap-3">
        <Avatar name={post.author.name} size={44} />
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-1">
            <span className="truncate text-sm font-semibold text-ink">
              {post.author.name}
            </span>
            {post.author.verified && <VerifiedBadge tier={post.author.tier} />}
          </div>
          <p className="truncate text-xs text-muted">
            @{post.author.handle} · {post.timeAgo}
          </p>
        </div>
        <MoreHorizontal size={18} className="shrink-0 text-muted" />
      </div>

      <Link href={`/product/${post.id}`} className="block">
        <h3 className="mb-1 text-lg font-semibold text-ink">{post.title}</h3>
        <p className="mb-3 text-sm text-muted">{post.description}</p>
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-ink">
            <MapPin size={12} /> {post.location}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-ink">
            {formatNaira(post.price)}
          </span>
        </div>

        <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl bg-white/5">
          <Package size={40} className="text-gold" />
        </div>
      </Link>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <div className="flex gap-6 text-muted">
          <span className="flex items-center gap-1.5 text-sm">
            <Heart size={18} /> {post.likes}
          </span>
          <span className="flex items-center gap-1.5 text-sm">
            <MessageCircle size={18} /> {post.comments}
          </span>
          <span className="flex items-center gap-1.5 text-sm">
            <Repeat2 size={18} /> {post.reposts}
          </span>
        </div>
        <Link
          href="/messages"
          className="flex items-center gap-1 text-sm font-semibold text-ink hover:opacity-80"
        >
          Message <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
