import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio', active: true },
  { label: 'Sobre', href: '#sobre', active: false },
  { label: 'Cursos', href: '#cursos', active: false },
  { label: 'Método', href: '#metodo', active: false },
  { label: 'FAQ', href: '#faq', active: false },
];

export function TopNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Menu principal"
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-space/95 border-b border-white/[0.06] py-3 shadow-lg backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex justify-between md:justify-center items-center px-gutter max-w-container-max mx-auto relative">
        
        {/* Desktop nav links (centered) */}
        <div className="hidden md:flex gap-10 items-center justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                link.active
                  ? 'text-amber'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu controls (aligned right on mobile screens) */}
        <div className="flex md:hidden items-center justify-between w-full">
          <span className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">Menu</span>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-deep-space border-t border-white/[0.06]">
          <div className="flex flex-col gap-1 px-gutter py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`text-sm font-medium tracking-wide uppercase py-3 px-4 rounded-lg transition-colors ${
                  link.active
                    ? 'text-on-surface bg-surface'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface'
                }`}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
