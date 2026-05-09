import { Button } from "@/components/ui/button";

type OpeningLetterProps = {
  greeting: string;
  onOpen: () => void;
};

export const OpeningLetter = ({ greeting, onOpen }: OpeningLetterProps) => (
  <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-moss-deep px-4 py-8 text-primary-foreground">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,hsl(var(--copper-glow)/0.18),transparent_42rem)]" />

    {/* Translucent watermark initials & date */}
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none">
      <span className="font-display text-[34vw] sm:text-[22vw] font-light leading-none text-pearl/[0.05] tracking-tight">
        G<span className="font-script align-middle mx-2">&amp;</span>M
      </span>
      <span className="mt-4 font-display text-base sm:text-xl uppercase tracking-[0.6em] text-pearl/10">
        2026 · 09 · 06
      </span>
    </div>

    <div className="relative w-full max-w-[560px] animate-reveal">
      {/* Envelope back/flap shadow */}
      <div className="absolute -inset-x-4 -top-2 -bottom-3 bg-[linear-gradient(180deg,hsl(var(--vellum)),hsl(38_30%_88%))] shadow-[0_30px_80px_hsl(var(--moss-deep)/0.5)]" />
      {/* Envelope flap (triangle) */}
      <div
        className="absolute -inset-x-4 -top-2 h-32 bg-[linear-gradient(180deg,hsl(38_36%_90%),hsl(38_30%_84%))]"
        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
      />
      <div className="absolute left-1/2 top-24 h-px w-32 -translate-x-1/2 bg-copper/30" />

      {/* Letter inside */}
      <div className="paper-grain relative mt-20 overflow-hidden border border-copper/40 bg-vellum px-6 py-10 text-center text-foreground shadow-[0_18px_50px_hsl(var(--moss-deep)/0.35)] sm:px-12 sm:py-14">
        <p className="font-display text-[10px] uppercase tracking-[0.55em] text-copper sm:text-xs">Kvietimas</p>
        <div className="mx-auto mt-3 h-px w-12 bg-copper/50" />

        <p className="mt-6 font-display italic text-2xl text-moss-deep sm:text-3xl">{greeting}</p>

        <p className="mt-5 font-display italic text-base leading-7 text-muted-foreground sm:text-lg">
          su didžiausiu džiaugsmu kviečiame Jus<br />dalyvauti mūsų santuokos šventėje
        </p>

        <h1 className="mt-7 font-display text-4xl font-light tracking-[0.06em] text-moss-deep sm:text-5xl">
          Matas <span className="font-script text-copper text-5xl sm:text-6xl align-middle">&amp;</span> Greta
        </h1>

        <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-moss">
          <span className="h-px w-8 bg-moss/40" />
          <p className="font-display text-xs uppercase tracking-[0.4em] sm:text-sm">2026 · 09 · 06</p>
          <span className="h-px w-8 bg-moss/40" />
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="copper-seal relative z-10 mx-auto mt-9 grid h-20 w-20 place-items-center rounded-full font-display italic text-xl text-copper-foreground transition-transform duration-300 hover:scale-105 active:scale-95 animate-seal sm:h-24 sm:w-24"
          aria-label="Atidaryti kvietimą"
        >
          <span>M&amp;G</span>
          <span className="absolute inset-2 rounded-full border border-pearl/40" />
        </button>

        <Button type="button" variant="moss" className="relative z-10 mt-5" onClick={onOpen}>
          Atverti kvietimą
        </Button>
      </div>
    </div>
  </div>
);
