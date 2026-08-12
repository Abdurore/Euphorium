import { Logo } from "@/components/ui/Logo";

export function TopHeader() {
  return (
    <div className="flex items-center justify-center px-4 pt-4 pb-2">
      <Logo size={30} withTagline small />
    </div>
  );
}
