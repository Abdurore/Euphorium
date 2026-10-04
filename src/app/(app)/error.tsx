"use client";

import { TriangleAlert } from "lucide-react";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[70dvh] items-center justify-center px-4">
      <div className="glass-card w-full max-w-sm rounded-3xl p-8 text-center">
        <TriangleAlert size={32} className="mx-auto mb-3 text-terracotta" />
        <h1 className="text-lg font-semibold tracking-tight text-ink">Something went wrong</h1>
        <p className="mt-1 text-sm text-muted">Please try again in a moment.</p>
        <button
          type="button"
          onClick={reset}
          className="bubble-active mt-5 rounded-full px-6 py-2.5 text-sm font-semibold text-cream"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
