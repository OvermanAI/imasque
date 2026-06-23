"use client";

import Image from "next/image";
import Link from "next/link";
import { BalancedText } from "@/components/BalancedText";
import { DreamListForm } from "@/components/DreamListForm";
import { Reveal } from "@/components/Reveal";

const images = {
  hero: "/product/去背/imasqueBlack/8-front-cropped.png",
  set: "/product/去背/imasqueBlack/7.png",
  angle: "/product/去背/imasqueBlack/9.png",
  cxy: "/CxY/CxY-peace-grid-poster.png",
};

const proofPoints = [
  ["長得像太陽眼鏡", "不是普通眼罩的樣子。閉上眼，也有自己的造型。"],
  ["戴起來要真的舒服", "柔軟布面、全遮光、雙側可調耳掛，休息時不壓迫。"],
  ["由 11 歲 CyX 發想", "一個孩子把日常小物重新想像，第一件作品就是 imasque。"],
];

const specs = [
  "深色遮光面料，適合睡前、午休、旅行與通勤休息",
  "Tencel 親膚觸感，柔軟、透氣，不讓眼周有負擔",
  "雙側耳掛可調繩，不壓後腦，髮型也比較自由",
  "同色系收納袋，放進包包或送禮都完整",
];

export default function ProductPage() {
  return (
    <>
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden bg-[#0A0908] text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_44%,rgba(245,215,170,0.22),transparent_30%),linear-gradient(100deg,#0A0908_0%,#0A0908_48%,rgba(10,9,8,0.58)_100%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <div className="relative h-full w-full">
            <Image
              src={images.hero}
              alt="imasque Celluloid Black product front"
              fill
              priority
              sizes="68vw"
              className="object-contain object-center drop-shadow-[0_46px_72px_rgba(0,0,0,0.52)]"
            />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-16 pt-28 lg:px-10 lg:pt-24">
          <div className="max-w-[42rem]">
            <p className="reveal in font-sans text-[0.72rem] uppercase tracking-widest2 text-[#F5D7AA]">
              11yo CyX's first product
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.8rem,8.8vw,8.4rem)] font-light leading-[0.86] tracking-brand text-white">
              <span className="block animate-blurin">把眼罩</span>
              <span className="block italic text-[#F5D7AA] animate-blurin [animation-delay:0.12s]">
                變成作品。
              </span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-[clamp(1.7rem,3vw,2.8rem)] font-light leading-tight text-[#F5D7AA] animate-rise [animation-delay:0.2s]">
              <BalancedText>這是一副長得像太陽眼鏡的睡眠眼罩，來自 11 歲 CyX 的第一個產品想像。</BalancedText>
            </p>
            <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-white/72 animate-rise [animation-delay:0.3s]">
              <BalancedText>
                不只是遮光。它想讓休息這件事，變得有造型、有療癒感，也有一點點像收藏品。
              </BalancedText>
            </p>
            <div className="relative mt-6 h-32 sm:h-40 lg:hidden animate-rise [animation-delay:0.34s]">
              <Image
                src={images.hero}
                alt="imasque Celluloid Black product front"
                fill
                priority
                sizes="100vw"
                className="object-contain drop-shadow-[0_26px_42px_rgba(0,0,0,0.42)]"
              />
            </div>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center animate-rise [animation-delay:0.4s]">
              <a
                href="#preorder"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#F5D7AA] px-9 font-sans text-sm font-semibold uppercase tracking-wider2 text-[#130D09] shadow-[0_18px_42px_rgba(245,215,170,0.18)] transition hover:bg-white"
              >
                我要支持第一版
              </a>
              <p className="font-sans text-sm leading-relaxed text-white/68">
                <span className="block text-3xl font-semibold text-white">早鳥 NT$299</span>
                Celluloid Black 第一輪預購測試價
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-[#FBF7EF]">
        <Reveal stagger className="mx-auto grid max-w-7xl gap-6 px-6 py-8 font-sans text-sm text-ink/60 md:grid-cols-3 lg:px-10">
          {proofPoints.map(([title, body]) => (
            <p key={title}>
              <span className="block font-semibold text-ink">{title}</span>
              {body}
            </p>
          ))}
        </Reveal>
      </section>

      <SalesSection className="bg-[#FBF7EF] pt-20 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-[#D41425] shadow-[0_24px_80px_rgba(77,42,24,0.08)]">
            <Image
              src={images.cxy}
              alt="CyX building imasque"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-contain"
            />
          </Reveal>
          <Reveal>
            <Kicker>Why it exists</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.7rem,5.6vw,5.6rem)] font-light leading-[0.9] tracking-brand text-ink">
              <BalancedText>因為 CyX 覺得，眼罩不一定只能長得像眼罩。</BalancedText>
            </h2>
            <p className="mt-7 max-w-xl font-sans text-lg leading-relaxed text-ink/62">
              <BalancedText>
                大人常常先問市場、成本、規格。CyX 先問的是：「如果睡覺也可以有造型呢？」imasque 的第一版，就是從這個問題開始。
              </BalancedText>
            </p>
            <p className="mt-7 max-w-xl font-sans text-lg leading-relaxed text-ink/62">
              <BalancedText>
                所以它不是把普通眼罩換個顏色，而是把太陽眼鏡的輪廓變柔軟，讓休息像一個可以戴上的小儀式。
              </BalancedText>
            </p>
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection className="bg-[#120C08] text-cream">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <Kicker className="text-[#F5D7AA]">The first piece</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] font-light leading-[0.9] tracking-brand text-white">
              <BalancedText>外型很有個性，貼到臉上要很溫柔。</BalancedText>
            </h2>
            <p className="mt-7 max-w-lg font-sans text-lg leading-relaxed text-white/66">
              <BalancedText>
                Celluloid Black 用深色遮光布面和玳瑁框視覺，做出像墨鏡一樣的輪廓；真正接觸皮膚的，是柔軟布料與輕量填充。
              </BalancedText>
            </p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2">
            <ProductImage src={images.hero} alt="Celluloid Black front view" />
            <ProductImage src={images.angle} alt="Celluloid Black angle view" />
            <ProductImage src={images.set} alt="Celluloid Black product set" wide />
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_42%,#FFF8EC_0%,#EEDBC1_100%)]">
            <Image
              src={images.set}
              alt="Celluloid Black full set"
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-contain p-8 drop-shadow-[0_28px_38px_rgba(77,42,24,0.22)]"
            />
          </Reveal>
          <Reveal>
            <Kicker>What you get</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,4.8vw,4.8rem)] font-light leading-[0.92] tracking-brand text-ink">
              <BalancedText>一個可以放進日常，也可以拿來送人的休息小物。</BalancedText>
            </h2>
            <ul className="mt-8 space-y-4 font-sans text-base leading-relaxed text-ink/62">
              {specs.map((item) => (
                <li key={item} className="border-t border-ink/10 pt-4">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection id="preorder" className="bg-[#FBF7EF] pb-24 lg:pb-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Kicker>First drop</Kicker>
          <h2 className="mt-5 font-display text-[clamp(3.2rem,8vw,7.2rem)] font-light leading-[0.95] tracking-brand text-ink">
            <BalancedText>支持 CyX 的第一個產品夢。</BalancedText>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink/62">
            <BalancedText>
              第一輪早鳥預購測試價 NT$299。留下 email，打樣進度、預購開放與出貨時程會優先通知你。
            </BalancedText>
          </p>
          <div className="mx-auto mt-10 max-w-xl">
            <DreamListForm
              buttonLabel="加入預購名單"
              note="目前為意向登記。第一輪開放時，你會優先收到通知。"
              thanks="收到你的支持了。CyX 的第一個產品夢，又更近一點。"
            />
          </div>
          <div className="mt-8">
            <Link href="/journal" className="font-sans text-sm uppercase tracking-wider2 text-ink/45 transition hover:text-ink">
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
  wide = false,
}: {
  src: string;
  alt: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_50%_42%,#FFF8EC_0%,#EEDBC1_100%)] ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-contain p-6 drop-shadow-[0_22px_28px_rgba(0,0,0,0.28)] transition duration-700 hover:scale-[1.02]"
      />
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
    <p className={`font-sans text-[0.72rem] uppercase tracking-widest2 text-[#9A5B2C] ${className}`}>
      {children}
    </p>
  );
}
