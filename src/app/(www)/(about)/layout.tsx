import "@/app/globals.css";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/nav/site-nav";
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
      <main className="container mx-auto flex min-h-screen flex-col py-6">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
