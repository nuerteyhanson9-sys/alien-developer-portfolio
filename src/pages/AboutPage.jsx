import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import Page from "../components/Page.jsx";

export default function AboutPage() {
  usePageMeta(
    "About — Hanson | AI Developer & Designer",
    "Hanson Nuertey is a BIT student and multidisciplinary builder based in Accra, Ghana — AI development, prompt engineering, web builds and visual design."
  );

  return (
    <Page
      kicker="Who I am"
      title="ABOUT"
      subtitle="Short bio, no fluff."
    >
      <div className="glass-card mx-auto max-w-3xl p-8 text-center md:p-12">
        <p className="text-xl leading-relaxed text-white/85 md:text-2xl">
          I&rsquo;m Hanson Nuertey — a multidisciplinary builder and designer based in Accra, Ghana.
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/50 md:text-lg">
          Currently a BIT student, I combine AI development, prompt engineering, web builds and
          visual design to ship things that look great and actually sell.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/work" className="neon-btn">See My Work</Link>
          <Link to="/contact" className="ghost-btn">Let&rsquo;s Talk</Link>
        </div>
      </div>
    </Page>
  );
}