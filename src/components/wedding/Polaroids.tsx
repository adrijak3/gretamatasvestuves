import { Camera, Leaf } from "lucide-react";

type PolaroidProps = {
  name: string;
  role: string;
  rotate: string;
  imgSrc?: string;
};

const Polaroid = ({ name, role, rotate, imgSrc }: PolaroidProps) => (
  <figure
    className={`paper-grain relative w-[260px] shrink-0 border border-copper/25 bg-pearl p-3 pb-16 shadow-[0_28px_60px_hsl(var(--moss-deep)/0.28)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-0 sm:w-[300px] ${rotate}`}
  >
    <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(180deg,hsl(var(--moss-soft)/0.4),hsl(var(--vellum)))]">
      {imgSrc ? (
        <img src={imgSrc} alt={name} className="h-full w-full object-cover" />
      ) : (
        <div className="grid h-full w-full place-items-center text-moss-deep/40">
          <Camera className="h-10 w-10" aria-hidden="true" />
        </div>
      )}
    </div>
    <figcaption className="absolute inset-x-0 bottom-3 text-center">
      <p className="font-display text-3xl text-moss-deep" style={{ fontFamily: "'Caveat', cursive" }}>
        {name}
      </p>
      <p className="mt-0.5 text-[10px] uppercase tracking-[0.35em] text-copper/80">{role}</p>
    </figcaption>
  </figure>
);

const Vine = ({ className, flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 240 360"
    className={`${className ?? ""} ${flip ? "-scale-x-100" : ""}`}
    fill="none"
  >
    <path
      d="M30 10 C 90 60, 40 140, 110 190 S 60 290, 150 350"
      stroke="hsl(var(--moss-deep) / 0.55)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {[
      [70, 70],
      [98, 130],
      [125, 195],
      [88, 250],
      [148, 320],
    ].map(([cx, cy], i) => (
      <g key={i} transform={`translate(${cx} ${cy})`}>
        <circle r="6" fill="hsl(var(--copper) / 0.75)" />
        <circle r="2" fill="hsl(var(--pearl))" />
      </g>
    ))}
    {[
      [55, 95, -25],
      [115, 160, 30],
      [80, 220, -20],
      [135, 280, 25],
    ].map(([x, y, r], i) => (
      <g key={`l${i}`} transform={`translate(${x} ${y}) rotate(${r})`}>
        <path d="M0 0 C 14 -6 28 -2 30 12 C 18 18 4 14 0 0 Z" fill="hsl(var(--moss) / 0.55)" />
      </g>
    ))}
  </svg>
);

export const Polaroids = () => (
  <section className="relative overflow-hidden bg-vellum py-20">
    {/* decorative vines */}
    <Vine className="pointer-events-none absolute -left-4 top-6 hidden h-[360px] w-[200px] opacity-80 md:block" />
    <Vine
      flip
      className="pointer-events-none absolute -right-4 bottom-6 hidden h-[360px] w-[200px] opacity-80 md:block"
    />
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--copper)/0.08),transparent_60%)]" />

    <div className="container relative mx-auto px-6 text-center">
      <p className="font-display italic text-3xl uppercase tracking-[0.45em] text-copper">Prisiminimai</p>
      <h2 className="mt-2 font-display text-5xl font-semibold text-moss-deep sm:text-6xl">Mes</h2>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        Keletas akimirkų, kurias norime pasidalinti su jumis.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        <Polaroid name="Greta" role="Nuotaka" rotate="-rotate-6" />
        <div className="hidden text-copper sm:block">
          <Leaf className="h-8 w-8 -rotate-12" />
        </div>
        <Polaroid name="Matas" role="Jaunikis" rotate="rotate-6" />
      </div>
    </div>
  </section>
);
