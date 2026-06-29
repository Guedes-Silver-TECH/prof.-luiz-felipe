export function SolutionsGrid() {
  return (
    <section className="py-section-gap-desktop bg-surface-container-lowest" id="cursos">
      <div className="max-w-container-max mx-auto px-gutter mb-16 text-center">
        <h2 className="font-headline-xl text-headline-xl mb-4">Escolha sua <span className="text-cyan-glow">Jornada</span></h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Soluções modulares para cada fase da sua preparação.</p>
      </div>
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Course 1 */}
        <div className="glass-panel p-card-padding rounded-3xl border border-white/5 flex flex-col hover:border-cyan-glow/40 transition-all duration-500 group">
          <div className="w-16 h-16 rounded-2xl bg-cyan-glow/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-cyan-glow text-4xl">school</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Cursos Completos</h3>
          <p className="text-on-surface-variant mb-8 flex-grow">A base definitiva. Do zero ao avançado em todos os tópicos de editais de alto nível.</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-cyan-glow text-lg">check</span> Teoria Completa + Exercícios
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-cyan-glow text-lg">check</span> PDFs Comentados
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-cyan-glow text-lg">check</span> Acesso por 12 meses
            </li>
          </ul>
          <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-cyan-glow hover:text-deep-space transition-all">Ver Detalhes</button>
        </div>
        {/* Course 2 */}
        <div className="glass-panel p-card-padding rounded-3xl border border-tertiary/20 flex flex-col scale-105 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter">Mais Procurado</div>
          <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-tertiary text-4xl">psychology</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Aulas Isoladas</h3>
          <p className="text-on-surface-variant mb-8 flex-grow">Foco total no seu ponto fraco. Redes, Excel, Linux ou Segurança. Você escolhe.</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-tertiary text-lg">check</span> Tópicos Específicos
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-tertiary text-lg">check</span> Questões de Bancas Específicas
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-tertiary text-lg">check</span> Direto ao Ponto
            </li>
          </ul>
          <button className="w-full py-4 bg-tertiary text-on-tertiary rounded-xl font-bold glow-tertiary hover:scale-[1.02] transition-all">Comprar Agora</button>
        </div>
        {/* Course 3 */}
        <div className="glass-panel p-card-padding rounded-3xl border border-white/5 flex flex-col hover:border-tech-blue/40 transition-all duration-500 group">
          <div className="w-16 h-16 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-tech-blue text-4xl">groups</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Mentorias</h3>
          <p className="text-on-surface-variant mb-8 flex-grow">Acompanhamento individual para quem busca a elite dos concursos. Planejamento sob medida.</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-tech-blue text-lg">check</span> Encontros Ao Vivo
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-tech-blue text-lg">check</span> Análise de Desempenho
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-tech-blue text-lg">check</span> Suporte no WhatsApp
            </li>
          </ul>
          <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-tech-blue hover:text-white transition-all">Saber Mais</button>
        </div>
      </div>
    </section>
  );
}
