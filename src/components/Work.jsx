import { useRef, useState } from "react";
import { LINKS } from "../site.js";
import ugcVideo from "../../assets/vaseline-ugc-opt.mp4";
import ugcPoster from "../../assets/vaseline-ugc-poster.jpg";

function CardHeader({ index, title }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="rounded-md bg-neon/15 px-2 py-1 text-xs font-bold text-neon">0{index}</span>
      <h3 className="text-lg font-bold tracking-wide text-white">{title}</h3>
    </div>
  );
}

function tag(text) {
  return (
    <span className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">
      {text}
    </span>
  );
}

function UGCVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
      <video
        ref={videoRef}
        src={ugcVideo}
        poster={ugcPoster}
        preload="metadata"
        playsInline
        loop
        muted
        controls={playing}
        className="h-full w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            videoRef.current?.play();
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/20"
          aria-label="Play UGC video"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-neon/60 bg-neon/15 text-neon backdrop-blur transition group-hover:bg-neon group-hover:text-black">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

function PromptArt() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-neon/25 via-black to-neon/20">
      <svg viewBox="0 0 200 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="visor" cx="50%" cy="42%" r="42%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="70%" stopColor="#0b3b1f" />
            <stop offset="100%" stopColor="#052014" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="118" rx="46" ry="58" fill="#0a0a0a" stroke="#22c55e" strokeWidth="1.5" />
        <path d="M54 74 Q56 40 88 34 L88 62 Q66 60 62 78 Z" fill="#22c55e" opacity="0.85" />
        <path d="M146 74 Q144 40 112 34 L112 62 Q134 60 138 78 Z" fill="#22c55e" opacity="0.85" />
        <circle cx="100" cy="74" r="26" fill="#0a0a0a" stroke="#a855f7" strokeWidth="1.5" />
        <circle cx="100" cy="74" r="17" fill="url(#visor)" />
        <line x1="83" y1="74" x2="117" y2="74" stroke="#4ade80" strokeWidth="1" opacity="0.7" />
        <circle cx="62" cy="120" r="22" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.8" />
        <circle cx="138" cy="120" r="22" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.8" />
        <rect x="52" y="150" width="18" height="26" rx="7" fill="#22c55e" opacity="0.9" />
        <rect x="130" y="150" width="18" height="26" rx="7" fill="#a855f7" opacity="0.9" />
        <path d="M64 92 Q70 88 78 90 M122 90 Q130 88 136 92" stroke="#4ade80" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M92 130 q8 8 16 0" stroke="#4ade80" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 text-center backdrop-blur">
        <span className="text-[10px] uppercase tracking-[0.25em] text-violet-soft">
          Generated preview
        </span>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section-shell pb-20">
      <h2 className="section-title">
        WORK <span className="text-neon">/</span> <span className="text-neon">03</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 — Web Development */}
        <article className="glass-card flex flex-col p-6 transition-colors duration-300 hover:border-neon/40">
          <CardHeader index={1} title="Web Development" />
          <p className="text-sm leading-relaxed text-white/70">
            BeKind Hotel &amp; Suites needed a modern booking-style site that turned mobile visitors
            into bookings. I rebuilt it responsive, fast and conversion-focused — resulting in a
            clean, premium online presence.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tag("React")}
            {tag("Tailwind CSS")}
            {tag("Responsive")}
          </div>
          <div className="mt-5 flex gap-3">
            <a href={LINKS.bekindLive} target="_blank" rel="noopener noreferrer" className="neon-btn flex-1 !px-4 !py-2 text-center text-xs">
              Live Link
            </a>
            <a href={LINKS.liveRepo} target="_blank" rel="noopener noreferrer" className="ghost-btn flex-1 !px-4 !py-2 text-center text-xs">
              GitHub
            </a>
          </div>
        </article>

        {/* Card 2 — AI UGC Video */}
        <article className="glass-card flex flex-col p-6 transition-colors duration-300 hover:border-violet-soft/50">
          <CardHeader index={2} title="AI UGC Video" />
          <UGCVideo />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            15-second short-form ad — AI-assisted script, product styling and editing tuned for
            social feeds. Built to stop the scroll and drive action.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tag("UGC")}
            {tag("AI Script")}
            {tag("Editing")}
          </div>
        </article>

        {/* Card 3 — Prompt to Design */}
        <article className="glass-card flex flex-col p-6 transition-colors duration-300 hover:border-neon/40">
          <CardHeader index={3} title="Prompt to Design" />
          <PromptArt />
          <p className="mt-4 text-xs italic leading-relaxed text-white/50">
            &ldquo;futuristic Ghanaian astronaut, neon lights, cinematic, 4k&rdquo;
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            One prompt becomes a brand asset — generated, refined and polished into usable design.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tag("Midjourney")}
            {tag("Photoshop")}
            {tag("Upscale")}
          </div>
        </article>
      </div>
    </section>
  );
}