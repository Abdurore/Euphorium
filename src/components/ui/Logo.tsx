import Image from "next/image";

/* The mark is a transparent PNG, so it sits directly on glass/dark/light
   surfaces with only a soft glow — no tile behind it. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative shrink-0 drop-shadow-[0_2px_8px_rgba(201,160,99,0.35)]"
    >
      <Image
        src="/logo-mark.png"
        alt="Euphorium"
        fill
        sizes={`${size * 2}px`}
        className="object-contain"
        loading="eager"
        fetchPriority="high"
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
        className={`font-semibold uppercase tracking-[0.2em] text-ink ${
          small ? "text-[13px]" : "text-base"
        }`}
      >
        Euphorium
      </span>
      {withTagline && (
        <span className="mt-1 text-[10px] tracking-wide text-accent">
          Building trust layer by layer.
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
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <Wordmark withTagline={withTagline} small={small} />
    </div>
  );
}
