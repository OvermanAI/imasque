"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { BalancedText } from "@/components/BalancedText";
import { StarMonsterMark } from "@/components/StarMonsterMark";

const futureDreams = [
  { key: "flower" as const, color: "bg-[#F8C8C8] text-[#080808]" },
  { key: "animal" as const, color: "bg-[#F6E7D8] text-[#080808]" },
  { key: "cloud" as const, color: "bg-white text-[#080808]" },
  { key: "fruit" as const, color: "bg-[#FF1F0F] text-white" },
  { key: "moon" as const, color: "bg-[#080808] text-white" },
];

export default function CollectionsPage() {
  const { lang } = useLang();
  const c = dict.collections;

  return (
    <>
      <PageIntro index="Collections / Monster forms" title={t(c.title, lang)} intro={t(c.intro, lang)} />

      <section className="bg-[#FFF6F7] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link href="/product" className="group grid overflow-hidden border-2 border-[#080808] bg-white shadow-[8px_8px_0_#080808] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between border-b-2 border-[#080808] p-8 lg:border-b-0 lg:border-r-2 lg:p-12">
                <span className="w-fit bg-[#F6E7D8] px-4 py-2 font-sans text-xs font-black uppercase tracking-wider2 text-[#080808] shadow-[4px_4px_0_#080808]">
                  {t(c.current, lang)}
                </span>
                <div className="mt-12">
                  <h2 className="font-display text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.78] text-[#080808]">
                    {t(c.sunglasses, lang)}
                  </h2>
                  <p className="mt-5 max-w-md font-sans text-lg font-bold leading-relaxed text-[#080808]/70">
                    <BalancedText>{t(c.sunglassesDesc, lang)}</BalancedText>
                  </p>
                </div>
                <span className="mt-10 font-sans text-sm font-black uppercase tracking-wider2 text-[#FF1F0F] group-hover:text-[#F8C8C8]">
                  Enter drop →
                </span>
              </div>
              <div className="relative min-h-[360px] bg-[#F8C8C8] p-10">
                <StarMonsterMark className="absolute right-8 top-8 h-24 w-24 rotate-[12deg] text-[#F6E7D8] drop-shadow-[4px_4px_0_#080808]" />
                <div className="flex h-full items-center justify-center font-display text-[clamp(5rem,12vw,12rem)] uppercase leading-[0.78] text-white [-webkit-text-stroke:2px_#080808]">
                  001
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#080808] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] text-white">
              Future dreams
            </h2>
            <span className="hidden font-couture text-2xl italic text-[#F8C8C8] sm:block">comfort, then imagination</span>
          </Reveal>
          <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {futureDreams.map((d) => (
              <div key={d.key} className={`${d.color} min-h-[16rem] border-2 border-white p-7 shadow-[6px_6px_0_#F8C8C8]`}>
                <span className="font-sans text-[0.68rem] font-black uppercase tracking-wider2 opacity-70">
                  {t(c.soonLabel, lang)}
                </span>
                <h3 className="mt-16 font-display text-[clamp(3rem,6vw,5rem)] uppercase leading-none">
                  {t(c[d.key], lang)}
                </h3>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
