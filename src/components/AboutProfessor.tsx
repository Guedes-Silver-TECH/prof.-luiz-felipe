export function AboutProfessor() {
  return (
    <section className="py-section-gap-desktop bg-deep-space overflow-hidden" id="sobre">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="aspect-video relative rounded-3xl overflow-hidden border border-cyan-glow/20 shadow-2xl">
            <img
              className="w-full h-full object-cover"
              alt="An action shot of Professor Luiz Felipe lecturing"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJBRWI6wXtQQoJaGtqwY-Iu2h945wZXHVugapDRH5RlB6uKP9Lb_ETOJNrVzscPzuAnD8Tt-IXxJSg9lVsidf_FBYJosYYwyQ8ZPA0AHPG2832wqXqDG-WxgDTNRL6swdNSotto1kjStuELpWPAD3EWOvUlXqiQIc5a5QNPDX4DiBe9VjmQYekzuI0Uw7xFg_pi7F-rCaPx5eRaHRSiJ3MZ7iz9h7jQX6-wcAWlbTMWFkZEAEi0ttNr80hzFKiGsVBUmLEHryFWIs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent flex items-end p-8">
              <p className="text-white italic">"Minha missão é transformar a informática de vilã em aliada na sua aprovação."</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Didática de <span className="text-cyan-glow">Mestre</span> aplicada ao seu sonho.</h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Luiz Felipe é Professor Mestre com anos de experiência preparando candidatos para os concursos mais difíceis do Brasil. Sua abordagem une o rigor acadêmico com as necessidades práticas da prova.
          </p>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Esqueça decorebas inúteis. Aqui, você entende a lógica dos sistemas, a estrutura das redes e a mentalidade das bancas examinadoras. É informática ensinada por quem realmente domina a tecnologia.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-glow">check_circle</span>
              <span>Mestrado em Computação Aplicada</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-glow">check_circle</span>
              <span>Especialista em Segurança da Informação</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-glow">check_circle</span>
              <span>Anos de experiência em cursinhos preparatórios</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
