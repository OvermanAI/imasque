# 運營這個開放品牌

> 這份文件是給 Claude Code / Codex 讀的。
> **核心約束：所有運營動作都要能在終端機完成，不需要登入任何後台。**
> 任何「要登入後台才能做」的設計都是錯的，遇到就回報，不要繞路。

## 指令對照

| 動作 | 怎麼做 |
|---|---|
| 發一篇文章 | 新增 `content/journal/<locale>/YYYY-MM-DD-slug.mdx` → `npm run check` → commit → push |
| 改品牌名稱／導覽／語言／社群 | 只改 `brand.config.ts` |
| 換視覺（顏色、字體、尺度） | 只改 `brand.tokens.css` |
| 改 About／Transparency 內文 | `content/pages/<locale>/*.mdx` |
| 更新製造透明資訊 | `content/manufacturing.json`（同時餵給 `/transparency` 與 `/api/brand.json`）|
| 上線 | `bash scripts/deploy.sh`（首次）／`git push`（之後 Vercel 自動部署）|

Vercel 接上 GitHub 之後，**push 就是部署**。

## 鐵則

1. **零資料庫。** 內容是 repo 裡的 MDX。不要為了方便加 CMS 或 DB。
2. **元件不准出現 hex 色值。** 顏色只在 `brand.tokens.css`，元件一律 `var(--x)`。
   `npm run check:tokens` 是硬性 gate——**不要因為套模版方便就把它關掉或加例外**。
   要新顏色就去 `brand.tokens.css` 加一個 token。
   WebGL／shader／GSAP 的顏色也一樣：用 `getComputedStyle` 讀 `--viz-*`，不要在 JS 寫死。
3. **文案不寫死在元件。** 結構與短標籤在 `brand.config.ts`，長文案在 MDX。不要開第三個地方。
4. **frontmatter schema 不過就讓 build 失敗。** 這是安全網（`src/lib/content.ts`），不要降級成警告。
5. **不虛構事實。** 材質、工廠、價格、成效數字，沒有驗證過就留 `null` 或「待補」，不要填估計值。

## 檔案地圖

```
brand.config.ts        品牌唯一設定檔（結構 + 短標籤）
brand.tokens.css       視覺唯一入口
content/               所有長文案（MDX）與製造資料（JSON）
src/lib/               i18n / content / site-url / jsonld / commerce
src/app/[locale]/      所有給人看的頁面
src/app/{sitemap,robots,llms.txt,api/*}  給機器讀的端點
src/app/[locale]/page.tsx   ← 首頁，母版裡最該被整個換掉的檔
```

## i18n

英文（`defaultLocale`）免前綴，其他 locale 加前綴。`middleware.ts` 負責 rewrite。

⚠️ matcher 的 `.*\..*` 會排除所有含點路徑，所以 **`/feed.xml` 必須明確列在 matcher 裡**，
否則預設語言的 feed 永遠 404，而 `llms.txt` 正好指向它。

⚠️ root layout **不要**設 `title.template`——它會套到 `[locale]` 的 `title.default` 上，
首頁會變成「BRAND — tagline — BRAND」。title 交給 `[locale]/layout.tsx` 全權處理。

## Commerce

v1 是 `commerce.provider: 'none'`：`/shop` 路由不存在、`/api/products.json` 回空陣列。

接 Shopify 時：改 `brand.config.ts` 一個字 → 加兩個環境變數 → 實作
`src/lib/commerce/adapters/shopify.ts` → 建 `app/[locale]/shop/` 路由。

**商品資料的真相來源永遠是 Shopify，不要複製一份到 repo。** 內容檔只存 `shopifyHandle` 字串，
價格庫存即時取。

⚠️ Shopify 的 catalog／cart MCP 已遷到 UCP（`/api/ucp/mcp`），舊工具名 legacy 支援
2026-08-31 已到期。動工前先查 shopify.dev 現況，不要照舊文件寫。

## 每次改完要跑

```bash
npm run check     # check:tokens + tsc + lint
npm run build     # 0 error
```

完整上線驗收清單見 `START_Prompt.md`。
