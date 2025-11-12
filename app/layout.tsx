import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Pawan Engineering – AAYUMED",
  description: "Medical engineering products and services",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins`}>
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
