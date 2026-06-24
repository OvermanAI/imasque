"use client";

import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { BalancedText } from "@/components/BalancedText";
import { StarMonsterMark } from "@/components/StarMonsterMark";

const values = [
  ["Comfort", "軟軟的、親膚的、真的能休息。"],
  ["Healing", "像一個戴上去的小暫停。"],
  ["Imagination", "11 歲 CyX 問：眼罩可以不像眼罩嗎？"],
];

export default function AboutPage() {
  const { lang } = useLang();
  const a = dict.about;

  return (
    <>
      <PageIntro index="About / StarMonster" title={t(a.title, lang)} intro={t(a.formula, lang)} />

      <section className="bg-[#F7EFF6] px-6 pb-16 pt-12 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal className="space-y-7">
            <p className="max-w-3xl font-monster text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] text-[#0B0B0C]">
              <BalancedText>Little mask. Big monster energy.</BalancedText>
            </p>
            <p className="max-w-2xl font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/72">
              <BalancedText>{t(a.body1, lang)}</BalancedText>
            </p>
            <p className="max-w-2xl font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/72">
              <BalancedText>{t(a.body2, lang)}</BalancedText>
            </p>
            <p className="inline-block rotate-[-2deg] bg-[#FF2B9A] px-5 py-3 font-couture text-3xl italic text-white shadow-[5px_5px_0_#0B0B0C]">
              {t(a.signature, lang)}
            </p>
          </Reveal>

          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rotate-[-3deg] border-2 border-[#0B0B0C] bg-[#D9FF38]" />
            <div className="relative overflow-hidden border-2 border-[#0B0B0C] bg-white p-10 shadow-[8px_8px_0_#0B0B0C]">
              <StarMonsterMark className="mx-auto h-56 w-56 text-[#D9FF38]" />
              <p className="mt-8 text-center font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
                Cloud Hex Star / X mouth / tiny wings
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-[#0B0B0C] bg-[#0B0B0C]">
        <Reveal stagger className="mx-auto grid max-w-7xl gap-px bg-[#0B0B0C] md:grid-cols-3">
          {values.map(([title, body]) => (
            <article key={title} className="bg-[#F7EFF6] p-7 lg:p-9">
              <h2 className="font-monster text-5xl uppercase leading-none text-[#0B0B0C]">{title}</h2>
              <p className="mt-4 font-sans font-bold leading-relaxed text-[#0B0B0C]/68">{body}</p>
            </article>
          ))}
        </Reveal>
      </section>
    </>
  );
}
