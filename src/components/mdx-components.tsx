import type { HTMLAttributes } from "react";
import { CodeBlock } from "./code-block";
import { DemoFrame } from "./demo-frame";
import { InteractiveDemo } from "./interactive-demo";

export const mdxComponents = {
  pre: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <div className="not-prose my-6 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950/95 p-1 shadow-lg ring-1 ring-slate-900/5 dark:border-slate-700/80 dark:bg-slate-900/95" {...props}>
      {children}
    </div>
  ),
  code: CodeBlock,
  DemoFrame,
  InteractiveDemo,
};
