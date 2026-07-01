import React from "react";

import { cn } from "@/lib/utils";

type Testimonial = {
  initial: string;
  name: string;
  role: string;
  quote: string;
  avatarBg: string;
};

const testimonials: Testimonial[] = [
  {
    initial: "A",
    name: "André Martins",
    role: "Aprovado PF",
    quote:
      "Informática sempre foi meu pesadelo. Com o Luiz, tudo começou a fazer sentido. Acertei 9 de 10 na prova da PF.",
    avatarBg: "bg-primary-blue",
  },
  {
    initial: "C",
    name: "Carla Souza",
    role: "Aluna Auditoria",
    quote:
      "A didática dele é surreal. Ele explica Redes como se estivesse contando uma história. Recomendo demais!",
    avatarBg: "bg-amber",
  },
  {
    initial: "R",
    name: "Ricardo Ferreira",
    role: "Futuro Delegado",
    quote:
      "Mentoria que vale cada centavo. O Luiz não só ensina a matéria, mas como estudar informática de forma eficiente.",
    avatarBg: "bg-emerald",
  },
];

function TestimonialCard({ card }: { card: Testimonial }) {
  return (
    <article className="mx-3 flex w-[min(22rem,calc(100vw-3rem))] shrink-0 flex-col card-gradient p-5 rounded-2xl border-surface-border sm:w-80 md:mx-4 md:w-96 md:p-6">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white",
            card.avatarBg,
          )}
          aria-hidden="true"
        >
          {card.initial}
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-on-surface">{card.name}</h3>
          <p className="text-xs text-on-surface-muted uppercase tracking-wider">
            {card.role}
          </p>
        </div>
      </div>
      <p className="mt-5 text-on-surface-variant text-sm leading-relaxed">
        "{card.quote}"
      </p>
    </article>
  );
}

function MarqueeRow({
  data,
  reverse = false,
  speed = 28,
}: {
  data: Testimonial[];
  reverse?: boolean;
  speed?: number;
}) {
  const rowItems = React.useMemo(() => Array.from({ length: 4 }, () => data).flat(), [data]);

  return (
    <div className="relative mx-auto w-full max-w-[calc(100vw-2rem)] overflow-hidden isolate md:max-w-[calc(100vw-12rem)]">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-deep-space to-transparent md:w-32" />
      <div
        className={cn(
          "testimonial-marquee-track flex w-max transform-gpu",
          reverse ? "pb-10 pt-4" : "pb-4 pt-10",
        )}
        style={{
          animation: `${reverse ? "testimonialMarqueeScrollReverse" : "testimonialMarqueeScroll"} ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0">
          {rowItems.map((card, index) => (
            <TestimonialCard key={`${card.name}-a-${index}`} card={card} />
          ))}
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          {rowItems.map((card, index) => (
            <TestimonialCard key={`${card.name}-b-${index}`} card={card} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-deep-space to-transparent md:w-32" />
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden section-gradient-3 py-section-gap-mobile md:py-section-gap-desktop">
      <style>{`
        @keyframes testimonialMarqueeScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes testimonialMarqueeScrollReverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-marquee-track {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>

      <div className="section-shell mb-6 md:mb-8">
        <h2 className="font-headline-xl text-headline-xl mb-4 max-w-3xl headline-balance text-on-surface">
          O que dizem nossos alunos
        </h2>
      </div>

      <div className="flex flex-col gap-0">
        <MarqueeRow data={testimonials} speed={120} />
        <MarqueeRow
          data={[testimonials[1], testimonials[2], testimonials[0]]}
          reverse
          speed={136}
        />
      </div>
    </section>
  );
}
