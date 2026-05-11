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
    setTimeout(() => onOpen(), 3600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center overflow-y-auto px-4 py-8 text-foreground transition-opacity duration-700 ${
        opening ? "opacity-0" : "opacity-100"
      }`}
      style={{
        transitionDelay: opening ? "2.9s" : "0s",
        backgroundColor: "hsl(var(--background))",
        backgroundImage: [
          "radial-gradient(circle at 18% 18%, hsl(var(--moss-soft) / 0.55), transparent 28rem)",
          "radial-gradient(circle at 82% 24%, hsl(var(--copper) / 0.12), transparent 28rem)",
          "radial-gradient(circle at 25% 85%, hsl(var(--moss) / 0.28), transparent 34rem)",
          "linear-gradient(135deg, hsl(var(--background)), hsl(var(--secondary)))",
        ].join(","),
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 paper-grain" />

      <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 select-none text-right font-display text-[7.5rem] font-semibold leading-[0.78] tracking-normal text-moss-deep/10 lg:block xl:right-14 xl:text-[9rem]">
        <div>26</div>
        <div>09</div>
        <div>06</div>
      </div>

      <div className="relative w-full max-w-[560px] text-center animate-scale-in">
        <p className="mb-7 font-display text-xs uppercase tracking-[0.42em] text-moss-deep/70 sm:text-sm">
          Atverkite kvietimą
        </p>
        <div
          className="relative mx-auto w-full max-w-[470px] pb-8 pt-24 sm:pt-36"
          style={{ perspective: "1400px" }}
        >
          <div
            className={`lace-heart-invite pointer-events-none absolute left-1/2 top-0 z-30 w-[min(86vw,390px)] -translate-x-1/2 ${opening ? "is-open" : ""}`}
            aria-hidden={!opening}
          >
            <svg viewBox="0 0 500 455" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path
                d="M250 420C168 347 72 282 72 173c0-61 44-105 99-105 36 0 63 18 79 45 16-27 43-45 79-45 55 0 99 44 99 105 0 109-96 174-178 247Z"
                fill="hsl(var(--pearl) / 0.92)"
                stroke="hsl(var(--pearl))"
                strokeWidth="34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M250 420C168 347 72 282 72 173c0-61 44-105 99-105 36 0 63 18 79 45 16-27 43-45 79-45 55 0 99 44 99 105 0 109-96 174-178 247Z"
                fill="none"
                stroke="hsl(var(--copper) / 0.42)"
                strokeWidth="2"
                strokeDasharray="2 14"
              />
              <path
                d="M250 408C174 341 90 281 90 178c0-50 35-87 83-87 35 0 59 23 77 58 18-35 42-58 77-58 48 0 83 37 83 87 0 103-84 163-160 230Z"
                fill="none"
                stroke="hsl(var(--moss-deep) / 0.16)"
                strokeWidth="1.5"
              />
            </svg>
            <div className="relative z-10 mx-auto flex aspect-[1.1/1] w-full flex-col items-center justify-center px-14 pb-12 pt-16 text-center">
              <p className="font-display text-2xl font-semibold leading-tight text-moss-deep sm:text-3xl">{greeting}</p>
              <p className="mt-3 max-w-[250px] text-sm leading-6 text-muted-foreground sm:text-base">
                kviečiame kartu švęsti mūsų santuokos dieną.
              </p>
              <p className="mt-4 font-display text-sm uppercase tracking-[0.32em] text-copper">2026 09 06</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleOpen}
            disabled={opening}
            aria-label="Atverti voką"
            className="group relative z-20 block w-full disabled:pointer-events-none"
          >
            <div className="relative aspect-[5/3.35] w-full overflow-hidden rounded-sm border border-copper/25 bg-[linear-gradient(180deg,hsl(var(--pearl)),hsl(var(--vellum)))] shadow-[0_32px_80px_hsl(var(--moss-deep)/0.34)] transition-transform duration-700 group-hover:-translate-y-1">
              <div className="lace-band absolute left-0 right-0 top-0 h-16" />
              <div className="lace-band absolute bottom-0 left-0 right-0 h-12 rotate-180 opacity-80" />
              <div className="absolute inset-x-8 top-14 border-t border-copper/25" />
              <div className="absolute inset-5 top-10 rounded-sm border border-copper/15 bg-pearl/58" />
              <div className="absolute inset-x-8 top-20 z-30 text-center">
                <p className="font-display text-sm uppercase tracking-[0.36em] text-moss-deep/65">Vestuvinis kvietimas</p>
                <h1 className="mt-3 font-display text-4xl font-semibold leading-none text-moss-deep sm:text-5xl">
                  Greta ir Matas
                </h1>
                <p className="mt-3 font-body text-sm uppercase tracking-[0.24em] text-copper">spausti ir atverti</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1/2 w-full bg-[linear-gradient(32deg,transparent_49%,hsl(var(--copper)/0.18)_50%,transparent_51%),linear-gradient(-32deg,transparent_49%,hsl(var(--copper)/0.18)_50%,transparent_51%)]" />
            </div>

            <div
              className={`absolute -top-px left-0 right-0 z-20 origin-top transition-transform duration-1000 ${
                opening ? "[transform:rotateX(-180deg)]" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                aspectRatio: "5 / 1.7",
              }}
            >
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--pearl)),hsl(var(--vellum)))] shadow-[0_4px_14px_hsl(var(--moss-deep)/0.18)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
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
                <path d="M0,0 L250,170 L250,160 L8,-4 Z" fill="url(#scallops)" opacity="0.95" />
                <path d="M500,0 L250,170 L250,160 L492,-4 Z" fill="url(#scallops)" opacity="0.95" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
