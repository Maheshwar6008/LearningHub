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

export const metadata: Metadata = {
  title: {
    default: "Microsoft Purview Training | Information Protection & DLP",
    template: "%s | Purview Training",
  },
  description:
    "Interactive training platform for Microsoft Purview - Learn DLP, Sensitivity Labels, Information Protection, and Compliance.",
  keywords: [
    "Microsoft Purview",
    "DLP",
    "Data Loss Prevention",
    "Information Protection",
    "Sensitivity Labels",
    "Compliance",
    "Microsoft 365",
    "Security",
    "SC-401",
    "Training",
  ],
  authors: [{ name: "Maheshwar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Microsoft Purview Training | Information Protection & DLP",
    description:
      "Interactive training for Microsoft Purview, DLP, and Information Protection.",
    siteName: "Purview Training",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Purview Training",
    description:
      "Interactive training for Microsoft Purview, DLP, and Information Protection.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
