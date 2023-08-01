import "@/app/globals.css";
import type { Metadata } from "next";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Sidebar from "@/components/sidebar";

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
      <main className="container mx-auto flex min-h-screen max-w-7xl flex-col py-8">
        <div className="grid flex-1 grid-cols-12 grid-rows-1">
          <Sidebar />
          <div className="col-span-full md:col-span-10 md:pl-4">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
