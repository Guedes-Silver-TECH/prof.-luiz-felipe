export function TopNavBar() {
  return (
    <nav className="bg-deep-space/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-cyan-glow/10 shadow-sm">
      <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto h-20">
        <div className="font-headline-md text-headline-md font-bold text-primary">Prof. Luiz Felipe</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-label-caps text-label-caps text-cyan-glow border-b-2 border-cyan-glow pb-1 transition-colors duration-300" href="#inicio">Início</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-cyan-glow transition-colors duration-300" href="#sobre">Sobre</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-cyan-glow transition-colors duration-300" href="#cursos">Cursos</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-cyan-glow transition-colors duration-300" href="#metodo">Método</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-cyan-glow transition-colors duration-300" href="#faq">FAQ</a>
        </div>
        <a className="bg-tertiary text-on-tertiary px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform glow-tertiary" href="#">
          Matricule-se Agora
        </a>
      </div>
    </nav>
  );
}
