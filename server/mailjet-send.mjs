/**
 * Mailjet Send API v3.1 — two messages per submission:
 * 1) Notify internal inbox with full form payload
 * 2) Auto-reply to the submitter
 */

const MAILJET_ENDPOINT = "https://api.mailjet.com/v3.1/send";

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildInternalBody({ name, email, company, message }) {
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    "Message:",
    message,
  ].filter(Boolean);
  return lines.join("\n");
}

function buildInternalHtml({ name, email, company, message }) {
  return `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif">${escapeHtml(message)}</pre>
  `.trim();
}

/**
 * @param {{ name: string; email: string; company: string; message: string }} payload
 */
export async function submitContactForm(payload) {
  const apiKey = process.env.MAILJET_API_KEY;
  const secret = process.env.MAILJET_SECRET_KEY;
  const fromEmail =
    process.env.MAILJET_FROM_EMAIL || "info@blackmattertech.com";
  const fromName =
    process.env.MAILJET_FROM_NAME || "BlackMatter Technologies";
  const internalTo =
    process.env.CONTACT_INBOX_EMAIL || "verma@blackmatter.com";

  if (!apiKey || !secret) {
    const err = new Error("Mailjet is not configured (missing API keys)");
    err.code = "MAILJET_CONFIG";
    throw err;
  }

  const { name, email, company, message } = payload;
  const auth = Buffer.from(`${apiKey}:${secret}`).toString("base64");

  const subjectInternal = name
    ? `Website inquiry from ${name}`
    : "Website inquiry — BlackMatter Technologies";

  const body = {
    Messages: [
      {
        From: { Email: fromEmail, Name: fromName },
        To: [{ Email: internalTo, Name: "BlackMatter" }],
        ReplyTo: { Email: email, Name: name },
        Subject: subjectInternal,
        TextPart: buildInternalBody(payload),
        HTMLPart: buildInternalHtml(payload),
      },
      {
        From: { Email: fromEmail, Name: fromName },
        To: [{ Email: email, Name: name }],
        Subject: "Thanks for contacting BlackMatter Technologies",
        TextPart: `Hi ${name},

Thanks for reaching out. We've received your message and will get back to you within 24 hours.

If your request is urgent, reply to this email or write to ${fromEmail}.

— BlackMatter Technologies`,
        HTMLPart: `
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for reaching out. We've received your message and will get back to you <strong>within 24 hours</strong>.</p>
          <p>If your request is urgent, reply to this email or write to <a href="mailto:${escapeHtml(fromEmail)}">${escapeHtml(fromEmail)}</a>.</p>
          <p>— BlackMatter Technologies</p>
        `.trim(),
      },
    ],
  };

  const res = await fetch(MAILJET_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const err = new Error(
      data?.ErrorMessage || data?.Messages?.[0]?.Errors?.[0]?.ErrorMessage || `Mailjet HTTP ${res.status}`
    );
    err.code = "MAILJET_API";
    err.details = data;
    throw err;
  }

  const msgs = data.Messages || [];
  const mjErr = msgs.find((m) => m.Errors && m.Errors.length > 0);
  if (mjErr) {
    const err = new Error(
      mjErr.Errors.map((e) => e.ErrorMessage).join("; ") || "Mailjet send failed"
    );
    err.code = "MAILJET_SEND";
    err.details = data;
    throw err;
  }

  return data;
}
