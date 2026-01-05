import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { masvis } from "./font"; // 👈 Masvis local font
import "./globals.css";

import Navbar from "./Components/ui/Navbar";
import Footer from "./Components/ui/Footer";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKM Digi | Digital Marketing Agency",
  description: "Best Digital Marketing Company in India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${masvis.variable}
          antialiased
          bg-white
          text-gray-900
        `}
      >
        <Navbar />

        {/* Global Toaster */}
        <Toaster position="top-right" reverseOrder={false} />

        {/* Main content offset for fixed navbar */}
        <main className="pt-[88px] min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
