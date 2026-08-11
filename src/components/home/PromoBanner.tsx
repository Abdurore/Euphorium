import Image from "next/image";

export function PromoBanner() {
  return (
    <div className="relative mx-4 mb-4 overflow-hidden rounded-2xl bg-forest">
      <div className="relative z-10 max-w-[55%] p-5">
        <p className="text-base font-bold text-cream">
          MR. EUPHORIUM <span className="text-gold">is LIVE</span> on Campus
          Tour!
        </p>
        <p className="mt-1 text-xs text-cream/80">Catch the vibe. Win big.</p>
        <button className="mt-3 rounded-full bg-cream px-4 py-2 text-xs font-semibold text-forest">
          Join the Movement
        </button>
      </div>
      <div className="absolute right-0 top-0 h-full w-40">
        <Image
          src="/mascot.jpg"
          alt="Mr. Euphorium"
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="mt-2 mb-3 flex justify-center gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full ${
              i === 0 ? "w-4 bg-gold" : "w-1.5 bg-cream/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
