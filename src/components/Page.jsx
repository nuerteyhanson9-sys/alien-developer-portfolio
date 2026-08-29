export default function Page({ kicker, title, subtitle, children, wide }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 pb-24 pt-28 md:px-10`}>
      <header className="mb-12 border-b border-white/10 pb-6">
        {kicker && (
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neon">{kicker}</p>
        )}
        <h1 className="text-3xl font-extrabold tracking-widest text-white md:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">{subtitle}</p>
        )}
      </header>
      {children}
    </div>
  );
}