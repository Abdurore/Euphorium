import { Plus } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { stories } from "@/lib/mock-data";

export function StoryRow() {
  return (
    <div className="hide-scrollbar mb-2 flex items-center gap-6 overflow-x-auto border-b border-border px-4 py-4">
      {stories.map((story, index) => {
        const featured = story.isCreate || index === 1;
        return (
          <div
            key={story.id}
            className="flex shrink-0 flex-col items-center gap-2"
          >
            <div
              className={`relative flex h-16 w-16 items-center justify-center rounded-full border-2 p-1 ${
                featured ? "border-gold" : "border-border"
              }`}
            >
              <Avatar name={story.label} size={56} />
              {story.isCreate && (
                <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-night bg-forest text-cream">
                  <Plus size={12} />
                </span>
              )}
            </div>
            <span className="text-center text-xs text-ink">
              {story.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
