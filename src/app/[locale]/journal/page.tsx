import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, localePath, t } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-url'
import { getPosts } from '@/lib/content'
import { toRecords } from '@/lib/blog-adapter'
import { BlogIndex } from '@/components/blog/BlogIndex'
import { alternatesFor } from '../layout'
import type { Locale } from '../../../../brand.config'

const COPY = {
  title: { en: 'Journal', 'zh-Hant': '日誌' },
  intro: {
    en: 'Notes from the workbench — written as it happens, not after.',
    'zh-Hant': '來自工作檯的筆記——發生當下就寫，不是事後補。',
  },
}

/** 首屏文字塊：每個元素是一行編輯斷行（Blog_Domaine 規格 §二 鐵則 5）。
 *  ⚠️ 規格明訂宣言各站自己寫、**不可跨站沿用**。換品牌時一定要改這裡。 */
const STATEMENT: Record<Locale, string[]> = {
  en: ['Your first line here.', 'Your second line here.', 'Your third line here.'],
  'zh-Hant': ['第一行寫這裡。', '第二行寫這裡。', '第三行寫這裡。'],
}

const UI: Record<Locale, { label: string; all: string; emptyAll: string; emptyFiltered: string }> = {
  en: { label: 'Journal', all: 'All entries', emptyAll: 'First entry landing soon.', emptyFiltered: 'Nothing in this category yet.' },
  'zh-Hant': { label: '日誌', all: '全部文章', emptyAll: '第一篇即將發布。', emptyFiltered: '這個分類還沒有文章。' },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const l = locale as Locale
  return {
    title: t(COPY.title, l),
    description: t(COPY.intro, l),
    alternates: { canonical: siteUrl(localePath(l, '/journal')), languages: alternatesFor('/journal') },
  }
}

export default async function JournalIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  return <BlogIndex posts={toRecords(getPosts(l), l)} lines={STATEMENT[l]} ui={UI[l]} />
}
