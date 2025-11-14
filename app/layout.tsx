import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pawanengineering.in"),
  title: "Pawan Aayumed | Medical Equipment & Hospital Furniture",
  description:
    "Premium medical equipment, ICU beds, hospital furniture, and surgical instruments. ISO certified quality since 1995.",
  keywords: [
    "ICU beds",
    "hospital furniture",
    "medical equipment",
    "surgical instruments",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Pawan Aayumed | Medical Equipment & Hospital Furniture",
    description:
      "Premium medical equipment, ICU beds, hospital furniture, and surgical instruments.",
    type: "website",
    locale: "en_IN",
    url: "https://pawanengineering.in",
    siteName: "Pawan Aayumed",
    images: [
      {
        url: "/icon01.png", // Add an image to /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Pawan Aayumed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawan Aayumed",
    description:
      "Premium medical equipment & hospital furniture",
    images: ["/icon01.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="relative max-w-7xl mx-auto">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
