export function FinalCall() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-deep-space relative overflow-hidden">
      <div className="section-shell relative z-10">
        <div className="bg-gradient-to-br from-binary-purple to-deep-space p-8 md:p-16 lg:p-20 rounded-[40px] border border-cyan-glow/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 headline-balance">
              Pronto para sua <span className="text-cyan-glow">Vaga?</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl body-pretty">
              Não deixe que a informática te afaste da sua aprovação. Comece agora sua preparação
              com quem é especialista no assunto.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4 lg:items-stretch">
            <a
              className="bg-tertiary text-on-tertiary px-8 py-5 rounded-2xl font-bold text-xl glow-tertiary text-center pressable whitespace-nowrap"
              href="#cursos"
            >
              Quero ser Aluno
            </a>
            <a
              className="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-colors text-center pressable whitespace-nowrap"
              href="#contato"
            >
              Dúvidas? Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
