import brand from '../../../../brand.config'
import { LOCALES, DEFAULT_LOCALE, localePath } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-url'
import { getPosts, getManufacturing } from '@/lib/content'
import { commerceEnabled } from '@/lib/commerce'

export const dynamic = 'force-static'

/** 給 Agent 讀的品牌資料。開放品牌「透明」原則的機器可讀版本。 */
export function GET() {
  return Response.json({
    name: brand.wordmark,
    slug: brand.name,
    url: siteUrl('/'),
    tagline: brand.tagline,
    description: brand.description,
    brandType: brand.organization.brandType,
    parentOrganization: brand.organization.legalName,
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    nav: brand.nav.map((n) => ({ ...n, url: siteUrl(localePath(DEFAULT_LOCALE, n.href)) })),
    social: Object.fromEntries(Object.entries(brand.social).filter(([, v]) => v)),
    commerce: { provider: brand.commerce.provider, enabled: commerceEnabled },
    manufacturing: getManufacturing(),
    content: Object.fromEntries(LOCALES.map((l) => [l, { posts: getPosts(l).length }])),
    endpoints: {
      products: siteUrl('/api/products.json'),
      llms: siteUrl('/llms.txt'),
      sitemap: siteUrl('/sitemap.xml'),
      feed: siteUrl(localePath(DEFAULT_LOCALE, '/feed.xml')),
    },
  })
}
