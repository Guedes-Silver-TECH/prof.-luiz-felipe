import React, { useState, useEffect } from 'react';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the first 600px (roughly past hero)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-40 p-4 md:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <div className="bg-surface/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">12x de</p>
          <p className="text-xl font-black text-amber">R$ 19,70</p>
        </div>
        <a 
          href="#cursos" 
          className="btn-primary py-3 px-6 text-xs whitespace-nowrap shadow-[0_0_15px_rgba(234,179,8,0.3)]"
        >
          Garantir Vaga
        </a>
      </div>
    </div>
  );
}
