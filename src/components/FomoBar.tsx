import React from 'react';

export function FomoBar() {
  return (
    <div className="bg-primary-blue text-deep-space font-bold text-[10px] md:text-xs py-2 px-4 text-center z-50 relative overflow-hidden flex items-center justify-center gap-2 uppercase tracking-widest">
      <span className="material-symbols-outlined text-[14px] md:text-[16px] animate-pulse">local_fire_department</span>
      <span>Últimas vagas do lote promocional por R$ 19,70 mensais</span>
      <span className="material-symbols-outlined text-[14px] md:text-[16px] animate-pulse">local_fire_department</span>
    </div>
  );
}
