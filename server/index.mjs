import "dotenv/config";
import cors from "cors";
import express from "express";
import { submitContactForm } from "./mailjet-send.mjs";
import { saveWebsiteLead } from "./supabase-leads.mjs";

const app = express();
const port = Number(process.env.PORT) || 8787;

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (/^https?:\/\/localhost(:\d+)?$/.test(origin)) return cb(null, true);
      if (process.env.CORS_ORIGIN && origin === process.env.CORS_ORIGIN) {
        return cb(null, true);
      }
      cb(null, true);
    },
  })
);
app.use(express.json({ limit: "32kb" }));

app.post("/api/contact", async (req, res) => {
  try {
    const name = String(req.body?.name ?? "").trim();
    const email = String(req.body?.email ?? "").trim();
    const company = String(req.body?.company ?? "").trim();
    const message = String(req.body?.message ?? "").trim();
    const agreedToTerms =
      typeof req.body?.agreedToTerms === "boolean"
        ? req.body.agreedToTerms
        : /I agree to the terms and conditions/i.test(message);

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }
    if (name.length > 200 || email.length > 320 || company.length > 200 || message.length > 8000) {
      return res.status(400).json({ error: "One or more fields are too long." });
    }

    await saveWebsiteLead({
      name,
      email,
      company,
      message,
      req,
      agreedToTerms,
    });
    await submitContactForm({ name, email, company, message });
    res.json({ ok: true });
  } catch (e) {
    console.error("[contact]", e?.code || e?.message, e?.details || "");
    if (e?.code === "SUPABASE_CONFIG") {
      return res.status(503).json({
        error:
          "Lead storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
      });
    }
    if (e?.code === "SUPABASE_INSERT") {
      return res.status(500).json({
        error: "Could not save your request. Please try again later.",
      });
    }
    if (e?.code === "MAILJET_CONFIG") {
      return res.status(503).json({
        error: "Email service is not configured. Set MAILJET_API_KEY and MAILJET_SECRET_KEY.",
      });
    }
    res.status(500).json({ error: "Could not send your message. Please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
