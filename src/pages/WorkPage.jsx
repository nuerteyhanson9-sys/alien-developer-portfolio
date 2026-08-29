import { useRef, useState } from "react";
import { LINKS } from "../site.js";
import usePageMeta from "../hooks/usePageMeta.js";
import Page from "../components/Page.jsx";
import Lightbox from "../components/Lightbox.jsx";
import ugcVideo from "../../assets/vaseline-ugc-opt.mp4";
import ugcPoster from "../../assets/vaseline-ugc-poster.jpg";
import bekindF1 from "../../assets/be-kind-flyer-opt.jpg";
import bekindF2 from "../../assets/be-kind-flyer-2-opt.jpg";
import bekindF3 from "../../assets/be-kind-flyer-3-opt.jpg";
import abenaF1 from "../../assets/abena-foods-cover-opt.jpg";
import abenaF2 from "../../assets/abena-foods-flyer-2-opt.jpg";
import chowF1 from "../../assets/chow-heaven-flyer-1-opt.jpg";
import chowF2 from "../../assets/chow-heaven-flyer-2-opt.jpg";
import chowF3 from "../../assets/chow-heaven-flyer-3-opt.jpg";

const preview = (name) => `${LINKS.base}previews/${name}.jpg`;

function tag(text) {
  return (
    <span className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">
      {text}
    </span>
  );
}

function CardHeader({ index, title }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="rounded-md bg-neon/15 px-2 py-1 text-xs font-bold text-neon">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="text-lg font-bold tracking-wide text-white">{title}</h3>
    </div>
  );
}

function Card({ index, title, children }) {
  return (
    <article className="glass-card flex flex-col p-6 transition-colors duration-300 hover:border-neon/40">
      <CardHeader index={index} title={title} />
      {children}
    </article>
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
        <span className="text-[10px] uppercase tracking-[0.25em] text-violet-soft">Generated preview</span>
      </div>
    </div>
  );
}

