"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { SunglassesMask } from "@/components/SunglassesMask";
import { DreamListForm } from "@/components/DreamListForm";

export default function Home() {
  const { lang } = useLang();
  const h = dict.home;

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
            <div>
              <p className="reveal in font-sans text-[0.78rem] uppercase tracking-widest2 text-dusk-deep">
                {t(h.eyebrow, lang)}
              </p>
              <h1 className="mt-6 font-display font-light leading-[0.86] tracking-brand text-ink text-[clamp(4rem,13vw,11rem)]">
                <span className="block animate-blurin">{t(h.heroLine1, lang)}</span>
                <span className="block italic text-dusk-deep animate-blurin [animation-delay:0.15s]">
                  {t(h.heroLine2, lang)}
                </span>
              </h1>
              <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-ink/65 text-balance animate-rise [animation-delay:0.3s]">
                {t(h.heroSub, lang)}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5 animate-rise [animation-delay:0.45s]">
                <a
                  href="#dream-list"
                  className="rounded-full bg-ink px-7 py-3.5 font-sans text-sm uppercase tracking-wider2 text-cream hover:bg-dusk-deep transition-colors"
                >
                  {t(h.heroCta, lang)}
                </a>
                <Link
                  href="/shop"
                  className="group font-sans text-sm uppercase tracking-wider2 text-ink/70 hover:text-ink transition-colors"
                >
                  {t(h.heroCta2, lang)}
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* floating product */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 animate-drift">
                <div className="mx-auto mt-6 h-72 w-72 lg:h-96 lg:w-96 rounded-full bg-gradient-to-br from-dusk/40 via-haze/30 to-apricot/40 blur-3xl" />
              </div>
              <div className="animate-floaty">
                <SunglassesMask className="w-full max-w-xl mx-auto drop-shadow-2xl" idSuffix="hero" />
              </div>
            </div>
          </div>
        </div>
        <Marquee />
      </section>

      {/* ───────────────────────── CONCEPT ───────────────────────── */}
      <Section id="concept">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <Kicker>{t(h.conceptKicker, lang)}</Kicker>
            <h2 className="mt-5 font-display font-light text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] tracking-brand text-ink text-balance">
              {t(h.conceptTitle, lang)}
            </h2>
            <p className="mt-7 max-w-md font-sans text-lg leading-relaxed text-ink/65">
              {t(h.conceptBody, lang)}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <div className="relative rounded-[2.5rem] bg-cream/60 border border-ink/5 p-10 lg:p-16 overflow-hidden">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-apricot/30 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-dusk/30 blur-2xl" />
              <SunglassesMask
                className="relative w-full"
                left="#080808"
                right="#F8C8C8"
                idSuffix="concept"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ───────────────────────── CORE VALUES ───────────────────────── */}
      <Section id="core">
        <Reveal>
          <Kicker>{t(h.valuesKicker, lang)}</Kicker>
          <h2 className="mt-5 font-display font-light text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] tracking-brand text-ink">
            {t(h.valuesTitle, lang)}
          </h2>
        </Reveal>
        <Reveal stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { n: "Comfort", t: h.comfort, b: h.comfortBody, c: "from-dusk/25 to-haze/20" },
            { n: "Healing", t: h.healing, b: h.healingBody, c: "from-haze/30 to-apricot/15" },
            { n: "Imagination", t: h.imagination, b: h.imaginationBody, c: "from-apricot/25 to-dusk/15" },
          ].map((v, i) => (
            <div
              key={v.n}
              className={`relative rounded-[2rem] border border-ink/5 bg-gradient-to-br ${v.c} p-9 min-h-[19rem] flex flex-col justify-between`}
            >
              <span className="font-display text-6xl text-ink/15">0{i + 1}</span>
              <div>
                <h3 className="font-display text-3xl text-ink">{t(v.t, lang)}</h3>
                <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink/60">
                  {t(v.b, lang)}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* ───────────────────────── BUILDING IN PUBLIC ───────────────────────── */}
      <Section id="building">
        <Reveal className="relative rounded-[2.5rem] overflow-hidden border border-ink/5">
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-dusk-deep to-ink" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(243,180,138,0.5),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(154,166,214,0.6),transparent_45%)]" />
          <div className="relative px-8 py-16 lg:px-20 lg:py-24 text-cream">
            <Kicker className="text-apricot-soft">{t(h.bipKicker, lang)}</Kicker>
            <h2 className="mt-5 max-w-3xl font-display font-light text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-brand text-balance">
              {t(h.bipTitle, lang)}
            </h2>
            <p className="mt-7 max-w-xl font-sans text-lg leading-relaxed text-cream/75">
              {t(h.bipBody, lang)}
            </p>
            <Link
              href="/journal"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-sans text-sm uppercase tracking-wider2 text-ink hover:bg-apricot-soft transition-colors"
            >
              {t(h.bipCta, lang)} <span>→</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ───────────────────────── DREAM LIST ───────────────────────── */}
      <Section id="dream-list">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Kicker className="justify-center">{t(h.dreamKicker, lang)}</Kicker>
          <h2 className="mt-5 font-display font-light text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-brand text-ink">
            {t(h.dreamTitle, lang)}
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-ink/65">
            {t(h.dreamBody, lang)}
          </p>
          <div className="mt-10 flex justify-center">
            <DreamListForm />
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">{children}</div>
    </section>
  );
}

function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-sans text-[0.75rem] uppercase tracking-widest2 text-dusk-deep ${className}`}>
      {children}
    </span>
  );
}

function Marquee() {
  const words = ["Comfort", "Healing", "Imagination", "Dream More"];
  return (
    <div className="border-y border-ink/10 overflow-hidden py-4 bg-cream/40">
      <div className="flex w-max gap-12 whitespace-nowrap animate-marquee will-change-transform">
        {Array.from({ length: 4 }).flatMap((_, r) =>
          words.map((w) => (
            <span
              key={`${r}-${w}`}
              className="font-display italic text-2xl text-ink/30 tracking-brand"
            >
              {w} <span className="not-italic text-dusk-deep/40">✦</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
