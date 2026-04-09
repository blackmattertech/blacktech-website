export const OPEN_PROJECT_FORM_EVENT = "bm-open-project-form";

export function openProjectFormModal(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_PROJECT_FORM_EVENT));
}
