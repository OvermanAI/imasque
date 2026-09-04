#!/usr/bin/env bash
# 一鍵部署：git 身分 → GitHub repo → Vercel 連結 → 環境變數 → production 部署
# 這個母版沒有資料庫、沒有祕鑰、沒有 migration，所以流程比課程站那套簡單很多。
set -euo pipefail

DOMAIN=$(node -e "import('./brand.config.ts').then(m=>console.log(m.default.domain))" 2>/dev/null \
  || grep -oE "domain: *'[^']+'" brand.config.ts | head -1 | sed "s/.*'\(.*\)'/\1/")
REPO="${DEPLOY_REPO:-$(echo "$DOMAIN" | tr '.' '-')}"
echo "▸ 網域 $DOMAIN ／ repo $REPO"

# ── 1. git 身分 ──
# ⚠️ 不要用個人信箱：推公開 repo 會被 GitHub 信箱隱私保護擋下（GH007），
#    機器預設 hostname 信箱會被 Vercel 拒（BLOCKED）。一律用 GitHub no-reply。
if [ -z "$(git config user.email || true)" ]; then
  echo "✗ 請先設定 git 身分："
  echo "    git config user.name  \"<GitHub 帳號>\""
  echo "    git config user.email \"<ID+帳號@users.noreply.github.com>\""
  exit 1
fi
echo "▸ git 身分 $(git config user.name) <$(git config user.email)>"

# ── 2. 建置驗證（壞的東西不要上線）──
npm run check
npm run build

# ── 3. GitHub ──
[ -d .git ] || git init -q
git add -A
git diff --cached --quiet || git commit -q -m "chore: deploy $DOMAIN"
if git remote get-url origin >/dev/null 2>&1; then
  git push -q origin HEAD
else
  gh repo create "$REPO" --private --source=. --remote=origin --push
fi

# ── 4. Vercel ──
vercel link --yes --project "$REPO" >/dev/null
PID=$(python3 -c "import json;print(json.load(open('.vercel/project.json'))['projectId'])")
TID=$(python3 -c "import json;print(json.load(open('.vercel/project.json'))['orgId'])")
TOKEN=$(python3 -c "import json,os;print(json.load(open(os.path.expanduser('~/Library/Application Support/com.vercel.cli/auth.json')))['token'])")

# ⚠️ 這個變數沒設對，canonical/hreflang/sitemap/feed/OG 會全部指到 vercel.app
for t in production preview development; do
  curl -s -X POST "https://api.vercel.com/v10/projects/$PID/env?teamId=$TID" \
    -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
    -d "{\"key\":\"NEXT_PUBLIC_SITE_URL\",\"value\":\"https://$DOMAIN\",\"type\":\"plain\",\"target\":[\"$t\"]}" \
    >/dev/null
done
echo "▸ NEXT_PUBLIC_SITE_URL = https://$DOMAIN"

vercel deploy --prod --yes

# ── 5. 網域 ──
for d in "$DOMAIN" "www.$DOMAIN"; do
  curl -s -X POST "https://api.vercel.com/v10/projects/$PID/domains?teamId=$TID" \
    -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
    -d "{\"name\":\"$d\"}" >/dev/null
done

cat <<NOTE

▸ 網域已加入 Vercel 專案，但 **DNS 要你到註冊商自己改**：
    A     @     76.76.21.21
    CNAME www   cname.vercel-dns.com
  改完等 DNS 生效與 SSL 簽發。在那之前 $DOMAIN 仍會顯示註冊商的停放頁。

▸ 接著跑 START_Prompt.md 的「驗收」清單。
NOTE
