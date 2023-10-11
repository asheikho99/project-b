import "@/app/globals.css";
import GlobalNavbar from "@/components/global-navbar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Project B - Dashboard",
  description: "Dashboard",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalNavbar />
      <main className="min-h-screen flex-col">{children}</main>
    </>
  );
}
