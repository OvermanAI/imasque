"use client";

import Image from "next/image";
import { BalancedText } from "@/components/BalancedText";
import { DreamListForm } from "@/components/DreamListForm";
import { Reveal } from "@/components/Reveal";

const variants = [
  {
    name: "Celluloid Cream",
    src: "/product/celluloid-cream-front-cutout.webp",
    desc: "玳瑁輪廓搭配淺米色親膚遮光面，安靜、柔和、最接近經典睡眠儀式。",
  },
  {
    name: "Celluloid Black",
    src: "/product/celluloid-black-front-cutout.webp",
    desc: "玳瑁輪廓搭配黑色遮光面與可調節繩，旅行、午睡、飛機上都更俐落。",
  },
];

const details = [
  ["Comfort", "接觸臉部的不是硬框，而是柔軟填充與親膚布面。"],
  ["Blackout", "覆蓋眼周光線，適合睡前、午休、飛行與短暫 recharge。"],
  ["Adjustable", "可調式配戴結構，降低後腦壓迫，也讓髮型更自由。"],
  ["Collectible", "Celluloid 配色、迷你玩偶尺寸與可組裝小配件，讓它不只是單品。"],
];

const useCases = [
  ["Bedtime ritual", "睡前戴上 imasque，不只是準備睡覺，而是準備進入自己的夢。"],
  ["In-flight rest", "飛機上也能休息得有型，眼罩成為整體穿搭的一部分。"],
  ["Desk break", "工作、讀書、電競之間的短暫暫停，讓大腦進入 pit stop。"],
  ["Photo moment", "它不是要藏起來的用品，而是會被朋友一起拍下來的物件。"],
];

export default function ProductPage() {
  return (
    <>
      <section className="bg-[#080808] text-white">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F8C8C8]">
              imasque Celluloid
            </p>
            <h1 className="mt-6 font-display text-[clamp(3.6rem,9vw,8.2rem)] font-semibold leading-[0.9]">
              <BalancedText>The boutique sleep mask inspired by eyewear.</BalancedText>
            </h1>
            <p className="mt-7 max-w-xl font-sans text-lg font-semibold leading-relaxed text-white/68">
              <BalancedText>
                極致舒服 × 極致創意。以 Muji 式舒適體驗為底，以精品太陽眼鏡輪廓做出可以被看見的睡眠配件。
              </BalancedText>
            </p>
            <div className="mt-9 inline-flex bg-[#F8C8C8] px-5 py-3 font-sans text-sm font-black uppercase tracking-wider2 text-[#080808]">
              Target price under $10
            </div>
          </Reveal>
          <Reveal className="relative min-h-[420px] lg:min-h-[640px]">
            <div className="absolute inset-0 bg-[#F8C8C8]/10" />
            <Image
              src="/product/celluloid-cream-front-cutout.webp"
              alt="imasque Celluloid Cream"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="object-contain object-[center_38%] px-3 pb-36 pt-10 drop-shadow-[0_30px_45px_rgba(0,0,0,0.52)]"
            />
            <Image
              src="/product/celluloid-black-front-cutout.webp"
              alt="imasque Celluloid Black"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="object-contain object-[center_72%] px-3 pb-10 pt-48 drop-shadow-[0_30px_45px_rgba(0,0,0,0.58)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#FFF6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              Two first variants
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9]">
              <BalancedText>Celluloid, softened for rest.</BalancedText>
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
                <p className="mt-4 max-w-xl font-sans text-base font-semibold leading-relaxed text-[#080808]/62">{variant.desc}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-[#080808] px-6 py-16 lg:grid-cols-4 lg:px-10 lg:py-24">
          {details.map(([title, body]) => (
            <Reveal key={title} className="bg-white p-7 lg:p-8">
              <h2 className="font-display text-4xl font-semibold leading-none">{title}</h2>
              <p className="mt-5 font-sans text-sm font-semibold leading-relaxed text-[#080808]/62">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#F6E7D8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              Why people wear it
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9]">
              <BalancedText>Not only bedtime. A beautiful pause, anywhere.</BalancedText>
            </h2>
          </Reveal>
          <Reveal stagger className="grid gap-px bg-[#080808]">
            {useCases.map(([title, body]) => (
              <article key={title} className="grid gap-4 bg-[#FFF6F7] p-6 md:grid-cols-[0.35fr_0.65fr] md:items-center">
                <h3 className="font-display text-4xl font-semibold leading-none">{title}</h3>
                <p className="font-sans text-base font-semibold leading-relaxed text-[#080808]/64">{body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="preorder" className="bg-[#080808] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F8C8C8]">
              CxY's Promise
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.9]">
              <BalancedText>I do not want to make a mask that only looks cool.</BalancedText>
            </h2>
          </Reveal>
          <Reveal className="space-y-5 font-sans text-lg font-semibold leading-relaxed text-white/72">
            <p>我希望 imasque 是軟軟的、好戴的，睡覺前、搭飛機、想休息的時候，戴上都會覺得很開心。</p>
            <p>如果你是買給自己、朋友，或你的玩偶，我希望你打開它的時候會覺得：今晚好像可以做一個很可愛的夢。</p>
            <p>如果產品有問題，我們會好好處理。因為這不是一個普通眼罩，這是我第一個真的想做出來的夢。</p>
            <p className="font-couture text-4xl italic text-[#F8C8C8]">Dream More, CxY</p>
            <div className="bg-white p-6 text-[#080808]">
              <DreamListForm
                buttonLabel="Join first drop"
                note="First-drop notes only. Product progress, launch timing, and preorder details."
                thanks="You're on the first-drop list. Dream More."
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
