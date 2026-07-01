export function SolutionsGrid() {
  return (
    <section className="section-gradient-1 py-section-expand" id="cursos">
      <div className="section-shell mb-14">
        <h2 className="font-headline-xl text-headline-xl mb-4 headline-balance font-bold">
          Escolha sua <span className="text-gradient-warm">Jornada</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl body-pretty text-lg">
          Soluções modulares para cada fase da sua preparação.
        </p>
      </div>

      <div className="section-shell grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Card 1: Cursos Completos (Horizontal / Large Bento block) - col-span-7 */}
        <article className="lg:col-span-7 card-gradient p-8 flex flex-col justify-between group">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-blue text-2xl" aria-hidden="true">
                  school
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                Cursos Completos
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                A base definitiva. Do zero ao avançado em todos os tópicos de editais de alto nível (PF, PRF, Delegado e Agente).
              </p>
              <div className="pt-2">
                <p className="text-on-surface-muted text-xs uppercase tracking-wider mb-1">Investimento</p>
                <p className="text-on-surface font-semibold text-lg">A partir de R$ 197</p>
              </div>
            </div>
            
            <div className="md:col-span-5 bg-deep-space/40 rounded-xl p-5 border border-white/[0.04] flex flex-col justify-center">
              <p className="text-xs font-bold text-primary-blue uppercase tracking-wider mb-4">O que inclui:</p>
              <ul className="space-y-3">
                {['Teoria completa + questões', 'PDFs direcionados', 'Acesso por 12 meses'].map((feat) => (
                  <li className="flex items-center gap-2.5 text-xs text-on-surface-variant" key={feat}>
                    <span className="material-symbols-outlined text-emerald text-base shrink-0" aria-hidden="true">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-white/[0.06] pt-6">
            <a className="btn-secondary block text-center py-3.5" href="#contato">
              Ver Detalhes do Conteúdo
            </a>
          </div>
        </article>

        {/* Card 2: Aulas Isoladas (Destaque Vertical) - col-span-5 */}
        <article className="lg:col-span-5 card-featured p-8 flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle light leak effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber/10 rounded-full blur-[60px] pointer-events-none" />
          
          <span className="absolute top-6 right-8 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-amber">
            <span className="material-symbols-outlined text-[12px]" aria-hidden="true">star</span>
            Mais Popular
          </span>

          <div className="space-y-5">
            <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-amber text-2xl" aria-hidden="true">
                psychology
              </span>
            </div>
            
            <div>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                Aulas Isoladas
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                Foco total no seu ponto fraco. Domine Redes, Excel, Linux ou Segurança de forma cirúrgica e direta ao ponto.
              </p>
            </div>
            
            <div className="h-px bg-white/[0.06]" />

            <ul className="space-y-3">
              {['Tópicos específicos do edital', 'Bancas focadas (Cebraspe/FGV)', 'Questões resolvidas em vídeo'].map((feat) => (
                <li className="flex items-center gap-2.5 text-xs text-on-surface-variant" key={feat}>
                  <span className="material-symbols-outlined text-emerald text-base shrink-0" aria-hidden="true">
                    check_circle
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-on-surface-muted text-xs uppercase tracking-wider mb-2">Preço Promocional</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-on-surface font-extrabold text-2xl">A partir de R$ 47</span>
            </div>
            <a className="btn-primary block text-center py-4" href="#contato">
              Comprar Agora
            </a>
          </div>
        </article>

        {/* Card 3: Mentorias (Full Width Bento Horizontal stripe) - col-span-12 */}
        <article className="lg:col-span-12 card-gradient p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 group">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary-blue text-3xl" aria-hidden="true">
                groups
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                  Mentorias Individuais e Coletivas
                </h3>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-blue pl-3 border-l border-white/10">
                  Vagas Limitadas
                </span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Acompanhamento personalizado de alto rendimento para quem busca a elite dos concursos. Planejamento estratégico individualizado, análise de desempenho de simulados e canal de WhatsApp direto com o professor.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-4 shrink-0 w-full lg:w-auto">
            <div className="text-left lg:text-right">
              <p className="text-on-surface-muted text-xs uppercase tracking-wider mb-1">Status de Turma</p>
              <p className="text-amber font-semibold text-sm">Apenas sob entrevista</p>
            </div>
            <a className="btn-secondary text-center px-8 py-3.5 whitespace-nowrap block" href="#contato">
              Solicitar Entrevista
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}
