import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { z } from 'zod'
import type { Locale } from '../../brand.config'

const ROOT = path.join(process.cwd(), 'content')

export const PostSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'publishedAt 必須是 YYYY-MM-DD'),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  category: z.string().min(1),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  draft: z.boolean().default(false),
})

export const PageSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
})

export type Post = z.infer<typeof PostSchema> & { slug: string; body: string; locale: Locale }
export type Page = z.infer<typeof PageSchema> & { slug: string; body: string; locale: Locale }

function readDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
}

/** 檔名 2026-09-05-break-the-ordinary.mdx → slug break-the-ordinary */
function slugFromFile(file: string): string {
  return file.replace(/\.mdx$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

export function getPosts(locale: Locale): Post[] {
  const dir = path.join(ROOT, 'journal', locale)
  return readDir(dir)
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data, content } = matter(raw)
      const parsed = PostSchema.safeParse(data)
      if (!parsed.success) {
        // build 時就失敗，不要讓壞內容悄悄上線 —— 這是 Agent 寫錯 frontmatter 的安全網
        throw new Error(
          `content/journal/${locale}/${file} frontmatter 不合法：\n` +
            parsed.error.issues.map((i) => `  - ${i.path.join('.')}: ${i.message}`).join('\n'),
        )
      }
      return { ...parsed.data, slug: slugFromFile(file), body: content, locale }
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getPost(locale: Locale, slug: string): Post | null {
  return getPosts(locale).find((p) => p.slug === slug) ?? null
}

export function getPage(locale: Locale, slug: string): Page | null {
  const file = path.join(ROOT, 'pages', locale, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  const parsed = PageSchema.safeParse(data)
  if (!parsed.success) {
    throw new Error(
      `content/pages/${locale}/${slug}.mdx frontmatter 不合法：\n` +
        parsed.error.issues.map((i) => `  - ${i.path.join('.')}: ${i.message}`).join('\n'),
    )
  }
  return { ...parsed.data, slug, body: content, locale }
}

export function getManufacturing(): Record<string, unknown> | null {
  const file = path.join(ROOT, 'manufacturing.json')
  if (!fs.existsSync(file)) return null
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}
