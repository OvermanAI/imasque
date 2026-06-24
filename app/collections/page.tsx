"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { BalancedText } from "@/components/BalancedText";
import { StarMonsterMark } from "@/components/StarMonsterMark";

const futureDreams = [
  { key: "flower" as const, color: "bg-[#FF2B9A] text-white" },
  { key: "animal" as const, color: "bg-[#D9FF38] text-[#0B0B0C]" },
  { key: "cloud" as const, color: "bg-white text-[#0B0B0C]" },
  { key: "fruit" as const, color: "bg-[#E01414] text-white" },
  { key: "moon" as const, color: "bg-[#0B0B0C] text-white" },
];

export default function CollectionsPage() {
  const { lang } = useLang();
  const c = dict.collections;

  return (
    <>
      <PageIntro index="Collections / Monster forms" title={t(c.title, lang)} intro={t(c.intro, lang)} />

      <section className="bg-[#F7EFF6] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link href="/product" className="group grid overflow-hidden border-2 border-[#0B0B0C] bg-white shadow-[8px_8px_0_#0B0B0C] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between border-b-2 border-[#0B0B0C] p-8 lg:border-b-0 lg:border-r-2 lg:p-12">
                <span className="w-fit bg-[#D9FF38] px-4 py-2 font-sans text-xs font-black uppercase tracking-wider2 text-[#0B0B0C] shadow-[4px_4px_0_#0B0B0C]">
                  {t(c.current, lang)}
                </span>
                <div className="mt-12">
                  <h2 className="font-monster text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.78] text-[#0B0B0C]">
                    {t(c.sunglasses, lang)}
                  </h2>
                  <p className="mt-5 max-w-md font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/70">
                    <BalancedText>{t(c.sunglassesDesc, lang)}</BalancedText>
                  </p>
                </div>
                <span className="mt-10 font-sans text-sm font-black uppercase tracking-wider2 text-[#E01414] group-hover:text-[#FF2B9A]">
                  Enter drop →
                </span>
              </div>
              <div className="relative min-h-[360px] bg-[#FF2B9A] p-10">
                <StarMonsterMark className="absolute right-8 top-8 h-24 w-24 rotate-[12deg] text-[#D9FF38] drop-shadow-[4px_4px_0_#0B0B0C]" />
                <div className="flex h-full items-center justify-center font-monster text-[clamp(5rem,12vw,12rem)] uppercase leading-[0.78] text-white [-webkit-text-stroke:2px_#0B0B0C]">
                  001
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0B0B0C] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-monster text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] text-white">
              Future dreams
            </h2>
            <span className="hidden font-couture text-2xl italic text-[#FF2B9A] sm:block">cute, then feral</span>
          </Reveal>
          <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {futureDreams.map((d) => (
              <div key={d.key} className={`${d.color} min-h-[16rem] border-2 border-white p-7 shadow-[6px_6px_0_#FF2B9A]`}>
                <span className="font-sans text-[0.68rem] font-black uppercase tracking-wider2 opacity-70">
                  {t(c.soonLabel, lang)}
                </span>
                <h3 className="mt-16 font-monster text-[clamp(3rem,6vw,5rem)] uppercase leading-none">
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
