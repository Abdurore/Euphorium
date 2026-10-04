import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70dvh] items-center justify-center px-4">
      <div className="glass-card w-full max-w-sm rounded-3xl p-8 text-center">
        <Compass size={32} className="mx-auto mb-3 text-accent" />
        <h1 className="text-lg font-semibold tracking-tight text-ink">Page not found</h1>
        <p className="mt-1 text-sm text-muted">
          We couldn&rsquo;t find what you were looking for.
        </p>
        <Link
          href="/"
          className="bubble-active mt-5 inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-cream"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
