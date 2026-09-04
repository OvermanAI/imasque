import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import brand, { type Locale } from '../../../brand.config'
import { LOCALES, DEFAULT_LOCALE, isLocale, localePath, htmlLang, t } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-url'
import { organizationJsonLd, brandJsonLd } from '@/lib/jsonld'
import { ChromeTop, ChromeFooter } from '@/components/skin/Chrome'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

/** 每頁共用的 canonical + hreflang（含 x-default 指向英文）*/
export function alternatesFor(path = '/') {
  const languages: Record<string, string> = {}
  for (const l of LOCALES) languages[l] = siteUrl(localePath(l, path))
  languages['x-default'] = siteUrl(localePath(DEFAULT_LOCALE, path))
  return languages
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return {
    title: { default: `${brand.wordmark} — ${t(brand.tagline, locale)}`, template: `%s — ${brand.wordmark}` },
    description: t(brand.description, locale),
    alternates: { canonical: siteUrl(localePath(locale)), languages: alternatesFor('/') },
    openGraph: {
      type: 'website',
      siteName: brand.wordmark,
      locale,
      title: `${brand.wordmark} — ${t(brand.tagline, locale)}`,
      description: t(brand.description, locale),
      url: siteUrl(localePath(locale)),
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale

  return (
    <div lang={htmlLang(l)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(l)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd(l)) }}
      />
      <ChromeTop locale={l} />
      <main className="pt-16">{children}</main>
      <ChromeFooter locale={l} />
    </div>
  )
}
