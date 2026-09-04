import { NextResponse, type NextRequest } from 'next/server'
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n'

/**
 * 預設語言（英文）免前綴：/journal/x 內部 rewrite 成 /en/journal/x，網址不變。
 * 其他 locale 走自己的前綴，不動。
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    // 一般路徑：排除 _next、api、站台級靜態檔，以及任何含副檔名的資源
    '/((?!_next|api|images|favicon|robots.txt|sitemap.xml|llms.txt|.*\\..*).*)',
    // ⚠️ feed.xml 含點，會被上面那條的 .*\..* 排除掉，必須明確列出，
    //    否則預設語言的 /feed.xml 永遠 404（llms.txt 也會指到死連結）。
    '/feed.xml',
  ],
}
