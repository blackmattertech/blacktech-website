import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  OPEN_PROJECT_FORM_EVENT,
  openProjectFormModal,
} from "../constants/projectFormModal";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

const LEAD_SOURCES = [
  "Recommendation",
  "Google search",
  "TikTok",
  "Facebook",
  "TV",
  "Other",
] as const;

const INTERESTS = [
  "Web Design",
  "Custom App/Software",
  "Marketing",
  "SEO / Copywriting",
] as const;

const BUDGETS = [
  "Less than ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹7,00,000",
  "Custom",
] as const;

function buildLeadMessage(
  sources: string[],
  interests: string[],
  budget: string,
  details: string
): string {
  const rows = [
    `Lead source: ${sources.join(", ") || "-"}`,
    `Interested in: ${interests.join(", ") || "-"}`,
    `Estimated budget: ${budget || "-"}`,
    "",
    details.trim(),
  ];
  return rows.join("\n").trim();
}

export default function ProjectInquiryModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_PROJECT_FORM_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PROJECT_FORM_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const canSubmit = useMemo(
    () => status !== "loading",
    [status]
  );

  function toggleListItem(
    value: string,
    current: string[],
    setter: (next: string[]) => void
  ) {
    if (current.includes(value)) {
      setter(current.filter((v) => v !== value));
      return;
    }
    setter([...current, value]);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const field = String(fd.get("field") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const details = String(fd.get("details") ?? "").trim();
    const agree = fd.get("agree");
    const agreedToTerms = Boolean(agree);

    if (!agreedToTerms) {
      setStatus("error");
      setErrorMessage("Please agree to the terms and conditions.");
      return;
    }

    const message = buildLeadMessage(
      selectedSources,
      selectedInterests,
      selectedBudget,
      details
    );

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: field,
          message: `Phone: ${phone}\n\n${message}`,
          agreedToTerms,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus("error");
        setErrorMessage(data.error || "Could not send request. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
      setSelectedSources([]);
      setSelectedInterests([]);
      setSelectedBudget("");
      window.setTimeout(() => setOpen(false), 900);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/65"
            aria-label="Close project form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="relative z-[101] h-[min(92dvh,920px)] w-[min(96vw,1120px)] overflow-y-auto rounded-t-[28px] border border-black/10 bg-[#f2f2f2] px-5 pb-7 pt-5 text-black shadow-2xl sm:px-8 sm:pb-8 sm:pt-6"
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 1 }}
            transition={{ duration: 0.33, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-3 text-2xl leading-none text-black/60 transition-colors hover:text-black"
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="max-w-[16ch] text-4xl font-semibold leading-[1.14] tracking-tight sm:text-6xl">
              Let&apos;s collaborate and make magic!
            </h2>

            <form onSubmit={handleSubmit} className="mt-12 space-y-7 text-black leading-loose">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto,1fr,auto,1fr] md:items-end">
                <p className="text-2xl font-medium leading-none">Hello! My name is</p>
                <input
                  name="name"
                  required
                  className="w-full border-b border-black/25 bg-transparent pb-1 text-base outline-none placeholder:text-black/45"
                  placeholder="Enter your name*"
                  disabled={!canSubmit}
                />
                <p className="text-2xl font-medium leading-none">and I work in</p>
                <input
                  name="field"
                  required
                  className="w-full border-b border-black/25 bg-transparent pb-1 text-base outline-none placeholder:text-black/45"
                  placeholder="Enter your field of activity*"
                  disabled={!canSubmit}
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <p className="mr-2 text-2xl font-medium">I came to you through</p>
                {LEAD_SOURCES.map((label) => (
                  <button
                    key={label}
                    type="button"
                    disabled={!canSubmit}
                    onClick={() =>
                      toggleListItem(label, selectedSources, setSelectedSources)
                    }
                    className={`rounded-full border px-3 py-1 text-base transition ${
                      selectedSources.includes(label)
                        ? "border-black bg-black text-white"
                        : "border-black/20 bg-transparent text-black"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <p className="mr-2 text-2xl font-medium">I am interested in</p>
                {INTERESTS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    disabled={!canSubmit}
                    onClick={() =>
                      toggleListItem(label, selectedInterests, setSelectedInterests)
                    }
                    className={`rounded-full border px-3 py-1 text-base transition ${
                      selectedInterests.includes(label)
                        ? "border-black bg-black text-white"
                        : "border-black/20 bg-transparent text-black"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <p className="mr-2 text-2xl font-medium">I have an estimated budget of</p>
                {BUDGETS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    disabled={!canSubmit}
                    onClick={() => setSelectedBudget(label)}
                    className={`rounded-full border px-3 py-1 text-base transition ${
                      selectedBudget === label
                        ? "border-black bg-black text-white"
                        : "border-black/20 bg-transparent text-black"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto,1fr,auto,1fr] md:items-end">
                <p className="text-2xl font-medium leading-none">You can contact me by email.</p>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border-b border-black/25 bg-transparent pb-1 text-base outline-none placeholder:text-black/45"
                  placeholder="Enter your email address*"
                  disabled={!canSubmit}
                />
                <p className="text-2xl font-medium leading-none">or by phone</p>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full border-b border-black/25 bg-transparent pb-1 text-base outline-none placeholder:text-black/45"
                  placeholder="Enter your phone number*"
                  disabled={!canSubmit}
                />
              </div>

              <div>
                <p className="text-2xl font-medium leading-none">
                  I would like to provide more information about the project:
                </p>
                <textarea
                  name="details"
                  required
                  rows={3}
                  className="mt-3 w-full border-b border-black/25 bg-transparent pb-1 text-base outline-none placeholder:text-black/45"
                  placeholder="Enter project details*"
                  disabled={!canSubmit}
                />
              </div>

              <div className="flex flex-wrap items-center justify-end gap-4 pt-2">
                <label className="inline-flex items-center gap-2 text-base text-black/80">
                  <input
                    type="checkbox"
                    name="agree"
                    className="h-4 w-4 rounded border-black/30"
                    disabled={!canSubmit}
                  />
                  I agree to the terms and conditions.
                </label>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="rounded-md bg-black px-6 py-2 text-base font-semibold text-neon transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send request"}
                </button>
              </div>
              {status === "success" && (
                <p className="text-sm text-emerald-700" role="status">
                  Thanks. Your request has been sent.
                </p>
              )}
              {status === "error" && errorMessage && (
                <p className="text-sm text-red-700" role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function openProjectForm(): void {
  openProjectFormModal();
}
