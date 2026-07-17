import { useEffect, useState } from "react";

export type PerfMode = "high" | "low";

const KEY = "perf-mode";

function detectDefault(): PerfMode {
  if (typeof window === "undefined") return "high";
  const saved = localStorage.getItem(KEY) as PerfMode | null;
  if (saved === "high" || saved === "low") return saved;
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const mem = (navigator as { deviceMemory?: number }).deviceMemory;
  const cores = navigator.hardwareConcurrency ?? 8;
  if (reduced || (mem && mem <= 4) || cores <= 4) return "low";
  return "high";
}

/** Tiny global perf-mode store w/ localStorage + <html data-perf="..."> attribute. */
export function usePerfMode() {
  const [mode, setMode] = useState<PerfMode>("high");

  useEffect(() => {
    const initial = detectDefault();
    setMode(initial);
    document.documentElement.dataset.perf = initial;
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const next = (e as CustomEvent<PerfMode>).detail;
      setMode(next);
      document.documentElement.dataset.perf = next;
    };
    window.addEventListener("perf-mode-change", handler);
    return () => window.removeEventListener("perf-mode-change", handler);
  }, []);

  const toggle = () => {
    const next: PerfMode = mode === "high" ? "low" : "high";
    localStorage.setItem(KEY, next);
    window.dispatchEvent(new CustomEvent<PerfMode>("perf-mode-change", { detail: next }));
  };

  return { mode, toggle, isLow: mode === "low" };
}
