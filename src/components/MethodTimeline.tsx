export function MethodTimeline() {
  return (
    <section className="py-section-gap-desktop bg-deep-space relative" id="metodo">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl mb-4 text-on-surface">O Método <span className="text-cyan-glow">E.E.P.R.</span></h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Desenvolvido para fixação máxima e zero esquecimento.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent -translate-y-1/2"></div>
          {/* Step 1 */}
          <div className="relative z-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-cyan-glow text-deep-space font-bold flex items-center justify-center mx-auto ring-8 ring-cyan-glow/10">01</div>
            <h4 className="font-headline-md text-headline-md">Entendimento</h4>
            <p className="text-on-surface-variant text-sm">Contextualização dos conceitos fundamentais da tecnologia.</p>
          </div>
          {/* Step 2 */}
          <div className="relative z-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-cyan-glow text-deep-space font-bold flex items-center justify-center mx-auto ring-8 ring-cyan-glow/10">02</div>
            <h4 className="font-headline-md text-headline-md">Explicação</h4>
            <p className="text-on-surface-variant text-sm">Simplificação de termos técnicos para a linguagem do concurso.</p>
          </div>
          {/* Step 3 */}
          <div className="relative z-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-cyan-glow text-deep-space font-bold flex items-center justify-center mx-auto ring-8 ring-cyan-glow/10">03</div>
            <h4 className="font-headline-md text-headline-md">Prática</h4>
            <p className="text-on-surface-variant text-sm">Resolução exaustiva de questões das principais bancas.</p>
          </div>
          {/* Step 4 */}
          <div className="relative z-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-cyan-glow text-deep-space font-bold flex items-center justify-center mx-auto ring-8 ring-cyan-glow/10">04</div>
            <h4 className="font-headline-md text-headline-md">Revisão</h4>
            <p className="text-on-surface-variant text-sm">Flashcards e resumos focados no que cai de verdade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
