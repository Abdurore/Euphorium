import Image from "next/image";

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative shrink-0 overflow-hidden rounded-lg"
    >
      <Image
        src="/logo-mark.png"
        alt="Euphorium"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority
      />
    </div>
  );
}

export function Wordmark({
  withTagline = false,
  small = false,
}: {
  withTagline?: boolean;
  small?: boolean;
}) {
  return (
    <div className="flex flex-col leading-none">
      <span
        className={`font-bold tracking-tight text-ink ${
          small ? "text-sm" : "text-lg"
        }`}
      >
        EUPHORIUM
      </span>
      {withTagline && (
        <span className="text-[10px] text-terracotta mt-0.5">
          ◆ Building trust layer by layer. ◆
        </span>
      )}
    </div>
  );
}

export function Logo({
  size = 32,
  withTagline = false,
  small = false,
}: {
  size?: number;
  withTagline?: boolean;
  small?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <LogoMark size={size} />
      <Wordmark withTagline={withTagline} small={small} />
    </div>
  );
}
