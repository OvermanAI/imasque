"use client";

import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { BalancedText } from "@/components/BalancedText";

const categories = [
  { key: "building" as const, descKey: "buildingDesc" as const, num: "01", color: "bg-[#F6E7D8] text-[#080808]" },
  { key: "behind" as const, descKey: "behindDesc" as const, num: "02", color: "bg-[#F8C8C8] text-[#080808]" },
  { key: "color" as const, descKey: "colorDesc" as const, num: "03", color: "bg-white text-[#080808]" },
  { key: "notes" as const, descKey: "notesDesc" as const, num: "04", color: "bg-[#FF1F0F] text-white" },
];

export default function JournalPage() {
  const { lang } = useLang();
  const j = dict.journal;

  return (
    <>
      <PageIntro index="Journal / Build in public" title={t(j.title, lang)} intro={t(j.intro, lang)} />

      <section className="bg-[#FFF6F7] px-6 py-12 lg:px-10 lg:py-16">
        <Reveal stagger className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {categories.map((cat) => (
            <article
              key={cat.key}
              className={`${cat.color} min-h-[18rem] border-2 border-[#080808] p-8 shadow-[6px_6px_0_#080808] lg:p-10`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-display text-7xl leading-none opacity-30">{cat.num}</span>
                <span className="border-2 border-current px-3 py-1 font-sans text-[0.65rem] font-black uppercase tracking-wider2">
                  Archive
                </span>
              </div>
              <div className="mt-12">
                <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] uppercase leading-none">
                  {t(j[cat.key], lang)}
                </h2>
                <p className="mt-4 max-w-md font-sans font-bold leading-relaxed opacity-70">
                  <BalancedText>{t(j[cat.descKey], lang)}</BalancedText>
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="bg-[#080808] px-6 py-16 text-center lg:px-10">
        <Reveal className="mx-auto max-w-4xl border-2 border-white bg-[#FFF6F7] px-8 py-14 shadow-[8px_8px_0_#F8C8C8]">
          <p className="font-couture text-3xl italic text-[#FF1F0F] lg:text-5xl">
            <BalancedText>{t(dict.journal.empty, lang)}</BalancedText>
          </p>
        </Reveal>
      </section>
    </>
  );
}
