const plans = [
  {
    name: "Starter",
    price: "$50",
    tagline: "Quick design needs",
    features: ["Logo / Flyer", "1 Day turnaround", "2 Revisions"],
    featured: false
  },
  {
    name: "Growth",
    price: "$150",
    tagline: "Launch & convert",
    features: ["Landing Page", "AI Chatbot", "Responsive design"],
    featured: true
  },
  {
    name: "Premium",
    price: "$300",
    tagline: "Full-stack package",
    features: ["Full Website + UGC", "Backend", "30 Days Support"],
    featured: false
  }
];

export default function Services() {
  return (
    <section id="services" className="section-shell pb-20">
      <h2 className="section-title">SERVICES</h2>

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={
              plan.featured
                ? "glass-card relative flex flex-col border-neon/60 p-8 text-center shadow-[0_0_40px_rgba(34,197,94,0.18)] ring-2 ring-neon/50 md:scale-105"
                : "glass-card flex flex-col p-8 text-center transition-colors duration-300 hover:border-white/25"
            }
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-neon/60 bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neon">
                Most Popular
              </span>
            )}

            <h3 className={`text-xl font-bold tracking-widest ${plan.featured ? "text-neon" : "text-white"}`}>
              {plan.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{plan.tagline}</p>

            <p className={`mt-6 text-5xl font-extrabold ${plan.featured ? "text-neon neon-glow" : "text-white"}`}>
              {plan.price}
            </p>

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-neon">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={
                plan.featured
                  ? "mt-8 rounded-xl bg-neon px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-neon-soft hover:shadow-[0_0_24px_rgba(34,197,94,0.5)]"
                  : "mt-8 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-neon/60 hover:text-neon"
              }
            >
              Choose
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}