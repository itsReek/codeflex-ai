import type { Metadata } from "next";
import { Inter } from "next/font/google"; // ✅ FIXED
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeFlex AI - Get Jacked",
  description: "A modern fitness AI platform to get jacked for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ConvexClerkProvider>
        <html lang="en">
          <body
            className={`${inter.className} antialiased`} // ✅ FIXED
          >
            <Navbar />

            {/* GRID BACKGROUND */}
            <div className="fixed inset-0 -z-1">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
              <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            <main className="pt-24 flex-grow">{children}</main>
            <Footer />
          </body>
        </html>
      </ConvexClerkProvider>
    </ClerkProvider>
  );
}
