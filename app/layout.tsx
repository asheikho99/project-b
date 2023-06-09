import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NextAuthSessionProvider from "@/contexts/next-auth-session-provider";
import ThemeProvider from "@/contexts/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project B",
  description: "Manage your Booking System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`min-h-screen ${inter.className}`)}>
        <NextAuthSessionProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            {/* @ts-expect-error Server Component */}
            <Navbar />
            <div className="container p-4">{children}</div>
            <Footer />
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
