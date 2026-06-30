import React from "react";

import { cn } from "@/lib/utils";

type Testimonial = {
  image: string;
  name: string;
  role: string;
  quote: string;
  accent: "tertiary" | "cyan" | "blue";
};

const testimonials: Testimonial[] = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop",
    name: "André Martins",
    role: "Aprovado PF",
    quote:
      "Informática sempre foi meu pesadelo. Com o Luiz, tudo começou a fazer sentido. Acertei 9 de 10 na prova da PF.",
    accent: "tertiary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    name: "Carla Souza",
    role: "Aluna Auditoria",
    quote:
      "A didática dele é surreal. Ele explica Redes como se estivesse contando uma história. Recomendo demais!",
    accent: "cyan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=80",
    name: "Ricardo Ferreira",
    role: "Futuro Delegado",
    quote:
      "Mentoria que vale cada centavo. O Luiz não só ensina a matéria, mas como estudar informática de forma eficiente.",
    accent: "blue",
  },
];

const accentClasses = {
  tertiary: {
    border: "border-tertiary/40",
    glow: "shadow-[0_20px_70px_rgb(168_85_247_/_0.12)]",
    icon: "text-tertiary",
    avatar: "ring-tertiary/35",
  },
  cyan: {
    border: "border-cyan-glow/40",
    glow: "shadow-[0_20px_70px_rgb(34_211_238_/_0.12)]",
    icon: "text-cyan-glow",
    avatar: "ring-cyan-glow/35",
  },
  blue: {
    border: "border-tech-blue/40",
    glow: "shadow-[0_20px_70px_rgb(59_130_246_/_0.12)]",
    icon: "text-tech-blue",
    avatar: "ring-tech-blue/35",
  },
} satisfies Record<Testimonial["accent"], Record<string, string>>;

function TestimonialCard({ card }: { card: Testimonial }) {
  const accent = accentClasses[card.accent];

  return (
    <article
      className={cn(
        "mx-3 flex w-[min(22rem,calc(100vw-3rem))] shrink-0 flex-col rounded-3xl border bg-surface-container/90 p-5 shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:w-80 md:mx-4 md:w-96 md:p-6",
        accent.border,
        accent.glow,
      )}
    >
      <div className="flex items-center gap-3">
        <img
          className={cn(
            "size-12 rounded-full object-cover ring-2 ring-offset-2 ring-offset-deep-space",
            accent.avatar,
          )}
          src={card.image}
          alt={`${card.name}, ${card.role}`}
          loading="lazy"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-bold text-on-surface">{card.name}</h3>
            <span className={cn("material-symbols-outlined text-[18px] leading-none", accent.icon)}>
              verified
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
            {card.role}
          </p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-on-surface-variant md:text-base md:leading-7">
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
    <section className="overflow-hidden bg-deep-space py-section-gap-mobile md:py-section-gap-desktop">
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
        <h2 className="font-headline-xl text-headline-xl mb-4 max-w-3xl headline-balance">
          O que dizem os <span className="text-tertiary">Futuros Servidores</span>
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
