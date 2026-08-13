import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { MessageBubble } from "@/components/messages/MessageBubble";
import { conversations } from "@/lib/mock-data";
import Link from "next/link";

export default async function ThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const conversation = conversations.find((c) => c.id === id);
  if (!conversation) notFound();

  return (
    <div className="flex h-full flex-col">
      <div className="glass-header sticky top-0 z-30 flex items-center gap-3 border-b border-border px-4 py-3">
        <Link
          href="/messages"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface"
        >
          <ChevronLeft size={20} />
        </Link>
        <Avatar name={conversation.author.name} size={36} />
        <div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-ink">
              {conversation.author.name}
            </span>
            {conversation.author.verified && (
              <VerifiedBadge tier={conversation.author.tier} size={13} />
            )}
          </div>
          <span className="text-xs text-muted">
            @{conversation.author.handle}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-3 px-4 py-4">
        {conversation.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <div className="sticky bottom-24 mx-4 mb-2 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5">
        <input
          placeholder="Type a message..."
          className="flex-1 bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
        />
        <button className="rounded-full bg-forest px-4 py-1.5 text-xs font-semibold text-cream">
          Send
        </button>
      </div>
    </div>
  );
}
