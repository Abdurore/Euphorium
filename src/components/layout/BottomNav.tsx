"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, MessageCircle, User, Plus } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";

const ITEMS = [
  { href: "/", label: "Home", icon: null, useLogo: true },
  { href: "/discover", label: "Discover", icon: Compass },
] as const;

const ITEMS_RIGHT = [
  { href: "/messages", label: "Messages", icon: MessageCircle, badge: 2 },
  { href: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  const renderItem = (item: {
    href: string;
    label: string;
    icon: typeof Compass | null;
    badge?: number;
    useLogo?: boolean;
  }) => {
    const active =
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
    const Icon = item.icon;
    return (
      <Link
        key={item.href}
        href={item.href}
        className="relative flex flex-1 flex-col items-center gap-1 py-2"
      >
        {item.useLogo ? (
          <div
            className={`rounded-full transition-all ${
              active ? "ring-2 ring-forest" : "opacity-70"
            }`}
          >
            <LogoMark size={22} />
          </div>
        ) : (
          Icon && (
            <Icon
              size={22}
              strokeWidth={active ? 2.5 : 2}
              className={active ? "text-forest" : "text-muted"}
            />
          )
        )}
        <span
          className={`text-[11px] ${
            active ? "font-semibold text-forest" : "text-muted"
          }`}
        >
          {item.label}
        </span>
        {!!item.badge && (
          <span className="absolute top-0 right-6 flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta px-1 text-[9px] font-semibold text-cream">
            {item.badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 border-t border-border bg-surface px-2 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center">
        {ITEMS.map(renderItem)}
        <Link
          href="/sell"
          className="flex flex-1 flex-col items-center justify-center"
        >
          <div className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-cream bg-forest shadow-lg">
            <Plus size={26} className="text-cream" />
          </div>
        </Link>
        {ITEMS_RIGHT.map(renderItem)}
      </div>
    </nav>
  );
}
