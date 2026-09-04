import type { Metadata } from 'next'
import { Fraunces, Hanken_Grotesk, DM_Mono, Noto_Sans_TC } from 'next/font/google'
import './globals.css'
import brand from '../../brand.config'
import { siteUrl } from '@/lib/site-url'

/* 換品牌時把這三支換成品牌自己的字體，variable 名稱維持不變
   （brand.tokens.css 指向的是 --font-sans / --font-mono-face / --font-cjk-face）*/
const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display-face',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})
const sans = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const monoFace = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono-face',
  display: 'swap',
  weight: ['300', '400', '500'],
})
const cjkFace = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-cjk-face',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl('/')),
  // ⚠️ 這裡不要設 title / title.template ——
  //    template 會套到 [locale]/layout.tsx 的 title.default 上，
  //    首頁會變成「BRAND — tagline — BRAND」。title 交給 [locale] 全權處理。
  description: brand.description.en,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // ⚠️ 字體變數必須掛在 <html>，不能掛在 <body>。
    // brand.tokens.css 在 :root 宣告 --font-display: var(--font-sans)，
    // CSS 變數在「宣告處的作用域」解析 —— 變數若只存在於 body，
    // :root 看不到它，整條宣告失效變空值，全站字體靜默掉回系統字體。
    <html className={`${display.variable} ${sans.variable} ${monoFace.variable} ${cjkFace.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
