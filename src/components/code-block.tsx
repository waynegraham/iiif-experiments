import type { HTMLAttributes } from "react";

interface CodeBlockProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

export function CodeBlock({ className = "", children, ...props }: CodeBlockProps) {
  return (
    <pre className={`overflow-x-auto rounded-3xl bg-slate-950 px-4 py-4 text-sm leading-6 text-slate-100 ${className}`} {...props}>
      <code className={className}>{children}</code>
    </pre>
  );
}
