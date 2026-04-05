"use client";

import { useState } from "react";

export function InteractiveDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4 rounded-4xl border border-slate-200/80 bg-white/95 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/95">
      <p className="text-sm text-slate-700 dark:text-slate-300">
        This is an interactive placeholder component that can be replaced by a richer IIIF canvas.
      </p>
      <button
        type="button"
        onClick={() => setCount((value) => value + 1)}
        className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        Click count: {count}
      </button>
    </div>
  );
}
