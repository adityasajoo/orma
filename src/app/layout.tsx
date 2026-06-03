import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export const metadata: Metadata = {
  title: "OR•MA STUDIO",
  description: "Luxury clothing studio — Collection 01: Residue // 2026",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "OR•MA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        <link rel="apple-touch-icon" href="/images/latest/logo.png" />
      </head>
      <body className="min-h-screen bg-white">
        <ServiceWorkerRegistration />
        {children}
        <Footer />
      </body>
    </html>
  );
}
