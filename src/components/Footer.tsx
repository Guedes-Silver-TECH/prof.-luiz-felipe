export function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Inscrição realizada com sucesso!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="section-gradient-2 border-t border-white/[0.06] pt-16 pb-12">
      <div className="section-shell">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand details & Socials (col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <p className="font-headline-md font-bold text-on-surface text-xl">
              Prof. Luiz Felipe
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Especialista em informática para concursos de alto nível. Transformando tecnologia complexa em aprovação no serviço público.
            </p>
            <div className="flex gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal do YouTube"
                className="w-10 h-10 rounded-xl bg-surface-alt border border-surface-border flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-amber transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  smart_display
                </span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do Instagram"
                className="w-10 h-10 rounded-xl bg-surface-alt border border-surface-border flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-amber transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  photo_camera
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (col-span-2) */}
          <div className="lg:col-span-2">
            <p className="font-semibold text-on-surface text-sm uppercase tracking-wider mb-5">
              Navegação
            </p>
            <nav aria-label="Links rápidos do rodapé">
              <ul className="space-y-3">
                {['Início', 'Sobre', 'Cursos', 'Método', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-on-surface-variant hover:text-on-surface transition-colors text-sm block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact Details (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-semibold text-on-surface text-sm uppercase tracking-wider mb-5">
              Contato Direto
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-blue shrink-0" aria-hidden="true">
                  mail
                </span>
                <div className="space-y-0.5">
                  <span className="text-on-surface-muted text-xs block">E-mail para suporte</span>
                  <a
                    href="mailto:contato@profluizfelipe.com.br"
                    className="text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    contato@profluizfelipe.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-[20px] text-amber shrink-0" aria-hidden="true">
                  chat
                </span>
                <div className="space-y-0.5">
                  <span className="text-on-surface-muted text-xs block">Dúvidas no WhatsApp</span>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-on-surface transition-colors font-medium"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Trust (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="font-semibold text-on-surface text-sm uppercase tracking-wider mb-5">
              Fique Atualizado
            </p>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Receba dicas de informática de editais e bancas diretamente no seu e-mail.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                className="input-premium px-3 py-2 text-xs flex-1 outline-none min-w-0"
                placeholder="Seu melhor e-mail"
                aria-label="Endereço de e-mail para newsletter"
              />
              <button 
                type="submit" 
                className="btn-primary-gradient px-4 py-2 text-xs font-bold shrink-0 cursor-pointer"
              >
                Assinar
              </button>
            </form>

            <div className="pt-2 border-t border-white/[0.04] space-y-2">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-emerald text-base" aria-hidden="true">
                  security
                </span>
                <span>Ambiente Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-emerald text-base" aria-hidden="true">
                  workspace_premium
                </span>
                <span>Garantia de Satisfação</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-muted">
          <p>© 2025 Prof. Luiz Felipe. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span className="hover:text-on-surface transition-colors cursor-help">Políticas de Privacidade</span>
            <span>·</span>
            <span className="hover:text-on-surface transition-colors cursor-help">Termos de Uso</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
