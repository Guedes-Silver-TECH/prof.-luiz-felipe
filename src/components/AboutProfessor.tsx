import { useEffect, useRef, useState } from "react";

const youtubeVideoId = "WH5ihE-yRRw";
const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0&modestbranding=1`;
const youtubePosterUrl = `https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`;

function ScrollAutoplayVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || shouldLoadVideo) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "320px 0px",
        threshold: 0.15,
      },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <div
      ref={containerRef}
      className="aspect-video relative rounded-3xl overflow-hidden border border-cyan-glow/20 bg-surface-container shadow-2xl md:-ml-6"
    >
      {shouldLoadVideo ? (
        <iframe
          className="h-full w-full"
          src={youtubeEmbedUrl}
          title="Aula do Professor Luiz Felipe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <>
          <img
            className="h-full w-full object-cover"
            alt="Aula do Professor Luiz Felipe"
            src={youtubePosterUrl}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-deep-space/35">
            <span className="material-symbols-outlined flex size-16 items-center justify-center rounded-full border border-cyan-glow/30 bg-deep-space/80 text-4xl text-cyan-glow shadow-[0_0_42px_rgb(34_211_238_/_0.22)]">
              play_arrow
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export function AboutProfessor() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop bg-deep-space overflow-hidden"
      id="sobre"
    >
      <div className="section-shell grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="order-2 md:order-1 md:col-span-6">
          <ScrollAutoplayVideo />
        </div>
        <div className="order-1 md:order-2 md:col-span-6 space-y-6">
          <h2 className="font-headline-xl text-headline-xl text-on-surface headline-balance">
            Didática de <span className="text-cyan-glow">Mestre</span> aplicada ao seu sonho.
          </h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl body-pretty">
            Luiz Felipe é Professor Mestre com anos de experiência preparando candidatos para os
            concursos mais difíceis do Brasil. Sua abordagem une o rigor acadêmico com as
            necessidades práticas da prova.
          </p>
          <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl body-pretty">
            Esqueça decorebas inúteis. Aqui, você entende a lógica dos sistemas, a estrutura das
            redes e a mentalidade das bancas examinadoras. É informática ensinada por quem realmente
            domina a tecnologia.
          </p>
          <ul className="grid gap-4 sm:grid-cols-3 pt-2">
            <li className="flex items-start gap-3 rounded-2xl bg-surface-container/60 border border-white/5 p-4">
              <span className="material-symbols-outlined text-cyan-glow">check_circle</span>
              <span>Mestrado em Computação Aplicada</span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-surface-container/60 border border-white/5 p-4">
              <span className="material-symbols-outlined text-cyan-glow">check_circle</span>
              <span>Especialista em Segurança da Informação</span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-surface-container/60 border border-white/5 p-4">
              <span className="material-symbols-outlined text-cyan-glow">check_circle</span>
              <span>Anos de experiência em cursinhos preparatórios</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
