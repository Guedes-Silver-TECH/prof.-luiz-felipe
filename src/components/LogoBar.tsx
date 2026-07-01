export function LogoBar() {
  const bancas = ['FGV', 'Cebraspe', 'FCC', 'Vunesp', 'IBFC'];

  return (
    <section className="py-6">
      <div className="divider-gradient" />
      <div className="section-shell py-8">
        <p className="text-on-surface-muted text-xs uppercase tracking-[0.2em] text-center mb-6 font-medium">
          Preparação para as bancas mais exigentes do Brasil
        </p>
        <div className="flex justify-center items-center gap-8 md:gap-14 flex-wrap">
          {bancas.map((banca) => (
            <span
              key={banca}
              className="text-on-surface-variant/50 text-xl md:text-2xl font-bold tracking-wider hover:text-on-surface-variant transition-colors"
            >
              {banca}
            </span>
          ))}
        </div>
      </div>
      <div className="divider-gradient" />
    </section>
  );
}
