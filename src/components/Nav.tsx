import Link from 'next/link'
import brand, { type Locale } from '../../brand.config'
import { localePath, t } from '@/lib/i18n'
import { Wordmark } from './Wordmark'
import { LocaleSwitch } from './LocaleSwitch'

export function Nav({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/92 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-[var(--rail)]">
        <Link href={localePath(locale)} aria-label={brand.wordmark} className="block">
          <Wordmark className="h-5 w-auto text-[color:var(--fg)]" />
        </Link>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {brand.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={localePath(locale, item.href)}
                  className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--fg)] transition-colors hover:text-[color:var(--accent)]"
                >
                  {t(item.label, locale)}
                </Link>
              </li>
            ))}
          </ul>
          <LocaleSwitch locale={locale} />
        </div>
      </nav>
    </header>
  )
}
