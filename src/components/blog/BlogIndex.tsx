'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
// ⚠️ 本站的 BalancedText 比 aicoding 版進階：拉丁片段分組與 .lat-optical 是
// **自動**的，不需要 optical prop。移植時不要照抄 `<BalancedText optical>`。
import { BalancedText } from '@/components/BalancedText'
import { InsightCard, categoryOf, type PostRecord } from './insights-shared'
import './insights.css'

// /blog 索引，Blog_Domaine 版型 × Coterie（白底變體）。
// 版型：左上小標籤 ／ 置中大宣言 ／ 分類 chips ／ 三欄圖片優先卡片格。
//
// 為什麼是 client component：分類 chips 要即時篩選、卡片格要無限捲動。
// 文章資料由 server 的 page.tsx 一次查好傳進來，這裡只做篩選與分批顯示，
// 不碰資料層——**不分頁、不打額外的 API**。
//
// 為什麼不做真正的伺服器分頁：Domaine 的 Insights 是捲到底自動接下一批、
// 沒有頁碼。以本站的量級（現在 9 篇，可預見的規模是數十到一兩百篇），
// 一次查回來、前端分批揭露就夠了——省掉一支分頁 API 與它的載入狀態。
// ⚠️ 篇數真的長到上千篇時要改成伺服器分頁，屆時 page.tsx 的 getPosts 上限
//    與這裡的批次揭露都要一起換掉。

/** 每一批揭露幾張卡（3 欄 × 2 列）。
 *  刻意取 6 而不是 12：站上目前 9 篇，取 12 的話第一批就全部出完，
 *  無限捲動等於沒有在跑、也驗不了。等文章多起來可以往上調。 */
const BATCH = 6

export function BlogIndex({
  posts,
  lines,
  ui,
}: {
  posts: PostRecord[]
  /** 首屏文字塊，**每個元素是作者指定的一行**（編輯斷行） */
  lines: string[]
  /** UI 字串。版型是跨站共用的，文字由各站依語言傳進來。 */
  ui: { label: string; all: string; emptyAll: string; emptyFiltered: string }
}) {
  // chips 只列「真的有文章」的分類——目前多數舊文章沒有分類，
  // 硬列全部分類會出現點了卻是空格的 chip。
  const categories = useMemo(() => {
    const seen = new Map<string, number>()
    posts.forEach((p) => {
      const c = categoryOf(p)
      if (c) seen.set(c, (seen.get(c) ?? 0) + 1)
    })
    return [...seen.keys()].sort()
  }, [posts])

  const [active, setActive] = useState<string | null>(null)

  const shown = useMemo(
    () => (active ? posts.filter((p) => categoryOf(p) === active) : posts),
    [posts, active],
  )

  // ── 無限捲動：捲到哨兵就多揭露一批 ──────────────────────────────────
  const [visible, setVisible] = useState(BATCH)
  const sentinel = useRef<HTMLDivElement | null>(null)
  const hasMore = visible < shown.length

  // 換分類要把批次歸零，否則從「全部」切到少量分類時會停在很大的 visible，
  // 再切回來就一次全部展開、失去分批的意義。
  useEffect(() => setVisible(BATCH), [active])

  const loadMore = useCallback(() => setVisible((v) => v + BATCH), [])

  useEffect(() => {
    const node = sentinel.current
    if (!node || !hasMore) return
    // IntersectionObserver 不支援時（很舊的瀏覽器）直接全部展開，
    // 不要讓使用者卡在只看得到第一批。
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(shown.length)
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && loadMore(),
      // 提前一個視窗高度開始載，捲到底時下一批已經在了，看不到接縫
      { rootMargin: '100% 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [hasMore, loadMore, shown.length])

  return (
    <div className="blog-domaine">
      <header className="ins-head ins-bleed">
        <p className="ins-label">
          {ui.label}
          <span className="ins-count">{posts.length}</span>
        </p>
        {/* Domaine 的首屏是**一整塊沒有層級的文字**——沒有大標題＋小導言的分別，
            同一個字級、同一個顏色。這裡每一行各自成塊（作者指定的編輯斷行），
            窄螢幕行內仍會自然換行。 */}
        <h1 className="ins-statement">
          {lines.map((line) => (
            <span className="ins-line" key={line}>
              <BalancedText>{line}</BalancedText>
            </span>
          ))}
        </h1>
      </header>

      {categories.length > 0 ? (
        <nav className="ins-filters ins-bleed" aria-label="Categories">
          <button
            type="button"
            className="ins-chip"
            aria-pressed={active === null}
            onClick={() => setActive(null)}
          >
            {ui.all}
            {active === null ? <span className="ins-chip__x" aria-hidden="true">×</span> : null}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className="ins-chip"
              aria-pressed={active === c}
              onClick={() => setActive(active === c ? null : c)}
            >
              {c}
              {active === c ? <span className="ins-chip__x" aria-hidden="true">×</span> : null}
            </button>
          ))}
        </nav>
      ) : null}

      <div className="ins-grid ins-bleed">
        {/* 空狀態的文案要看有沒有套篩選：沒套篩選時說「還沒有文章」，
            套了才說「這個分類」——移植到還沒發文的站時，空狀態不能寫成
            像是篩選出來的結果。 */}
        {shown.length === 0 ? (
          <p className="ins-empty">{active ? ui.emptyFiltered : ui.emptyAll}</p>
        ) : (
          shown.slice(0, visible).map((post) => <InsightCard key={String(post.id)} post={post} />)
        )}
      </div>

      {/* 捲動哨兵。沒有頁碼、沒有「載入更多」按鈕——Domaine 的 Insights
          就是一路往下接。 */}
      {hasMore ? (
        <div className="ins-sentinel ins-bleed" ref={sentinel} aria-hidden="true" />
      ) : null}
    </div>
  )
}
