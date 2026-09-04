// ─────────────────────────────────────────────────────────────
// IMASQUE — 品牌唯一設定檔
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: 'imasque',
  wordmark: 'IMASQUE',
  domain: 'imasque.com',

  locales: ['en', 'zh-Hant'] as const,
  defaultLocale: 'en',

  tagline: {
    en: 'Dream More.',
    'zh-Hant': 'Dream More.',   // 標語兩語都維持英文（品牌設定）
  },
  description: {
    en: 'An eye mask brand built on comfort, healing and imagination — shaped, for now, like a pair of sunglasses. Built in public by 11-year-old CxY.',
    'zh-Hant': '一個建立在舒適、療癒與想像力之上的眼罩品牌——現在，它長得像一副太陽眼鏡。由 11 歲的 CxY 公開打造。',
  },

  nav: [
    { href: '/starmonster',  label: { en: 'Starmonster',  'zh-Hant': '星星怪獸' } },
    { href: '/product',      label: { en: 'Product',      'zh-Hant': '產品' } },
    { href: '/collections',  label: { en: 'Collections',  'zh-Hant': '系列' } },
    { href: '/journal',      label: { en: 'Journal',      'zh-Hant': '日誌' } },
    { href: '/about',        label: { en: 'About',        'zh-Hant': '關於' } },
  ],

  social: { instagram: '', youtube: '' },

  // 還沒開賣（Building in Public 階段）
  commerce: { provider: 'none' as 'none' | 'shopify' },

  organization: { legalName: 'OPAND Inc.', brandType: 'open-brand' },
} as const

export type Locale = (typeof brand.locales)[number]
export const LOCALES = brand.locales
export const DEFAULT_LOCALE = brand.defaultLocale
export default brand
