import Link from "next/link";
import { Bell } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Avatar } from "@/components/ui/Avatar";
import { IconButton } from "@/components/ui/IconButton";
import { currentUser, notifications } from "@/lib/mock-data";

export function TopHeader() {
  return (
    <div className="flex items-center justify-between px-4 pt-4 pb-2">
      <Logo size={40} withTagline />
      <div className="flex items-center gap-3">
        <Link href="/notifications">
          <IconButton badge={notifications.length}>
            <Bell size={19} />
          </IconButton>
        </Link>
        <Link href="/profile">
          <Avatar name={currentUser.name} size={40} ring />
        </Link>
      </div>
    </div>
  );
}
