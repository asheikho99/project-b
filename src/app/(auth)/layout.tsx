import "@/app/globals.css";
import type { Metadata } from "next";

import SiteFooter from "@/components/site-footer";
import AuthNav from "@/components/auth/auth-nav";

export const metadata: Metadata = {
  title: "Project B - Login",
  description: "Login into your account",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <AuthNav />
      {children}
      <SiteFooter className="mt-auto" />
    </main>
  );
}
