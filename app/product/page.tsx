"use client";

import Image from "next/image";
import Link from "next/link";
import { BalancedText } from "@/components/BalancedText";
import { DreamListForm } from "@/components/DreamListForm";
import { Reveal } from "@/components/Reveal";
import { StarMonsterMark } from "@/components/StarMonsterMark";

const images = {
  hero: "/product/去背/imasqueBlack/8-front-cropped.png",
  set: "/product/去背/imasqueBlack/7.png",
  angle: "/product/去背/imasqueBlack/9.png",
  cxy: "/CxY/CxY-peace-grid-poster.png",
};

const productNotes = [
  ["Cloud Hex Star", "軟綿綿、六角、像小朋友畫出來的夢境生物。"],
  ["Little Angel", "對善良的人很溫柔，戴上眼罩像被偷偷守護。"],
  ["Little Trouble", "兩個紅角、X 嘴，保留一點淘氣，睡覺也不要太乖。"],
];

const specs = [
  ["Full blackout", "深色遮光面料，適合睡前、午休、旅行與通勤。"],
  ["Soft touch", "Tencel 親膚觸感，柔軟、透氣，不讓眼周有負擔。"],
  ["No head pressure", "雙側耳掛可調繩，不壓後腦，髮型也比較自由。"],
  ["Gift ready", "同色系收納袋，放進包包或送禮都完整。"],
];

