import { useEffect } from "react";

const isImage = (item) => !item?.src?.endsWith(".mp4");

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

  useEffect(() => {
    if (!items?.length) return;
    [index + 1, index - 1].forEach((i) => {
      if (i >= 0 && i < items.length && isImage(items[i])) {
        const img = new Image();
        img.src = items[i].src;
        img.decoding = "async";
      }
    });
  }, [items, index]);

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
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-red-500/60 hover:text-red-400"
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className="relative flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
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
          loading="eager"
          decoding="async"
          fetchpriority="high"
          draggable={false}
          className="max-h-[70vh] max-w-[94%] select-none rounded-lg border border-white/10 object-contain shadow-[0_0_60px_rgba(34,197,94,0.15)] lg:max-h-[74vh]"
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

      <footer className="mt-5 flex w-full max-w-5xl flex-col gap-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-3">
          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tabular-nums text-white/60 backdrop-blur">
            {index + 1} / {count}
          </span>
          <span className="min-w-0 truncate text-right text-sm text-white/70">{item.caption || item.alt}</span>
        </div>

        <div className="flex w-full items-stretch gap-3">
          {count > 1 && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onNavigate(index - 1)}
                disabled={index <= 0}
                className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-xs font-bold text-white backdrop-blur transition hover:border-neon/60 hover:text-neon disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white sm:px-5 sm:text-sm"
              >
                ‹ Prev
              </button>
              <button
                type="button"
                onClick={() => onNavigate(index + 1)}
                disabled={index >= count - 1}
                className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-xs font-bold text-white backdrop-blur transition hover:border-neon/60 hover:text-neon disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white sm:px-5 sm:text-sm"
              >
                Next ›
              </button>
            </div>
          )}

          <div className="flex-1" />

          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 rounded-xl border border-red-500/50 bg-red-600/20 px-5 py-3 text-xs font-bold text-red-400 backdrop-blur transition hover:bg-red-600 hover:text-white sm:px-7 sm:text-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
            Close
          </button>
        </div>
      </footer>
    </div>
  );
}