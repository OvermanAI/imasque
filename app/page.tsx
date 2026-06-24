"use client";

import Image from "next/image";
import Link from "next/link";
import { BalancedText } from "@/components/BalancedText";
import { DreamListForm } from "@/components/DreamListForm";
import { Reveal } from "@/components/Reveal";
import { StarMonsterMark } from "@/components/StarMonsterMark";

const images = {
  product: "/product/去背/imasqueBlack/8-front-cropped.png",
  set: "/product/去背/imasqueBlack/7.png",
  poster: "/CxY/CxY-peace-grid-poster.png",
};

const notes = [
  ["Soft", "眼罩要舒服，像小雲一樣貼在臉上。"],
  ["Feral", "外型要有角色感，不要只是安靜的日用品。"],
  ["Made in public", "CyX 的每一步想像，都可以被看見。"],
];

export default function Home() {
  return (
    <>
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden bg-[#F7EFF6] text-[#0B0B0C]">
        <div className="absolute inset-x-0 top-16 z-10 border-y-2 border-[#0B0B0C] bg-[#FF2B9A] py-2 font-sans text-[0.68rem] font-black uppercase tracking-widest2 text-white">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap px-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>✦ DREAM MORE ✦ SLEEP BUT FERAL ✦ LITTLE ANGEL TO GOOD HEARTS</span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-6 pb-16 pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal className="relative z-10">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              StarMonster powered sleep object
            </p>
            <h1 className="mt-5 font-monster text-[clamp(4.6rem,13vw,12rem)] uppercase leading-[0.78] tracking-normal">
              Dream
              <span className="block text-[#FF2B9A] [-webkit-text-stroke:2px_#0B0B0C]">more.</span>
            </h1>
            <p className="mt-7 max-w-xl font-sans text-xl font-bold leading-relaxed text-[#0B0B0C]/72">
              <BalancedText>
                imasque 是 11 歲 CyX 的創意眼罩品牌：舒適、療癒，但帶一點淘氣的 StarMonster 能量。
              </BalancedText>
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/product"
                className="inline-flex min-h-14 items-center justify-center border-2 border-[#0B0B0C] bg-[#E01414] px-8 font-sans text-sm font-black uppercase tracking-wider2 text-white shadow-[6px_6px_0_#0B0B0C] transition hover:-translate-y-1 hover:bg-[#FF2B9A]"
              >
                See the drop →
              </Link>
              <a
                href="#dream-list"
                className="inline-flex min-h-14 items-center justify-center border-2 border-[#0B0B0C] bg-[#D9FF38] px-8 font-sans text-sm font-black uppercase tracking-wider2 text-[#0B0B0C] shadow-[6px_6px_0_#0B0B0C] transition hover:-translate-y-1"
              >
                Join the club
              </a>
            </div>
          </Reveal>

          <Reveal className="relative z-10 min-h-[460px] lg:min-h-[650px]">
            <div className="absolute inset-x-5 top-10 h-[72%] rotate-[-3deg] border-2 border-[#0B0B0C] bg-[#D9FF38]" />
            <div className="absolute inset-x-0 top-16 h-[72%] rotate-[3deg] border-2 border-[#0B0B0C] bg-[#FF2B9A]" />
            <div className="absolute left-[14%] right-[16%] top-4 aspect-[3/4] border-2 border-[#0B0B0C] bg-[#D41425] shadow-[8px_8px_0_#0B0B0C]">
              <Image
                src={images.poster}
                alt="CxY StarMonster poster"
                fill
                priority
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-8 left-0 right-0 mx-auto h-44 max-w-[92%]">
              <Image
                src={images.product}
                alt="imasque Celluloid Black"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-contain drop-shadow-[0_18px_0_rgba(11,11,12,0.18)]"
              />
            </div>
            <StarMonsterMark className="absolute right-0 top-6 h-24 w-24 rotate-[12deg] text-[#D9FF38] drop-shadow-[4px_4px_0_#0B0B0C]" />
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-[#0B0B0C] bg-[#0B0B0C]">
        <Reveal stagger className="mx-auto grid max-w-7xl gap-px bg-[#0B0B0C] font-sans md:grid-cols-3">
          {notes.map(([title, body]) => (
            <div key={title} className="bg-[#F7EFF6] p-7 text-[#0B0B0C] lg:p-9">
              <h2 className="font-monster text-5xl uppercase leading-none">{title}</h2>
              <p className="mt-4 font-bold leading-relaxed text-[#0B0B0C]/68">{body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <SalesSection className="bg-[#F7EFF6]">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="relative">
            <div className="relative aspect-[16/10] overflow-hidden border-2 border-[#0B0B0C] bg-white shadow-[8px_8px_0_#0B0B0C]">
              <Image
                src={images.set}
                alt="Celluloid Black set"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-contain p-8"
              />
              <div className="absolute left-0 top-0 bg-[#E01414] px-4 py-2 font-sans text-xs font-black uppercase tracking-wider2 text-white">
                Drop 001
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              First product
            </p>
            <h2 className="mt-5 font-monster text-[clamp(3.2rem,7vw,7rem)] uppercase leading-[0.82]">
              Sunglasses mask.
            </h2>
            <p className="mt-7 max-w-xl font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/70">
              <BalancedText>
                玳瑁框視覺、全遮光、Tencel 親膚布面、雙側可調耳掛。它不是普通眼罩換個顏色，而是把休息變成可以戴上的小儀式。
              </BalancedText>
            </p>
            <Link href="/product" className="mt-8 inline-flex border-2 border-[#0B0B0C] bg-[#FF2B9A] px-7 py-3.5 font-sans text-sm font-black uppercase tracking-wider2 text-white shadow-[5px_5px_0_#0B0B0C] transition hover:-translate-y-1">
              Product page →
            </Link>
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection id="dream-list" className="bg-[#FF2B9A] pb-24 lg:pb-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <StarMonsterMark className="mx-auto h-24 w-24 text-[#D9FF38] drop-shadow-[4px_4px_0_#0B0B0C]" />
          <h2 className="mt-6 font-monster text-[clamp(3.4rem,9vw,8rem)] uppercase leading-[0.82] text-white [-webkit-text-stroke:2px_#0B0B0C]">
            Join the monsters.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg font-bold leading-relaxed text-white">
            <BalancedText>第一只眼罩成真時，你會最先知道，也會一起看見 CyX 的下一個夢。</BalancedText>
          </p>
          <div className="mx-auto mt-10 max-w-xl border-2 border-[#0B0B0C] bg-[#F7EFF6] p-5 shadow-[8px_8px_0_#0B0B0C]">
            <DreamListForm />
          </div>
        </Reveal>
      </SalesSection>
    </>
  );
}

function SalesSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 overflow-hidden ${className}`}>
      <div className="mx-auto min-w-0 max-w-7xl px-6 py-16 lg:px-10 lg:py-24">{children}</div>
    </section>
  );
}
