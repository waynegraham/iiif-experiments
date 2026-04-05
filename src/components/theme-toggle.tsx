"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "iiif-theme";
type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      type="button"
      className="border border-[rgb(var(--border)_/_0.45)] bg-[rgb(var(--surface)_/_0.9)] px-4 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent)_/_0.6)] hover:text-[rgb(var(--accent))]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      Theme
    </button>
  );
}
