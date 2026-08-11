"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, MessageCircle, User, PlusCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Avatar } from "@/components/ui/Avatar";
import { currentUser } from "@/lib/mock-data";

const NAV = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Discover", icon: Compass },
  { href: "/messages", label: "Messages", icon: MessageCircle, badge: 2 },
  { href: "/profile", label: "Profile", icon: User },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-border py-6 lg:flex">
      <div>
        <div className="px-4 pb-6">
          <Logo size={40} />
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-forest/10 font-semibold text-forest"
                    : "text-ink hover:bg-surface"
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                {item.label}
                {"badge" in item && item.badge ? (
                  <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1.5 text-[11px] font-semibold text-cream">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="px-3 pt-4">
          <Link
            href="/sell"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-forest py-3 text-sm font-semibold text-cream"
          >
            <PlusCircle size={17} />
            Sell an Item
          </Link>
        </div>
      </div>

      <Link
        href="/profile"
        className="mx-3 flex items-center gap-2 rounded-xl px-2 py-2 hover:bg-surface"
      >
        <Avatar name={currentUser.name} size={36} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">
            {currentUser.name}
          </p>
          <p className="truncate text-xs text-muted">@{currentUser.handle}</p>
        </div>
      </Link>
    </aside>
  );
}
