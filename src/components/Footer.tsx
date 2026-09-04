import Link from 'next/link'
import brand, { type Locale } from '../../brand.config'
import { localePath, t } from '@/lib/i18n'
import { Wordmark } from './Wordmark'

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--fg)] text-[color:var(--bg)]">
      <div className="mx-auto max-w-[1600px] px-[var(--rail)] py-16">
        <Wordmark className="w-full text-[color:var(--bg)]" />

        <div className="mt-14 flex flex-col gap-8 border-t border-[color:var(--bg)]/20 pt-8 md:flex-row md:items-start md:justify-between">
          <p className="max-w-md font-[family-name:var(--font-mono)] text-[0.72rem] uppercase leading-relaxed tracking-[0.14em] opacity-70">
            {t(brand.tagline, locale)}
          </p>
          <nav className="flex flex-wrap gap-6 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.18em]">
            {brand.nav.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                {t(item.label, locale)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--bg)]/20 pt-6 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.18em] opacity-50 sm:flex-row sm:items-center sm:justify-between">
          <span>{brand.domain}</span>
          <span>© {new Date().getFullYear()} {brand.organization.legalName}</span>
        </div>
      </div>
    </footer>
  )
}
