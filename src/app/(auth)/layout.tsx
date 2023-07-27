import "@/app/globals.css";
import type { Metadata } from "next";

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
    <main className="container mx-auto flex min-h-screen max-w-md flex-col justify-center">
      {children}
    </main>
  );
}
