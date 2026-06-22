"use client";

import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { SunglassesMask } from "@/components/SunglassesMask";
import { PageIntro } from "@/components/PageIntro";

export default function AboutPage() {
  const { lang } = useLang();
  const a = dict.about;

  return (
    <>
      <PageIntro index="About" title={t(a.title, lang)} intro={t(a.formula, lang)} />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          <Reveal className="space-y-7 max-w-2xl">
            <p className="font-display font-light text-[clamp(1.6rem,3vw,2.3rem)] leading-snug tracking-brand text-ink text-balance">
              {t(a.body1, lang)}
            </p>
            <p className="font-sans text-lg leading-relaxed text-ink/65">
              {t(a.body2, lang)}
            </p>
            <p className="font-sans text-lg leading-relaxed text-ink/65">
              {t(a.body3, lang)}
            </p>
            <p className="font-display italic text-4xl text-dusk-deep pt-2">
              {t(a.signature, lang)}
            </p>
          </Reveal>

          <Reveal className="lg:sticky lg:top-24">
            <div className="relative rounded-[2.5rem] border border-ink/5 bg-gradient-to-br from-dusk/25 via-cream to-apricot/25 p-10 lg:p-12 overflow-hidden">
              <div className="absolute -top-16 -left-12 h-52 w-52 rounded-full bg-haze/40 blur-2xl" />
              <div className="animate-floaty">
                <SunglassesMask className="w-full" left="#6E78B8" right="#F3B48A" idSuffix="about" />
              </div>
              <p className="relative mt-8 text-center font-sans text-[0.72rem] uppercase tracking-wider2 text-ink/45">
                {t(a.formula, lang)}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
