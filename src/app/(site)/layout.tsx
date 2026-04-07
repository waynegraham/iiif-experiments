import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "IIIF Experiments",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto w-full max-w-screen-2xl px-4 pb-24 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">{children}</main>
      <Footer />
    </div>
  );
}
