export default function AlienAvatar({ className = "w-52 md:w-72 lg:w-96" }) {
  return (
    <div className={`avatar-float ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full drop-shadow-[0_0_35px_rgba(34,197,94,0.25)]">
        <defs>
          <radialGradient id="ag-aura" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#a855f7" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ag-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#3b0764" />
          </linearGradient>
          <linearGradient id="ag-screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <radialGradient id="ag-iris" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9f99d" />
            <stop offset="45%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </radialGradient>
          <filter id="ag-blur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="ag-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Aura + orbit ring */}
        <ellipse cx="200" cy="195" rx="175" ry="180" fill="url(#ag-aura)" className="glow-pulse" />
        <g className="ring-spin" style={{ transformOrigin: "200px 195px" }}>
          <circle
            cx="200"
            cy="195"
            r="168"
            stroke="#a855f7"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeDasharray="6 14"
            strokeLinecap="round"
          />
        </g>

        {/* Legs (sitting cross-legged) */}
        <ellipse cx="152" cy="352" rx="38" ry="17" fill="#4c1d95" />
        <ellipse cx="248" cy="352" rx="38" ry="17" fill="#4c1d95" />
        <ellipse cx="140" cy="368" rx="15" ry="9" fill="#6d28d9" />
        <ellipse cx="260" cy="368" rx="15" ry="9" fill="#6d28d9" />

        {/* Torso */}
        <path d="M148 268 q8 -42 52 -42 q44 0 52 42 q14 44 2 82 q-54 22 -108 0 q-12 -38 2 -82Z" fill="url(#ag-body)" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="2" />
        <path d="M148 268 q8 -42 52 -42" stroke="#22c55e" strokeOpacity="0.6" strokeWidth="3" fill="none" />
        <path d="M200 270 v64" stroke="#22c55e" strokeOpacity="0.45" strokeWidth="3" strokeDasharray="2 6" />
        <path d="M176 300 q24 10 48 0" stroke="#c084fc" strokeOpacity="0.6" strokeWidth="3" fill="none" />
        <ellipse cx="200" cy="338" rx="46" ry="12" fill="#4c1d95" />

        {/* Screen glow */}
        <rect x="118" y="252" width="164" height="118" rx="26" fill="#22c55e" opacity="0.35" filter="url(#ag-blur)" className="glow-pulse" />

        {/* Laptop */}
        <g>
          <path d="M136 352 h128 l12 18 q-76 14 -152 0Z" fill="#1e293b" stroke="#22c55e" strokeOpacity="0.55" strokeWidth="2" />
          <rect x="134" y="268" width="132" height="80" rx="12" transform="rotate(-8 200 308)" fill="url(#ag-screen)" stroke="#4ade80" strokeOpacity="0.9" strokeWidth="2.5" />
          <g transform="rotate(-8 -16 -76)">
            <rect x="152" y="288" width="96" height="6" rx="3" fill="#052e16" opacity="0.85" />
            <rect x="152" y="304" width="72" height="6" rx="3" fill="#052e16" opacity="0.7" />
            <rect x="152" y="320" width="56" height="6" rx="3" fill="#052e16" opacity="0.5" />
          </g>
          <circle cx="200" cy="336" r="4" fill="#4ade80" />
        </g>

        {/* Arms */}
        <path d="M148 280 q-20 18 6 40 q-4 26 34 28" stroke="#6d28d9" strokeWidth="16" strokeLinecap="round" fill="none" />
        <path d="M252 280 q20 18 -6 40 q4 26 -34 28" stroke="#6d28d9" strokeWidth="16" strokeLinecap="round" fill="none" />
        <circle cx="154" cy="348" r="11" fill="#7c3aed" stroke="#a855f7" strokeOpacity="0.6" strokeWidth="2" />
        <circle cx="246" cy="348" r="11" fill="#7c3aed" stroke="#a855f7" strokeOpacity="0.6" strokeWidth="2" />

        {/* Ears */}
        <path d="M108 168 l-26 -12 l10 30 q8 6 16 2Z" fill="#86efac" stroke="#22c55e" strokeOpacity="0.5" strokeWidth="2" />
        <path d="M292 168 l26 -12 l-10 30 q-8 6 -16 2Z" fill="#86efac" stroke="#22c55e" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="88" cy="160" r="6" fill="#a855f7" className="glow-pulse" />
        <circle cx="312" cy="160" r="6" fill="#a855f7" className="glow-pulse" />

        {/* Antennae */}
        <path d="M168 66 q-22 -18 -30 -36" stroke="#86efac" strokeWidth="7" strokeLinecap="round" />
        <path d="M232 66 q22 -18 30 -36" stroke="#86efac" strokeWidth="7" strokeLinecap="round" />
        <circle cx="136" cy="26" r="11" fill="#22c55e" stroke="#4ade80" strokeWidth="2" className="glow-pulse" />
        <circle cx="136" cy="26" r="7" fill="#d9f99d" />
        <circle cx="264" cy="26" r="11" fill="#a855f7" stroke="#c084fc" strokeWidth="2" className="glow-pulse-slow" />
        <circle cx="264" cy="26" r="7" fill="#e9d5ff" />

        {/* Head */}
        <g>
          <circle cx="200" cy="150" r="96" fill="#86efac" stroke="#4ade80" strokeOpacity="0.7" strokeWidth="3" />
          <path d="M108 168 q-4 74 30 96 q10 -86 62 -96Z" fill="#f0fdf4" opacity="0.5" />
        </g>

        {/* Violet brow markings */}
        <path d="M120 96 q14 -12 30 -8" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
        <path d="M280 96 q-14 -12 -30 -8" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
        <circle cx="200" cy="48" r="4" fill="#22c55e" />

        {/* Eyes */}
        <g>
          <rect x="108" y="122" width="66" height="80" rx="20" fill="#052e16" stroke="#4ade80" strokeOpacity="0.8" strokeWidth="3" />
          <rect x="226" y="122" width="66" height="80" rx="20" fill="#052e16" stroke="#4ade80" strokeOpacity="0.8" strokeWidth="3" />
          <circle cx="141" cy="162" r="26" fill="url(#ag-iris)" className="glow-pulse" />
          <circle cx="259" cy="162" r="26" fill="url(#ag-iris)" className="glow-pulse" />
          <circle cx="141" cy="162" r="12" fill="#052e16" opacity="0.55" />
          <circle cx="259" cy="162" r="12" fill="#052e16" opacity="0.55" />
          <circle cx="150" cy="150" r="7" fill="#ffffff" opacity="0.95" />
          <circle cx="268" cy="150" r="7" fill="#ffffff" opacity="0.95" />
          <rect x="108" y="122" width="66" height="34" rx="18" fill="#86efac" opacity="0.18" />
          <rect x="226" y="122" width="66" height="34" rx="18" fill="#86efac" opacity="0.18" />
        </g>

        {/* Cheeks + mouth */}
        <ellipse cx="122" cy="196" rx="13" ry="8" fill="#a855f7" opacity="0.3" />
        <ellipse cx="278" cy="196" rx="13" ry="8" fill="#a855f7" opacity="0.3" />
        <path d="M190 202 q5 7 10 0 q5 7 10 0" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Floating neon motes */}
        <circle cx="78" cy="104" r="4" fill="#22c55e" className="glow-pulse" />
        <circle cx="330" cy="238" r="5" fill="#a855f7" className="glow-pulse-slow" />
        <circle cx="86" cy="300" r="3" fill="#4ade80" className="glow-pulse-slow" />
        <circle cx="322" cy="120" r="3" fill="#22c55e" className="glow-pulse" />
      </svg>
    </div>
  );
}