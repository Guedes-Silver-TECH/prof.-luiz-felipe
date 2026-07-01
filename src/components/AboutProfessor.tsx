import { useState } from "react";

const youtubeVideoId = "WH5ihE-yRRw";
const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=0&playsinline=1&controls=1&rel=0&modestbranding=1`;
const youtubePosterUrl = `https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`;

function ClickToPlayVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-surface shadow-2xl"
    >
      {/* Top Window Bar simulating premium player */}
      <div className="bg-[#151e2e] border-b border-white/[0.05] px-4 py-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#10b981]/80 inline-block" />
        </div>
        <span className="text-xs text-on-surface-variant font-mono tracking-wide">didatica_de_mestre.mp4</span>
        <div className="w-10" />
      </div>

      {/* Video Content - click container to trigger load */}
      <div 
        className="aspect-video relative bg-black cursor-pointer group"
        onClick={() => !isPlaying && setIsPlaying(true)}
      >
        {isPlaying ? (
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
              className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              alt="Aula do Professor Luiz Felipe"
              src={youtubePosterUrl}
            />
            {/* Play Button Overlay - nudged with pl-1 for perfect centering */}
            <div className="absolute inset-0 flex items-center justify-center bg-deep-space/45 group-hover:bg-deep-space/30 transition-colors">
              <span
                className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-deep-space/80 text-white shadow-2xl group-hover:scale-110 group-hover:border-amber group-hover:text-amber transition-all duration-300"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-4xl pl-1 translate-x-[2px] leading-none">
                  play_arrow
                </span>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function AboutProfessor() {
  const credentials = [
    { title: "Mestrado Acadêmico", desc: "Mestre em Computação Aplicada", icon: "school" },
    { title: "Especialista Operacional", desc: "Segurança da Informação e Redes", icon: "security" },
    { title: "Resultados Reais", desc: "Anos de aprovações em concursos", icon: "verified" },
  ];

  return (
    <section
      className="py-section-expand section-gradient-2 overflow-hidden"
      id="sobre"
    >
      <div className="section-shell space-y-12">
        
        {/* Upper row: Grid with Video (Left) and Text (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Side: Video Console Player */}
          <div className="md:col-span-7 lg:col-span-8">
            <ClickToPlayVideo />
          </div>
          
          {/* Right Side: Bio details */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h2 className="font-display-lg text-3xl lg:text-4xl text-on-surface font-extrabold headline-balance leading-tight">
                Didática de <span className="text-gradient-warm">Mestre</span> aplicada ao seu sonho.
              </h2>
              
              {/* Highlighted lead text */}
              <p className="border-l-2 border-primary-blue pl-4 text-on-surface text-base lg:text-lg font-medium leading-relaxed italic">
                "Informática não precisa ser decoreba. Se você entender a lógica por trás dos sistemas, nunca mais vai errar questões de banca."
              </p>
            </div>

            <p className="text-on-surface-variant text-sm leading-relaxed body-pretty">
              Luiz Felipe une rigor acadêmico à vivência prática dos concursos mais difíceis do país. A metodologia foca em clareza conceitual, mapeamento dos vícios das bancas examinadoras e atalhos de resolução rápida.
            </p>
          </div>
        </div>
        
        {/* Bottom row: Credential cards placed horizontally below */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          {credentials.map((cred, idx) => (
            <div 
              key={idx} 
              className="card-gradient p-5 flex items-center gap-4 hover:translate-y-[-2px] transition-transform"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-blue text-xl" aria-hidden="true">
                  {cred.icon}
                </span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-muted uppercase font-bold tracking-wider mb-0.5">
                  {cred.title}
                </p>
                <p className="text-on-surface text-xs font-semibold leading-tight">
                  {cred.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
