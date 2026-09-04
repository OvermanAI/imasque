import { Fragment } from 'react'

/**
 * 繁中斷詞（實戰SKILL/cjk-linebreak）＋ 中英混排視覺對齊（OpticalLatin）
 * **合成同一個元件**。
 *
 * ⚠️ 兩件事一定要合成一個元件做，不能各包一層——這是 0823 設計記錄「五個踩過
 * 的坑」第 5 條：兩者都要把字串切成 span，各做各的會互相踩。如果先跑
 * Intl.Segmenter 斷詞，`Claude Code` 會被拆成 `Claude` / `Code` 兩個詞，
 * 拉丁放大就只會套到其中一半。
 *
 * 三層處理：
 *  1. 先用正則把拉丁片段切成「不可分割的原子」（整組同字級、整組不斷行），
 *     只對中文區段跑 Intl.Segmenter。
 *  2. 標點併進相鄰的字，避免句號／問號被推到行首成為孤兒。
 *  3. **孤字保護**：把原子合併成「每個至少含 2 個漢字」的群組，再各自包
 *     nowrap。因為最小的不可斷單元就有 2 個漢字，任何一行都不可能只出現
 *     一個漢字（或一個漢字＋標點）。
 *     ——只保護結尾是不夠的：拉丁片段會把中文切開（「前10名」的「前」、
 *     「5折優惠」的「折」都會變成獨立單元），那些單字在某些寬度就會單獨成行。
 *
 * server component：Intl.Segmenter 在 Node 16+ 可用，切詞在伺服器做完，
 * SSR 出來的 HTML 就已正確，不需要 client JS。
 */

// 一串連續的拉丁字母／數字（允許中間夾空格與 . + & / - ' 這類連接符號）。
// 把空格也吃進來，"Claude Code" 才會整組同一個字級、整組不斷行。
const LATIN_RUN = /[0-9A-Za-z]+(?:[ .'’&+/-][0-9A-Za-z]+)*/g

const hasCJK = (s: string) => /[一-鿿㐀-䶿豈-﫿]/.test(s)
const cjkCount = (s: string) => (s.match(/[一-鿿㐀-䶿豈-﫿]/g) || []).length

// Intl.Segmenter 會把標點切成獨立的「詞」，各自 nowrap 之後就可能被推到行首／
// 行末變成孤兒。收尾標點併進前一個詞、起頭標點併進後一個詞。
const TRAILING_PUNCT = /^[。，、．？！；：）」』〉》】〕｝〞…—～!?,.:;)\]}]+$/
const LEADING_PUNCT = /^[（「『〈《【〔｛〝([{]+$/

let segmenter: Intl.Segmenter | null | undefined
function getSegmenter(): Intl.Segmenter | null {
  if (segmenter !== undefined) return segmenter
  try {
    segmenter =
      typeof Intl !== 'undefined' && 'Segmenter' in Intl
        ? new Intl.Segmenter('zh', { granularity: 'word' })
        : null
  } catch {
    segmenter = null
  }
  return segmenter
}

/** 中文區段 → 詞陣列（標點已併入相鄰的字） */
function segmentCJK(text: string): string[] {
  const seg = getSegmenter()
  if (!seg) return [text]

  const words: string[] = []
  for (const { segment } of seg.segment(text)) {
    const prev = words[words.length - 1]
    if (prev !== undefined && (TRAILING_PUNCT.test(segment) || LEADING_PUNCT.test(prev))) {
      words[words.length - 1] = prev + segment
    } else {
      words.push(segment)
    }
  }
  return words
}

type Atom = { node: React.ReactNode; cjk: number }

export function BalancedText({ children }: { children: string }) {
  if (typeof children !== 'string') return <Fragment>{children}</Fragment>

  const mixed = hasCJK(children)

  // ── 1) 切成原子：拉丁片段整組一個、中文逐詞一個 ──────────────────
  const atoms: Atom[] = []
  let last = 0
  for (const match of children.matchAll(LATIN_RUN)) {
    const start = match.index
    if (start > last) {
      for (const w of segmentCJK(children.slice(last, start))) {
        atoms.push({ node: w, cjk: cjkCount(w) })
      }
    }
    atoms.push({
      // 只有中英混排才放大拉丁片段（純英文標題沒有比較對象，放大會整個大一號）
      node: mixed ? (
        <span key={`l${start}`} className="lat-optical">
          {match[0]}
        </span>
      ) : (
        match[0]
      ),
      cjk: 0,
    })
    last = start + match[0].length
  }
  if (last < children.length) {
    for (const w of segmentCJK(children.slice(last))) {
      atoms.push({ node: w, cjk: cjkCount(w) })
    }
  }

  // ── 2) 合併成「每組至少 2 個漢字」的不可斷群組 ────────────────────
  const groups: Atom[][] = []
  let current: Atom[] = []
  let currentCjk = 0
  for (const atom of atoms) {
    current.push(atom)
    currentCjk += atom.cjk
    if (currentCjk >= 2) {
      groups.push(current)
      current = []
      currentCjk = 0
    }
  }
  if (current.length) {
    // 收尾不足 2 個漢字的，併回前一組（沒有前一組就自己成組）
    if (groups.length) groups[groups.length - 1].push(...current)
    else groups.push(current)
  }

  // ── 3) 每組包一層 nowrap ───────────────────────────────────────
  return (
    <Fragment>
      {groups.map((g, i) => (
        <span key={i} style={{ whiteSpace: 'nowrap' }}>
          {g.map((a, j) => (
            <Fragment key={j}>{a.node}</Fragment>
          ))}
        </span>
      ))}
    </Fragment>
  )
}
