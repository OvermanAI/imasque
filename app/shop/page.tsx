"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { DreamListForm } from "@/components/DreamListForm";
import { BalancedText } from "@/components/BalancedText";
import { StarMonsterMark } from "@/components/StarMonsterMark";

const productImages = {
  set: "/product/去背/imasqueBlack/7.png",
  front: "/product/去背/imasqueBlack/8-front-cropped.png",
};

export default function ShopPage() {
  const { lang } = useLang();
  const s = dict.shop;

  return (
    <>
      <PageIntro index="Shop / Drop 001" title={t(s.title, lang)} intro={t(s.intro, lang)} />

      <section className="bg-[#FFF6F7] px-6 py-12 lg:px-10 lg:py-16">
        <Reveal className="mx-auto grid max-w-7xl border-2 border-[#080808] bg-white shadow-[8px_8px_0_#080808] lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden border-b-2 border-[#080808] bg-[#F8C8C8] p-8 lg:border-b-0 lg:border-r-2">
            <div className="absolute left-6 top-6 bg-[#F6E7D8] px-4 py-2 font-sans text-[0.7rem] font-black uppercase tracking-wider2 text-[#080808] shadow-[4px_4px_0_#080808]">
              {t(s.productTag, lang)}
            </div>
            <StarMonsterMark className="absolute right-6 top-6 h-20 w-20 rotate-[12deg] text-[#F6E7D8] drop-shadow-[4px_4px_0_#080808]" />
            <Image
              src={productImages.front}
              alt="Celluloid Black front"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-10 drop-shadow-[0_18px_0_rgba(11,11,12,0.18)]"
            />
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="inline-flex w-fit items-center gap-2 border-2 border-[#080808] bg-[#F6E7D8] px-4 py-2 font-sans text-[0.7rem] font-black uppercase tracking-wider2 text-[#080808] shadow-[4px_4px_0_#080808]">
              <span className="h-2 w-2 rounded-full bg-[#FF1F0F] animate-pulse" />
              {t(s.status, lang)}
            </span>
            <h2 className="mt-8 font-display text-[clamp(3.4rem,7vw,6rem)] uppercase leading-[0.82] text-[#080808]">
              <BalancedText>{t(s.productName, lang)}</BalancedText>
            </h2>
            <p className="mt-6 max-w-md font-sans text-lg font-bold leading-relaxed text-[#080808]/70">
              <BalancedText>{t(s.productDesc, lang)}</BalancedText>
            </p>

            <div className="mt-9 border-2 border-[#080808] bg-[#FFF6F7] p-5 shadow-[5px_5px_0_#080808]">
              <p className="font-sans text-sm font-bold leading-relaxed text-[#080808]/65">
                <BalancedText>{t(s.soon, lang)}</BalancedText>
              </p>
              <div className="mt-5">
                <DreamListForm compact />
              </div>
            </div>
            <Link href="/product" className="mt-8 inline-flex w-fit border-2 border-[#080808] bg-[#FF1F0F] px-7 py-3.5 font-sans text-sm font-black uppercase tracking-wider2 text-white shadow-[5px_5px_0_#080808] transition hover:-translate-y-1 hover:bg-[#F8C8C8]">
              Read product story →
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#080808] px-6 py-16 lg:px-10">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative aspect-[16/10] border-2 border-white bg-[#FFF6F7] shadow-[8px_8px_0_#F8C8C8]">
            <Image
              src={productImages.set}
              alt="Celluloid Black set"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-contain p-8"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
