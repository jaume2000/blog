import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Jaume Ivars Grimalt — Researcher & ML Engineer",
    template: "%s | Jaume Ivars Grimalt",
  },
  description: "Jaume Ivars Grimalt is a computer scientist specialized in deep learning computer vision models for various tasks such as object detection and image generation. He is the CTO of Mycrospace and has large experience on developing webpages with MERN stack. He studied in the UPV in Valencia and has one of the best academic expedients of his promotion.",
  icons: "favicon.png",
  openGraph: {
    type: "website",
    locale: "en",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
