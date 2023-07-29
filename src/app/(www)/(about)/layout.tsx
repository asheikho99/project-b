import "@/app/globals.css";
import AboutFooter from "@/components/about-footer";
import SiteNav from "@/components/site-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project B",
  description: "Manage your fitness court booking",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <main className="container mx-auto flex min-h-screen max-w-7xl flex-col py-8">
        {children}
      </main>
      <AboutFooter />
    </>
  );
}
