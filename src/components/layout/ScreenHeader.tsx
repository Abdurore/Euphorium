"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

export function ScreenHeader({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="glass-header sticky top-0 z-30 flex items-center justify-between border-b border-border px-4 py-3">
      <button
        onClick={() => router.back()}
        className="glass-panel flex h-9 w-9 items-center justify-center rounded-full"
        aria-label="Go back"
      >
        <ChevronLeft size={20} />
      </button>
      <h1 className="text-base font-semibold text-ink">{title}</h1>
      <div className="flex h-9 w-9 items-center justify-center">
        {action ?? null}
      </div>
    </div>
  );
}
