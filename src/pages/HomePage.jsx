import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { LINKS } from "../site.js";

const preview = (name) => `${LINKS.base}previews/${name}.jpg`;

function Teaser({ to, kicker, title, description, img, chips }) {
  return (
    <Link
      to={to}
      className="glass-card group flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/50"
    >
      {img && (
        <div className="mb-5 overflow-hidden rounded-xl border border-white/10">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <span className="text-xs uppercase tracking-[0.3em] text-neon">{kicker}</span>
      <h2 className="mt-2 text-xl font-bold text-white">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{description}</p>
      {chips && <div className="mt-4 flex flex-wrap gap-2">{chips}</div>}
      <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-violet-soft transition-colors group-hover:text-neon">
        Open →
      </span>
    </Link>
  );
}

const chip = (text) => (
  <span key={text} className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">
    {text}
  </span>
);

export default function HomePage() {
  usePageMeta(
    "Hanson — AI Developer & Designer | Websites & UGC",
    "Hanson Nuertey (ALIEN.DEV) — AI Developer, Web Developer, Prompt Engineer & Designer in Accra, Ghana. I build AI websites and AI UGC ads that sell."
  );

  return (
    <>
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center md:px-10">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-violet-soft md:text-sm">
          Accra, Ghana · Open to remote
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
          I Build <span className="text-violet-neon">AI Websites</span> &amp;{" "}
          <span className="text-neon neon-glow">AI UGC Ads</span> That Sell
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
          Web Dev + Prompt Engineering + Design — for startups &amp; brands. Based in Accra, open to
          remote.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/work" className="neon-btn">
            View My Work
          </Link>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="ghost-btn">
            Chat on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => document.getElementById("previews")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 animate-bounce cursor-pointer text-xs tracking-widest text-white/40 hover:text-neon"
        >
          Explore ↓
        </button>
      </section>

      <section id="previews" className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Teaser
            to="/work"
            kicker="Selected Work"
            title="Sites, apps, flyers & UGC"
            description="BeKind Hotel, Chow Heaven, a digital wedding invitation, ShopWave app, flyer set and AI UGC ads — all in one place."
            img={preview("bekind")}
            chips={[chip("Web"), chip("Design"), chip("UGC"), chip("App")]}
          />
          <Teaser
            to="/services"
            kicker="Services"
            title="Pricing that scales"
            description="Logo & flyers from $50, landing pages with AI chatbots from $150, full websites plus UGC from $300."
            chips={[chip("Starter"), chip("Growth"), chip("Premium")]}
          />
          <Teaser
            to="/skills"
            kicker="Skills"
            title="The full stack of me"
            description="Web development, Python, prompt engineering, AI UGC creation and Photoshop — clean and measurable."
            chips={[chip("React"), chip("Python"), chip("Prompt AI"), chip("Photoshop")]}
          />
        </div>
      </section>
    </>
  );
}