"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { SunglassesMask } from "@/components/SunglassesMask";
import { PageIntro } from "@/components/PageIntro";
import { BalancedText } from "@/components/BalancedText";

const futureDreams = [
  { key: "flower" as const, grad: "from-apricot/40 to-haze/30" },
  { key: "animal" as const, grad: "from-moss/40 to-dusk/25" },
  { key: "cloud" as const, grad: "from-dusk/30 to-cream" },
  { key: "fruit" as const, grad: "from-apricot/45 to-moss/25" },
  { key: "moon" as const, grad: "from-dusk-deep/30 to-haze/35" },
];

export default function CollectionsPage() {
  const { lang } = useLang();
  const c = dict.collections;

  return (
    <>
      <PageIntro index="Collections" title={t(c.title, lang)} intro={t(c.intro, lang)} />

      {/* NOW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display italic text-2xl text-dusk-deep">{t(c.current, lang)}</span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>
          <Link href="/shop" className="group block">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-ink/5 bg-gradient-to-br from-haze/40 via-cream to-apricot/25 p-10 lg:p-16">
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
                <div>
                  <h2 className="font-display font-light text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] tracking-brand text-ink">
                    {t(c.sunglasses, lang)}
                  </h2>
                  <p className="mt-5 max-w-sm font-sans text-lg leading-relaxed text-ink/65">
                    <BalancedText>{t(c.sunglassesDesc, lang)}</BalancedText>
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider2 text-ink/70 group-hover:text-ink transition-colors">
                    {t(dict.nav.shop, lang)}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
                <div className="animate-floaty">
                  <SunglassesMask className="w-full" idSuffix="coll" />
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* FUTURE DREAMS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display italic text-2xl text-ink/45">{t(c.future, lang)}</span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>
        </Reveal>
        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {futureDreams.map((d) => (
            <div
              key={d.key}
              className={`group relative rounded-[2rem] border border-ink/5 bg-gradient-to-br ${d.grad} p-8 min-h-[16rem] flex flex-col justify-between overflow-hidden`}
            >
              <div className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-white/30 blur-2xl transition-transform duration-700 group-hover:scale-125" />
              <span className="relative font-sans text-[0.68rem] uppercase tracking-wider2 text-ink/45">
                {t(c.soonLabel, lang)}
              </span>
              <h3 className="relative font-display font-light text-[clamp(2.2rem,4vw,3.2rem)] leading-none tracking-brand text-ink">
                {t(c[d.key], lang)}
              </h3>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  );
}
