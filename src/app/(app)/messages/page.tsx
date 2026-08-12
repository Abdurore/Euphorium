"use client";

import { useMemo, useState } from "react";
import { Search, SquarePen, Package, Lock, MessageCircle, Tag } from "lucide-react";
import { ConversationRow } from "@/components/messages/ConversationRow";
import { conversations, notifications } from "@/lib/mock-data";
import type { Conversation, NotificationType } from "@/types";

const TABS = ["All", "Buyers", "Sellers", "System", "Notifications"] as const;

const NOTIFICATION_ICONS: Record<NotificationType, typeof Package> = {
  order: Package,
  payment: Lock,
  message: MessageCircle,
  promo: Tag,
};

const NOTIFICATION_ICON_COLOR: Record<NotificationType, string> = {
  order: "text-forest bg-forest/10",
  payment: "text-[#1D9BF0] bg-[#1D9BF0]/10",
  message: "text-terracotta bg-terracotta/10",
  promo: "text-gold bg-gold/10",
};

function matchesTab(conversation: Conversation, tab: (typeof TABS)[number]) {
  if (tab === "All") return true;
  if (tab === "Buyers") return conversation.category === "buyer";
  if (tab === "Sellers") return conversation.category === "seller";
  if (tab === "System") return conversation.category === "system";
  return false;
}

export default function MessagesPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredConversations = useMemo(() => {
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

  const filteredNotifications = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return notifications;
    return notifications.filter(
      (n) =>
        n.title.toLowerCase().includes(q) || n.detail.toLowerCase().includes(q)
    );
  }, [query]);

  const showingNotifications = tab === "Notifications";

  return (
    <div>
      <div className="glass-header sticky top-0 z-30 flex items-center justify-between px-4 pt-4 pb-2 lg:static lg:bg-transparent lg:px-0 lg:backdrop-blur-none">
        <h1 className="text-lg font-bold text-ink">Messages</h1>
        <SquarePen size={19} className="text-forest" />
      </div>

      <div className="glass-panel mx-4 mb-3 flex items-center gap-2 rounded-full px-4 py-2.5 lg:mx-0">
        <Search size={16} className="text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search messages and notifications..."
          className="flex-1 bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
        />
      </div>

      <div className="mb-1 flex gap-1 overflow-x-auto px-4 lg:px-0">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              tab === t ? "bubble-active text-cream" : "text-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-2">
        {showingNotifications ? (
          filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const Icon = NOTIFICATION_ICONS[notification.type];
              return (
                <div
                  key={notification.id}
                  className="flex items-start gap-3 border-b border-border px-4 py-3 lg:px-0"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${NOTIFICATION_ICON_COLOR[notification.type]}`}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink">
                      {notification.title}
                    </p>
                    <p className="text-xs text-muted">{notification.detail}</p>
                  </div>
                  <span className="shrink-0 text-[11px] text-muted">
                    {notification.timeAgo}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="px-4 py-10 text-center text-sm text-muted">
              No notifications found.
            </p>
          )
        ) : filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
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
