/**
 * Vercel serverless handler (optional). Set the same env vars in the Vercel project.
 * For local dev, use `npm run dev` (Express on :8787 + Vite proxy).
 */
import { submitContactForm } from "../server/mailjet-send.mjs";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }
    if (
      name.length > 200 ||
      email.length > 320 ||
      company.length > 200 ||
      message.length > 8000
    ) {
      return res.status(400).json({ error: "One or more fields are too long." });
    }

    await submitContactForm({ name, email, company, message });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("[api/contact]", e?.code || e?.message);
    if (e?.code === "MAILJET_CONFIG") {
      return res.status(503).json({ error: "Email service is not configured." });
    }
    return res.status(500).json({ error: "Could not send your message." });
  }
}
