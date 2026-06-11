import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bellevio Florist",
    default: "Bellevio Florist — Elegant Floral Arrangements",
  },
  description:
    "Discover handcrafted bouquets and bespoke floral arrangements for every occasion. Premium flowers, delivered with care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-floral-cream text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
