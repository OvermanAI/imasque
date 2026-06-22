import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Noto_Sans_TC } from "next/font/google";
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

export const metadata: Metadata = {
  title: "imasque — The eye mask of 11yo CxY's imagination",
  description:
    "An eye mask brand built on comfort, healing and imagination. The first collection is shaped like sunglasses. Built in public by 11-year-old CxY. Dream More.",
  metadataBase: new URL("https://imasque.com"),
  openGraph: {
    title: "imasque — Dream More.",
    description:
      "The eye mask of 11yo CxY's imagination. Comfort. Healing. Imagination.",
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
        className={`${fraunces.variable} ${hanken.variable} ${notoTC.variable} grain min-h-screen`}
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
