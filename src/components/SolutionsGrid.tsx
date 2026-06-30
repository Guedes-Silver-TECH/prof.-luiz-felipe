const courses = [
  {
    title: "Cursos Completos",
    summary: "A base definitiva. Do zero ao avançado em todos os tópicos de editais de alto nível.",
    icon: "school",
    badge: "Base completa",
    features: ["Teoria completa + exercícios", "PDFs comentados", "Acesso por 12 meses"],
    action: "Ver Detalhes",
    tone: "cyan" as const,
  },
  {
    title: "Aulas Isoladas",
    summary: "Foco total no seu ponto fraco. Redes, Excel, Linux ou Segurança. Você escolhe.",
    icon: "psychology",
    badge: "Mais Procurado",
    features: ["Tópicos específicos", "Questões de bancas específicas", "Direto ao ponto"],
    action: "Comprar Agora",
    tone: "featured" as const,
  },
  {
    title: "Mentorias",
    summary:
      "Acompanhamento individual para quem busca a elite dos concursos. Planejamento sob medida.",
    icon: "groups",
    badge: "Individual",
    features: ["Encontros ao vivo", "Análise de desempenho", "Suporte no WhatsApp"],
    action: "Saber Mais",
    tone: "blue" as const,
  },
];

const toneStyles = {
  cyan: {
    card: "border-cyan-glow/18 bg-deep-space/72 hover:border-cyan-glow/45",
    icon: "text-cyan-glow",
    iconBox: "bg-cyan-glow/10 border-cyan-glow/20",
    badge: "bg-cyan-glow/10 text-cyan-glow border-cyan-glow/20",
    button: "border-white/10 bg-white/[0.04] hover:bg-cyan-glow hover:text-deep-space",
    check: "text-cyan-glow",
    line: "from-cyan-glow/0 via-cyan-glow/45 to-cyan-glow/0",
  },
  featured: {
    card: "border-tertiary/45 bg-gradient-to-b from-tertiary/12 via-binary-purple/35 to-deep-space/80 shadow-2xl shadow-tertiary/10",
    icon: "text-tertiary",
    iconBox: "bg-tertiary/12 border-tertiary/30",
    badge: "bg-tertiary text-on-tertiary border-tertiary",
    button: "border-tertiary bg-tertiary text-on-tertiary glow-tertiary hover:bg-tertiary",
    check: "text-tertiary",
    line: "from-tertiary/0 via-tertiary/70 to-tertiary/0",
  },
  blue: {
    card: "border-tech-blue/18 bg-deep-space/72 hover:border-tech-blue/45",
    icon: "text-tech-blue",
    iconBox: "bg-tech-blue/10 border-tech-blue/20",
    badge: "bg-tech-blue/10 text-tech-blue border-tech-blue/20",
    button: "border-white/10 bg-white/[0.04] hover:bg-tech-blue hover:text-white",
    check: "text-tech-blue",
    line: "from-tech-blue/0 via-tech-blue/45 to-tech-blue/0",
  },
};

export function SolutionsGrid() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest"
      id="cursos"
    >
      <div className="section-shell mb-14">
        <h2 className="font-headline-xl text-headline-xl mb-4 headline-balance">
          Escolha sua <span className="text-cyan-glow">Jornada</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl body-pretty">
          Soluções modulares para cada fase da sua preparação.
        </p>
      </div>

      <div className="section-shell grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
        {courses.map((course) => {
          const tone = toneStyles[course.tone];

          return (
            <article
              className={`group relative flex min-h-[520px] overflow-hidden rounded-[28px] border p-6 md:p-7 transition-all duration-300 ${tone.card}`}
              key={course.title}
            >
              <div className={`absolute inset-x-7 top-0 h-px bg-gradient-to-r ${tone.line}`} />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl" />

              <div className="relative z-10 flex w-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${tone.iconBox} transition-transform group-hover:-translate-y-1`}
                  >
                    <span className={`material-symbols-outlined ${tone.icon} text-3xl`}>
                      {course.icon}
                    </span>
                  </div>
                  <div
                    className={`rounded-full border px-3 py-1 text-[11px] font-bold ${tone.badge}`}
                  >
                    {course.badge}
                  </div>
                </div>

                <h3 className="font-headline-md text-headline-md mb-4">{course.title}</h3>
                <p className="text-on-surface-variant body-pretty min-h-[84px]">{course.summary}</p>

                <div className="my-8 h-px bg-white/8" />

                <ul className="grid gap-4">
                  {course.features.map((feature) => (
                    <li className="flex items-start gap-3 text-sm" key={feature}>
                      <span className={`material-symbols-outlined ${tone.check} text-lg`}>
                        check
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className={`mt-auto rounded-xl border py-4 text-center font-bold transition-all pressable ${tone.button}`}
                  href="#contato"
                >
                  {course.action}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
