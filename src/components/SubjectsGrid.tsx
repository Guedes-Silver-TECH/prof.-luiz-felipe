const subjects = [
  { 
    name: 'Redes de Computadores', 
    icon: 'language', 
    desc: 'Protocolos TCP/IP, portas de conexão, modelo OSI/TCP, DNS, e roteamento prático.',
    span: 'lg:col-span-2',
    color: 'text-primary-blue bg-primary-blue/10'
  },
  { 
    name: 'Segurança da Informação', 
    icon: 'lock', 
    desc: 'Criptografia simétrica/assimétrica, assinaturas digitais, malwares, backup e firewalls.',
    span: 'lg:col-span-1',
    color: 'text-amber bg-amber/10'
  },
  { 
    name: 'Linux (Terminal/Shell)', 
    icon: 'terminal', 
    desc: 'Comandos cruciais de terminal, permissões de pastas (chmod/chown) e estrutura de arquivos.',
    span: 'lg:col-span-1',
    color: 'text-rose-400 bg-rose-400/10'
  },
  { 
    name: 'Inteligência Artificial', 
    icon: 'smart_toy', 
    desc: 'Conceitos de LLMs, redes neurais, engenharia de prompt e segurança de dados aplicados.',
    span: 'lg:col-span-2',
    color: 'text-emerald bg-emerald/10'
  },
  { 
    name: 'Pacote Office (Excel/Word)', 
    icon: 'description', 
    desc: 'Fórmulas complexas de planilhas, atalhos de teclado de editores e recursos ocultos de prova.',
    span: 'lg:col-span-1',
    color: 'text-indigo-400 bg-indigo-400/10'
  },
  { 
    name: 'Windows 10/11', 
    icon: 'window', 
    desc: 'Ferramentas administrativas, atalhos do sistema, gerenciamento de arquivos e atualizações.',
    span: 'lg:col-span-1',
    color: 'text-sky-400 bg-sky-400/10'
  },
  { 
    name: 'Cloud Computing', 
    icon: 'cloud', 
    desc: 'Modelos de serviço (IaaS, PaaS, SaaS), nuvem pública/privada, escalabilidade e conceitos AWS.',
    span: 'lg:col-span-1',
    color: 'text-teal-400 bg-teal-400/10'
  },
];

export function SubjectsGrid() {
  return (
    <section className="section-gradient-3 py-section-expand" id="topicos">
      <div className="section-shell">
        <div className="max-w-xl mb-12">
          <h2 className="font-headline-xl text-headline-xl mb-4 headline-balance font-bold">
            Domine todos os <span className="text-gradient-warm">Tópicos</span>
          </h2>
          <p className="text-on-surface-variant body-pretty text-lg">
            Do básico ao avançado, cobrimos 100% do que as principais bancas exigem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className={`card-gradient p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 ${subject.span}`}
            >
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-lg ${subject.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">
                    {subject.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-on-surface text-base mb-1.5">
                    {subject.name}
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    {subject.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
