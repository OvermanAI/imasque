"use client";

import Image from "next/image";
import { BalancedText } from "@/components/BalancedText";
import { DreamListForm } from "@/components/DreamListForm";
import { useLang } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

const variants = [
  {
    name: "Celluloid Cream",
    src: "/product/celluloid-cream-front-cutout.webp",
    desc: {
      en: "Tortoiseshell frame with a soft beige blackout cushion. Quiet, gentle and closest to a classic sleep ritual.",
      zh: "玳瑁輪廓搭配淺米色親膚遮光面，安靜、柔和、最接近經典睡眠儀式。",
    },
  },
  {
    name: "Celluloid Black",
    src: "/product/celluloid-black-front-cutout.webp",
    desc: {
      en: "Tortoiseshell frame with a deep black blackout surface and adjustable cords. Clean for travel, naps and flights.",
      zh: "玳瑁輪廓搭配黑色遮光面與可調節繩，旅行、午睡、飛機上都更俐落。",
    },
  },
];

const details = [
  {
    title: { en: "Comfort", zh: "舒適" },
    body: {
      en: "What touches your face is not a hard frame, but soft padding and skin-friendly fabric.",
      zh: "接觸臉部的不是硬框，而是柔軟填充與親膚布面。",
    },
  },
  {
    title: { en: "Blackout", zh: "遮光" },
    body: {
      en: "Covers light around the eyes for bedtime, lunch breaks, flights and quick recharges.",
      zh: "覆蓋眼周光線，適合睡前、午休、飛行與短暫 recharge。",
    },
  },
  {
    title: { en: "Adjustable", zh: "可調節" },
    body: {
      en: "An adjustable fit helps reduce pressure behind the head and keeps styling more flexible.",
      zh: "可調式配戴結構，降低後腦壓迫，也讓髮型更自由。",
    },
  },
  {
    title: { en: "Collectible", zh: "可收藏" },
    body: {
      en: "Celluloid colourways, miniature plush versions and add-on accessories make it more than one product.",
      zh: "Celluloid 配色、迷你玩偶尺寸與可組裝小配件，讓它不只是單品。",
    },
  },
];

const useCases = [
  {
    title: { en: "Bedtime ritual", zh: "睡前儀式" },
    body: {
      en: "Putting on imasque before bed is not just getting ready to sleep. It is getting ready to enter your dream.",
      zh: "睡前戴上 imasque，不只是準備睡覺，而是準備進入自己的夢。",
    },
  },
  {
    title: { en: "In-flight rest", zh: "飛行休息" },
    body: {
      en: "Rest on a plane with style, turning an eye mask into part of the full airport outfit.",
      zh: "飛機上也能休息得有型，眼罩成為整體穿搭的一部分。",
    },
  },
  {
    title: { en: "Desk break", zh: "桌前暫停" },
    body: {
      en: "A quick pause between work, study or gaming, so your brain gets a clean pit stop.",
      zh: "工作、讀書、電競之間的短暫暫停，讓大腦進入 pit stop。",
    },
  },
  {
    title: { en: "Photo moment", zh: "拍照時刻" },
    body: {
      en: "It is not a utility to hide away, but an object friends will want to photograph together.",
      zh: "它不是要藏起來的用品，而是會被朋友一起拍下來的物件。",
    },
  },
];

