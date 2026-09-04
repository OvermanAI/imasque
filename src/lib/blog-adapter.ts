import type { Post } from './content'
import type { Locale } from '../../brand.config'
import { localePath } from './i18n'

/** Blog_Domaine 的卡片吃 Payload 形狀的紀錄；這裡把 MDX 的 Post 轉過去。 */
export function toRecords(posts: Post[], locale: Locale) {
  return posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    body: p.body,
    publishedAt: p.publishedAt,
    coverImageUrl: p.cover ?? null,
    categories: p.category ? [{ name: p.category }] : [],
    href: localePath(locale, `/journal/${p.slug}`),
  }))
}
