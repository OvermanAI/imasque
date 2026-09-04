import Image from 'next/image'
import Link from 'next/link'
import { Mdx } from '@/components/Mdx'
// ⚠️ 本站的 BalancedText 比 aicoding 版進階：拉丁片段分組與 .lat-optical 是
// **自動**的，不需要 optical prop。移植時不要照抄 `<BalancedText optical>`。
import { BalancedText } from '@/components/BalancedText'
import { OpticalLatin } from '@/components/OpticalLatin'
import { InsightCard, categoryOf, dateOf, imageOf, type PostRecord } from './insights-shared'
import './insights.css'

// /blog/[slug]，Blog_Domaine 文章頁版型 × Coterie（白底變體）。
//
// 版型（依 Domaine 的段序）：
//   分割 Hero（左圖／右標題面板）→ 正文 ＋ 右側 LATEST 欄
//   → 作者 → 相關文章（一張特寫 ＋ 三欄卡片）＝結束
//
// 與 Domaine 的三處差異，都是資料面決定的：
//   1. 作者區沒有頭像與簡介——Posts collection 沒有 author 欄位，站上也沒有人像
//      素材。用首頁既有的 credit（AI-MAN／12個AI學院創辦人／開放品牌的領導者），
//      不編造頭銜或簡歷。
//   2. Domaine 的相關文章是「特寫 ＋ 右側清單 ＋ 下方三欄」；右側清單與本頁的
//      LATEST 欄會重複同一批文章，所以不做，只留特寫 ＋ 三欄。
//   3. Domaine 文中還有一張訂閱卡，本站的訂閱已經獨立成段，不重複放。

const LATEST_COUNT = 3   // 正文右側 LATEST 欄
const PANEL_COUNT = 3    // 相關文章右側灰底 Insights 面板
const ROW_COUNT = 3      // 相關文章下方三欄卡片

/** 作者資訊。⚠️ **不要再加職稱那一行**——它與簡介第一句「我是 AI-MAN，
 *  12AI學院的創辦人，開放品牌的領導者。」是同一件事，並排會重複兩次
 *  （作者 2026-09-03 指出並要求拿掉）。簡介是作者原文，逐字採用、不改寫。 */
const AUTHOR = {
  // ⚠️ 沒有作者本人確認過的頭像與簡介就留空，不編造（規格書 4-3 的規則）。
  // portrait 空 → figure 不渲染、版面收成兩欄；bioLines 空陣列 → 該段不渲染。
  chip: 'br3ak',
  name: 'br3ak',
  bioLines: [] as string[],
  beliefLines: [] as string[],
  portrait: '',
}

