import "@/app/globals.css";
import GlobalNavbar from "@/components/global-navbar";
import SidebarNav from "@/components/sidebar/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project B - Dashboard",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalNavbar />
      <main className="container grid flex-1 gap-12 py-6 md:grid-cols-[200px_1fr]">
        <SidebarNav />
        <div className="flex w-full flex-1 flex-col overflow-hidden">
          <div className="grid items-start gap-8">{children}</div>
        </div>
      </main>
    </>
  );
}
