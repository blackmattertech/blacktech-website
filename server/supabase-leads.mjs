const DEFAULT_TABLE = "website_leads";

function splitCsvLike(value) {
  return String(value || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

function parseLeadFromMessage(message) {
  const lines = String(message || "").split("\n");
  const leadSourceLine = lines.find((l) => l.startsWith("Lead source:"));
  const interestsLine = lines.find((l) => l.startsWith("Interested in:"));
  const budgetLine = lines.find((l) => l.startsWith("Estimated budget:"));
  const phoneLine = lines.find((l) => l.startsWith("Phone:"));

  const leadSources = leadSourceLine
    ? splitCsvLike(leadSourceLine.replace("Lead source:", ""))
    : [];
  const interests = interestsLine
    ? splitCsvLike(interestsLine.replace("Interested in:", ""))
    : [];
  const estimatedBudget = budgetLine
    ? budgetLine.replace("Estimated budget:", "").trim() || null
    : null;
  const phone = phoneLine ? phoneLine.replace("Phone:", "").trim() || null : null;

  const detailsStart = lines.findIndex((l) => l.startsWith("Estimated budget:"));
  const projectDetails =
    detailsStart >= 0
      ? lines.slice(detailsStart + 1).join("\n").trim() || String(message || "")
      : String(message || "");

  return { leadSources, interests, estimatedBudget, phone, projectDetails };
}

/**
 * Persist a website lead in Supabase.
 * Throws on config errors or insertion failures.
 */
export async function saveWebsiteLead({
  name,
  email,
  company,
  message,
  req,
  agreedToTerms = false,
}) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const table = process.env.SUPABASE_CONTACTS_TABLE || DEFAULT_TABLE;

  if (!supabaseUrl || !serviceRoleKey) {
    const err = new Error("Supabase is not configured (missing URL/service role key)");
    err.code = "SUPABASE_CONFIG";
    throw err;
  }

  const parsed = parseLeadFromMessage(message);
  const userAgent =
    req?.headers?.["user-agent"] ||
    req?.headers?.get?.("user-agent") ||
    null;
  const xff =
    req?.headers?.["x-forwarded-for"] ||
    req?.headers?.get?.("x-forwarded-for") ||
    "";
  const clientIp = String(xff).split(",")[0].trim() || req?.ip || null;

  const payload = {
    name,
    email,
    phone: parsed.phone,
    field: company || null,
    lead_sources: parsed.leadSources,
    interests: parsed.interests,
    estimated_budget: parsed.estimatedBudget,
    project_details: parsed.projectDetails || message,
    agreed_to_terms: Boolean(agreedToTerms),
    source: "website",
    user_agent: userAgent,
    client_ip: clientIp,
  };

  const endpoint = `${supabaseUrl.replace(/\/+$/, "")}/rest/v1/${encodeURIComponent(table)}`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    const err = new Error(
      `Supabase insert failed (${res.status})${body ? `: ${body}` : ""}`
    );
    err.code = "SUPABASE_INSERT";
    throw err;
  }
}
