import { Lock, ChevronRight, Heart } from "lucide-react";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { Gallery } from "@/components/product/Gallery";
import { SellerMiniCard } from "@/components/product/SellerMiniCard";
import { productDetail } from "@/lib/mock-data";

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function ProductDetailPage() {
  const product = productDetail;

  return (
    <div>
      <ScreenHeader
        title="Product Details"
        action={<Heart size={18} className="text-terracotta" />}
      />

      <div className="pt-4">
        <Gallery label={product.productImageLabel} />

        <div className="px-4 pt-4">
          <h1 className="text-lg font-bold text-ink">{product.title}</h1>
          <p className="mt-1 text-xl font-bold text-gold">
            {formatNaira(product.price)}
          </p>
        </div>

        <div className="mt-3">
          <SellerMiniCard seller={product.seller} />
        </div>

        <div className="mx-4 mt-3 flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-4 py-3">
          <Lock size={18} className="shrink-0 text-gold" />
          <p className="text-xs text-ink">
            <span className="font-semibold text-gold">
              Protected by Lockbox.
            </span>{" "}
            Your payment is securely held until you confirm receipt of your
            item.
          </p>
        </div>

        <div className="mx-4 mt-3 flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3 text-center text-xs">
          <div>
            <p className="font-semibold text-ink">
              {product.seller.successRate}%
            </p>
            <p className="text-muted">Success Rate</p>
          </div>
          <div>
            <p className="font-semibold text-ink">
              {product.seller.ratingCount?.toLocaleString()}
            </p>
            <p className="text-muted">Completed Orders</p>
          </div>
          <div>
            <p className="font-semibold text-ink">
              {product.seller.responseTime}
            </p>
            <p className="text-muted">Avg. Response</p>
          </div>
        </div>

        <div className="px-4 pt-4">
          <h2 className="text-sm font-semibold text-ink">Description</h2>
          <p className="mt-1 text-sm text-muted">{product.description}</p>
          <ul className="mt-2 space-y-1">
            {product.specs?.map((spec) => (
              <li
                key={spec}
                className="flex items-center gap-2 text-xs text-ink"
              >
                <ChevronRight size={12} className="text-gold" />
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <div className="sticky bottom-24 mt-5 flex gap-3 px-4">
          <button className="flex-1 rounded-full border border-gold py-3 text-sm font-semibold text-gold">
            Chat Seller
          </button>
          <button className="flex-1 rounded-full bg-forest py-3 text-sm font-semibold text-cream">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
