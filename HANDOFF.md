# imasque.com — Handoff 記錄

> 交接時間：2026-06-23 · 交接後重點：**網站視覺設計 + 內容**（將用 Claude Code 桌面版接手）

---

## 0. 一句話現況
品牌官網 **imasque.com 已上線**（Next.js 16 + Vercel，`git push` 自動部署），五頁架構與雙語都完成，**後端目前完全沒有**（純展示站）。接下來把重點放在**視覺**與**內容**。

---

## 1. 線上 / 倉庫 / 部署
| 項目 | 值 |
|---|---|
| 正式網域 | https://imasque.com（www 會自動轉址，皆已 SSL）|
| Vercel 預設域名 | https://imasque.vercel.app |
| GitHub（公開）| https://github.com/OvermanAI/imasque · 分支 `main` |
| Vercel 團隊 | `doyen-5280s-projects` |
| 自動部署 | **push 到 `main` → Vercel 自動 build + 上線**（已驗證）|
| 本機開發 | `npm run dev`（之前因 3000/3001 被占用跑在 **3005**；桌面版可自行選 port）|
| 建置驗證 | `npm run build`（每次改完務必跑一次確認沒型別/編譯錯）|

---

## 2. 技術堆疊
- **Next.js 16**（App Router, Turbopack）· **React 19** · **TypeScript** · **Tailwind CSS 3**
- 字體（`next/font/google`）：**Fraunces**（display 標題，soft/wonk 軸）/ **Hanken Grotesk**（內文）/ **Noto Sans TC**（中文）
- 全靜態頁面 + 無資料庫、無 Shopify、無 email 後端（皆**刻意**未接）
- Node v22

---

## 3. 檔案地圖
```
app/
  layout.tsx          根 layout：字體、metadata、LanguageProvider、Nav、Footer
  globals.css         設計 token 之外的全域樣式：底色光暈、grain 顆粒、reveal 動畫、
                      h1/h2/h3 text-wrap:balance（中文斷行用）
  page.tsx            首頁：Hero / 概念 / 三核心 / Building in Public / Dream List
  shop/page.tsx       MVP 產品（The Sunglasses Mask，標示「製作中」）
  collections/page.tsx  Sunglasses(現在) + 未來夢(Flower/Animal/Cloud/Fruit/Moon)
  journal/page.tsx    Dream Journal 四分類框架（尚無文章）
  about/page.tsx      起源故事
  icon.png            favicon（星星 mascot，深色圓角底）
components/
  Nav.tsx             導覽列（黑底 #080808）、logo、中/EN 切換、手機選單
  Footer.tsx          頁尾
  LanguageProvider.tsx  EN/中 語言 context（localStorage 記憶、設 html lang）
  SunglassesMask.tsx  ★ 手繪產品 SVG（黑+粉鏡片+白框，可傳 left/right/frame 顏色）
  DreamListForm.tsx   Email 表單【純 UI 佔位，送出只 console.log，未接後端 — 功能已暫停】
  Reveal.tsx          捲動淡入（IntersectionObserver）
  PageIntro.tsx       內頁共用大標題
  BalancedText.tsx    ★ 中文斷行修正（見 §6）
lib/
  dictionary.ts       ★★ 全站文案（EN / 繁中）都在這——改內容主要動這裡
public/
  logo.png            品牌 logo lockup（星星+字標+Dream More，白底已去背）
```

---

## 4. 設計系統（改視覺從這裡看起）

**調色：黑 + 粉 + 白三色**（token 定義在 `tailwind.config.ts`，改一處全站變色）
| token | 值 | 用途 |
|---|---|---|
| `milk` | `#FFFFFF` | 頁面底色（白）|
| `cream` | `#FFF6F7` | 卡片/輸入框（幾乎白的淡粉）|
| `ink` | `#080808` | 黑（文字、深色區、導覽列）|
| `pink` | `#F8C8C8` | 主粉（取自 logo 字標）|
| `pink-deep` / `dusk-deep` | `#E07A84` | 深珊瑚粉（重點、hover、active 底線）|
| `pink-soft` / `apricot-soft` | `#FBDCDE` | 淺粉 |
| `haze` | `#FCEAEB` | 近白粉 |
| `dusk` / `apricot` / `moss` | 皆 remap 成粉 | 舊命名沿用，值已是粉色 |

- 底色：白 + 極淡粉色 radial 光暈（`globals.css` body）
- 動畫：`floaty` 漂浮、`rise`/`blurin` 載入、`marquee` 跑馬燈、`drift`（`tailwind.config.ts` keyframes）
- 質感：全站 `grain` 膠片顆粒 overlay（`globals.css`）
- 產品 SVG 顏色可逐頁覆寫，例如 `<SunglassesMask left="#080808" right="#F8C8C8" />`

**設計方向定調**：柔和、editorial、有想像力、現代。**創意而非可愛、舒適而非醫療、有趣而非幼稚**。避免卡通/Kawaii/嬰幼兒風。產品為主角。

---

