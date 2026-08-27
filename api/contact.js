import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server is not configured to send mail." });
  }

  const form = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});

  const name = String(form.name || "").trim();
  const email = String(form.email || "").trim();
  const message = String(form.message || "").trim();
  const subject = String(form.subject || "").trim() || "New portfolio message";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !emailRegex.test(email) || !message) {
    return res.status(400).json({ error: "Please fill in all required fields correctly." });
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "Alien Developer Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || "nuerteyhanson9@gmail.com"],
      replyTo: email,
      subject: subject,
      text: "Name: " + name + "\nEmail: " + email + "\n\n" + message,
      html:
        "<div style=\"font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1f2937\">" +
        "<h2 style=\"margin:0 0 12px;color:#0ea5e9\">New Portfolio Message</h2>" +
        "<p><strong>Name:</strong> " + escapeHtml(name) + "</p>" +
        "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>" +
        "<hr>" +
        "<p style=\"white-space:pre-wrap\">" + escapeHtml(message) + "</p>" +
        "</div>"
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Something went wrong. Please try again." });
    }

    return res.status(200).json({ success: true, id: data && data.id });
  } catch (err) {
    console.error("Resend exception:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
