function useSecureCookieFlag(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.location.protocol === "https:" || import.meta.env.PROD === true
  );
}

export type CookieSameSite = "Lax" | "Strict" | "None";

export function setCookie(
  name: string,
  value: string,
  options: {
    maxAgeSeconds: number;
    path?: string;
    sameSite?: CookieSameSite;
  }
): void {
  if (typeof document === "undefined") return;
  const path = options.path ?? "/";
  const sameSite = options.sameSite ?? "Lax";
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Path=${path}; Max-Age=${options.maxAgeSeconds}; SameSite=${sameSite}`;
  if (useSecureCookieFlag()) cookie += "; Secure";
  document.cookie = cookie;
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const prefix = `${encodeURIComponent(name)}=`;
  const parts = document.cookie.split("; ");
  for (const part of parts) {
    if (part.startsWith(prefix)) {
      return decodeURIComponent(part.slice(prefix.length));
    }
  }
  return null;
}

export function deleteCookie(name: string, path = "/"): void {
  if (typeof document === "undefined") return;
  let cookie = `${encodeURIComponent(name)}=; Path=${path}; Max-Age=0; SameSite=Lax`;
  if (useSecureCookieFlag()) cookie += "; Secure";
  document.cookie = cookie;
}
