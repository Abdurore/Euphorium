"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, MessageCircle, User } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { unreadAlertsCount } from "@/lib/mock-data";

const ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Discover", icon: Compass },
] as const;

const ITEMS_RIGHT = [
  {
    href: "/messages",
    label: "Messages",
    icon: MessageCircle,
    badge: unreadAlertsCount,
  },
  { href: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const renderItem = (item: {
    href: string;
    label: string;
    icon: typeof Compass;
    badge?: number;
  }) => {
    const active = isActive(item.href);
    const Icon = item.icon;
    const className =
      "relative flex flex-1 flex-col items-center gap-1 py-2 transition-transform active:scale-95";
    const content = (
      <>
        <Icon
          size={22}
          strokeWidth={active ? 2.5 : 2}
          className={active ? "text-accent" : "text-muted"}
        />
        <span
          className={`text-[11px] ${
            active ? "font-semibold text-accent" : "text-muted"
          }`}
        >
          {item.label}
        </span>
        {!!item.badge && (
          <span className="absolute top-0 right-6 flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta px-1 text-[9px] font-semibold text-cream">
            {item.badge}
          </span>
        )}
      </>
    );
    // The active tab already points at this page — keep it inert.
    return active ? (
      <div key={item.href} aria-current="page" className={className}>
        {content}
      </div>
    ) : (
      <Link key={item.href} href={item.href} className={className}>
        {content}
      </Link>
    );
  };

  const sellActive = isActive("/sell");
  const sellBubble = (
    <div className="bubble-active -mt-7 flex h-14 w-14 items-center justify-center rounded-full ring-4 ring-[var(--color-night)]">
      <LogoMark size={30} />
    </div>
  );

  return (
    <nav
      aria-label="Primary"
      className="glass-panel fixed bottom-3 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-[406px] -translate-x-1/2 rounded-3xl px-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center">
        {ITEMS.map(renderItem)}
        {sellActive ? (
          <div
            aria-current="page"
            aria-label="Sell"
            className="flex flex-1 flex-col items-center justify-center"
          >
            {sellBubble}
          </div>
        ) : (
          <Link
            href="/sell"
            aria-label="Sell an item"
            className="flex flex-1 flex-col items-center justify-center transition-transform active:scale-95"
          >
            {sellBubble}
          </Link>
        )}
        {ITEMS_RIGHT.map(renderItem)}
      </div>
    </nav>
  );
}
