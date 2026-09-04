import Image from 'next/image'
import Link from 'next/link'

// Blog 系統的共用型別、取值與卡片。索引與文章頁的 RELATED POSTS 用同一張卡，
// 所以抽在這裡，不各寫一份（同 insights.css 的註解）。

export type PostRecord = Record<string, unknown>

/** 封面圖：優先用外部 coverImageUrl（靜態圖，Vercel 持久）；其次 coverImage Media 物件的 .url */
export function imageOf(post: PostRecord): string | null {
  if (typeof post.coverImageUrl === 'string' && post.coverImageUrl.trim()) {
    return post.coverImageUrl.trim()
  }
  const c = post.coverImage
  if (c && typeof c === 'object' && 'url' in (c as object)) {
    return String((c as PostRecord).url)
  }
  if (typeof c === 'string') return c
  return null
}

/** 分類名稱（大寫）；沒有分類就回空字串 */
export function categoryOf(post: PostRecord): string {
  const cats = post.categories
  if (Array.isArray(cats) && cats.length > 0) {
    const first = cats[0] as PostRecord | null
    if (first && typeof first === 'object' && first.name) return String(first.name).toUpperCase()
  }
  return ''
}

/** 發布日期 2026.09.02；沒有就回空字串 */
export function dateOf(post: PostRecord): string {
  if (post.publishedAt) {
    const d = new Date(String(post.publishedAt))
    if (!Number.isNaN(d.getTime())) {
      return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
    }
  }
  return ''
}

/** 索引格與 RELATED POSTS 共用的卡片：圖 → 標題 → 分類 pill ＋ 日期（Domaine 的順序） */
export function InsightCard({ post, sizes }: { post: PostRecord; sizes?: string }) {
  const img = imageOf(post)
  const cat = categoryOf(post)
  const date = dateOf(post)

  return (
    <Link className="ins-card" href={String(post.href || `/journal/${String(post.slug)}`)}>
      <div className="ins-card__media">
        {img ? (
          <Image
            src={img}
            alt={String(post.title)}
            fill
            sizes={sizes || '(min-width: 1080px) 33vw, (min-width: 640px) 50vw, 100vw'}
          />
        ) : null}
      </div>
      <h2 className="ins-card__title">{String(post.title)}</h2>
      <div className="ins-card__meta">
        {cat ? <span className="ins-tag">{cat}</span> : null}
        {date ? <time>{date}</time> : null}
      </div>
    </Link>
  )
}
