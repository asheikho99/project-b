import "@/app/globals.css";
import type { Metadata } from "next";
import SiteNav from "@/components/nav/site-nav";
import SiteFooter from "@/components/site-footer";
import SidebarNav from "@/components/sidebar/sidebar-nav";

export const metadata: Metadata = {
  title: "Project B",
  description: "Manage your fitness court booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <main className="container grid flex-1 gap-12 py-6 md:grid-cols-[200px_1fr]">
        <SidebarNav />
        <div className="flex w-full flex-1 flex-col overflow-hidden">
          <div className="grid items-start gap-8">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
