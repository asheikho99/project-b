import "@/app/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Project B",
  description: "Login into your account",
};

export default function AuthRootLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex min-h-screen flex-col justify-center items-center">{children}</main>;
}
