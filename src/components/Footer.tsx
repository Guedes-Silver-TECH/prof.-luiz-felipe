export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-section-gap-mobile md:py-16">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-element-gap">
        <div className="space-y-6">
          <div className="font-headline-sm text-headline-sm text-primary font-bold">Prof. Luiz Felipe</div>
          <p className="text-on-surface-variant max-w-xs">Especialista em informática para concursos, transformando a tecnologia em uma ferramenta de aprovação.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-glow/20 transition-colors" href="#">
              <span className="material-symbols-outlined text-cyan-glow">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-glow/20 transition-colors" href="#">
              <span className="material-symbols-outlined text-cyan-glow">alternate_email</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Links Úteis</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">Cursos Completos</a></li>
            <li><a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">Termos de Uso</a></li>
            <li><a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">Política de Privacidade</a></li>
            <li><a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">Suporte Aluno</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-cyan-glow">mail</span>
              contato@profluizfelipe.com.br
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-cyan-glow">chat</span>
              WhatsApp: (11) 99999-9999
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-white/5 text-center text-sm text-on-surface-variant">
        © 2024 Professor Luiz Felipe - Especialista em Informática para Concursos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
