import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-heading-face",
  display: "swap",
});

const bodyFont = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body-face",
  display: "swap",
});

const scriptFont = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Therapy Website Draft",
  description: "Homepage draft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}