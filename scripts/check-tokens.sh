#!/usr/bin/env bash
# 元件不准寫死顏色。只有 brand.tokens.css 與 vendored 的 Blog_Domaine 版型
# （insights.css，逐字移植自 12AI 艦隊）例外；自己寫的元件層零例外。
# 這是母版最實際的一條紀律 —— 不要因為套模版方便就關掉它。
set -uo pipefail
hits=$(grep -rnE '#[0-9A-Fa-f]{6}\b' src/ 2>/dev/null | grep -vE 'brand\.tokens\.css|insights\.css' || true)
if [ -n "$hits" ]; then
  echo "❌ 發現寫死的色值，請改用 var()（新顏色請加進 brand.tokens.css）："
  echo "$hits"
  exit 1
fi
echo "✅ 沒有寫死的色值"
