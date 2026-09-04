import Link from 'next/link'
import { notFound } from 'next/navigation'
import brand, { type Locale } from '../../../brand.config'
import { isLocale, localePath, t } from '@/lib/i18n'
import { getPosts } from '@/lib/content'

/* ============================================================
   首頁 —— 這是母版裡**最該被整個換掉**的一個檔。

   結構刻意做薄：六段節奏（hero / gallery / feature / list /
   journal index / closing），沒有任何必要的圖片，所以
   `npm run build` 在零素材的狀態下就能通過。

   套 Aura 模版時：把模版的版位搬進這六段，色值全部搬進
   brand.tokens.css。文案放在下方 COPY，不要寫死在 JSX。

   ⚠️ 服飾類模版常有 1～2 段是純電商版位（價格／尺寸／Add to
      bag／商品索引）。commerce.provider='none' 時沒有商品，
      那些版位要改成內容版位。接 Shopify 後再換回來。
   ============================================================ */

const COPY = {
  eyebrow: { en: 'Open brand / Release 01', 'zh-Hant': '開放品牌 / 釋出 01' },
  kicker:  { en: 'A short line above the headline', 'zh-Hant': '標題上方的一句短文' },
  h1a:     { en: 'HEADLINE', 'zh-Hant': '主標' },
  h1b:     { en: 'SECOND LINE.', 'zh-Hant': '第二行。' },
  scroll:  { en: 'Scroll ↓', 'zh-Hant': '向下 ↓' },

  specs: [
    { k: { en: 'Category',  'zh-Hant': '品類' }, v: { en: 'Replace me', 'zh-Hant': '待替換' } },
    { k: { en: 'Material',  'zh-Hant': '材質' }, v: { en: 'Replace me', 'zh-Hant': '待替換' } },
    { k: { en: 'Audience',  'zh-Hant': '受眾' }, v: { en: 'Replace me', 'zh-Hant': '待替換' } },
    { k: { en: 'Brand',     'zh-Hant': '品牌' }, v: { en: 'Open brand', 'zh-Hant': '開放品牌' } },
  ],

  galleryLabel: { en: 'Gallery / Replace with lookbook', 'zh-Hant': '圖輯 / 替換成 lookbook' },
  frames: [
    { n: '01', w: { en: 'ONE',   'zh-Hant': '一' }, c: { en: 'Caption for the first frame.',  'zh-Hant': '第一格的說明文字。' } },
    { n: '02', w: { en: 'TWO',   'zh-Hant': '二' }, c: { en: 'Caption for the second frame.', 'zh-Hant': '第二格的說明文字。' } },
    { n: '03', w: { en: 'THREE', 'zh-Hant': '三' }, c: { en: 'Caption for the third frame.',  'zh-Hant': '第三格的說明文字。' } },
  ],

  featureLabel: { en: 'Feature / What makes it different', 'zh-Hant': '特色 / 差異點' },
  featureH:     { en: 'BUILT TO', 'zh-Hant': '為了' },
  featureH2:    { en: 'DO ONE THING.', 'zh-Hant': '做好一件事。' },
  featureBody: {
    en: 'Two or three sentences on the single idea this brand is built around. Keep it concrete — this is the paragraph an agent will quote.',
    'zh-Hant': '兩三句話說明這個品牌圍繞的核心概念。寫具體一點——這是 Agent 會引用的那一段。',
  },

  listLabel: { en: 'Principles', 'zh-Hant': '原則' },
  list: [
    { n: '01', t: { en: 'FIRST PRINCIPLE.',  'zh-Hant': '第一原則' }, d: { en: 'One sentence.', 'zh-Hant': '一句話。' } },
    { n: '02', t: { en: 'SECOND PRINCIPLE.', 'zh-Hant': '第二原則' }, d: { en: 'One sentence.', 'zh-Hant': '一句話。' } },
    { n: '03', t: { en: 'THIRD PRINCIPLE.',  'zh-Hant': '第三原則' }, d: { en: 'One sentence.', 'zh-Hant': '一句話。' } },
  ],

  indexLabel: { en: 'Journal / Field notes', 'zh-Hant': '日誌 / 現場筆記' },
  indexH:     { en: 'FROM THE', 'zh-Hant': '來自' },
  indexH2:    { en: 'WORKBENCH.', 'zh-Hant': '工作檯。' },
  readAll:    { en: 'All entries ↗', 'zh-Hant': '全部文章 ↗' },
  empty:      { en: 'First entry landing soon.', 'zh-Hant': '第一篇即將發布。' },

  closingLabel: { en: 'Open brand / Transparent by design', 'zh-Hant': '開放品牌 / 生而透明' },
  closingH:     { en: 'A BRAND', 'zh-Hant': '品牌是' },
  closingH2:    { en: 'AS A TOOL.', 'zh-Hant': '一個工具。' },
  closingBody: {
    en: 'An open brand is not sold to you from above — it is published so people can build with it. Materials, manufacturing and cost structure are public, including the parts still unresolved.',
    'zh-Hant': '開放品牌不是高高在上賣給你的東西，而是被公開出來讓人拿去建構的工具。材質、製造與成本結構全部公開，包括還沒解決的部分。',
  },
  closingCta: { en: 'Read the transparency page ↗', 'zh-Hant': '看透明頁 ↗' },
}

