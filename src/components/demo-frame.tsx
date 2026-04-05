interface DemoFrameProps {
  children: React.ReactNode;
  caption?: string;
}

export function DemoFrame({ children, caption }: DemoFrameProps) {
  return (
    <div className="rounded-4xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/95">
      {children}
      {caption ? <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{caption}</p> : null}
    </div>
  );
}
