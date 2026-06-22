"use client";

import { Fragment, useMemo } from "react";

// Detect Han / CJK punctuation so we only segment Chinese strings.
const hasCJK = (s: string) =>
  /[㐀-鿿豈-﫿　-〿＀-￯]/.test(s);

let segmenter: Intl.Segmenter | null | undefined;
function getSegmenter(): Intl.Segmenter | null {
  if (segmenter !== undefined) return segmenter;
  try {
    segmenter =
      typeof Intl !== "undefined" && "Segmenter" in Intl
        ? new Intl.Segmenter("zh", { granularity: "word" })
        : null;
  } catch {
    segmenter = null;
  }
  return segmenter;
}

/**
 * Wraps each Chinese word (via Intl.Segmenter) in a non-breaking span so
 * line breaks only fall on word boundaries — never mid-word (e.g. 作|夢).
 * Latin / English passes straight through.
 */
export function BalancedText({ children }: { children: string }) {
  const content = useMemo(() => {
    if (typeof children !== "string" || !hasCJK(children)) return children;
    const seg = getSegmenter();
    if (!seg) return children;
    const words = Array.from(seg.segment(children), (s) => s.segment);
    return words.map((w, i) => (
      <span key={i} style={{ whiteSpace: "nowrap" }}>
        {w}
      </span>
    ));
  }, [children]);

  return <Fragment>{content}</Fragment>;
}
