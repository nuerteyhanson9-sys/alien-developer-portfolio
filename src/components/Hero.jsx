import { LINKS } from "../site.js";

export default function Hero() {
  return (
    <section id="hero" className="section-shell pb-20 text-center">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-violet-soft md:text-sm">
        Accra, Ghana · Open to remote
      </p>

      <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
        I Build <span className="text-violet-neon">AI Websites</span> &amp;{" "}
        <span className="text-neon neon-glow">AI UGC Ads</span> That Sell
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
        Web Dev + Prompt Engineering + Design — for startups &amp; brands.
        Based in Accra, open to remote.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="#work" className="neon-btn">
          View My Work
        </a>
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="ghost-btn"
        >
          Chat on WhatsApp
        </a>
      </div>

      <p className="mt-16 animate-bounce text-xs tracking-widest text-white/40">
        ← Swipe left/right or use arrow keys →
      </p>
    </section>
  );
}