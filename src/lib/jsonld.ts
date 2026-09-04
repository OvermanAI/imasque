import brand, { type Locale } from '../../brand.config'
import { siteUrl } from './site-url'
import { localePath, t } from './i18n'
import type { Post } from './content'

export function organizationJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.wordmark,
    alternateName: brand.name,
    url: siteUrl(localePath(locale)),
    description: t(brand.description, locale),
    parentOrganization: { '@type': 'Organization', name: brand.organization.legalName },
    sameAs: Object.values(brand.social).filter(Boolean),
  }
}

export function brandJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: brand.wordmark,
    slogan: t(brand.tagline, locale),
    description: t(brand.description, locale),
    url: siteUrl(localePath(locale)),
  }
}

export function blogPostingJsonLd(post: Post) {
  const url = siteUrl(localePath(post.locale, `/journal/${post.slug}`))
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: post.locale,
    mainEntityOfPage: url,
    url,
    ...(post.cover ? { image: siteUrl(post.cover) } : {}),
    publisher: { '@type': 'Organization', name: brand.wordmark, url: siteUrl('/') },
  }
}

export function breadcrumbJsonLd(locale: Locale, trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: siteUrl(localePath(locale, item.path)),
    })),
  }
}
