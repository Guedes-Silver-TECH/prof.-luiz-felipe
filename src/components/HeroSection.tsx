import { CodeBackground } from './CodeBackground';

export function HeroSection() {
  return (
    <section
      className="relative pt-16 pb-16 md:pt-20 md:pb-24 hero-gradient overflow-hidden"
      id="inicio"
    >
      {/* Animated falling code background */}
      <CodeBackground />

      <div className="section-shell relative z-10 text-center max-w-4xl mx-auto space-y-8">
        
        {/* Typographic Overline (Replaces AI-style badge) */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary-blue/40" />
          <p className="text-primary-blue text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">school</span>
            Professor Mestre em Computação Aplicada
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary-blue/40" />
        </div>
        
        {/* Main Title */}
        <h1 className="font-display-lg text-display-lg-mobile md:text-[68px] md:leading-[1.05] tracking-tight md:tracking-tighter text-on-surface font-extrabold headline-balance">
          Informática nunca mais
          <br />
          <span className="text-gradient-warm">vai te reprovar.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto body-pretty text-lg leading-relaxed">
          Cursos completos, aulas isoladas e mentorias estratégicas desenvolvidas para você dominar informática e garantir sua aprovação no serviço público.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 max-w-md mx-auto">
          <a
            href="#cursos"
            className="btn-primary text-lg flex items-center justify-center gap-2 flex-1"
          >
            <span className="material-symbols-outlined" aria-hidden="true">rocket_launch</span>
            Começar Agora
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg flex items-center justify-center gap-2 flex-1"
          >
            <span className="material-symbols-outlined" aria-hidden="true">chat</span>
            Falar no WhatsApp
          </a>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center text-xs font-bold text-white border-2 border-deep-space">A</div>
              <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center text-xs font-bold text-amber-dark border-2 border-deep-space">C</div>
              <div className="w-8 h-8 rounded-full bg-emerald flex items-center justify-center text-xs font-bold text-white border-2 border-deep-space">R</div>
            </div>
            <span className="text-on-surface-variant text-sm">Mais de 500 alunos aprovados</span>
          </div>
          <div className="hidden sm:block text-on-surface-muted">|</div>
          <div className="flex items-center gap-1.5 text-amber text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">star</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">star</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">star</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">star</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">star</span>
            <span className="text-on-surface-variant ml-1">4.9/5 (Avaliação geral)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
