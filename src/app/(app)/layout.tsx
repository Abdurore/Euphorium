import { BottomNav } from "@/components/layout/BottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col bg-night lg:max-w-none lg:flex-row lg:justify-center">
      <Sidebar />
      <div className="flex-1 pb-24 lg:mx-auto lg:w-full lg:max-w-5xl lg:px-8 lg:pb-10 lg:pt-6">
        {children}
      </div>
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
