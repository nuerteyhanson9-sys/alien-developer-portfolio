import { Link, NavLink } from "react-router-dom";
import { LINKS } from "../site.js";

const links = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Skills", to: "/skills" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

function linkClass({ isActive }) {
  return `text-xs font-medium uppercase tracking-widest transition-colors ${
    isActive ? "text-neon" : "text-white/60 hover:text-neon"
  }`;
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neon/20 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-10">
        <Link
          to="/"
          className="text-lg font-extrabold tracking-widest text-neon neon-glow"
          aria-label="ALIEN.DEV home"
        >
          ALIEN<span className="text-white">.DEV</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex lg:flex-1 lg:justify-center">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={LINKS.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-neon/60 bg-neon/10 px-4 py-2 text-xs font-semibold text-neon transition-all duration-300 hover:bg-neon hover:text-black"
        >
          Download CV
        </a>
      </div>

      <nav aria-label="Primary mobile" className="flex items-center justify-center gap-5 overflow-x-auto border-t border-white/10 py-2 whitespace-nowrap lg:hidden">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}