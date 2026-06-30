import { useState } from "react";

export function FAQContact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest"
      id="faq"
    >
      <div className="section-shell grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-headline-xl text-headline-xl mb-10 headline-balance">
            Perguntas <span className="text-cyan-glow">Frequentes</span>
          </h2>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-2xl p-5 bg-deep-space/50">
              <button
                className="w-full flex justify-between items-center gap-6 text-left hover:text-cyan-glow transition-colors"
                onClick={() => toggleFaq(0)}
              >
                <span className="font-headline-md">O curso serve para qual banca?</span>
                <span
                  className="material-symbols-outlined transition-transform"
                  style={{ transform: openFaq === 0 ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  add
                </span>
              </button>
              <div className={`mt-4 text-on-surface-variant ${openFaq === 0 ? "" : "hidden"}`}>
                Nossos cursos cobrem as principais bancas: FGV, Cebraspe, FCC, Vunesp e bancas
                regionais. O método é adaptável a qualquer estilo de cobrança.
              </div>
            </div>
            <div className="border border-white/10 rounded-2xl p-5 bg-deep-space/50">
              <button
                className="w-full flex justify-between items-center gap-6 text-left hover:text-cyan-glow transition-colors"
                onClick={() => toggleFaq(1)}
              >
                <span className="font-headline-md">Tenho muita dificuldade com tecnologia.</span>
                <span
                  className="material-symbols-outlined transition-transform"
                  style={{ transform: openFaq === 1 ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  add
                </span>
              </button>
              <div className={`mt-4 text-on-surface-variant ${openFaq === 1 ? "" : "hidden"}`}>
                Perfeito! O curso foi desenhado justamente para quem não é da área de TI, usando
                analogias simples e explicação passo a passo.
              </div>
            </div>
            <div className="border border-white/10 rounded-2xl p-5 bg-deep-space/50">
              <button
                className="w-full flex justify-between items-center gap-6 text-left hover:text-cyan-glow transition-colors"
                onClick={() => toggleFaq(2)}
              >
                <span className="font-headline-md">Como funciona o suporte?</span>
                <span
                  className="material-symbols-outlined transition-transform"
                  style={{ transform: openFaq === 2 ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  add
                </span>
              </button>
              <div className={`mt-4 text-on-surface-variant ${openFaq === 2 ? "" : "hidden"}`}>
                Todas as dúvidas são tiradas diretamente na plataforma ou, em casos de mentoria,
                através de um canal exclusivo no WhatsApp.
              </div>
            </div>
          </div>
        </div>
        <div
          className="glass-panel p-8 md:p-10 lg:p-12 rounded-[32px] lg:col-span-5 h-fit"
          id="contato"
        >
          <h3 className="font-headline-lg text-headline-lg mb-8">Envie sua Mensagem</h3>
          <form className="space-y-6">
            <div>
              <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">
                Nome Completo
              </label>
              <input
                className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow outline-none transition-all"
                name="nome"
                type="text"
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">
                E-mail
              </label>
              <input
                className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow outline-none transition-all"
                name="email"
                type="email"
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">
                Mensagem
              </label>
              <textarea
                className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow outline-none transition-all resize-none"
                name="mensagem"
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-cyan-glow text-deep-space font-bold py-4 rounded-xl hover:opacity-90 transition-opacity pressable"
              type="submit"
            >
              Enviar Agora
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
