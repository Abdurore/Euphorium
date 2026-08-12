import { Logo } from "@/components/ui/Logo";

export function TopHeader() {
  return (
    <div className="glass-header sticky top-0 z-30 flex items-center px-4 pt-4 pb-2">
      <Logo size={30} withTagline small />
    </div>
  );
}
