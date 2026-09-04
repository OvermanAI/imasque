import { Fragment } from 'react'

// 一串連續的拉丁字母／數字（允許中間夾空格與 . + & / - ' 這類連接符號，
// 例如 Claude Code、ChatGPT、12AI、5折 的 5、L1–L5）。
// 把空格也吃進來，"Claude Code" 才會整組同一個字級，不會只有字母放大、
// 中間的空白還停在漢字的字級。
const LATIN_RUN = /[0-9A-Za-z]+(?:[ .'’&+/-][0-9A-Za-z]+)*/g

// 只有「中英混排」才需要調整。純英文標題沒有比較對象，放大 115% 只會讓它
// 比設定的字級大一號；純中文標題本來就沒有拉丁片段。兩種都原樣輸出。
const hasCJK = (s: string) => /[㐀-鿿豈-﫿　-〿＀-￯]/.test(s)

/**
 * 中英混排標題用：把字串裡的拉丁字母／數字包進 .lat-optical，
 * 放大到跟漢字視覺同級（--lat-scale）並做視覺中心對齊（--lat-shift）。
 * 數值與原理見 globals.css 的 .lat-optical 註解。
 *
 * 本站字體是 Switzer + 系統 PingFang TC，跟 aistartup.tw 同一套組合
 * （Switzer-Regular.woff2 md5 相同），沿用已實測的 --lat-shift −0.027em，
 * 不必重新量測。⚠️ 換字體就要重新量測，不能沿用舊值。
 *
 * 只處理字串——巢狀元素請在該元素內各自包一層，例如
 *   <span className="text-black/40"><OpticalLatin>Claude Code</OpticalLatin></span>
 *
 * 純英文與純中文字串原樣輸出（見 hasCJK），所以可以無腦包在所有標題上，
 * 包含資料庫來的動態標題——沒有中英混排就不會有任何變化。
 *
 * 用在標題（h1–h3、卡片標題）。內文不用：小字級看不出差異，
 * 而且滿版段落逐段包 span 沒有必要。
 *
 * `color` 選填：某個拉丁片段需要跟標題其餘部分不同色時使用（例如
 * aimusic.tw「動手用AI建造產品」裡的「AI」要顯示品牌亮綠色，其餘維持黑）。
 * 不傳就沿用繼承色，不影響既有用法。
 */
export function OpticalLatin({ children, color }: { children: string; color?: string }) {
  if (typeof children !== 'string' || !hasCJK(children)) return <Fragment>{children}</Fragment>

  const parts: React.ReactNode[] = []
  let last = 0
  for (const match of children.matchAll(LATIN_RUN)) {
    const start = match.index
    if (start > last) parts.push(children.slice(last, start))
    parts.push(
      <span key={start} className="lat-optical" style={color ? { color } : undefined}>
        {match[0]}
      </span>,
    )
    last = start + match[0].length
  }
  if (last < children.length) parts.push(children.slice(last))

  return <Fragment>{parts}</Fragment>
}
