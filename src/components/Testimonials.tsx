export function Testimonials() {
  return (
    <section className="py-section-gap-desktop bg-deep-space">
      <div className="max-w-container-max mx-auto px-gutter text-center mb-16">
        <h2 className="font-headline-xl text-headline-xl mb-4">O que dizem os <span className="text-tertiary">Futuros Servidores</span></h2>
      </div>
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container p-8 rounded-3xl border-l-4 border-tertiary italic relative">
          <span className="material-symbols-outlined absolute top-4 right-4 text-white/10 text-6xl">format_quote</span>
          <p className="text-on-surface-variant mb-6 relative z-10">"Informática sempre foi meu pesadelo. Com o Luiz, tudo começou a fazer sentido. Acertei 9 de 10 na prova da PF."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center font-bold text-tertiary">AM</div>
            <div>
              <div className="font-bold">André Martins</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">Aprovado PF</div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container p-8 rounded-3xl border-l-4 border-cyan-glow italic relative">
          <span className="material-symbols-outlined absolute top-4 right-4 text-white/10 text-6xl">format_quote</span>
          <p className="text-on-surface-variant mb-6 relative z-10">"A didática dele é surreal. Ele explica Redes como se estivesse contando uma história. Recomendo demais!"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-cyan-glow/20 flex items-center justify-center font-bold text-cyan-glow">CS</div>
            <div>
              <div className="font-bold">Carla Souza</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">Aluna Auditoria</div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container p-8 rounded-3xl border-l-4 border-tech-blue italic relative">
          <span className="material-symbols-outlined absolute top-4 right-4 text-white/10 text-6xl">format_quote</span>
          <p className="text-on-surface-variant mb-6 relative z-10">"Mentoria que vale cada centavo. O Luiz não só ensina a matéria, mas como estudar informática de forma eficiente."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center font-bold text-tech-blue">RF</div>
            <div>
              <div className="font-bold">Ricardo Ferreira</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">Futuro Delegado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
