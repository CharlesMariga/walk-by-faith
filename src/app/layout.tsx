import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import ElementsProvider from "@/providers/elements-provider";

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
  title: "Walk By Faith Ministry | Outreach Programme",
  description: "Bringing Jesus and Hope to the Unreached",
  authors: [{ name: "Charles Njenga", url: "https://charlesnjenga.com" }],
  creator: "Charles Njenga",
  metadataBase: new URL("https://walkbyfaith.org"),
  openGraph: {
    title: "Walk By Faith Ministry | Outreach Programme",
    description: "Bringing Jesus and Hope to the Unreached",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walk By Faith Ministry | Outreach Programme",
    description: "Bringing Jesus and Hope to the Unreached",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-pt-16 scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-primary relative text-slate-300 antialiased selection:bg-amber-400/30 selection:text-amber-200`}
      >
        <ElementsProvider>{children}</ElementsProvider>
      </body>
    </html>
  );
}
