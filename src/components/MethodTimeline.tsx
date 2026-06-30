export function MethodTimeline() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop bg-deep-space relative overflow-hidden"
      id="metodo"
    >
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <h2 className="font-headline-xl text-headline-xl mb-4 text-on-surface headline-balance">
            O Método <span className="text-cyan-glow">E.E.P.R.</span>
          </h2>
          <p className="text-on-surface-variant body-pretty">
            Desenvolvido para fixação máxima e zero esquecimento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
          <div className="relative z-10 space-y-4 rounded-3xl bg-surface-container/70 border border-cyan-glow/15 p-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-glow text-deep-space font-bold flex items-center justify-center ring-8 ring-cyan-glow/10">
              E
            </div>
            <h4 className="font-headline-md text-headline-md">Entendimento</h4>
            <p className="text-on-surface-variant text-sm">
              Contextualização dos conceitos fundamentais da tecnologia.
            </p>
          </div>
          <div className="relative z-10 space-y-4 rounded-3xl bg-surface-container/70 border border-cyan-glow/15 p-6 lg:mt-10">
            <div className="w-12 h-12 rounded-xl bg-cyan-glow text-deep-space font-bold flex items-center justify-center ring-8 ring-cyan-glow/10">
              E
            </div>
            <h4 className="font-headline-md text-headline-md">Explicação</h4>
            <p className="text-on-surface-variant text-sm">
              Simplificação de termos técnicos para a linguagem do concurso.
            </p>
          </div>
          <div className="relative z-10 space-y-4 rounded-3xl bg-surface-container/70 border border-tertiary/20 p-6">
            <div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary font-bold flex items-center justify-center ring-8 ring-tertiary/10">
              P
            </div>
            <h4 className="font-headline-md text-headline-md">Prática</h4>
            <p className="text-on-surface-variant text-sm">
              Resolução exaustiva de questões das principais bancas.
            </p>
          </div>
          <div className="relative z-10 space-y-4 rounded-3xl bg-surface-container/70 border border-tech-blue/20 p-6 lg:mt-10">
            <div className="w-12 h-12 rounded-xl bg-tech-blue text-white font-bold flex items-center justify-center ring-8 ring-tech-blue/10">
              R
            </div>
            <h4 className="font-headline-md text-headline-md">Revisão</h4>
            <p className="text-on-surface-variant text-sm">
              Flashcards e resumos focados no que cai de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
