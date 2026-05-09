import { useState } from "react";
import { Button } from "@/components/ui/button";

type OpeningLetterProps = {
  greeting: string;
  onOpen: () => void;
};

export const OpeningLetter = ({ greeting, onOpen }: OpeningLetterProps) => {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // Wait for flap + letter rise animation before unmounting
    setTimeout(() => onOpen(), 1900);
  };

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-moss-deep px-4 py-8 text-primary-foreground transition-opacity duration-500 ${
        opening ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDelay: opening ? "1.4s" : "0s" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,hsl(var(--copper-glow)/0.2),transparent_42rem)]" />

      {/* Translucent watermark initials & date */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none">
        <span className="font-display text-[34vw] sm:text-[22vw] font-light leading-none text-pearl/[0.05] tracking-tight animate-float">
          G<span className="font-script align-middle mx-2">&amp;</span>M
        </span>
        <span className="mt-4 font-display text-base sm:text-xl uppercase tracking-[0.6em] text-pearl/10">
          2026 · 09 · 06
        </span>
      </div>

      <div
        className="relative w-full max-w-[560px] animate-scale-in"
        style={{ perspective: "1400px" }}
      >
        {/* Envelope body */}
        <div className="relative">
          {/* Back panel */}
          <div className="absolute -inset-x-4 -top-2 -bottom-3 bg-[linear-gradient(180deg,hsl(var(--vellum)),hsl(38_30%_84%))] shadow-[0_30px_80px_hsl(var(--moss-deep)/0.5)]" />

          {/* Letter rises out of envelope */}
          <div
            className={`paper-grain relative mt-20 overflow-hidden border border-copper/40 bg-vellum px-6 py-10 text-center text-foreground shadow-[0_18px_50px_hsl(var(--moss-deep)/0.35)] sm:px-12 sm:py-14 ${
              opening ? "animate-letter-rise" : "animate-fade-in-slow"
            }`}
          >
            <p className="font-display text-[10px] uppercase tracking-[0.55em] text-copper sm:text-xs animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Kvietimas
            </p>
            <div className="mx-auto mt-3 h-px w-12 bg-copper/50" />

            <p className="mt-6 font-display italic text-2xl text-moss-deep sm:text-3xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
              {greeting}
            </p>

            <p className="mt-5 font-display italic text-base leading-7 text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.7s" }}>
              su didžiausiu džiaugsmu kviečiame Jus<br />dalyvauti mūsų santuokos šventėje
            </p>

            <h1 className="mt-7 font-display text-4xl font-light tracking-[0.06em] text-moss-deep sm:text-5xl animate-fade-in" style={{ animationDelay: "0.9s" }}>
              Matas <span className="font-script text-copper text-5xl sm:text-6xl align-middle">&amp;</span> Greta
            </h1>

            <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-moss animate-fade-in" style={{ animationDelay: "1.1s" }}>
              <span className="h-px w-8 bg-moss/40" />
              <p className="font-display text-xs uppercase tracking-[0.4em] sm:text-sm">2026 · 09 · 06</p>
              <span className="h-px w-8 bg-moss/40" />
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "1.3s" }}>
              <button
                type="button"
                onClick={handleOpen}
                disabled={opening}
                className="copper-seal relative z-10 mx-auto mt-9 grid h-20 w-20 place-items-center rounded-full font-display italic text-xl text-copper-foreground transition-transform duration-300 hover:scale-110 active:scale-95 animate-seal sm:h-24 sm:w-24"
                aria-label="Atidaryti kvietimą"
              >
                <span>M&amp;G</span>
                <span className="absolute inset-2 rounded-full border border-pearl/40" />
              </button>

              <Button
                type="button"
                variant="moss"
                className="relative z-10 mt-5 hover:scale-105 transition-transform"
                onClick={handleOpen}
                disabled={opening}
              >
                Atverti kvietimą
              </Button>
            </div>
          </div>

          {/* Envelope flap (opens upward) */}
          <div
            className={`absolute -inset-x-4 -top-2 h-32 origin-top bg-[linear-gradient(180deg,hsl(38_36%_92%),hsl(38_30%_82%))] shadow-[0_4px_12px_hsl(var(--moss-deep)/0.2)] z-20 ${
              opening ? "animate-flap-open" : ""
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          />
          {/* Wax seal on flap centerline */}
          {!opening && (
            <div className="absolute left-1/2 top-[110px] z-30 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full copper-seal grid place-items-center text-[10px] font-display italic text-copper-foreground">
              <span>M&amp;G</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
