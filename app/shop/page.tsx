"use client";

import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { SunglassesMask } from "@/components/SunglassesMask";
import { PageIntro } from "@/components/PageIntro";
import { DreamListForm } from "@/components/DreamListForm";
import { BalancedText } from "@/components/BalancedText";

export default function ShopPage() {
  const { lang } = useLang();
  const s = dict.shop;

  return (
    <>
      <PageIntro index="Shop — 01" title={t(s.title, lang)} intro={t(s.intro, lang)} />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-10">
        <Reveal className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* product visual */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-ink/5 bg-gradient-to-br from-haze/40 via-cream to-apricot/20 p-10 lg:p-16 flex items-center">
            <div className="absolute top-6 left-6 font-sans text-[0.7rem] uppercase tracking-wider2 text-ink/45">
              {t(s.productTag, lang)}
            </div>
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-dusk/30 blur-3xl" />
            <div className="animate-floaty w-full">
              <SunglassesMask className="w-full" idSuffix="shop" />
            </div>
          </div>

          {/* product detail */}
          <div className="flex flex-col justify-center rounded-[2.5rem] border border-ink/5 bg-cream/50 p-10 lg:p-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-dusk-deep/30 px-4 py-1.5 font-sans text-[0.7rem] uppercase tracking-wider2 text-dusk-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-dusk-deep animate-pulse" />
              {t(s.status, lang)}
            </span>
            <h2 className="mt-6 font-display font-light text-[clamp(2.4rem,5vw,3.6rem)] leading-[0.95] tracking-brand text-ink">
              <BalancedText>{t(s.productName, lang)}</BalancedText>
            </h2>
            <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-ink/65">
              <BalancedText>{t(s.productDesc, lang)}</BalancedText>
            </p>

            <div className="mt-9 rounded-2xl bg-milk/70 border border-ink/5 p-6">
              <p className="font-sans text-sm leading-relaxed text-ink/55">
                <BalancedText>{t(s.soon, lang)}</BalancedText>
              </p>
              <div className="mt-5">
                <DreamListForm compact />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
