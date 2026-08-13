import { Package } from "lucide-react";
import type { Order, OrderStatus } from "@/types";

const STATUS_COLOR: Record<OrderStatus, string> = {
  waiting: "text-muted",
  in_transit: "text-[#1D9BF0]",
  awaiting_confirmation: "text-gold",
  completed: "text-[#6FCF97]",
};

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function OrderStatusRow({ order }: { order: Order }) {
  return (
    <div className="flex items-start gap-3 border-b border-border px-4 py-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface">
        <Package size={20} className="text-gold" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-muted">Order #{order.id}</p>
        <p className="text-sm font-semibold text-ink">{order.itemLabel}</p>
        <p className={`text-xs font-medium ${STATUS_COLOR[order.status]}`}>
          {order.statusLabel}
        </p>
        {typeof order.progress === "number" && (
          <div className="mt-1.5 h-1 w-full max-w-40 rounded-full bg-border">
            <div
              className="h-1 rounded-full bg-[#1D9BF0]"
              style={{ width: `${order.progress}%` }}
            />
          </div>
        )}
        <p className="mt-1 text-[11px] text-muted">{order.meta}</p>
      </div>
      <p className="shrink-0 text-sm font-bold text-ink">
        {formatNaira(order.amount)}
      </p>
    </div>
  );
}
