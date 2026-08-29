import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import Page from "../components/Page.jsx";
import { BACKEND_URL } from "../site.js";

const initial = { name: "", email: "", service: "", message: "" };

export default function ContactPage() {
  usePageMeta(
    "Contact — Hanson | AI Developer & Designer",
    "Start a project with Hanson Nuertey. Send a message for websites, AI UGC or design work."
  );
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Request failed");
      setForm(initial);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <Page
      kicker="Get in touch"
      title="CONTACT"
      subtitle="Tell me about your project — websites, AI UGC or design. I reply fast."
    >
      <form onSubmit={handleSubmit} className="glass-card mx-auto flex w-full max-w-2xl flex-col gap-5 p-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-white/50">Name</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              placeholder="Your name"
              className="field"
              autoComplete="name"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-white/50">Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="you@email.com"
              className="field"
              autoComplete="email"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-white/50">Service</span>
          <select required value={form.service} onChange={update("service")} className="field">
            <option value="" disabled>
              Select a service
            </option>
            <option value="Website">Website</option>
            <option value="AI UGC">AI UGC</option>
            <option value="Design">Design</option>
            <option value="Mobile App">Mobile App Dev</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-white/50">Message</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder="Tell me about your project…"
            className="field resize-none"
          />
        </label>

        <button type="submit" disabled={status === "sending"} className="neon-btn w-full disabled:cursor-not-allowed disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send Message 👽"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-neon">Message sent. I&rsquo;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Something went wrong. Email me directly at{" "}
            <a href="mailto:nuerteyhanson9@gmail.com" className="underline underline-offset-2 text-neon">
              nuerteyhanson9@gmail.com
            </a>
          </p>
        )}
      </form>
    </Page>
  );
}