export function HeroSection() {
  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-16 binary-bg mt-[-30px]" id="inicio">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            Aprenda informática com <span className="text-cyan-glow">método</span>, clareza e foco na sua <span className="text-tertiary">aprovação</span>.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Cursos, aulas isoladas e mentorias estratégicas projetadas para você dominar a tecnologia e garantir sua vaga no serviço público.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-tertiary text-on-tertiary font-bold px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform glow-tertiary">
              <span className="material-symbols-outlined">rocket_launch</span>
              Começar Agora
            </button>
            <button className="border-2 border-cyan-glow text-cyan-glow font-bold px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 hover:bg-cyan-glow/10 transition-colors">
              <span className="material-symbols-outlined">chat</span>
              Falar no WhatsApp
            </button>
          </div>
        </div>
        <div className="md:col-span-5 relative flex justify-center">
          <div className="absolute -z-10 w-full h-full bg-cyan-glow/10 blur-[120px] rounded-full"></div>
          <div className="relative w-full max-w-[480px]">
            <img
              className="w-full aspect-square object-cover object-center rounded-2xl border-4 border-cyan-glow/20 shadow-2xl relative z-10"
              alt="A professional portrait of Professor Luiz Felipe"
              src="image.png"
            />
            {/* Floating Tech Elements */}
            <div className="absolute -top-6 -left-6 bg-deep-space/80 backdrop-blur-md p-4 rounded-xl border border-cyan-glow/30 animate-float">
              <span className="material-symbols-outlined text-cyan-glow text-4xl">shield</span>
            </div>
            <div className="absolute top-1/2 -right-10 bg-deep-space/80 backdrop-blur-md p-4 rounded-xl border border-tertiary/30 animate-float" style={{ animationDelay: "1s" }}>
              <span className="material-symbols-outlined text-tertiary text-4xl">code</span>
            </div>
            <div className="absolute -bottom-6 left-1/4 bg-deep-space/80 backdrop-blur-md p-4 rounded-xl border border-tech-blue/30 animate-float" style={{ animationDelay: "2s" }}>
              <span className="material-symbols-outlined text-tech-blue text-4xl">terminal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