## 5. 內容 / 雙語（加內容從這裡看起）
- **所有文字都集中在 `lib/dictionary.ts`**，每個 key 都是 `{ en, zh }` 一組。改文案＝改這個檔。
- 頁面用 `t(dict.區塊.key, lang)` 取字。
- 口號與 wordmark（`Dream More.` / `imasque`）**刻意中英都維持英文**。
- 右上角 **中/EN** 切換，localStorage 記憶。
- ⚠️ **目前沒有內容層**：Journal 文章、產品、系列都還是**寫死在 dictionary/頁面**，沒有 `content/*.mdx`。要「新增一篇 Journal」目前得手動改 dictionary + journal 頁。（這是之後若走 agent 化要先補的地基，見 §8）

---

## 6. 中文斷行修正（重要，動文案前先懂）
- `components/BalancedText.tsx`：用 `Intl.Segmenter` 把中文切詞、每個詞包 `white-space:nowrap`，斷行只落詞邊界（不會把「作夢」拆成「作/夢」）。搭配 `globals.css` 的 `h1,h2,h3{text-wrap:balance}`。
- **用法**：含中文的標題/較長內文用 `<BalancedText>{t(...)}</BalancedText>` 包起來。短標籤/按鈕可略過。
- 已抽成可重用 Skill：`~/.claude/skills/cjk-linebreak/`（也複製一份在 `IDreamAIWorks/實戰SKILL/cjk-linebreak/`）。其他網站要套同樣修正，喊「套用繁中斷行修正」即可。

---

## 7. 已完成（commit 軌跡）
```
a43501d Add live URL to README
857f2f6 Extend Chinese line-break fix to longer body paragraphs
8372231 Fix unnatural Chinese line breaks in headings
f56d658 Simplify palette to black + pink + white
b1485ad Use star mascot as favicon
39b76a4 Replace text wordmark with imasque logo lockup
5a87b34 Initial build of imasque.com brand site
```
（站台 → logo/favicon → 三色 → 中文斷行 → GitHub 自動部署 → imasque.com 網域）

---

## 8. 未完成 / 暫停 / 待決策
| 項目 | 狀態 |
|---|---|
| **Dream List email 後端** | **暫停**。現階段沒產品/內容，先不做。UI 佔位仍在（送出無作用）。曾評估 Airtable / 電子報平台，**最後都未採用、也沒寫任何後端程式**（已確認乾淨）。|
| **「Agent 原生網站系統」方向** | 已開始討論、**未動工**。核心：內容即資料、git 為真實來源、操作即 skill、排程 agent、人只給意圖。待決策：①只給 imasque 還是可複用模板 ②先消除哪種人工 ③自主程度（全自動 vs 審核關卡）。|
| **內容層（`content/`）** | 尚未建。若要 agent 化量產 Journal/產品，這是前提。現在無內容＝重構成本最低的時機。|
| **真實產品照** | 仍用 `SunglassesMask` SVG 佔位，待換攝影。|
| **Journal 實際文章** | 只有分類框架，無文章。|
| **「Building in Public」黑底中間粉色漸層帶** | 使用者提過可能要調淡，未做。|

---

## 9. 重要慣例 / 雷區（接手必讀）
- **Git commit email 一律用 GitHub no-reply** `255477117+OvermanAI@users.noreply.github.com`（已設成本機 global 預設）。
  - `doyen@opand.com` 推**公開 repo 會被 GitHub 擋**（GH007 信箱隱私）。
  - 機器 hostname email 會讓 **Vercel BLOCKED**。
  - 本 repo 的 6 個 commit 已改寫成 no-reply。
- **改完 push 就會自動部署上線** —— push 前先 `npm run build` 確認沒壞。
- **不要接 Shopify / 不要醫療定位 / 不做不實宣稱**（品牌守則）。
- 視覺驗證技巧：本機 SPA 有 scroll-reveal，headless 直接抓圖常是白畫面 → 改用「對照渲染」或加 `--force-prefers-reduced-motion`；或單純 `npm run dev` 用桌面瀏覽器看。
- Next 是 16（初版 15.1.6 有 CVE 已自動升級），目前無安全告警。

---

## 10. 接手後常見任務怎麼做
- **改某段文字**：找 `lib/dictionary.ts` 對應 key 的 `{ en, zh }`。
- **改顏色/間距/字級**：`tailwind.config.ts`（token）+ 各頁 className。
- **改產品造型**：`components/SunglassesMask.tsx`（SVG path / 顏色）。
- **加一頁**：在 `app/<name>/page.tsx` 新增，導覽列在 `components/Nav.tsx` 的 `links` 陣列加一筆 + dictionary 加 `nav.<name>`。
- **新增 Journal 文章（現況）**：暫時得手動改 dictionary + `app/journal/page.tsx`（沒有內容層）。若會常寫，建議先請 agent 幫你建 `content/` 內容層再開始。

---

*Handoff by Claude Code (CLI) → 交給 Claude Code 桌面版。Dream More. 🌙*