export default function ProductPage() {
  const { lang } = useLang();
  const copy = {
    kicker: { en: "imasque Celluloid", zh: "imasque Celluloid" },
    title: {
      en: "The boutique sleep mask inspired by eyewear.",
      zh: "以精品眼鏡為靈感的睡眠眼罩。",
    },
    intro: {
      en: "Extreme comfort × extreme creativity. A Muji-level comfort experience shaped into a visible sleep accessory through boutique sunglasses design.",
      zh: "極致舒服 × 極致創意。以 Muji 式舒適體驗為底，以精品太陽眼鏡輪廓做出可以被看見的睡眠配件。",
    },
    price: { en: "Target price under $10", zh: "目標定價 10 美金以下" },
    variantsKicker: { en: "Two first variants", zh: "首發兩款" },
    variantsTitle: { en: "Celluloid, softened for rest.", zh: "把 Celluloid 變柔軟，為休息而生。" },
    useKicker: { en: "Why people wear it", zh: "為什麼大家會戴它" },
    useTitle: { en: "Not only bedtime. A beautiful pause, anywhere.", zh: "不只睡前。任何地方，都可以有一個漂亮的暫停。" },
    promiseKicker: { en: "CxY's Promise", zh: "CxY 的承諾" },
    promiseTitle: {
      en: "I do not want to make a mask that only looks cool.",
      zh: "我不想做一個只有看起來很酷的眼罩。",
    },
    promise: {
      en: [
        "I want imasque to feel soft and easy to wear, so bedtime, flights or any rest moment can feel a little happier.",
        "If you buy it for yourself, a friend or your plush toys, I hope opening it feels like tonight could become a very cute dream.",
        "If there is a product problem, we will take care of it properly. This is not just a regular eye mask. It is the first real dream I want to make.",
      ],
      zh: [
        "我希望 imasque 是軟軟的、好戴的，睡覺前、搭飛機、想休息的時候，戴上都會覺得很開心。",
        "如果你是買給自己、朋友，或你的玩偶，我希望你打開它的時候會覺得：今晚好像可以做一個很可愛的夢。",
        "如果產品有問題，我們會好好處理。因為這不是一個普通眼罩，這是我第一個真的想做出來的夢。",
      ],
    },
    formButton: { en: "Join first drop", zh: "加入首發名單" },
    formNote: {
      en: "First-drop notes only. Product progress, launch timing, and preorder details.",
      zh: "只寄首發通知、產品進度、上市時間與預購資訊。",
    },
    formThanks: { en: "You're on the first-drop list. Dream More.", zh: "你已加入首發名單。Dream More." },
  };

  return (
    <>
      <section className="bg-[#080808] text-white">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F8C8C8]">
              {copy.kicker[lang]}
            </p>
            <h1 className="mt-6 font-display text-[clamp(3.6rem,9vw,8.2rem)] font-semibold leading-[0.9]">
              <BalancedText>{copy.title[lang]}</BalancedText>
            </h1>
            <p className="mt-7 max-w-xl font-sans text-lg font-semibold leading-relaxed text-white/68">
              <BalancedText>
                {copy.intro[lang]}
              </BalancedText>
            </p>
            <div className="mt-9 inline-flex bg-[#F8C8C8] px-5 py-3 font-sans text-sm font-black uppercase tracking-wider2 text-[#080808]">
              {copy.price[lang]}
            </div>
          </Reveal>
          <Reveal className="relative min-h-[420px] lg:min-h-[640px]">
            <div className="absolute inset-0 bg-[#F8C8C8]/10" />
            <Image
              src="/product/celluloid-black-hero.webp"
              alt="imasque Celluloid Black"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="object-cover object-center"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#FFF6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.variantsKicker[lang]}
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9]">
              <BalancedText>{copy.variantsTitle[lang]}</BalancedText>
            </h2>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-6 md:grid-cols-2">
            {variants.map((variant) => (
              <article key={variant.name} className="bg-white p-5 shadow-[0_18px_70px_rgba(8,8,8,0.07)]">
                <div className="relative aspect-[4/3] bg-[#F6E7D8]">
                  <Image
                    src={variant.src}
                    alt={`imasque ${variant.name}`}
                    fill
                    sizes="(min-width: 1024px) 42vw, 90vw"
                    className="object-contain p-6"
                  />
                </div>
                <h3 className="mt-6 font-display text-5xl font-semibold leading-none">{variant.name}</h3>
                <p className="mt-4 max-w-xl font-sans text-base font-semibold leading-relaxed text-[#080808]/62">{variant.desc[lang]}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-[#080808] px-6 py-16 lg:grid-cols-4 lg:px-10 lg:py-24">
          {details.map((item) => (
            <Reveal key={item.title.en} className="bg-white p-7 lg:p-8">
              <h2 className="font-display text-4xl font-semibold leading-none">{item.title[lang]}</h2>
              <p className="mt-5 font-sans text-sm font-semibold leading-relaxed text-[#080808]/62">{item.body[lang]}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#F6E7D8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.useKicker[lang]}
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9]">
              <BalancedText>{copy.useTitle[lang]}</BalancedText>
            </h2>
          </Reveal>
          <Reveal stagger className="grid gap-px bg-[#080808]">
            {useCases.map((item) => (
              <article key={item.title.en} className="grid gap-4 bg-[#FFF6F7] p-6 md:grid-cols-[0.35fr_0.65fr] md:items-center">
                <h3 className="font-display text-4xl font-semibold leading-none">{item.title[lang]}</h3>
                <p className="font-sans text-base font-semibold leading-relaxed text-[#080808]/64">{item.body[lang]}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="preorder" className="bg-[#080808] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F8C8C8]">
              {copy.promiseKicker[lang]}
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.9]">
              <BalancedText>{copy.promiseTitle[lang]}</BalancedText>
            </h2>
          </Reveal>
          <Reveal className="space-y-5 font-sans text-lg font-semibold leading-relaxed text-white/72">
            {copy.promise[lang].map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="font-couture text-4xl italic text-[#F8C8C8]">Dream More, CxY</p>
            <div className="bg-white p-6 text-[#080808]">
              <DreamListForm
                buttonLabel={copy.formButton[lang]}
                note={copy.formNote[lang]}
                thanks={copy.formThanks[lang]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
