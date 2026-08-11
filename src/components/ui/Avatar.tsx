const PALETTE = ["#16332A", "#B5482E", "#C9A063", "#204a3c", "#8A857C"];

function colorFor(name: string) {
  const idx = name.charCodeAt(0) % PALETTE.length;
  return PALETTE[idx];
}

function initialsFor(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({
  name,
  size = 40,
  ring = false,
}: {
  name: string;
  size?: number;
  ring?: boolean;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: colorFor(name),
        fontSize: size * 0.4,
      }}
      className={`flex shrink-0 items-center justify-center rounded-full font-semibold text-cream ${
        ring ? "ring-2 ring-gold ring-offset-2 ring-offset-cream" : ""
      }`}
    >
      {initialsFor(name)}
    </div>
  );
}
