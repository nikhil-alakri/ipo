import type { Metadata } from "next";
import { Sora } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPO List Application",
  description: "This is test application for IPO List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
