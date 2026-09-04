import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, isLocale, localePath } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-url'
import { getPost, getPosts } from '@/lib/content'
import { blogPostingJsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { BlogArticle } from '@/components/blog/BlogArticle'
import { toRecords } from '@/lib/blog-adapter'
import { alternatesFor } from '../../layout'
import type { Locale } from '../../../../../brand.config'

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => getPosts(locale).map((p) => ({ locale, slug: p.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const post = getPost(locale as Locale, slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: siteUrl(localePath(locale as Locale, `/journal/${slug}`)),
      languages: alternatesFor(`/journal/${slug}`),
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const post = getPost(l, slug)
  if (!post) notFound()

  const all = getPosts(l)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(l, [
              { name: 'Journal', path: '/journal' },
              { name: post.title, path: `/journal/${post.slug}` },
            ]),
          ),
        }}
      />
      <BlogArticle
        post={toRecords([post], l)[0]}
        slug={post.slug}
        others={toRecords(all.filter((p) => p.slug !== post.slug), l)}
      />
    </>
  )
}
