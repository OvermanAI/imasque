import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, isLocale, localePath } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-url'
import { getPage } from '@/lib/content'
import { Mdx } from '@/components/Mdx'
import { alternatesFor } from '../layout'
import type { Locale } from '../../../../brand.config'

/** 一支路由服務所有 content/pages/<locale>/*.mdx。
 *  靜態路段（/journal）會優先於這個動態路段解析，不會撞到。 */
export function generateStaticParams() {
  const out: { locale: string; page: string }[] = []
  for (const locale of LOCALES) {
    const dir = path.join(process.cwd(), 'content', 'pages', locale)
    if (!fs.existsSync(dir)) continue
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.mdx')) out.push({ locale, page: f.replace(/\.mdx$/, '') })
    }
  }
  return out
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; page: string }>
}): Promise<Metadata> {
  const { locale, page } = await params
  if (!isLocale(locale)) return {}
  const doc = getPage(locale as Locale, page)
  if (!doc) return {}
  return {
    title: doc.title,
    description: doc.summary,
    alternates: {
      canonical: siteUrl(localePath(locale as Locale, `/${page}`)),
      languages: alternatesFor(`/${page}`),
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; page: string }>
}) {
  const { locale, page } = await params
  if (!isLocale(locale)) notFound()
  const doc = getPage(locale as Locale, page)
  if (!doc) notFound()

  return (
    <article className="page-wrap">
      <div className="page-head">
        <span className="eyebrow">{page}</span>
        <h1>{doc.title}</h1>
      </div>
      <p className="page-lede">{doc.summary}</p>
      <hr className="page-rule" />
      <Mdx source={doc.body} />
    </article>
  )
}
