import type { MetadataRoute } from 'next'
import brand from '../../brand.config'
import { LOCALES, localePath } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-url'
import fs from 'node:fs'
import path from 'node:path'
import { getPosts } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  // 掃 content/pages/<defaultLocale> 產生頁面清單 ——
  // 不寫死、也不跟著選單走（頁面移出選單時不該從 sitemap 消失）。
  const pageDir = path.join(process.cwd(), 'content', 'pages', LOCALES[0])
  const pages = fs.existsSync(pageDir)
    ? fs.readdirSync(pageDir).filter((f) => f.endsWith('.mdx')).map((f) => `/${f.replace(/\.mdx$/, '')}`)
    : []
  const staticPaths = ['/', '/journal', ...pages]
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const p of staticPaths) {
      entries.push({
        url: siteUrl(localePath(locale, p)),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: p === '/' ? 1 : 0.7,
      })
    }
    for (const post of getPosts(locale)) {
      entries.push({
        url: siteUrl(localePath(locale, `/journal/${post.slug}`)),
        lastModified: new Date(post.updatedAt ?? post.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }
  return entries
}
