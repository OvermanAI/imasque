import Link from 'next/link'
import { LOCALES, localePath } from '@/lib/i18n'
import type { Locale } from '../../brand.config'

const LABEL: Record<string, string> = { en: 'EN', 'zh-Hant': '中' }

export function LocaleSwitch({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.18em]">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-[color:var(--border)]">/</span>}
          <Link
            href={localePath(l)}
            hrefLang={l}
            aria-current={l === locale ? 'true' : undefined}
            className={
              l === locale
                ? 'text-[color:var(--accent)]'
                : 'text-[color:var(--subtle)] transition-colors hover:text-[color:var(--fg)]'
            }
          >
            {LABEL[l] ?? l}
          </Link>
        </span>
      ))}
    </div>
  )
}
