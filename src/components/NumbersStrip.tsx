import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const duration = 2000;

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number text-5xl md:text-6xl font-extrabold font-headline-xl mb-2">
        {count}{suffix}
      </div>
    </div>
  );
}

export function NumbersStrip() {
  const stats = [
    { target: 500, suffix: '+', label: 'Alunos Preparados' },
    { target: 92, suffix: '%', label: 'Taxa de Aprovação' },
    { target: 7, suffix: '+', label: 'Anos de Experiência' },
    { target: 10, suffix: '', label: 'Concursos Atendidos' },
  ];

  return (
    <section className="section-gradient-2 py-20 md:py-24">
      <div className="section-shell">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber target={stat.target} suffix={stat.suffix} />
              <p className="text-on-surface-variant text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
