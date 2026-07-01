export function FinalCall() {
  return (
    <section id="cta-final" className="section-gradient-2 py-section-expand relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      
      <div className="section-shell relative z-10 text-center max-w-4xl mx-auto space-y-12">
        
        {/* Header Text */}
        <div className="space-y-6">
          <h2 className="font-display-lg text-display-lg-mobile md:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight headline-balance">
            Pronto para garantir sua <span className="text-gradient-warm">vaga</span>?
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed body-pretty max-w-2xl mx-auto">
            Não deixe que a informática afaste você do seu sonho de se tornar servidor público. Matricule-se hoje e tenha acesso a um método testado por milhares de aprovados.
          </p>
        </div>

        {/* Pricing Card Centered */}
        <div className="max-w-md mx-auto">
          <div className="card-featured p-8 md:p-10 space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Top Badge (Typographic) */}
            <div className="flex justify-center mb-4">
              <span className="flex items-center gap-2 text-[11px] font-bold text-emerald tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></span>
                Acesso Imediato Liberado
              </span>
            </div>
            
            {/* Price block */}
            <div className="space-y-2 pt-2">
              <p className="text-on-surface-muted text-sm line-through">De R$ 397 por apenas</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-on-surface-variant text-base font-semibold">12x de</span>
                <span className="text-gradient-warm text-5xl md:text-6xl font-black font-headline-xl">R$ 19,70</span>
              </div>
              <p className="text-primary-blue font-medium text-sm pt-2">ou R$ 197 à vista no PIX com desconto</p>
            </div>
            
            <div className="h-px w-full bg-white/[0.08]" />
            
            {/* Checkout Action */}
            <div className="space-y-4 pt-2">
              <a href="#cursos" className="btn-primary w-full block text-center py-5 text-lg shadow-lg group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Quero Garantir Minha Vaga
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">
                    arrow_forward
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </a>
              
              <div className="flex items-center justify-center gap-2 text-on-surface-variant text-sm pt-1">
                <span className="material-symbols-outlined text-emerald text-lg" aria-hidden="true">
                  lock
                </span>
                Pagamento 100% Seguro
              </div>
            </div>
          </div>
          
          {/* Guarantee Badge outside the card */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <span className="material-symbols-outlined text-amber text-4xl" aria-hidden="true">
              workspace_premium
            </span>
            <div className="text-center">
              <p className="text-sm font-bold text-on-surface uppercase tracking-wider mb-1">
                Garantia Incondicional de 7 Dias
              </p>
              <p className="text-on-surface-muted text-xs leading-relaxed max-w-sm">
                Se você achar que a didática não se adapta ao seu estilo de estudo, devolvemos 100% do seu investimento. Sem burocracia.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
