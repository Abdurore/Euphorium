"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, MessageCircle, User, PlusCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Avatar } from "@/components/ui/Avatar";
import { currentUser, unreadAlertsCount } from "@/lib/mock-data";

const NAV = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Discover", icon: Compass },
  {
    href: "/messages",
    label: "Messages",
    icon: MessageCircle,
    badge: unreadAlertsCount,
  },
  { href: "/profile", label: "Profile", icon: User },
] as const;

/** Renders a link, or an inert element when it would point at the current page. */
function SelfAwareLink({
  href,
  current,
  className,
  children,
  label,
}: {
  href: string;
  current: boolean;
  className: string;
  children: React.ReactNode;
  label?: string;
}) {
  if (current) {
    return (
      <div aria-current="page" aria-label={label} className={`${className} cursor-default`}>
        {children}
      </div>
    );
  }
  return (
    <Link href={href} aria-label={label} className={className}>
      {children}
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="glass-panel sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between rounded-none border-y-0 border-l-0 py-6 lg:flex">
      <div>
        <div className="px-5 pb-8">
          <SelfAwareLink
            href="/"
            current={pathname === "/"}
            className="block w-fit"
            label="Euphorium home"
          >
            <Logo size={40} />
          </SelfAwareLink>
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {NAV.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <SelfAwareLink
                key={item.href}
                href={item.href}
                current={active}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-accent/10 font-semibold text-accent shadow-[inset_0_1px_0_var(--glass-highlight)]"
                    : "text-ink hover:bg-surface/70"
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                {item.label}
                {"badge" in item && item.badge ? (
                  <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1.5 text-[11px] font-semibold text-cream">
                    {item.badge}
                  </span>
                ) : null}
              </SelfAwareLink>
            );
          })}
        </nav>
        <div className="px-3 pt-4">
          <SelfAwareLink
            href="/sell"
            current={isActive("/sell")}
            className="bubble-active flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-cream transition-transform active:scale-[0.98]"
          >
            <PlusCircle size={17} />
            Sell an Item
          </SelfAwareLink>
        </div>
      </div>

      <SelfAwareLink
        href="/profile"
        current={isActive("/profile")}
        className="mx-3 flex items-center gap-2 rounded-xl px-2 py-2 transition-colors hover:bg-surface/70"
      >
        <Avatar name={currentUser.name} size={36} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">
            {currentUser.name}
          </p>
          <p className="truncate text-xs text-muted">@{currentUser.handle}</p>
        </div>
      </SelfAwareLink>
    </aside>
  );
}
