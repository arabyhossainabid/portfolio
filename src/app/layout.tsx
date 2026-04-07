import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/pages/navbar/navbar";
import SplashCursorWrapper from "@/components/SplashCursorWrapper";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  title: "Araby Hossain Abid - Frontend Expert & Full-Stack Developer",
  description: "Expert Frontend Developer specializing in React, Next.js, and TypeScript, while building robust backend skills for full-stack excellence.",
  icons: { icon: "/images/logo.svg" },
  keywords: ["Frontend Expert", "Next.js", "React", "TypeScript", "Frontend Developer", "Araby Hossain Abid"],
  authors: [{ name: "Araby Hossain Abid" }],
  openGraph: {
    title: "Araby Hossain Abid - Frontend Expert",
    description: "Expert frontend developer building modern, responsive web experiences",
    type: "website",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Araby Hossain Abid Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Araby Hossain Abid - Full-Stack Developer",
    description: "Skilled full-stack web developer specializing in modern web technologies",
    images: ["/images/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.transparenttextures.com" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashCursorWrapper />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}