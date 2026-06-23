# imasque.com

> The eye mask of 11yo CxY's imagination. **Dream More.**

**Live:** https://imasque.vercel.app · Built in public 🛠️

A brand-led marketing site for **imasque** — an eye mask brand built on **Comfort, Healing & Imagination**. The first MVP product is a two-tone eye mask in the silhouette of sunglasses. Built in public by 11-year-old CxY.

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript
- **Tailwind CSS 3** — design tokens in `tailwind.config.ts`
- **next/font** — Fraunces (display) · Hanken Grotesk (body) · Noto Sans TC (Chinese)
- Fully static (no database, no Shopify — by design)

## Architecture

```
app/
  layout.tsx          root layout, fonts, providers
  page.tsx            Home — brand, concept, core, building-in-public, dream list
  shop/               MVP product (The Sunglasses Mask)
  collections/        Sunglasses (now) + future dreams (Flower/Animal/Cloud/Fruit/Moon)
  journal/            Dream Journal categories
  about/              Origin story
components/
  LanguageProvider    EN/ZH toggle (localStorage), see lib/dictionary.ts
  Nav · Footer · Reveal · SunglassesMask · DreamListForm · PageIntro
lib/
  dictionary.ts       all bilingual copy (EN / Traditional Chinese)
```

## Notes

- **Bilingual**: every string lives in `lib/dictionary.ts`. Slogans/wordmark stay English by design.
- **Dream List**: email form is **UI-only** for now (logs intent to console). Wire a backend later.
- **Product visual** is a hand-built SVG (`SunglassesMask`) — swap for photography when shots exist.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```