export function BlogArticle({
  post,
  slug,
  others,
}: {
  post: PostRecord
  slug: string
  /** 其餘已發布文章（已排除本篇），依發布日新到舊 */
  others: PostRecord[]
}) {
  const cover = imageOf(post)
  const cat = categoryOf(post)
  const date = dateOf(post)
  const summary = typeof post.summary === 'string' ? post.summary.trim() : ''

  const latest = others.slice(0, LATEST_COUNT)
  // 相關文章：第一篇當特寫，接著 3 篇進右側灰底面板，再接著 3 篇排成卡片列
  const [feature, ...rest] = others
  const panelPosts = rest.slice(0, PANEL_COUNT)
  const rowPosts = rest.slice(PANEL_COUNT, PANEL_COUNT + ROW_COUNT)
  const featureSummary = feature && typeof feature.summary === 'string' ? feature.summary.trim() : ''

  return (
    <article className="blog-domaine">
      {/* ── 分割 Hero ──────────────────────────────────────────────── */}
      <header className={`art-hero${cover ? '' : ' art-hero--nomedia'}`}>
        {cover ? (
          <div className="art-hero__media">
            <Image
              src={cover}
              alt={String(post.title)}
              fill
              sizes="(min-width: 860px) 50vw, 100vw"
              priority
            />
          </div>
        ) : null}

        {/* Domaine 的面板是 space-between：**標題頂到上緣、meta 與導言沉到底部**，
            中間留一大片空白（1280 實測 標題 y=106、日期 y=618，圖高 853）。
            不是垂直置中。 */}
        <div className="art-hero__panel">
          <div className="art-hero__top">
            <Link className="art-back" href="/blog">
              ← Blog
            </Link>
            <h1 className="art-hero__title">
              <OpticalLatin>{String(post.title)}</OpticalLatin>
            </h1>
          </div>

          <div className="art-hero__bottom">
            <p className="art-hero__meta">
              {cat ? <span className="ins-tag">{cat}</span> : null}
              {date ? <span>{date}</span> : null}
              <span>by AI-MAN</span>
            </p>
            {summary ? <p className="art-hero__lead">{summary}</p> : null}
          </div>
        </div>
      </header>

      {/* ── 正文 ＋ 右側 LATEST 欄 ─────────────────────────────────── */}
      <div className={`art-main ins-wrap${latest.length ? '' : ' art-main--solo'}`}>
        <div className="art-body">
          {post.body ? <Mdx source={String(post.body)} /> : null}
        </div>

        {latest.length > 0 ? (
          <aside className="art-side">
            <p className="art-side__label">Latest Insights</p>
            <ul className="art-side__list">
              {latest.map((p) => {
                const thumb = imageOf(p)
                const pCat = categoryOf(p)
                const pDate = dateOf(p)
                return (
                  <li key={String(p.id)}>
                    <Link className="art-side__item" href={`/journal/${String(p.slug)}`}>
                      <span className="art-side__thumb">
                        {thumb ? <Image src={thumb} alt={String(p.title)} fill sizes="72px" /> : null}
                      </span>
                      <span>
                        {pCat || pDate ? (
                          <span className="art-side__meta">
                            {pCat ? <span className="ins-tag">{pCat}</span> : null}
                            {pDate ? <span>{pDate}</span> : null}
                          </span>
                        ) : null}
                        <h2 className="art-side__title">{String(p.title)}</h2>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </aside>
        ) : null}
      </div>

      {/* ── 作者 ─────────────────────────────────────────────────────
          版型照 Domaine：標籤／頭像／內容三欄，內容是 chip → 名字 → 簡介。
          ⚠️ 簡介（art-author__bio）目前**沒有內容**——站上沒有作者本人確認過的
          自我介紹，不編造。等作者給了文字再補進 AUTHOR.bio。 */}
      <section className={`art-author ins-wrap${AUTHOR.portrait ? '' : ' art-author--nophoto'}`}>
        <p className="art-side__label">Author</p>

        {AUTHOR.portrait ? (
          <figure className="art-author__portrait">
            <Image src={AUTHOR.portrait} alt={AUTHOR.name} fill sizes="171px" />
          </figure>
        ) : null}

        <div>
          <span className="ins-tag art-author__chip">{AUTHOR.chip}</span>
          <h2 className="art-author__name">{AUTHOR.name}</h2>
          {AUTHOR.bioLines.length > 0 ? (
            <p className="art-author__bio">
              {AUTHOR.bioLines.map((line) => (
                <span className="ins-line" key={line}>
                  <BalancedText>{line}</BalancedText>
                </span>
              ))}
              {AUTHOR.beliefLines.map((line) => (
                <span className="ins-line art-author__belief" key={line}>
                  <BalancedText>{line}</BalancedText>
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </section>

      {/* ── 相關文章：特寫 ＋ 右側灰底 Insights 面板 ＋ 下方三欄卡片 ───── */}
      {feature ? (
        <section className="art-related ins-wrap">
          <p className="art-side__label">Related Posts</p>

          <div className="art-related__top">
            <Link className="art-related__feature" href={`/journal/${String(feature.slug)}`}>
              <span className="art-related__media">
                {imageOf(feature) ? (
                  <Image
                    src={imageOf(feature) as string}
                    alt={String(feature.title)}
                    fill
                    sizes="(min-width: 860px) 33vw, 100vw"
                  />
                ) : null}
              </span>
              <span>
                <span className="ins-card__meta">
                  {categoryOf(feature) ? <span className="ins-tag">{categoryOf(feature)}</span> : null}
                  {dateOf(feature) ? <time>{dateOf(feature)}</time> : null}
                </span>
                <h2 className="art-related__title">{String(feature.title)}</h2>
                {featureSummary ? <p className="art-related__excerpt">{featureSummary}</p> : null}
              </span>
            </Link>

            {panelPosts.length > 0 ? (
              <aside className="art-panel">
                <p className="art-panel__label">Insights</p>
                <ul className="art-side__list">
                  {panelPosts.map((p) => {
                    const thumb = imageOf(p)
                    const pCat = categoryOf(p)
                    const pDate = dateOf(p)
                    return (
                      <li key={String(p.id)}>
                        <Link className="art-side__item" href={`/journal/${String(p.slug)}`}>
                          <span className="art-side__thumb">
                            {thumb ? <Image src={thumb} alt={String(p.title)} fill sizes="72px" /> : null}
                          </span>
                          <span>
                            {pCat || pDate ? (
                              <span className="art-side__meta">
                                {pCat ? <span className="ins-tag">{pCat}</span> : null}
                                {pDate ? <span>{pDate}</span> : null}
                              </span>
                            ) : null}
                            <h2 className="art-side__title">{String(p.title)}</h2>
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </aside>
            ) : null}
          </div>

          {rowPosts.length > 0 ? (
            <div className="ins-grid" style={{ padding: 0 }}>
              {rowPosts.map((p) => (
                <InsightCard key={String(p.id)} post={p} />
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {/* ⚠️ 這裡原本有一段收尾區塊（大宣言 ＋「加入候補名單」寬按鈕 ＋ 訂閱表單）。
          作者 2026-09-03 分兩次全部拿掉：訂閱表單先拿，接著連宣言與按鈕也拿掉。
          文章現在結束在「相關文章」——讀完就往下一篇走，不再塞轉換動線。
          ⚠️ 不要把收尾區塊加回來。 */}

    </article>
  )
}
