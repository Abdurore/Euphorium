import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import type { Conversation } from "@/types";

export function ConversationRow({ conversation }: { conversation: Conversation }) {
  return (
    <Link
      href={`/messages/${conversation.id}`}
      className="flex items-center gap-3 border-b border-border px-4 py-3"
    >
      <Avatar name={conversation.author.name} size={44} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-ink">
            {conversation.author.name}
          </span>
          {conversation.author.verified && (
            <VerifiedBadge tier={conversation.author.tier} size={13} />
          )}
        </div>
        <p className="truncate text-xs text-muted">
          {conversation.lastMessage}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1">
        <span className="text-[11px] text-muted">{conversation.timeAgo}</span>
        {!!conversation.unread && (
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta px-1 text-[10px] font-semibold text-cream">
            {conversation.unread}
          </span>
        )}
      </div>
    </Link>
  );
}
