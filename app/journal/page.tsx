"use client";

import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";

const categories = [
  { key: "building" as const, descKey: "buildingDesc" as const, num: "01", c: "from-dusk/25 to-haze/20" },
  { key: "behind" as const, descKey: "behindDesc" as const, num: "02", c: "from-haze/25 to-apricot/20" },
  { key: "color" as const, descKey: "colorDesc" as const, num: "03", c: "from-apricot/30 to-cream" },
  { key: "notes" as const, descKey: "notesDesc" as const, num: "04", c: "from-moss/25 to-dusk/20" },
];

export default function JournalPage() {
  const { lang } = useLang();
  const j = dict.journal;

  return (
    <>
      <PageIntro index="Journal" title={t(j.title, lang)} intro={t(j.intro, lang)} />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-8">
        <Reveal stagger className="grid md:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <article
              key={cat.key}
              className={`group relative rounded-[2rem] border border-ink/5 bg-gradient-to-br ${cat.c} p-9 lg:p-11 min-h-[15rem] flex flex-col justify-between overflow-hidden`}
            >
              <span className="font-display text-5xl text-ink/15">{cat.num}</span>
              <div>
                <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-brand text-ink">
                  {t(j[cat.key], lang)}
                </h2>
                <p className="mt-3 max-w-sm font-sans text-[0.95rem] leading-relaxed text-ink/60">
                  {t(j[cat.descKey], lang)}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-10">
        <Reveal className="rounded-[2rem] border border-dashed border-ink/15 bg-cream/40 px-8 py-14 text-center">
          <p className="font-display italic text-2xl lg:text-3xl text-ink/50 text-balance">
            {t(dict.journal.empty, lang)}
          </p>
        </Reveal>
      </section>
    </>
  );
}
