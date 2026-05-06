import { Button } from "@/components/ui/button";

type OpeningLetterProps = {
  greeting: string;
  onOpen: () => void;
};

export const OpeningLetter = ({ greeting, onOpen }: OpeningLetterProps) => (
  <div className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-moss-deep px-4 text-primary-foreground">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,hsl(var(--moss-soft)/0.28),transparent_38rem)]" />
    <div className="absolute left-1/2 top-16 -translate-x-1/2 font-display text-[8rem] leading-none text-pearl/5 sm:text-[14rem]">
      M&amp;G
    </div>

    <div className="relative w-full max-w-[720px] animate-reveal">
      <div className="absolute -inset-8 border border-copper/20" />
      <div className="paper-grain relative overflow-hidden border border-copper/40 bg-vellum px-6 py-10 text-center text-foreground shadow-[0_28px_90px_hsl(var(--moss-deep)/0.45)] sm:px-14 sm:py-16">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-pearl/70 to-transparent" />
        <p className="relative font-script text-5xl leading-tight text-moss-deep sm:text-7xl">{greeting}</p>
        <h1 className="relative mt-5 font-display text-5xl font-semibold leading-[0.9] tracking-normal text-moss-deep sm:text-7xl md:text-8xl">
          Matas <span className="font-script text-copper">&amp;</span> Greta
        </h1>
        <p className="relative mt-6 font-display text-2xl uppercase tracking-[0.22em] text-moss sm:text-3xl">2026 09 06</p>
        <p className="relative mt-2 text-sm uppercase tracking-[0.28em] text-muted-foreground">rugsėjo 6 • Vilnius</p>

        <button
          type="button"
          onClick={onOpen}
          className="copper-seal relative z-10 mx-auto mt-10 grid h-32 w-32 place-items-center rounded-full text-center font-display text-xl font-semibold italic text-copper-foreground transition-transform duration-300 hover:scale-105 active:scale-95 animate-seal sm:h-36 sm:w-36"
          aria-label="Atidaryti kvietimą"
        >
          <span className="text-4xl leading-none">M&amp;G</span>
          <span className="absolute inset-3 rounded-full border border-pearl/35" />
        </button>

        <Button type="button" variant="moss" className="relative z-10 mt-8" onClick={onOpen}>
          Atverti laišką
        </Button>
      </div>
    </div>
  </div>
);