"use client";

import { useState } from "react";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { LockboxSummaryCard } from "@/components/lockbox/LockboxSummaryCard";
import { OrderStatusRow } from "@/components/lockbox/OrderStatusRow";
import { HowItWorksStrip } from "@/components/lockbox/HowItWorksStrip";
import { orders } from "@/lib/mock-data";

const TABS = ["Active", "Completed", "Disputes"] as const;

export default function LockboxPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Active");

  const filtered = orders.filter((order) =>
    tab === "Active"
      ? order.status !== "completed"
      : tab === "Completed"
      ? order.status === "completed"
      : false
  );

  const total = orders
    .filter((o) => o.status !== "completed")
    .reduce((sum, o) => sum + o.amount, 0);

  return (
    <div>
      <ScreenHeader title="Lockbox" />
      <div className="pt-4">
        <LockboxSummaryCard total={total} />

        <div className="mx-4 mt-4 flex rounded-full bg-surface p-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-full py-2 text-xs font-semibold transition-colors ${
                tab === t ? "bg-forest text-cream" : "text-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-3">
          {filtered.length > 0 ? (
            filtered.map((order) => (
              <OrderStatusRow key={order.id} order={order} />
            ))
          ) : (
            <p className="px-4 py-8 text-center text-sm text-muted">
              No {tab.toLowerCase()} disputes.
            </p>
          )}
        </div>

        <div className="my-4">
          <HowItWorksStrip />
        </div>
      </div>
    </div>
  );
}
