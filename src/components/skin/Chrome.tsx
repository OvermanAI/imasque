import Link from 'next/link'
import brand, { type Locale } from '../../../brand.config'
import { localePath, t, LOCALES } from '@/lib/i18n'

const LANG: Record<string, string> = { en: 'EN', 'zh-Hant': '中文' }

/* Aura「Sonic Architecture」的站台外框，逐字移植。
   首頁 skin 與內頁共用同一份 —— 全站只有一套 nav。 */

export function ChromeTop({ locale: l }: { locale: Locale }) {
  const home = localePath(l)
  const base = home === '/' ? '' : home
  const items = [
    { href: `${base}/#collection`, label: t({ en: 'Collections', 'zh-Hant': '系列' }, l) },
    { href: `${base}/#craft`, label: t({ en: 'Craft', 'zh-Hant': '製作' }, l) },
    ...brand.nav.map((i) => ({ href: localePath(l, i.href), label: t(i.label, l) })),
  ]

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[color:var(--near-black)]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={home} className="flex items-center gap-2 text-lg font-medium text-white tracking-tighter">
          <span className="w-4 h-4 bg-white rounded-full" />
          {brand.wordmark}
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-white transition-colors duration-200">
              {i.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-wider">
          {LOCALES.map((loc, idx) => (
            <span key={loc} className="flex items-center gap-4">
              {idx > 0 && <span className="text-neutral-600">/</span>}
              <Link
                href={localePath(loc)}
                hrefLang={loc}
                aria-current={loc === l ? 'true' : undefined}
                className={loc === l ? 'text-white' : 'text-neutral-500 hover:text-white transition-colors'}
              >
                {LANG[loc]}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </nav>
  )
}

export function ChromeFooter({ locale: l }: { locale: Locale }) {
  const tagline = t(
    {
      en: 'The eye mask of 11yo CxY’s imagination.',
      'zh-Hant': '11 歲 CxY 想像力的眼罩。',
    },
    l,
  )
  return (
    <footer className="border-t border-white/5 bg-[color:var(--near-black)] py-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] text-sm">
        <div>
          <div className="flex items-center gap-2 text-lg font-medium text-white tracking-tighter">
            <span className="w-4 h-4 bg-white rounded-full" />
            {brand.wordmark}
          </div>
          <p className="mt-4 max-w-xs text-neutral-500 leading-relaxed">{tagline}</p>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600">
            © {new Date().getFullYear()} {brand.organization.legalName}
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600">
            {t({ en: 'Explore', 'zh-Hant': '瀏覽' }, l)}
          </p>
          <ul className="mt-4 space-y-2 text-neutral-400">
            {brand.nav.map((i) => (
              <li key={i.href}>
                <Link href={localePath(l, i.href)} className="hover:text-white transition-colors">
                  {t(i.label, l)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600">
            {t({ en: 'Language', 'zh-Hant': '語言' }, l)}
          </p>
          <ul className="mt-4 space-y-2 text-neutral-400">
            {LOCALES.map((loc) => (
              <li key={loc}>
                <Link href={localePath(loc)} hrefLang={loc} className="hover:text-white transition-colors">
                  {LANG[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
