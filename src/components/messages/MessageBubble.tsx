import type { Message } from "@/types";

export function MessageBubble({ message }: { message: Message }) {
  return (
    <div
      className={`flex ${message.fromMe ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
          message.fromMe
            ? "rounded-br-sm bg-forest text-cream"
            : "rounded-bl-sm bg-surface text-ink"
        }`}
      >
        <p>{message.text}</p>
        <p
          className={`mt-1 text-[10px] ${
            message.fromMe ? "text-cream/60" : "text-muted"
          }`}
        >
          {message.timeAgo}
        </p>
      </div>
    </div>
  );
}
