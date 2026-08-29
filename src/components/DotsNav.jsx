export default function DotsNav({ sections, current }) {
  return (
    <div
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-md"
      role="tablist"
      aria-label="Section navigation"
    >
      {sections.map((id, i) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={i === current}
          aria-label={id}
          onClick={() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === current
              ? "w-6 bg-neon shadow-[0_0_10px_rgba(34,197,94,0.8)]"
              : "w-2 bg-white/30 hover:bg-white/60"
          }`}
        />
      ))}
    </div>
  );
}