import { Plus } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { stories } from "@/lib/mock-data";

export function StoryRow() {
  return (
    <div className="flex gap-4 overflow-x-auto overflow-y-visible px-4 pt-1 pb-4">
      {stories.map((story) => (
        <div
          key={story.id}
          className="flex w-[68px] shrink-0 flex-col items-center gap-1.5"
        >
          <div className="relative">
            <Avatar name={story.label} size={56} ring />
            {story.isCreate && (
              <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-cream bg-forest text-cream">
                <Plus size={12} />
              </span>
            )}
          </div>
          <span className="text-center text-[11px] leading-tight text-ink">
            {story.label}
          </span>
        </div>
      ))}
    </div>
  );
}
