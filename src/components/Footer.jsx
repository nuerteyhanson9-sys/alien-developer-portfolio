import { LINKS } from "../site.js";

const socials = [
  { label: "GitHub", href: LINKS.github, icon: "M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0012 2z" },
  { label: "LinkedIn", href: LINKS.linkedin, icon: "M4.98 3.5a2.5 2.5 0 10.02 5 2.5 2.5 0 00-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z" },
  { label: "Contra", href: LINKS.contra, icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm2.4 14.5c-2.4 1.1-5.5.3-6.9-1.8-.4-.6-.1-1.3.5-1.7.6-.4 1.3-.1 1.7.5.8 1.2 2.6 1.5 3.9.9 1.3-.6 1.9-2.2 1.4-3.7-.6-1.5-2.1-2.2-3.5-1.8.4 1 .9 2 1.5 3H8.7v-1.4c0-.6.3-1.1.9-1.4.1-1.7 1.2-3.2 2.8-3.9 2.4-1.1 5.5-.3 6.9 1.8.4.6.1 1.3-.5 1.7-.6.4-1.3.1-1.7-.5-.8-1.2-2.6-1.5-3.9-.9-1.3.6-1.9 2.2-1.4 3.7.6 1.5 2.1 2.2 3.5 1.8-.4-1-.9-2-1.5-3h2.3v1.5c0 .6-.3 1.1-.9 1.4-.1 1.7-1.2 3.2-2.8 3.9H12z" }
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 py-8 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-10">
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/50 transition-colors hover:text-neon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>

        <p className="text-xs tracking-widest text-white/40">
          © 2026 <span className="text-neon">ALIEN.DEV</span> · Hanson Nuertey
        </p>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-neon"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}