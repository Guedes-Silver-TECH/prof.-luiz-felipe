export function SubjectsGrid() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline-xl text-headline-xl mb-4 headline-balance">
              Domine todos os <span className="text-cyan-glow">Tópicos</span>
            </h2>
            <p className="text-on-surface-variant body-pretty">
              Do básico ao avançado, cobrimos 100% do que as bancas exigem.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          <div className="px-6 py-4 rounded-xl bg-deep-space border border-cyan-glow/20 flex items-center gap-3 hover:bg-cyan-glow/10 transition-colors cursor-default group lg:col-span-3">
            <span className="material-symbols-outlined text-cyan-glow">window</span>
            <span className="font-semibold">Windows 10/11</span>
          </div>
          <div className="px-6 py-4 rounded-xl bg-deep-space border border-cyan-glow/20 flex items-center gap-3 hover:bg-cyan-glow/10 transition-colors cursor-default lg:col-span-4">
            <span className="material-symbols-outlined text-cyan-glow">terminal</span>
            <span className="font-semibold">Linux (Ubuntu/CentOS)</span>
          </div>
          <div className="px-6 py-4 rounded-xl bg-deep-space border border-cyan-glow/20 flex items-center gap-3 hover:bg-cyan-glow/10 transition-colors cursor-default lg:col-span-5">
            <span className="material-symbols-outlined text-cyan-glow">description</span>
            <span className="font-semibold">Pacote Office</span>
          </div>
          <div className="px-6 py-4 rounded-xl bg-deep-space border border-cyan-glow/20 flex items-center gap-3 hover:bg-cyan-glow/10 transition-colors cursor-default lg:col-span-5">
            <span className="material-symbols-outlined text-cyan-glow">language</span>
            <span className="font-semibold">Redes de Computadores</span>
          </div>
          <div className="px-6 py-4 rounded-xl bg-deep-space border border-cyan-glow/20 flex items-center gap-3 hover:bg-cyan-glow/10 transition-colors cursor-default lg:col-span-4">
            <span className="material-symbols-outlined text-cyan-glow">lock</span>
            <span className="font-semibold">Segurança da Informação</span>
          </div>
          <div className="px-6 py-4 rounded-xl bg-deep-space border border-cyan-glow/20 flex items-center gap-3 hover:bg-cyan-glow/10 transition-colors cursor-default lg:col-span-3">
            <span className="material-symbols-outlined text-cyan-glow">cloud</span>
            <span className="font-semibold">Cloud Computing</span>
          </div>
          <div className="px-6 py-4 rounded-xl bg-deep-space border border-cyan-glow/20 flex items-center gap-3 hover:bg-cyan-glow/10 transition-colors cursor-default lg:col-span-6">
            <span className="material-symbols-outlined text-cyan-glow">smart_toy</span>
            <span className="font-semibold">Inteligência Artificial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
