import usePageMeta from "../hooks/usePageMeta.js";
import Page from "../components/Page.jsx";

const skills = [
  { label: "Web Dev", accent: "green", icon: "M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" },
  { label: "Python", accent: "purple", icon: "M12 2C7 2 5 5 5 8c0 2 1.2 3.5 3 4.5L6.6 14C5 15 4 16.8 4 19c0 3.5 3 4.5 8 4.5s8-1 8-4.5c0-2.2-1-4-2.5-5L15.4 12.5c1.8-1 3-2.5 3-4.5 0-3-2-6-6.4-6zM9 7.5a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zM12 19c-3.5 0-5 .3-5.5 1 .5.7 2 1 5.5 1s5-.3 5.5-1c-.5-.7-2-1-5.5-1z" },
  { label: "Prompt Engineering", accent: "green", icon: "M12 3l1.9 5.6a2 2 0 001.3 1.3L21 12l-5.8 1.9a2 2 0 00-1.3 1.3L12 21l-1.9-5.8a2 2 0 00-1.3-1.3L3 12l5.8-1.9a2 2 0 001.3-1.3L12 3z" },
  { label: "AI UGC", accent: "purple", icon: "M9 12l2 2 4-4M12 3l6.5 2.5L21 12l-2.5 6.5L12 21l-6.5-2.5L3 12l2.5-6.5L12 3z" },
  { label: "Photoshop", accent: "green", icon: "M14 4a10 10 0 100 16L12 14l3-3 5-2.5a10 10 0 00-6-4.5z" },
  { label: "Mobile App Dev", accent: "purple", icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" }
];

const accents = {
  green: "border-neon/40 text-neon",
  purple: "border-violet-neon/40 text-violet-soft"
};

export default function SkillsPage() {
  usePageMeta(
    "Skills — Hanson | AI Developer & Designer",
    "The skills of Hanson Nuertey: web development, Python, prompt engineering, AI UGC creation, Photoshop and mobile app development."
  );

  return (
    <Page
      kicker="What I work with"
      title="SKILLS"
      subtitle="A focused stack — deep enough to ship products, wide enough to cover code, AI, mobile and design."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {skills.map((skill, i) => (
          <article
            key={skill.label}
            className={`glass-card flex flex-col items-center gap-4 p-6 text-center transition-transform duration-300 hover:-translate-y-1 ${accents[skill.accent]}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d={skill.icon} />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
              {skill.label}
            </span>
            <span className="text-[10px] tabular-nums text-white/30">0{i + 1}</span>
          </article>
        ))}
      </div>
    </Page>
  );
}