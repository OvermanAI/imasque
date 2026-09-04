import brand, { type Locale } from '../../brand.config'

export const LOCALES = brand.locales as readonly Locale[]
export const DEFAULT_LOCALE = brand.defaultLocale as Locale

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v)
}

/** 英文（預設語言）免前綴；其他 locale 加前綴。 */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '')
  return locale === DEFAULT_LOCALE ? clean || '/' : `/${locale}${clean}`
}

/** BCP-47 標籤，給 <html lang> 與 hreflang 用 */
export function htmlLang(locale: Locale): string {
  return locale === 'zh-Hant' ? 'zh-Hant' : locale
}

export function t<T extends Record<string, string>>(dict: T, locale: Locale): string {
  return (dict as Record<string, string>)[locale] ?? (dict as Record<string, string>)[DEFAULT_LOCALE]
}
