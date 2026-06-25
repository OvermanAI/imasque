import type { Metadata } from "next";
import { Bodoni_Moda, Fraunces, Hanken_Grotesk, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const notoTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-tc",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "imasque Celluloid — Boutique Sleep Masks",
  description:
    "Muji-level comfort, fashion-eyewear creativity, under $10. imasque Celluloid is a boutique sleep mask shaped by comfort, eyewear and CxY's imagination.",
  metadataBase: new URL("https://imasque.com"),
  openGraph: {
    title: "imasque Celluloid — Boutique Sleep Masks",
    description:
      "A boutique sleep mask inspired by celluloid eyewear: comfort-first, visually memorable, and built in public by CxY.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${hanken.variable} ${notoTC.variable} ${bodoni.variable} grain min-h-screen`}
      >
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