const mono = 'font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]'
const display = 'font-[family-name:var(--font-display)] font-black uppercase leading-[0.86] tracking-[-0.03em]'
/** 圖片佔位。放進真圖時換成 next/image。 */
const Placeholder = ({ ratio }: { ratio: string }) => (
  <div className={`w-full ${ratio}`} style={{ background: 'var(--muted)' }} aria-hidden />
)

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const posts = getPosts(l).slice(0, 4)

  return (
    <>
      {/* ── 01 HERO ───────────────────────────────────────── */}
      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-[var(--rail)] py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:py-28">
          <div>
            <p className={`${mono} text-[0.7rem] text-[color:var(--accent)]`}>{t(COPY.eyebrow, l)}</p>
            <p className="mt-6 max-w-md text-[color:var(--subtle)]">{t(COPY.kicker, l)}</p>
            <h1 className={`${display} mt-8 text-[length:var(--step-4)]`}>
              <span className="block">{t(COPY.h1a, l)}</span>
              <span className="block text-[color:var(--accent)]">{t(COPY.h1b, l)}</span>
            </h1>
            <p className="mt-10 max-w-xl text-[length:var(--step-1)] leading-[1.35]">
              {t(brand.description, l)}
            </p>
            <p className={`${mono} mt-12 text-[0.68rem] text-[color:var(--subtle)]`}>{t(COPY.scroll, l)}</p>
          </div>
          <Placeholder ratio="aspect-[4/5]" />
        </div>

        <ul className="grid grid-cols-2 border-t border-[color:var(--border)] md:grid-cols-4">
          {COPY.specs.map((s, i) => (
            <li key={i} className="border-[color:var(--border)] px-[calc(var(--rail)/2)] py-6 [&:not(:last-child)]:border-r">
              <p className={`${mono} text-[0.62rem] text-[color:var(--subtle)]`}>{t(s.k, l)}</p>
              <p className={`${mono} mt-2 text-[0.78rem]`}>{t(s.v, l)}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 02 GALLERY ────────────────────────────────────── */}
      <section className="border-b border-[color:var(--border)] py-24">
        <div className="mx-auto max-w-[1600px] px-[var(--rail)]">
          <p className={`${mono} text-[0.7rem] text-[color:var(--accent)]`}>{t(COPY.galleryLabel, l)}</p>
        </div>
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[var(--rail)] pb-6">
          {COPY.frames.map((f) => (
            <figure key={f.n} className="w-[min(78vw,460px)] shrink-0 snap-start">
              <Placeholder ratio="aspect-[4/3]" />
              <figcaption className="mt-5">
                <p className={`${display} text-[length:var(--step-2)]`}>{t(f.w, l)}</p>
                <p className="mt-3 text-[color:var(--subtle)]">{t(f.c, l)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── 03 FEATURE ────────────────────────────────────── */}
      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-[var(--rail)] py-24 lg:grid-cols-2">
          <Placeholder ratio="aspect-[4/3]" />
          <div>
            <p className={`${mono} text-[0.7rem] text-[color:var(--accent)]`}>{t(COPY.featureLabel, l)}</p>
            <h2 className={`${display} mt-6 text-[length:var(--step-3)]`}>
              <span className="block">{t(COPY.featureH, l)}</span>
              <span className="block text-[color:var(--accent)]">{t(COPY.featureH2, l)}</span>
            </h2>
            <p className="mt-8 max-w-xl text-[length:var(--step-1)] leading-[1.4] text-[color:var(--subtle)]">
              {t(COPY.featureBody, l)}
            </p>
          </div>
        </div>
      </section>

      {/* ── 04 PRINCIPLES ─────────────────────────────────── */}
      <section className="border-b border-[color:var(--border)] py-24">
        <div className="mx-auto max-w-[1600px] px-[var(--rail)]">
          <p className={`${mono} text-[0.7rem] text-[color:var(--accent)]`}>{t(COPY.listLabel, l)}</p>
          <ul className="mt-14 border-t border-[color:var(--border)]">
            {COPY.list.map((c) => (
              <li key={c.n} className="grid gap-5 border-b border-[color:var(--border)] py-12 md:grid-cols-[5rem_1fr_1.1fr] md:items-baseline">
                <span className={`${mono} text-[0.72rem] text-[color:var(--accent)]`}>{c.n}</span>
                <h3 className={`${display} text-[length:var(--step-2)]`}>{t(c.t, l)}</h3>
                <p className="text-[color:var(--subtle)]">{t(c.d, l)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 05 JOURNAL INDEX ──────────────────────────────── */}
      <section className="border-b border-[color:var(--border)] py-24">
        <div className="mx-auto max-w-[1600px] px-[var(--rail)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className={`${mono} text-[0.7rem] text-[color:var(--accent)]`}>{t(COPY.indexLabel, l)}</p>
              <h2 className={`${display} mt-6 text-[length:var(--step-3)]`}>
                <span className="block">{t(COPY.indexH, l)}</span>
                <span className="block text-[color:var(--accent)]">{t(COPY.indexH2, l)}</span>
              </h2>
            </div>
            <Link href={localePath(l, '/journal')} className={`${mono} text-[0.7rem] hover:text-[color:var(--accent)]`}>
              {t(COPY.readAll, l)}
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className={`${mono} mt-16 border-t border-[color:var(--border)] pt-10 text-[0.72rem] text-[color:var(--subtle)]`}>
              {t(COPY.empty, l)}
            </p>
          ) : (
            <ul className="mt-16 border-t border-[color:var(--border)]">
              {posts.map((p, i) => (
                <li key={p.slug} className="border-b border-[color:var(--border)]">
                  <Link href={localePath(l, `/journal/${p.slug}`)} className="group grid gap-4 py-9 md:grid-cols-[5rem_1fr_auto] md:items-baseline">
                    <span className={`${mono} text-[0.7rem] text-[color:var(--accent)]`}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className={`${display} text-[length:var(--step-2)] transition-colors group-hover:text-[color:var(--accent)]`}>
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[color:var(--subtle)]">{p.summary}</p>
                    </div>
                    <time dateTime={p.publishedAt} className={`${mono} text-[0.68rem] text-[color:var(--subtle)]`}>
                      {p.publishedAt}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── 06 CLOSING ────────────────────────────────────── */}
      <section className="py-28">
        <div className="mx-auto grid max-w-[1600px] gap-14 px-[var(--rail)] lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className={`${mono} text-[0.7rem] text-[color:var(--accent)]`}>{t(COPY.closingLabel, l)}</p>
            <h2 className={`${display} mt-6 text-[length:var(--step-3)]`}>
              <span className="block">{t(COPY.closingH, l)}</span>
              <span className="block text-[color:var(--accent)]">{t(COPY.closingH2, l)}</span>
            </h2>
            <p className="mt-8 max-w-xl text-[length:var(--step-1)] leading-[1.4] text-[color:var(--subtle)]">
              {t(COPY.closingBody, l)}
            </p>
            <Link
              href={localePath(l, '/transparency')}
              className={`${mono} mt-12 inline-block border border-[color:var(--fg)] px-7 py-4 text-[0.7rem] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]`}
            >
              {t(COPY.closingCta, l)}
            </Link>
          </div>
          <Placeholder ratio="aspect-[3/4]" />
        </div>
        <p className={`${mono} mx-auto mt-20 max-w-[1600px] px-[var(--rail)] text-[0.66rem] text-[color:var(--subtle)]`}>
          {brand.wordmark} — {t(brand.tagline, l)} / {brand.organization.legalName}
        </p>
      </section>
    </>
  )
}
