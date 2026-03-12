/// <reference types="astro/client" />

interface Window {
  THREE?: unknown;
  VANTA?: { NET: (opts: Record<string, unknown>) => unknown };
  vantaEffect?: unknown;
}
