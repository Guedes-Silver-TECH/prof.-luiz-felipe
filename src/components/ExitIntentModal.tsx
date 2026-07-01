import React, { useState, useEffect } from 'react';

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-deep-space/80 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      <div className="relative bg-surface border border-white/[0.08] rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-on-surface-muted hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-amber/20">
            <span className="material-symbols-outlined text-amber text-3xl">warning</span>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-on-surface">Espere! Não saia ainda...</h3>
            <p className="text-on-surface-variant">
              Você está prestes a perder a oportunidade de ser aprovado no próximo concurso.
            </p>
          </div>
          
          <div className="bg-deep-space/50 p-4 rounded-xl border border-white/5">
            <p className="text-sm text-emerald font-bold uppercase tracking-wider mb-1">
              Bônus Exclusivo Liberado
            </p>
            <p className="text-xs text-on-surface-variant">
              Garanta sua vaga agora e leve **Mentorias Gravadas Premium** de presente (Valor de R$ 997, hoje GRÁTIS).
            </p>
          </div>
          
          <div className="pt-2">
            <a 
              href="#cursos" 
              onClick={() => setIsVisible(false)}
              className="btn-primary w-full block text-center"
            >
              Sim, Quero Meu Desconto e Bônus
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-on-surface-muted text-xs mt-4 hover:text-white transition-colors"
            >
              Não, prefiro continuar estudando sozinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
