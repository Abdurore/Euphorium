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
    <div className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-cream/95 px-4 py-3 backdrop-blur">
      <button
        onClick={() => router.back()}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-surface"
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
