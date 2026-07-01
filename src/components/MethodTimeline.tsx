import { useState } from 'react';

const steps = [
  {
    number: '01',
    letter: 'E',
    phase: 'Fase 01 · Entendimento',
    title: 'Entendimento Conceitual',
    desc: 'Contextualização dos conceitos fundamentais da tecnologia com exemplos reais de prova. Aqui, focamos na compreensão de como a tecnologia funciona de forma lógica, garantindo que você não dependa apenas de decoreba nas provas.',
    icon: 'menu_book',
    highlight: 'Entenda a lógica de funcionamento, não apenas o comando.',
    themeColor: 'border-primary-blue text-primary-blue bg-primary-blue/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]',
    lineWidth: 'w-1/4'
  },
  {
    number: '02',
    letter: 'E',
    phase: 'Fase 02 · Explicação',
    title: 'Simplificação Didática',
    desc: 'Tradução completa de termos técnicos complexos para uma linguagem simples e de fácil fixação. Focamos nos vícios comuns de formulação de enunciados das bancas para que você compreenda o que está sendo perguntado na hora do exame.',
    icon: 'translate',
    highlight: 'Sem termos técnicos chatos. Didática simples e focada em concurso.',
    themeColor: 'border-primary-blue text-primary-blue bg-primary-blue/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]',
    lineWidth: 'w-2/4'
  },
  {
    number: '03',
    letter: 'P',
    phase: 'Fase 03 · Prática',
    title: 'Resolução Exaustiva',
    desc: 'Treinamento intensivo de questões de provas anteriores (FGV, Cebraspe, FCC). Usamos a metodologia de engenharia reversa para fixar as regras de cobrança das bancas examinadoras mais concorridas.',
    icon: 'task_alt',
    highlight: 'Prática focada com resolução comentada de questões reais.',
    themeColor: 'border-amber text-amber bg-amber/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]',
    lineWidth: 'w-3/4'
  },
  {
    number: '04',
    letter: 'R',
    phase: 'Fase 04 · Revisão',
    title: 'Consolidação de Memória',
    desc: 'Uso de flashcards e resumos ativos focados apenas nas regras recorrentes. Reforço de memória de longo prazo para garantir que você chegue no dia do concurso lembrando 100% dos conceitos fundamentais.',
    icon: 'history_edu',
    highlight: 'Revisão ativa inteligente para fixação de longo prazo.',
    themeColor: 'border-emerald text-emerald bg-emerald/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]',
    lineWidth: 'w-full'
  },
];

export function MethodTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];

  return (
    <section className="section-gradient-2 py-section-expand" id="metodo">
      <div className="section-shell max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface font-extrabold headline-balance leading-tight">
            O Método <span className="text-gradient-warm">E.E.P.R.</span>
          </h2>
          <p className="text-on-surface-variant body-pretty text-base">
            Clique nas etapas abaixo para entender o caminho da sua aprovação.
          </p>
        </div>

        {/* Dynamic Selector Row */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => {
              const isSelected = activeStep === index;
              const borderTheme = isSelected 
                ? index === 2 ? 'border-amber text-amber' : index === 3 ? 'border-emerald text-emerald' : 'border-primary-blue text-primary-blue'
                : 'border-white/[0.06] text-on-surface-variant hover:text-on-surface hover:border-white/[0.15]';

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border bg-deep-space/55 cursor-pointer text-center transition-all duration-300 ${borderTheme}`}
                >
                  <span className="font-mono text-xs font-bold opacity-60 mb-1">{step.number}</span>
                  <span className="font-headline-md font-bold text-sm tracking-wide">{step.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Progress Line */}
          <div className="relative h-1 bg-white/[0.04] rounded-full overflow-hidden" aria-hidden="true">
            <div 
              className={`absolute top-0 bottom-0 left-0 bg-gradient-to-r from-primary-blue via-amber to-emerald transition-all duration-500 ease-out ${
                activeStep === 0 ? 'w-1/4' : activeStep === 1 ? 'w-2/4' : activeStep === 2 ? 'w-3/4' : 'w-full'
              }`}
            />
          </div>
        </div>

        {/* Selected Step Detail Panel (Showcase) */}
        <div className="card-gradient p-8 md:p-10 relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.01] rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between relative z-10">
            {/* Left detail info */}
            <div className="space-y-5 flex-1">
              <div>
                <span className="text-on-surface-muted text-xs font-bold uppercase tracking-widest block mb-2">
                  {currentStep.phase}
                </span>
                <h3 className="font-display-lg text-2xl md:text-3xl font-extrabold text-on-surface leading-tight">
                  {currentStep.title}
                </h3>
              </div>

              {/* Lead Highlight Quote */}
              <p className="text-on-surface border-l-2 border-amber/40 pl-4 text-base font-semibold leading-relaxed italic">
                "{currentStep.highlight}"
              </p>

              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xl">
                {currentStep.desc}
              </p>
            </div>

            {/* Right Large Icon badge */}
            <div className="shrink-0 flex items-center justify-center">
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl border flex items-center justify-center ${currentStep.themeColor}`}>
                <span className="material-symbols-outlined text-4xl md:text-5xl" aria-hidden="true">
                  {currentStep.icon}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
