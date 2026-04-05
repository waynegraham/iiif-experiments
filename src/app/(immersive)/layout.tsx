import Link from "next/link";

export default function ImmersiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="border-b border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-sm sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/experiments" className="text-sm font-medium text-slate-200 transition hover:text-white">
            ← Back to experiments
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Home
          </Link>
        </div>
      </div>
      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">{children}</main>
    </div>
  );
}
