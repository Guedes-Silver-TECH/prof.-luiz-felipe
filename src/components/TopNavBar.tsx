export function TopNavBar() {
  return (
    <nav className="bg-deep-space/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-cyan-glow/10 shadow-sm">
      <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto h-16 md:h-[72px]">
        <a
          className="font-headline-md text-headline-md font-bold text-primary pressable"
          href="#inicio"
        >
          Prof. Luiz Felipe
        </a>
        <div className="hidden md:flex gap-7 items-center">
          <a
            className="font-label-caps text-label-caps text-cyan-glow border-b-2 border-cyan-glow pb-1 transition-colors duration-300"
            href="#inicio"
          >
            Início
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-cyan-glow transition-colors duration-300"
            href="#sobre"
          >
            Sobre
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-cyan-glow transition-colors duration-300"
            href="#cursos"
          >
            Cursos
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-cyan-glow transition-colors duration-300"
            href="#metodo"
          >
            Método
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-cyan-glow transition-colors duration-300"
            href="#faq"
          >
            FAQ
          </a>
        </div>
        <a
          className="hidden sm:inline-flex bg-tertiary text-on-tertiary px-5 md:px-6 py-3 rounded-lg font-bold glow-tertiary pressable whitespace-nowrap"
          href="#cursos"
        >
          Matricule-se Agora
        </a>
      </div>
    </nav>
  );
}
