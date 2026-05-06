import { Button } from "@/components/ui/button";

type OpeningLetterProps = {
  greeting: string;
  onOpen: () => void;
};

export const OpeningLetter = ({ greeting, onOpen }: OpeningLetterProps) => (
  <div className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-moss-deep px-4 text-primary-foreground">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,hsl(var(--copper-glow)/0.18),transparent_42rem)]" />

    <div className="relative w-full max-w-[640px] animate-reveal">
      <div className="absolute -inset-6 border border-copper/25" />
      <div className="absolute -inset-3 border border-copper/15" />
      <div className="paper-grain relative overflow-hidden border border-copper/40 bg-vellum px-6 py-12 text-center text-foreground shadow-[0_28px_90px_hsl(var(--moss-deep)/0.45)] sm:px-14 sm:py-16">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-pearl/60 to-transparent" />

        <p className="relative font-display text-xs uppercase tracking-[0.5em] text-copper">Kvietimas</p>
        <div className="relative mx-auto mt-4 h-px w-16 bg-copper/50" />

        <p className="relative mt-8 font-script text-4xl leading-tight text-moss-deep sm:text-5xl">{greeting}</p>

        <p className="relative mt-8 font-display italic text-lg leading-8 text-muted-foreground sm:text-xl">
          su didžiausiu džiaugsmu kviečiame Jus dalyvauti<br />mūsų santuokos šventėje
        </p>

        <h1 className="relative mt-8 font-display text-4xl font-medium tracking-[0.04em] text-moss-deep sm:text-5xl">
          Matas <span className="font-script text-copper text-5xl sm:text-6xl align-middle">&amp;</span> Greta
        </h1>

        <div className="relative mx-auto mt-8 flex items-center justify-center gap-4 text-moss">
          <span className="h-px w-10 bg-moss/40" />
          <p className="font-display text-sm uppercase tracking-[0.35em]">2026 · 09 · 06</p>
          <span className="h-px w-10 bg-moss/40" />
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="copper-seal relative z-10 mx-auto mt-12 grid h-24 w-24 place-items-center rounded-full text-center font-script text-2xl text-copper-foreground transition-transform duration-300 hover:scale-105 active:scale-95 animate-seal sm:h-28 sm:w-28"
          aria-label="Atidaryti kvietimą"
        >
          <span>M&amp;G</span>
          <span className="absolute inset-2 rounded-full border border-pearl/35" />
        </button>

        <Button type="button" variant="moss" className="relative z-10 mt-6" onClick={onOpen}>
          Atverti kvietimą
        </Button>
      </div>
    </div>
  </div>
);
