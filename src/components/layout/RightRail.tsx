import { VerifyBanner } from "@/components/home/VerifyBanner";

const TRENDING = [
  {
    tag: "#UnilagTechFest",
    context: "Campus Events · Trending",
    posts: "1,245 posts",
  },
  {
    tag: "Vintage Thrift Haul",
    context: "Fashion · Lagos",
    posts: "890 posts",
  },
  {
    tag: "MacBook Pro M1",
    context: "Gadgets · Trending",
    posts: "542 posts",
  },
];

const COMMUNITIES = [
  { id: "mnm-fashion", label: "M&M Fashion", initials: "MF" },
  { id: "techie-hub", label: "Techie Hub", initials: "TH" },
  { id: "gadget-plug", label: "Gadget Plug", initials: "GP" },
];

const FOOTER_LINKS = [
  "About",
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
];

export function RightRail() {
  return (
    <aside className="hidden h-fit w-80 shrink-0 flex-col gap-6 lg:sticky lg:top-24 lg:flex">
      <VerifyBanner />

      <div className="floating-card rounded-2xl bg-night p-6">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white">
          Trending Near You
        </h4>
        <div className="space-y-5">
          {TRENDING.map((item) => (
            <div key={item.tag}>
              <p className="mb-1 text-xs text-night-muted">{item.context}</p>
              <p className="text-sm font-semibold text-white">{item.tag}</p>
              <p className="mt-1 text-xs text-night-muted">{item.posts}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="floating-card rounded-2xl bg-night p-6">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white">
          Suggested Communities
        </h4>
        <div className="space-y-4">
          {COMMUNITIES.map((community) => (
            <div key={community.id} className="group flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white">
                {community.initials}
              </div>
              <p className="truncate text-sm font-semibold text-white transition-colors group-hover:text-night-muted">
                {community.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 px-2 text-xs text-night-muted">
        {FOOTER_LINKS.map((link) => (
          <a key={link} href="#" className="hover:underline">
            {link}
          </a>
        ))}
        <span>© 2026 Euphorium.</span>
      </div>
    </aside>
  );
}
