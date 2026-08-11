import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { WalletCard } from "@/components/profile/WalletCard";
import { AccountGrid } from "@/components/profile/AccountGrid";
import { SettingsList } from "@/components/profile/SettingsList";
import { currentUser } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader
        name={currentUser.name}
        title={currentUser.title}
        handle={currentUser.handle}
        verified={currentUser.verified}
        trustScore={currentUser.trustScore}
      />
      <div className="space-y-4 pb-4">
        <WalletCard balance={currentUser.walletBalance} />
        <div>
          <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-muted">
            My Account
          </p>
          <AccountGrid />
        </div>
        <div>
          <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-muted">
            More
          </p>
          <SettingsList />
        </div>
      </div>
    </div>
  );
}
