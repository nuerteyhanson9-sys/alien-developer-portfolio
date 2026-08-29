import { useEffect } from "react";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  useEffect(() => {
    document.body.classList.add("lightbox-open");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.classList.remove("lightbox-open");
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!items?.length) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        onNavigate(e.key === "ArrowLeft" ? index - 1 : index + 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items, index, onClose, onNavigate]);

  if (!items?.length) return null;
  const item = items[index] || items[0];
  const count = items.length;

  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${count}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-red-500/60 hover:text-red-400"
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <div className="relative flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {count > 1 && (
          <button
            type="button"
            onClick={() => onNavigate(index - 1)}
            disabled={index <= 0}
            className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:border-neon/60 hover:text-neon disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white md:-left-2"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="max-h-[78vh] max-w-[92%] rounded-lg border border-white/10 object-contain shadow-[0_0_60px_rgba(34,197,94,0.15)]"
        />

        {count > 1 && (
          <button
            type="button"
            onClick={() => onNavigate(index + 1)}
            disabled={index >= count - 1}
            className="absolute right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:border-neon/60 hover:text-neon disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white md:-right-2"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tabular-nums text-white/60 backdrop-blur">
          {index + 1} / {count}
        </span>
        <span className="max-w-md truncate text-sm text-white/70">{item.caption || item.alt}</span>
      </div>
    </div>
  );
}