import brand, { type Locale } from '../../../../brand.config'
import { LOCALES, isLocale, localePath, t } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-url'
import { getPosts } from '@/lib/content'

export const dynamic = 'force-static'
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return new Response('Not found', { status: 404 })
  const l = locale as Locale
  const posts = getPosts(l)
  const self = siteUrl(localePath(l, '/feed.xml'))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(brand.wordmark)} — ${esc(t(brand.tagline, l))}</title>
    <link>${siteUrl(localePath(l))}</link>
    <description>${esc(t(brand.description, l))}</description>
    <language>${l}</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml"/>
${posts
  .map((p) => {
    const url = siteUrl(localePath(l, `/journal/${p.slug}`))
    return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <description>${esc(p.summary)}</description>
    </item>`
  })
  .join('\n')}
  </channel>
</rss>`
  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8' } })
}
