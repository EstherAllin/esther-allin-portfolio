import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Esther Allin | Frontend Developer",
    template: "%s | Esther Allin",
  },
  description:
    "Case-study-driven frontend portfolio focused on accessibility, UX, performance, and SEO-led web development.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Esther Allin | Frontend Developer",
    description:
      "Case-study-driven frontend portfolio focused on accessibility, UX, performance, and SEO-led web development.",
    url: "/",
    siteName: "Esther Allin",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Esther Allin - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esther Allin | Frontend Developer",
    description:
      "Case-study-driven frontend portfolio focused on accessibility, UX, performance, and SEO-led web development.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
