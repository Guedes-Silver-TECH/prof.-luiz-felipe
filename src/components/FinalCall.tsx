export function FinalCall() {
  return (
    <section className="py-section-gap-desktop bg-deep-space relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="bg-gradient-to-br from-binary-purple to-deep-space p-12 md:p-24 rounded-[40px] border border-cyan-glow/20 text-center shadow-2xl">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">Pronto para sua <span className="text-cyan-glow">Vaga?</span></h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">Não deixe que a informática te afaste da sua aprovação. Comece agora sua preparação com quem é especialista no assunto.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-tertiary text-on-tertiary px-12 py-5 rounded-2xl font-bold text-xl glow-tertiary hover:scale-105 transition-transform">Quero ser Aluno</button>
            <button className="bg-white/5 border border-white/10 backdrop-blur-md px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-colors">Dúvidas? Fale Conosco</button>
          </div>
        </div>
      </div>
    </section>
  );
}
