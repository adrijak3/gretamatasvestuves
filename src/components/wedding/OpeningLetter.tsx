import { useState } from "react";

type OpeningLetterProps = {
  greeting: string;
  onOpen: () => void;
};

// Scalloped lace edge generator — repeated half-circles
const laceEdge = {
  background:
    "radial-gradient(circle at 12px 0, hsl(var(--pearl)) 11px, transparent 12px) repeat-x",
  backgroundSize: "24px 12px",
  filter: "drop-shadow(0 1px 0 hsl(var(--copper)/0.25))",
};

export const OpeningLetter = ({ greeting, onOpen }: OpeningLetterProps) => {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => onOpen(), 1700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center overflow-y-auto px-4 py-10 text-foreground transition-opacity duration-500 ${
        opening ? "opacity-0" : "opacity-100"
      }`}
      style={{
        transitionDelay: opening ? "1.2s" : "0s",
        backgroundImage: [
          "radial-gradient(circle at 14% 18%, hsl(340 45% 78% / 0.55), transparent 30rem)",
          "radial-gradient(circle at 82% 22%, hsl(28 55% 80% / 0.55), transparent 28rem)",
          "radial-gradient(circle at 18% 82%, hsl(95 28% 60% / 0.45), transparent 32rem)",
          "radial-gradient(circle at 86% 78%, hsl(355 50% 82% / 0.5), transparent 30rem)",
          "linear-gradient(135deg, hsl(38 38% 92%), hsl(28 32% 86%))",
        ].join(","),
      }}
    >
      {/* Drifting petal flecks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-3 w-3 rounded-full bg-pearl/60 blur-[2px] animate-float"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Right-side date column (sviesoforas) — desktop only */}
      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 select-none flex-col items-center gap-6 lg:flex">
        {["26", "09", "06"].map((n, i) => (
          <div
            key={i}
            className="grid h-24 w-24 place-items-center rounded-full border border-copper/40 bg-pearl/70 font-display text-4xl font-light tracking-wide text-moss-deep shadow-[0_8px_30px_hsl(var(--moss-deep)/0.18)] backdrop-blur"
            style={{ animation: `float 4s ease-in-out ${i * 0.3}s infinite` }}
          >
            {n}
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-[520px] text-center animate-scale-in">
        <p className="font-display italic tracking-[0.35em] text-xs uppercase text-moss-deep/70 sm:text-sm">
          You&apos;ve got mail from
        </p>
        <h1 className="mt-3 font-script text-5xl leading-[1.05] text-moss-deep sm:text-6xl">
          Greta &amp; Matas
        </h1>

        {/* Envelope */}
        <div
          className="relative mx-auto mt-10 w-full max-w-[440px]"
          style={{ perspective: "1400px" }}
        >
          <button
            type="button"
            onClick={handleOpen}
            disabled={opening}
            aria-label="Atverti voką"
            className="group relative block w-full"
          >
            {/* Envelope body */}
            <div className="relative aspect-[5/3.4] w-full overflow-hidden rounded-sm bg-[linear-gradient(180deg,hsl(38_36%_94%),hsl(38_28%_84%))] shadow-[0_30px_70px_hsl(var(--moss-deep)/0.35)]">
              {/* Inner letter peek */}
              <div className="absolute inset-3 rounded-sm bg-pearl/80" />
              {/* Monogram */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-script text-6xl text-moss-deep sm:text-7xl">
                  G<span className="mx-1 text-copper">&amp;</span>M
                </span>
              </div>
              {/* Side lace trim (left & right) */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-3"
                style={{
                  ...laceEdge,
                  backgroundSize: "12px 24px",
                  background:
                    "radial-gradient(circle at 0 12px, hsl(var(--pearl)) 11px, transparent 12px) repeat-y",
                }}
              />
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-3"
                style={{
                  background:
                    "radial-gradient(circle at 12px 12px, hsl(var(--pearl)) 11px, transparent 12px) repeat-y",
                  backgroundSize: "12px 24px",
                }}
              />
            </div>

            {/* Top flap (triangle) with lace edge */}
            <div
              className={`absolute -top-px left-0 right-0 origin-top transition-transform duration-1000 ${
                opening ? "[transform:rotateX(-180deg)]" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                aspectRatio: "5 / 1.7",
              }}
            >
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,hsl(38_38%_96%),hsl(38_30%_86%))] shadow-[0_4px_14px_hsl(var(--moss-deep)/0.18)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
              {/* Lace scallops along the two diagonal edges */}
              <svg
                viewBox="0 0 500 170"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern id="scallops" x="0" y="0" width="14" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="7" cy="2" r="6" fill="hsl(var(--pearl))" />
                  </pattern>
                </defs>
                {/* left diagonal */}
                <path d="M0,0 L250,170 L250,160 L8,-4 Z" fill="url(#scallops)" opacity="0.95" />
                {/* right diagonal */}
                <path d="M500,0 L250,170 L250,160 L492,-4 Z" fill="url(#scallops)" opacity="0.95" />
              </svg>
              {/* monogram on flap */}
              <div className="absolute inset-x-0 top-2 grid place-items-center">
                <span className="font-script text-2xl text-moss-deep">G&amp;M</span>
              </div>
            </div>
          </button>
        </div>

        <p className="mt-8 font-display tracking-[0.5em] text-[11px] uppercase text-moss-deep/70 sm:text-xs">
          Tap envelope to open
        </p>
        <p className="mt-3 font-display italic text-base text-moss-deep/80">{greeting}</p>
      </div>
    </div>
  );
};
