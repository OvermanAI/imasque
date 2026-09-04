import brand from '../../brand.config'

/**
 * 預設是純文字字標。
 * 有品牌 SVG logo 時，把這個元件換成 inline SVG，並把 fill 設成 "currentColor"
 * 讓它跟著 token 走（不要寫死顏色，check:tokens 會擋）。
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      aria-label={brand.wordmark}
      className={`font-[family-name:var(--font-display)] font-black uppercase leading-none tracking-[-0.02em] ${className ?? ''}`}
    >
      {brand.wordmark}
    </span>
  )
}
