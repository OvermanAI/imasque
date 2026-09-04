import { notFound } from 'next/navigation'
import type { Locale } from '../../../brand.config'
import { isLocale } from '@/lib/i18n'
import { Sonic } from '@/components/skin/Sonic'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <Sonic locale={locale as Locale} />
}
