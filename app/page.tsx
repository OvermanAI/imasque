"use client";

import Image from "next/image";
import Link from "next/link";
import { BalancedText } from "@/components/BalancedText";
import { DreamListForm } from "@/components/DreamListForm";
import { Reveal } from "@/components/Reveal";

const products = [
  {
    name: "Celluloid Black",
    label: "Deep sleep black",
    image: "/product/celluloid-black-set.webp",
    front: "/product/celluloid-black-front.webp",
    detail: "/product/celluloid-black-angle.webp",
    pouch: "/product/celluloid-black-pouch.webp",
    description: "深色遮光面料搭配玳瑁框視覺，像太陽眼鏡一樣俐落，閉眼後更安靜。",
  },
  {
    name: "Celluloid Cream",
    label: "Warm cream comfort",
    image: "/product/celluloid-cream-set.webp",
    front: "/product/celluloid-cream-front.webp",
    detail: "/product/celluloid-cream-angle.webp",
    pouch: "/product/celluloid-cream-pouch.webp",
    description: "暖奶油眼罩面保留 Tencel 的柔軟感，玳瑁框讓睡眠小物也有造型。",
  },
];

const features = [
  ["全遮光", "降低光線干擾，適合睡前、午休、旅行與通勤休息。"],
  ["Tencel 親膚", "柔軟滑順、透氣不悶，讓眼周保持舒服。"],
  ["雙側耳掛", "可調繩設計，不壓後腦，長時間配戴更輕鬆。"],
  ["收納袋套組", "同色系束口袋，讓眼罩成為可以送禮的完整小物。"],
];

