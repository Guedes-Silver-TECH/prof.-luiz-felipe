export function TargetAudience() {
  const painPoints = [
    {
      title: "Reprovações Sucessivas",
      desc: "Já reprovou em concurso porque zerou ou foi muito mal em informática.",
      icon: "trending_down",
      color: "text-red-400 bg-red-400/10 border-red-400/20"
    },
    {
      title: "Zero Base em TI",
      desc: "Não é da área de exatas/tecnologia e acha a matéria um bicho de sete cabeças.",
      icon: "code_off",
      color: "text-amber bg-amber/10 border-amber/20"
    },
    {
      title: "Necessidade de Alto Desempenho",
      desc: "Sabe que precisa acertar 8 de 10 questões para ter chance real de classificação.",
      icon: "my_location",
      color: "text-primary-blue bg-primary-blue/10 border-primary-blue/20"
    },
    {
      title: "Decoreba Ineficiente",
      desc: "Estuda sozinho, tenta decorar atalhos e sempre dá branco na hora da prova.",
      icon: "memory",
      color: "text-emerald bg-emerald/10 border-emerald/20"
    }
  ];

  return (
    <section className="section-gradient-3 py-section-gap-mobile md:py-section-gap-desktop">
      <div className="section-shell">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface mb-4 headline-balance">
            Você se identifica com algum destes cenários?
          </h2>
          <p className="text-on-surface-variant text-lg body-pretty">
            Se você marcou mentalmente "sim" para alguma dessas opções, este treinamento definitivo foi desenhado exatamente para o seu perfil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((item, index) => (
            <div 
              key={index} 
              className="card-gradient p-8 rounded-2xl flex items-start gap-5 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border ${item.color}`}>
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
