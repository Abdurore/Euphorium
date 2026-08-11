"use client";

import { useMemo, useState } from "react";
import { Search, SquarePen } from "lucide-react";
import { ConversationRow } from "@/components/messages/ConversationRow";
import { conversations } from "@/lib/mock-data";
import type { Conversation } from "@/types";

const TABS = ["All", "Buyers", "Sellers", "System"] as const;

function matchesTab(conversation: Conversation, tab: (typeof TABS)[number]) {
  if (tab === "All") return true;
  if (tab === "Buyers") return conversation.category === "buyer";
  if (tab === "Sellers") return conversation.category === "seller";
  return conversation.category === "system";
}

export default function MessagesPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return conversations.filter((c) => {
      if (!matchesTab(c, tab)) return false;
      if (!q) return true;
      return (
        c.author.name.toLowerCase().includes(q) ||
        c.author.handle.toLowerCase().includes(q) ||
        c.lastMessage.toLowerCase().includes(q)
      );
    });
  }, [tab, query]);

  return (
    <div>
      <div className="flex items-center justify-between px-4 pt-4 pb-2 lg:px-0">
        <h1 className="text-lg font-bold text-ink">Messages</h1>
        <SquarePen size={19} className="text-forest" />
      </div>

      <div className="mx-4 mb-3 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 lg:mx-0">
        <Search size={16} className="text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search messages..."
          className="flex-1 bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
        />
      </div>

      <div className="mb-1 flex gap-1 px-4 lg:px-0">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              tab === t ? "bg-forest text-cream" : "text-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-2">
        {filtered.length > 0 ? (
          filtered.map((conversation) => (
            <ConversationRow key={conversation.id} conversation={conversation} />
          ))
        ) : (
          <p className="px-4 py-10 text-center text-sm text-muted">
            No conversations found.
          </p>
        )}
      </div>
    </div>
  );
}
