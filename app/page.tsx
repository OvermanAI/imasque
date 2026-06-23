"use client";

import Image from "next/image";
import Link from "next/link";
import { BalancedText } from "@/components/BalancedText";
import { DreamListForm } from "@/components/DreamListForm";
import { Reveal } from "@/components/Reveal";

const productImages = {
  set: "/product/去背/imasqueBlack/7.png",
  front: "/product/去背/imasqueBlack/8-front-cropped.png",
  angle: "/product/去背/imasqueBlack/9.png",
};

const product = {
  name: "Celluloid Black",
  label: "Deep sleep black",
  image: productImages.set,
  description: "深色遮光面料搭配玳瑁框視覺，像太陽眼鏡一樣俐落，閉眼後更安靜。",
};

const features = [
  ["全遮光", "降低光線干擾，適合睡前、午休、旅行與通勤休息。"],
  ["Tencel 親膚", "柔軟滑順、透氣不悶，讓眼周保持舒服。"],
  ["雙側耳掛", "可調繩設計，不壓後腦，長時間配戴更輕鬆。"],
  ["收納袋套組", "同色系束口袋，讓眼罩成為可以送禮的完整小物。"],
];

export default function Home() {
  return (
    <>
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden bg-[#0B0705] text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(245,215,170,0.28),transparent_31%),radial-gradient(circle_at_50%_100%,rgba(154,91,44,0.16),transparent_36%),linear-gradient(90deg,rgba(11,7,5,1)_0%,rgba(11,7,5,0.94)_38%,rgba(11,7,5,0.58)_100%)]" />
        <div className="absolute inset-y-0 right-0 top-8 hidden w-[58%] lg:block">
          <div className="relative h-full w-full">
            <Image
              src={productImages.front}
              alt="imasque Celluloid Black front view"
              fill
              priority
              sizes="72vw"
              className="object-contain object-center drop-shadow-[0_46px_68px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-16 pt-28 lg:px-10 lg:pt-24">
          <div className="max-w-[42rem]">
            <p className="reveal in font-sans text-[0.72rem] uppercase tracking-widest2 text-[#F5D7AA]">
              imasque Celluloid Black
            </p>
            <h1 className="mt-5 font-display text-[clamp(4rem,9vw,8.6rem)] font-light leading-[0.86] tracking-brand text-white">
              <span className="block animate-blurin">Celluloid</span>
              <span className="block italic text-[#F5D7AA] animate-blurin [animation-delay:0.12s]">
                Black.
              </span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-[clamp(1.7rem,3vw,2.85rem)] font-light leading-tight text-[#F5D7AA] animate-rise [animation-delay:0.2s]">
              <BalancedText>太陽眼鏡造型睡眠眼罩，閉上眼也保留造型感。</BalancedText>
            </p>
            <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-white/72 animate-rise [animation-delay:0.3s]">
              <BalancedText>
                深色全遮光、Tencel 親膚布面、雙側可調耳掛。為睡前、午休、旅行與通勤休息而生。
              </BalancedText>
            </p>
            <div className="relative mt-6 h-32 sm:h-40 lg:hidden animate-rise [animation-delay:0.34s]">
              <Image
                src={productImages.front}
                alt="imasque Celluloid Black front view"
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
                我要預購
              </a>
              <p className="font-sans text-sm leading-relaxed text-white/68">
                <span className="block text-3xl font-semibold text-white">早鳥 NT$299</span>
                Celluloid Black 第一輪預購測試價
              </p>
            </div>
            <div className="mt-9 flex max-w-lg flex-wrap gap-x-6 gap-y-2 border-t border-white/12 pt-5 font-sans text-[0.72rem] uppercase tracking-wider2 text-white/42 animate-rise [animation-delay:0.48s]">
              <span>Full blackout</span>
              <span>Tencel soft touch</span>
              <span>Adjustable ear loops</span>
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
          <Kicker>Celluloid Black</Kicker>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,6vw,5.8rem)] font-light leading-[0.88] tracking-brand text-ink">
            <BalancedText>看起來俐落，戴起來很安靜。</BalancedText>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-relaxed text-ink/62">
            <BalancedText>
              深色遮光面料搭配玳瑁框視覺，把睡眠眼罩做成一件可以收藏、可以送禮，也每天都想用的小物。
            </BalancedText>
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <article className="overflow-hidden rounded-[1.5rem] border border-ink/8 bg-white shadow-[0_24px_80px_rgba(77,42,24,0.07)]">
            <div className="relative aspect-[16/10] bg-[radial-gradient(circle_at_50%_42%,#FFF8EC_0%,#F1E0C9_62%,#E7D2B6_100%)]">
              <Image
                src={product.image}
                alt={`${product.name} product set`}
                fill
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="object-contain p-8 drop-shadow-[0_28px_34px_rgba(77,42,24,0.22)] transition duration-700 hover:scale-[1.02]"
              />
            </div>
            <div className="p-7 lg:p-9">
              <p className="font-sans text-[0.68rem] uppercase tracking-widest2 text-[#9A5B2C]">
                {product.label}
              </p>
              <h3 className="mt-3 font-display text-4xl font-light text-ink">{product.name}</h3>
              <p className="mt-4 max-w-2xl font-sans leading-relaxed text-ink/58">
                <BalancedText>{product.description}</BalancedText>
              </p>
            </div>
          </article>
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
            <ProductImage src={productImages.front} alt="Celluloid Black front view" />
            <ProductImage src={productImages.angle} alt="Celluloid Black angle view" />
            <ProductImage src={productImages.set} alt="Celluloid Black product set" />
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection className="bg-[#FBF7EF]">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#F8EFE3_0%,#E8D1B2_100%)] shadow-[0_24px_80px_rgba(77,42,24,0.08)]">
            <Image
              src={productImages.set}
              alt="Celluloid Black product hero"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain p-8 drop-shadow-[0_28px_38px_rgba(77,42,24,0.22)]"
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
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_50%_42%,#FFF8EC_0%,#EEDBC1_100%)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-contain p-6 drop-shadow-[0_22px_28px_rgba(0,0,0,0.28)]"
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
