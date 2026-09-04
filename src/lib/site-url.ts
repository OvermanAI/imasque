import brand from '../../brand.config'

/**
 * 絕對 URL 的單一來源。canonical / hreflang / sitemap / feed / OG 全部靠它。
 * ⚠️ 上線後 NEXT_PUBLIC_SITE_URL 沒設對，整批 SEO 會指到 vercel.app。
 */
export function siteUrl(path = '/'): string {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
    `https://${brand.domain}`
  return path === '/' ? base : `${base}${path.startsWith('/') ? path : `/${path}`}`
}

export const SITE_ORIGIN = siteUrl('/')
