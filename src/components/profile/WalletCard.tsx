export function WalletCard({ balance }: { balance: number }) {
  return (
    <div className="mx-4 flex items-center justify-between rounded-2xl bg-forest px-5 py-4">
      <div>
        <p className="text-xs text-cream/70">Wallet Balance</p>
        <p className="text-xl font-bold text-cream">
          ₦{balance.toLocaleString("en-NG")}
        </p>
      </div>
      <button className="rounded-full bg-cream px-4 py-2 text-xs font-semibold text-forest">
        Fund Wallet
      </button>
    </div>
  );
}
