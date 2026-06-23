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
  title: "imasque Celluloid Collection — 早鳥預購 NT$299",
  description:
    "把太陽眼鏡的時髦，變成深度睡眠的溫柔。imasque Celluloid Collection 是 11 歲 CxY 的太陽眼鏡造型柔軟睡眠眼罩。",
  metadataBase: new URL("https://imasque.com"),
  openGraph: {
    title: "imasque Celluloid Collection — 早鳥預購 NT$299",
    description:
      "Black 與 Cream 兩款玳瑁框靈感眼罩，Tencel 透氣材質、雙側耳掛可調繩。支持 CxY 的創意眼罩誕生。",
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