export default function ProductPage() {
  return (
    <>
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden bg-[#F7EFF6] text-[#0B0B0C]">
        <div className="absolute inset-x-0 top-16 z-10 border-y-2 border-[#0B0B0C] bg-[#FF2B9A] py-2 font-sans text-[0.68rem] font-black uppercase tracking-widest2 text-white">
          <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-8 whitespace-nowrap px-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>✦ NEW DROP FRIDAY 6PM ✦ FREE STICKER PACK W/ ORDER ✦ SLEEP BUT FERAL</span>
            ))}
          </div>
        </div>

        <div className="absolute left-5 top-28 hidden rotate-[-8deg] rounded-full border-2 border-[#0B0B0C] bg-[#D9FF38] px-5 py-3 font-sans text-xs font-black uppercase tracking-wider2 shadow-[5px_5px_0_#0B0B0C] md:block">
          New drop
        </div>
        <div className="absolute right-6 top-32 hidden rotate-[9deg] bg-[#FF2B9A] px-4 py-2 font-sans text-xs font-black uppercase tracking-wider2 text-white shadow-[5px_5px_0_#0B0B0C] lg:block">
          11yo built
        </div>

        <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-6 pb-16 pt-36 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <Reveal className="relative z-10">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              imasque product / starmonster mode
            </p>
            <h1 className="mt-5 font-sans text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-normal text-[#0B0B0C] [font-family:var(--font-anton)]">
              <span className="block">Sleep</span>
              <span className="block text-[#FF2B9A] [-webkit-text-stroke:2px_#0B0B0C]">but</span>
              <span className="block">feral.</span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-[clamp(1.5rem,3vw,2.7rem)] font-light leading-tight text-[#0B0B0C]">
              <BalancedText>一副由 11 歲 CyX 想出來的太陽眼鏡眼罩，被 Star Monster 重新接管。</BalancedText>
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#preorder"
                className="inline-flex min-h-14 items-center justify-center border-2 border-[#0B0B0C] bg-[#E01414] px-8 font-sans text-sm font-black uppercase tracking-wider2 text-white shadow-[6px_6px_0_#0B0B0C] transition hover:-translate-y-1 hover:bg-[#FF2B9A]"
              >
                Join the drop →
              </a>
              <p className="font-sans text-sm font-bold leading-relaxed text-[#0B0B0C]/68">
                <span className="block text-3xl font-black text-[#0B0B0C]">NT$299</span>
                First round preorder / Sticker energy included
              </p>
            </div>
          </Reveal>

          <Reveal className="relative z-10 min-h-[420px] lg:min-h-[620px]">
            <div className="absolute inset-x-6 top-3 h-[72%] rotate-[-2deg] border-2 border-[#0B0B0C] bg-[#D9FF38]" />
            <div className="absolute inset-x-0 top-8 h-[74%] rotate-[2deg] border-2 border-[#0B0B0C] bg-[#FF2B9A]" />
            <div className="absolute inset-x-8 top-16 h-[70%] border-2 border-[#0B0B0C] bg-[#F7EFF6] shadow-[10px_10px_0_#0B0B0C]" />
            <Image
              src={images.hero}
              alt="imasque Celluloid Black product front"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-contain px-4 pb-8 pt-14 drop-shadow-[0_26px_0_rgba(11,11,12,0.16)]"
            />
            <StarMonsterMark className="absolute bottom-8 left-5 h-24 w-24 rotate-[-12deg] text-[#D9FF38] drop-shadow-[4px_4px_0_#0B0B0C]" />
            <div className="absolute bottom-8 right-2 border-2 border-[#0B0B0C] bg-white px-4 py-3 font-sans text-xs font-black uppercase tracking-wider2 shadow-[5px_5px_0_#0B0B0C]">
              Celluloid Black
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-[#0B0B0C] bg-[#0B0B0C] text-white">
        <Reveal stagger className="mx-auto grid max-w-7xl gap-px bg-[#0B0B0C] px-0 font-sans text-sm md:grid-cols-3">
          {productNotes.map(([title, body]) => (
            <div key={title} className="bg-[#F7EFF6] p-6 text-[#0B0B0C] lg:p-8">
              <p className="font-sans text-2xl font-black uppercase tracking-normal [font-family:var(--font-anton)]">{title}</p>
              <p className="mt-3 max-w-sm leading-relaxed text-[#0B0B0C]/70">{body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <SalesSection className="bg-[#F7EFF6] pt-20 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-4 -top-4 h-full w-full rotate-[-3deg] border-2 border-[#0B0B0C] bg-[#D9FF38]" />
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-[#0B0B0C] bg-[#D41425] shadow-[8px_8px_0_#0B0B0C]">
              <Image
                src={images.cxy}
                alt="CyX StarMonster style poster"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain"
              />
            </div>
          </Reveal>
          <Reveal>
            <Kicker>Why it exists</Kicker>
            <h2 className="mt-5 font-sans text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal text-[#0B0B0C] [font-family:var(--font-anton)]">
              <BalancedText>不是乖乖睡覺，是把夢戴上。</BalancedText>
            </h2>
            <p className="mt-7 max-w-xl font-sans text-lg font-semibold leading-relaxed text-[#0B0B0C]/72">
              <BalancedText>
                大人常常先問市場、成本、規格。CyX 先問的是：「如果睡覺也可以有造型呢？」所以 imasque 的第一版，不只是眼罩，是一個有紅角、有翅膀、有一點壞壞保護力的小宇宙。
              </BalancedText>
            </p>
            <p className="mt-6 inline-block rotate-[-2deg] bg-[#FF2B9A] px-5 py-3 font-serif text-2xl italic text-white shadow-[5px_5px_0_#0B0B0C] [font-family:var(--font-bodoni)]">
              Little angel to good hearts.
            </p>
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection className="bg-[#0B0B0C] text-white">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal>
            <Kicker className="text-[#D9FF38]">The first piece</Kicker>
            <h2 className="mt-5 font-sans text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal text-white [font-family:var(--font-anton)]">
              <BalancedText>Soft mask. Loud shape.</BalancedText>
            </h2>
            <p className="mt-7 max-w-lg font-sans text-lg font-semibold leading-relaxed text-white/70">
              <BalancedText>
                玳瑁框只是輪廓語言；真正碰到臉的是柔軟布料、輕量填充與可調耳掛。外型像墨鏡，戴上去像按下暫停鍵。
              </BalancedText>
            </p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2">
            <ProductImage src={images.hero} alt="Celluloid Black front view" label="Front" />
            <ProductImage src={images.angle} alt="Celluloid Black angle view" label="Angle" />
            <ProductImage src={images.set} alt="Celluloid Black product set" label="Set" wide />
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection className="bg-[#F7EFF6]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="relative">
            <div className="relative aspect-[16/10] overflow-hidden border-2 border-[#0B0B0C] bg-white shadow-[8px_8px_0_#0B0B0C]">
              <Image
                src={images.set}
                alt="Celluloid Black full set"
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
            <Kicker>What you get</Kicker>
            <h2 className="mt-5 font-sans text-[clamp(2.8rem,5.8vw,5.6rem)] font-black uppercase leading-[0.86] tracking-normal text-[#0B0B0C] [font-family:var(--font-anton)]">
              <BalancedText>Everything for the tiny sleep ritual.</BalancedText>
            </h2>
            <ul className="mt-8 space-y-3 font-sans text-base font-semibold leading-relaxed text-[#0B0B0C]/72">
              {specs.map(([title, body]) => (
                <li key={title} className="border-2 border-[#0B0B0C] bg-white p-4 shadow-[4px_4px_0_#0B0B0C]">
                  <span className="block font-black uppercase text-[#E01414]">{title}</span>
                  {body}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection id="preorder" className="bg-[#FF2B9A] pb-24 text-[#0B0B0C] lg:pb-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <StarMonsterMark className="mx-auto h-24 w-24 text-[#D9FF38] drop-shadow-[4px_4px_0_#0B0B0C]" />
          <Kicker className="mt-8 text-white">First drop</Kicker>
          <h2 className="mt-5 font-sans text-[clamp(3.4rem,9vw,8rem)] font-black uppercase leading-[0.82] tracking-normal text-white [-webkit-text-stroke:2px_#0B0B0C] [font-family:var(--font-anton)]">
            <BalancedText>Join the monsters.</BalancedText>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg font-bold leading-relaxed text-white">
            <BalancedText>
              第一輪早鳥預購測試價 NT$299。留下 email，打樣進度、預購開放與出貨時程會優先通知你。
            </BalancedText>
          </p>
          <div className="mx-auto mt-10 max-w-xl border-2 border-[#0B0B0C] bg-[#F7EFF6] p-5 shadow-[8px_8px_0_#0B0B0C]">
            <DreamListForm
              buttonLabel="加入預購名單"
              note="目前為意向登記。第一輪開放時，你會優先收到通知。"
              thanks="收到你的支持了。CyX 的第一個產品夢，又更近一點。"
            />
          </div>
          <div className="mt-8">
            <Link href="/journal" className="font-sans text-sm font-black uppercase tracking-wider2 text-white underline decoration-[#0B0B0C] decoration-2 underline-offset-4 transition hover:text-[#D9FF38]">
              看打造紀錄 →
            </Link>
          </div>
        </Reveal>
      </SalesSection>
    </>
  );
}

function ProductImage({
  src,
  alt,
  label,
  wide = false,
}: {
  src: string;
  alt: string;
  label: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`group relative aspect-[4/3] overflow-hidden border-2 border-white bg-[#F7EFF6] ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
      />
      <span className="absolute left-3 top-3 bg-[#E01414] px-3 py-1 font-sans text-[0.65rem] font-black uppercase tracking-wider2 text-white">
        {label}
      </span>
    </div>
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

function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414] ${className}`}>
      {children}
    </p>
  );
}
