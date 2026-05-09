const petals = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index * 0.73) % 9}s`,
  speed: `${9 + (index % 7)}s`,
  drift: `${index % 2 === 0 ? 1 : -1}${24 + (index % 5) * 18}px`,
  size: `${8 + (index % 5) * 3}px`,
}));

export const Petals = () => (
  <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
    {petals.map((petal) => (
      <span
        key={petal.id}
        className="absolute -top-8 block rounded-[70%_20%_70%_20%] bg-pearl/80 shadow-[0_0_16px_hsl(var(--pearl)/0.45)] animate-petal"
        style={{
          left: petal.left,
          width: petal.size,
          height: `calc(${petal.size} * 1.45)`,
          animationDelay: petal.delay,
          ['--fall-speed' as string]: petal.speed,
          ['--drift' as string]: petal.drift,
        }}
      />
    ))}
  </div>
);