import brand from '../../../brand.config'
import { DEFAULT_LOCALE, localePath } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-url'
import { getPosts } from '@/lib/content'

export const dynamic = 'force-static'

export function GET() {
  const posts = getPosts(DEFAULT_LOCALE).slice(0, 20)
  const lines = [
    `# ${brand.wordmark}`,
    '',
    `> ${brand.description.en}`,
    '',
    `An open brand by ${brand.organization.legalName}. Transparent by design: materials, factories and cost structure are published.`,
    '',
    '## Pages',
    `- [Home](${siteUrl(localePath(DEFAULT_LOCALE))})`,
    ...brand.nav.map((n) => `- [${n.label.en}](${siteUrl(localePath(DEFAULT_LOCALE, n.href))})`),
    '',
    '## Machine-readable',
    `- [Brand data](${siteUrl('/api/brand.json')})`,
    `- [Products](${siteUrl('/api/products.json')})`,
    `- [Feed](${siteUrl(localePath(DEFAULT_LOCALE, '/feed.xml'))})`,
    '',
    '## Journal',
    ...(posts.length
      ? posts.map((p) => `- [${p.title}](${siteUrl(localePath(DEFAULT_LOCALE, `/journal/${p.slug}`))}): ${p.summary}`)
      : ['- (no entries yet)']),
    '',
  ]
  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
