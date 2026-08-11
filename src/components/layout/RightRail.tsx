import { VerifyBanner } from "@/components/home/VerifyBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { PromoBanner } from "@/components/home/PromoBanner";
import { SectionHeader } from "@/components/ui/Pill";

export function RightRail() {
  return (
    <aside className="sticky top-6 hidden h-fit w-80 shrink-0 flex-col gap-4 lg:flex">
      <VerifyBanner />
      <div className="rounded-2xl border border-border bg-surface py-4">
        <div className="mb-2">
          <SectionHeader title="Browse Categories" />
        </div>
        <CategoryGrid />
      </div>
      <PromoBanner />
    </aside>
  );
}