export default function Home() {
  return (
    <>
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden bg-[#0E0906] text-cream">
        <Image
          src="/product/celluloid-cream-hero.webp"
          alt="imasque Celluloid Cream product set"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-72"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,9,6,0.94)_0%,rgba(14,9,6,0.78)_34%,rgba(14,9,6,0.18)_72%,rgba(14,9,6,0.06)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FBF7EF] to-transparent" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-14 pt-28 lg:px-10 lg:pt-24">
          <div className="max-w-[38rem]">
            <p className="reveal in font-sans text-[0.72rem] uppercase tracking-widest2 text-[#F5D7AA]">
              imasque Celluloid Collection
            </p>
            <h1 className="mt-5 font-display text-[clamp(4.1rem,10vw,9rem)] font-light leading-[0.82] tracking-brand text-white">
              <span className="block animate-blurin">Dream</span>
              <span className="block italic text-[#F5D7AA] animate-blurin [animation-delay:0.12s]">
                More.
              </span>
            </h1>
            <p className="mt-7 font-display text-[clamp(1.75rem,3.2vw,3rem)] font-light leading-tight text-[#F5D7AA] animate-rise [animation-delay:0.2s]">
              <BalancedText>把太陽眼鏡的時髦，變成深度睡眠的溫柔。</BalancedText>
            </p>
            <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-white/72 animate-rise [animation-delay:0.3s]">
              <BalancedText>
                兩款玳瑁太陽眼鏡造型眼罩，為睡前、午休、旅行與通勤休息而生。看起來有造型，戴起來要柔軟、透氣、全遮光。
              </BalancedText>
            </p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center animate-rise [animation-delay:0.4s]">
              <a
                href="#preorder"
                className="inline-flex items-center justify-center rounded-full bg-[#F5D7AA] px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wider2 text-[#130D09] transition hover:bg-white"
              >
                我要預購
              </a>
              <p className="font-sans text-sm leading-relaxed text-white/66">
                <span className="block text-2xl font-semibold text-white">早鳥 NT$299</span>
                第一輪預購測試價
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-[#FBF7EF]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 font-sans text-sm text-ink/60 md:grid-cols-4 lg:px-10">
          {features.map(([title, body]) => (
            <p key={title}>
              <span className="block font-semibold text-ink">{title}</span>
              {body}
            </p>
          ))}
        </div>
      </section>

      <SalesSection className="bg-[#FBF7EF] pt-20 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Kicker>Two product directions</Kicker>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,6vw,5.8rem)] font-light leading-[0.88] tracking-brand text-ink">
            <BalancedText>一個睡眠眼罩，兩種日常性格。</BalancedText>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-relaxed text-ink/62">
            <BalancedText>
              Black 更安靜、更深眠；Cream 更柔和、更生活感。兩款都保留 imasque 的核心：Comfort、Healing、Imagination。
            </BalancedText>
          </p>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-[1.5rem] border border-ink/8 bg-white shadow-[0_24px_80px_rgba(77,42,24,0.07)]">
              <div className="relative aspect-[4/3] bg-[#F6F0E8]">
                <Image
                  src={product.image}
                  alt={`${product.name} product set`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="p-7 lg:p-8">
                <p className="font-sans text-[0.68rem] uppercase tracking-widest2 text-[#9A5B2C]">
                  {product.label}
                </p>
                <h3 className="mt-3 font-display text-4xl font-light text-ink">{product.name}</h3>
                <p className="mt-4 font-sans leading-relaxed text-ink/58">
                  <BalancedText>{product.description}</BalancedText>
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </SalesSection>

      <SalesSection className="bg-[#120C08] text-cream">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <Kicker className="text-[#F5D7AA]">Product details</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] font-light leading-[0.9] tracking-brand text-white">
              <BalancedText>不是硬式眼鏡。是柔軟、貼膚、可以戴著入睡的想像力。</BalancedText>
            </h2>
            <p className="mt-7 max-w-lg font-sans text-lg leading-relaxed text-white/66">
              <BalancedText>
                玳瑁框只是視覺語言；真正接觸皮膚的是柔軟布料、輕量填充與可調耳掛。舒服，比外觀更優先。
              </BalancedText>
            </p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2">
            <ProductImage src="/product/celluloid-black-front.webp" alt="Celluloid Black front view" />
            <ProductImage src="/product/celluloid-cream-front.webp" alt="Celluloid Cream front view" />
            <ProductImage src="/product/celluloid-black-angle.webp" alt="Celluloid Black angle view" />
            <ProductImage src="/product/celluloid-cream-pouch.webp" alt="Celluloid Cream pouch" />
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection className="bg-[#FBF7EF]">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#F4EDE3] shadow-[0_24px_80px_rgba(77,42,24,0.08)]">
            <Image
              src="/product/celluloid-black-hero.webp"
              alt="Celluloid Black product hero"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal>
            <Kicker>11yo CxY's imagination</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] font-light leading-[0.9] tracking-brand text-ink">
              <BalancedText>這不是一份市場報告長出的產品。</BalancedText>
            </h2>
            <p className="mt-7 max-w-lg font-sans text-lg leading-relaxed text-ink/62">
              <BalancedText>
                它來自 11 歲 CxY 對「眼罩可以長什麼樣子」的想像。普通眼罩可以很舒服，但 imasque 想讓它也變成一個想收藏、想送人的小物。
              </BalancedText>
            </p>
            <p className="mt-8 font-display text-4xl italic text-[#9A5B2C]">舒服是最好的療癒。</p>
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection id="preorder" className="bg-white pb-24 lg:pb-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Kicker>早鳥預購測試價</Kicker>
          <h2 className="mt-5 font-display text-[clamp(4rem,11vw,9rem)] font-light leading-none tracking-brand text-ink">
            NT$299
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink/62">
            <BalancedText>
              這是 imasque Celluloid 第一輪早鳥預購測試。留下 email，首批打樣、預購開放與款式確認時優先通知。
            </BalancedText>
          </p>
          <div className="mx-auto mt-10 max-w-xl">
            <DreamListForm
              buttonLabel="我要預購"
              note="留下 email，首批打樣與預購開放時優先通知。表單目前為意向登記。"
              thanks="收到你的預購意向了。Dream more."
            />
          </div>
          <div className="mt-8">
            <Link href="/about" className="font-sans text-sm uppercase tracking-wider2 text-ink/45 transition hover:text-ink">
              關於 imasque →
            </Link>
          </div>
        </Reveal>
      </SalesSection>
    </>
  );
}

function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#F8F4ED]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover"
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
