import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esther Allin — Frontend Developer",
  description:
    "Frontend developer and digital marketer building accessible, SEO-friendly websites with Next.js, React, and Tailwind CSS.",
  openGraph: {
    title: "Esther Allin — Frontend Developer",
    description:
      "Frontend developer and digital marketer building accessible, SEO-friendly websites with Next.js, React, and Tailwind CSS.",
    siteName: "Esther Allin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esther Allin — Frontend Developer",
    description:
      "Frontend developer and digital marketer building accessible, SEO-friendly websites with Next.js, React, and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
