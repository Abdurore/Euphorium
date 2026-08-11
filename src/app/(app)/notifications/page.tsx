import { Package, Lock, MessageCircle, Tag } from "lucide-react";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { notifications } from "@/lib/mock-data";
import type { NotificationType } from "@/types";

const ICONS: Record<NotificationType, typeof Package> = {
  order: Package,
  payment: Lock,
  message: MessageCircle,
  promo: Tag,
};

const ICON_COLOR: Record<NotificationType, string> = {
  order: "text-forest bg-forest/10",
  payment: "text-[#1D9BF0] bg-[#1D9BF0]/10",
  message: "text-terracotta bg-terracotta/10",
  promo: "text-gold bg-gold/10",
};

export default function NotificationsPage() {
  return (
    <div>
      <ScreenHeader title="Notifications" />
      <div className="mt-2">
        {notifications.map((notification) => {
          const Icon = ICONS[notification.type];
          return (
            <div
              key={notification.id}
              className="flex items-start gap-3 border-b border-border px-4 py-3"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${ICON_COLOR[notification.type]}`}
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
        })}
      </div>
    </div>
  );
}