function WebPreviewCard({ index, title, img, description, tags, liveHref, liveLabel, codeHref }) {
  return (
    <Card index={index} title={title}>
      <a href={liveHref} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-white/10">
        <img
          src={img}
          alt={`${title} preview`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      <p className="mt-4 text-sm leading-relaxed text-white/70">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">{tags.map(tag)}</div>
      <div className="mt-5 flex gap-3">
        <a href={liveHref} target="_blank" rel="noopener noreferrer" className="neon-btn flex-1 !px-4 !py-2 text-center text-xs">
          {liveLabel}
        </a>
        {codeHref && (
          <a href={codeHref} target="_blank" rel="noopener noreferrer" className="ghost-btn flex-1 !px-4 !py-2 text-center text-xs">
            GitHub
          </a>
        )}
      </div>
    </Card>
  );
}

function FlyerCard({ index, title, cover, count, onOpen }) {
  return (
    <article className="glass-card flex flex-col p-6 transition-colors duration-300 hover:border-violet-soft/50">
      <CardHeader index={index} title={title} />
      <button
        type="button"
        onClick={onOpen}
        className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 text-left"
        aria-label={`Open ${title} gallery`}
      >
        <img src={cover} alt={`${title} cover`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
        <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white backdrop-blur">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-neon">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
          {count} designs · view
        </span>
      </button>
      <p className="mt-4 text-sm leading-relaxed text-white/70">
        Brand flyer set designed in Photoshop — social, print and menu-ready.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tag("Photoshop")}
        {tag("Branding")}
      </div>
    </article>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto flex aspect-[9/16] w-36 items-center justify-center overflow-hidden rounded-[1.8rem] border border-neon/40 bg-gradient-to-b from-violet-neon/20 via-black to-neon/15 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
      <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full border border-white/15" />
      <div className="text-center">
        <div className="mx-auto text-3xl">📱</div>
        <p className="mt-2 text-xs font-bold tracking-widest text-neon">SHOPWAVE</p>
        <p className="text-[9px] text-white/50">Android App</p>
      </div>
    </div>
  );
}

export default function WorkPage() {
  usePageMeta(
    "Work — Hanson | AI Developer & Designer",
    "Selected projects by Hanson Nuertey: BeKind Hotel, Chow Heaven, digital wedding invitation, ShopWave app, flyer sets and AI UGC ads."
  );
  const [gallery, setGallery] = useState(null);

  const flyerBrands = [
    {
      name: "BeKind Hotel",
      cover: bekindF1,
      items: [
        { src: bekindF1, alt: "BeKind flyer", caption: "BeKind Hotel & Suites — main flyer" },
        { src: bekindF2, alt: "BeKind flyer 2", caption: "BeKind Hotel & Suites — offer flyer" },
        { src: bekindF3, alt: "BeKind flyer 3", caption: "BeKind Hotel & Suites — premium design" }
      ]
    },
    {
      name: "Abena Foods",
      cover: abenaF1,
      items: [
        { src: abenaF1, alt: "Abena Foods cover", caption: "Abena Foods — product cover" },
        { src: abenaF2, alt: "Abena Foods flyer", caption: "Abena Foods — campaign flyer" }
      ]
    },
    {
      name: "Chow Heaven",
      cover: chowF1,
      items: [
        { src: chowF1, alt: "Chow Heaven flyer", caption: "Chow Heaven — menu flyer" },
        { src: chowF2, alt: "Chow Heaven flyer 2", caption: "Chow Heaven — promo flyer" },
        { src: chowF3, alt: "Chow Heaven flyer 3", caption: "Chow Heaven — combos flyer" }
      ]
    }
  ];

  return (
    <Page
      kicker="Portfolio"
      title="WORK"
      subtitle="Selected projects across web development, AI UGC, design and mobile — hover a card, open a live site, or click a gallery."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 — Web Development (BeKind) */}
        <WebPreviewCard
          index={1}
          title="Web Development"
          img={preview("bekind")}
          description="BeKind Hotel & Suites needed a modern booking-style site that turns mobile visitors into bookings. I rebuilt it responsive, fast and conversion-focused."
          tags={["React", "Tailwind CSS", "Responsive"]}
          liveHref={LINKS.bekindLive}
          liveLabel="Live Site"
        />

        {/* Card 2 — AI UGC Video */}
        <Card index={2} title="AI UGC Video">
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
        </Card>

        {/* Card 3 — Prompt to Design */}
        <Card index={3} title="Prompt to Design">
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
        </Card>

        {/* Card 4 — Chow Heaven Website */}
        <WebPreviewCard
          index={4}
          title="Chow Heaven"
          img={preview("chow-heaven")}
          description="Full restaurant website for Chow Heaven — interactive menu, gallery and ordering flow with a warm, appetite-first design."
          tags={["HTML", "CSS", "JavaScript"]}
          liveHref={LINKS.chowLive}
          liveLabel="Live Site"
        />

        {/* Card 5 — Wedding Invitation */}
        <WebPreviewCard
          index={5}
          title="Wedding Invitation"
          img={preview("wedding")}
          description="A complete digital wedding invitation — hero, story, gallery, schedule and RSVP — designed to feel personal and elegant."
          tags={["HTML", "CSS", "JavaScript", "Responsive"]}
          liveHref={LINKS.wedding}
          liveLabel="View Invite"
          codeHref="https://github.com/nuerteyhanson9-sys/wedding-invitation"
        />

        {/* Card 6 — Mobile App */}
        <Card index={6} title="ShopWave — Mobile App">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent py-6">
            <PhoneMock />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A shopping app built and packaged as an installable Android APK — clean UI, ready to
            install on any device.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tag("Android")}
            {tag("APK")}
            {tag("UI Design")}
          </div>
          <a href={LINKS.apk} download className="neon-btn mt-5 w-full !py-2.5 text-center text-xs">
            Download APK ↓
          </a>
        </Card>

        {/* Cards 7-9 — Flyer galleries */}
        {flyerBrands.map((brand, i) => (
          <FlyerCard
            key={brand.name}
            index={7 + i}
            title={`${brand.name} Flyers`}
            cover={brand.cover}
            count={brand.items.length}
            onOpen={() => setGallery({ items: brand.items, index: 0 })}
          />
        ))}
      </div>

      {gallery && (
        <Lightbox
          items={gallery.items}
          index={gallery.index}
          onClose={() => setGallery(null)}
          onNavigate={(next) => {
            if (next < 0 || next >= gallery.items.length) return;
            setGallery((prev) => (prev ? { ...prev, index: next } : prev));
          }}
        />
      )}
    </Page>
  );
}