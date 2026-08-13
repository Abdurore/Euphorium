import Link from "next/link";
import {
  Package,
  Store,
  Heart,
  Bookmark,
  ShieldCheck,
  Lock,
  MapPin,
  UserPlus,
} from "lucide-react";

const ITEMS = [
  { icon: Package, label: "Orders", href: "/lockbox" },
  { icon: Store, label: "Selling", href: "/sell" },
  { icon: Heart, label: "Wishlist", href: "/discover" },
  { icon: Bookmark, label: "Saved", href: "/discover" },
  { icon: ShieldCheck, label: "Trust Score", href: "/profile/verify" },
  { icon: Lock, label: "Lockbox", href: "/lockbox" },
  { icon: MapPin, label: "Addresses", href: "/profile" },
  { icon: UserPlus, label: "Invites", href: "/profile" },
];

export function AccountGrid() {
  return (
    <div className="mx-4 grid grid-cols-4 gap-3">
      {ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-surface py-3"
        >
          <item.icon size={18} className="text-gold" />
          <span className="text-center text-[10px] text-ink">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
