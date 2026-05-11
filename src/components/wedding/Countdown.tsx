import { useEffect, useMemo, useState } from "react";

const target = new Date("2026-09-06T15:00:00+03:00").getTime();

const getTime = () => {
  const distance = Math.max(0, target - Date.now());
  return {
    dienos: Math.floor(distance / (1000 * 60 * 60 * 24)),
    valandos: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    sekundes: Math.floor((distance / 1000) % 60),
  };
};

export const Countdown = () => {
  const [time, setTime] = useState(getTime);
  const entries = useMemo(() => Object.entries(time), [time]);

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getTime()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="relative overflow-hidden border-y border-copper/20 bg-moss-deep py-16 text-primary-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent" />
      <div className="container relative mx-auto px-6 text-center">
        <p className="font-display italic text-3xl text-copper-glow sm:text-4xl tracking-[0.2em] uppercase">Skaičiuojame akimirkas</p>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {entries.map(([label, value]) => (
            <div key={label} className="paper-grain overflow-hidden border border-pearl/20 bg-pearl/10 p-5 backdrop-blur-sm transition-transform hover:-translate-y-1">
              <div className="font-display text-5xl font-semibold tabular-nums sm:text-6xl">{String(value).padStart(2, "0")}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-pearl/75">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};