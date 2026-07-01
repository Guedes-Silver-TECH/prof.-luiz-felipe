import { useState } from "react";

const faqItems = [
  {
    question: "O curso serve para qual banca?",
    answer:
      "Nossos cursos cobrem as principais bancas: FGV, Cebraspe, FCC, Vunesp e bancas regionais. O método é adaptável a qualquer estilo de cobrança.",
  },
  {
    question: "Tenho muita dificuldade com tecnologia.",
    answer:
      "Perfeito! O curso foi desenhado justamente para quem não é da área de TI, usando analogias simples e explicação passo a passo.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Todas as dúvidas são tiradas diretamente na plataforma ou, em casos de mentoria, através de um canal exclusivo no WhatsApp.",
  },
];

export function FAQContact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      className="section-gradient-1 py-section-expand"
      id="faq"
    >
      <div className="section-shell grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* FAQ Column */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <h2 className="font-headline-xl text-headline-xl mb-8 headline-balance font-bold text-on-surface">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="card-gradient p-0 overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center gap-4 p-5 text-left text-on-surface font-semibold hover:text-amber transition-colors"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span>{item.question}</span>
                      <span
                        className="material-symbols-outlined text-[20px] transition-transform duration-300 shrink-0"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        aria-hidden="true"
                      >
                        expand_more
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <div className="p-5 pt-0 text-on-surface-variant leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Support / Contact CTA (Replaces Fake Form) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 to-transparent blur-3xl" />
          <div className="card-gradient p-8 md:p-10 relative">
            <h3 className="text-2xl font-bold text-on-surface mb-2">Ainda com dúvidas?</h3>
            <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
              Fale diretamente com nossa equipe de suporte via WhatsApp. 
              Geralmente respondemos em menos de 15 minutos!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-deep-space/50 p-4 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-emerald/10 text-emerald rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <div>
                  <p className="text-sm text-on-surface font-semibold">Suporte Humanizado</p>
                  <p className="text-xs text-on-surface-variant">Segunda a Sábado</p>
                </div>
              </div>

              <a 
                href="https://wa.me/5599999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald hover:bg-emerald/90 text-deep-space font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-widest text-xs"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5"
                />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
