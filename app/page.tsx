"use client";

import Link from "next/link";
import { BalancedText } from "@/components/BalancedText";
import { CelluloidMask } from "@/components/CelluloidMask";
import { DreamListForm } from "@/components/DreamListForm";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    title: "全遮光熟睡設計",
    body: "減少光線干擾，適合睡前、午休、旅行與通勤休息。",
  },
  {
    title: "Tencel 透氣材質",
    body: "柔軟親膚、觸感滑順，讓眼周保持舒適不悶熱。",
  },
  {
    title: "雲朵般柔軟親膚",
    body: "輕量填充，不壓迫眼周，讓閉眼這件事更舒服。",
  },
  {
    title: "雙側耳掛可調繩",
    body: "不使用傳統後腦鬆緊帶，可依臉型調整，長時間配戴不勒耳朵。",
  },
];

const audience = [
  "想提升睡眠儀式感的人",
  "午休、旅行、通勤需要遮光休息的人",
  "喜歡時髦小物與療癒設計的人",
  "想送一份可愛又實用禮物的人",
  "想支持 11 歲創意創辦人把想像力做成真實產品的人",
];

export default function Home() {
  return (
    <>
      <section className="relative -mt-16 min-h-[calc(100svh-0px)] overflow-hidden bg-[#130D09] text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(222,165,87,0.30),transparent_34%),radial-gradient(circle_at_14%_84%,rgba(224,122,132,0.22),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-milk to-transparent" />
        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-6 pb-12 pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pt-20">
          <div className="max-w-xl">
            <p className="reveal in font-sans text-[0.72rem] uppercase tracking-widest2 text-[#F4C88C]">
              11歲創意創辦人 CxY 的第一款想像力眼罩
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.9rem,9.5vw,8.5rem)] font-light leading-[0.82] tracking-brand text-white">
              <span className="block animate-blurin">Celluloid</span>
            </h1>
            <p className="mt-6 max-w-lg font-display text-[clamp(1.65rem,3vw,2.75rem)] font-light leading-tight text-[#F5D7AA] animate-rise [animation-delay:0.15s]">
              <BalancedText>把太陽眼鏡的時髦，變成深度睡眠的溫柔。</BalancedText>
            </p>
            <p className="mt-5 max-w-md font-sans text-[0.95rem] leading-relaxed text-white/68 animate-rise [animation-delay:0.25s]">
              <BalancedText>
                imasque Celluloid 是一款太陽眼鏡造型的柔軟睡眠眼罩。它看起來像一副玳瑁太陽眼鏡，戴起來卻是柔軟、透氣、全遮光的療癒眼罩。
              </BalancedText>
            </p>
            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center animate-rise [animation-delay:0.35s]">
              <a
                href="#preorder"
                className="inline-flex items-center justify-center rounded-full bg-[#F5D7AA] px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wider2 text-[#130D09] transition hover:bg-white"
              >
                我要預購 imasque Celluloid
              </a>
              <p className="font-sans text-sm leading-relaxed text-white/62">
                <span className="block text-2xl font-semibold text-white">早鳥 NT$299</span>
                第一輪預購測試價
              </p>
            </div>
          </div>

          <div className="relative animate-floaty">
            <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5D7AA]/18 blur-3xl" />
            <CelluloidMask className="relative mx-auto w-full max-w-3xl drop-shadow-2xl" idSuffix="hero" />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-[#FFF8EC]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 font-sans text-sm text-ink/60 md:grid-cols-3 lg:px-10">
          <p><span className="font-semibold text-ink">外觀</span> 現代方形太陽眼鏡輪廓 × 淺色玳瑁框靈感</p>
          <p><span className="font-semibold text-ink">觸感</span> Tencel 天絲針織布 × 輕量柔軟填充</p>
          <p><span className="font-semibold text-ink">配戴</span> 全遮光 × 雙側耳掛可調繩</p>
        </div>
      </section>

      <SalesSection className="pt-20 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Kicker>The eye mask of 11yo CxY's imagination.</Kicker>
          <h2 className="mt-5 font-display text-[clamp(2.7rem,6vw,5.8rem)] font-light leading-[0.88] tracking-brand text-ink">
            <BalancedText>這不是太陽眼鏡。</BalancedText>
            <span className="mt-3 block italic text-[#9A5B2C]">
              <BalancedText>這是可以戴著入睡的想像力。</BalancedText>
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-ink/62">
            <BalancedText>
              imasque 來自 eye mask，也來自 imagination。這個品牌的起點，不是一份市場報告，而是一位 11 歲小女生 CxY 對「眼罩可以長什麼樣子」的想像。
            </BalancedText>
          </p>
        </Reveal>
      </SalesSection>

      <SalesSection>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Kicker>Comfort is healing.</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] font-light leading-[0.9] tracking-brand text-ink">
              <BalancedText>玳瑁框的時髦感，轉化成睡眠的溫柔。</BalancedText>
            </h2>
            <p className="mt-7 max-w-lg font-sans text-lg leading-relaxed text-ink/62">
              <BalancedText>
                Celluloid 以現代方形太陽眼鏡為靈感。外觀有造型，材質要舒服，閉上眼睛時，世界變安靜一點。
              </BalancedText>
            </p>
            <p className="mt-8 font-display text-4xl italic text-[#9A5B2C]">舒服是最好的療癒。</p>
          </Reveal>

          <Reveal className="relative overflow-hidden rounded-[2rem] border border-ink/5 bg-[#F7E4C7] p-8 lg:p-12">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
            <CelluloidMask className="relative w-full" idSuffix="detail" />
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection>
        <Reveal className="mb-10 max-w-2xl">
          <Kicker>產品特色</Kicker>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-[0.9] tracking-brand text-ink">
            <BalancedText>為睡前、午休、旅行，做一個更舒服的閉眼瞬間。</BalancedText>
          </h2>
        </Reveal>
        <Reveal stagger className="grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-[1.5rem] border border-ink/8 bg-white/72 p-7 shadow-[0_18px_60px_rgba(77,42,24,0.06)]"
            >
              <span className="font-display text-5xl text-[#D6A15E]/35">0{index + 1}</span>
              <h3 className="mt-6 font-display text-3xl text-ink">{feature.title}</h3>
              <p className="mt-3 font-sans leading-relaxed text-ink/58">
                <BalancedText>{feature.body}</BalancedText>
              </p>
            </article>
          ))}
        </Reveal>
      </SalesSection>

      <SalesSection className="bg-[#130D09] text-cream">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <Kicker className="text-[#F5D7AA]">適合誰？</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] font-light leading-[0.9] tracking-brand text-white">
              <BalancedText>給想睡好，也想把日常小物選得好看的人。</BalancedText>
            </h2>
          </Reveal>
          <Reveal stagger className="space-y-4">
            {audience.map((item) => (
              <div key={item} className="flex gap-4 border-b border-white/10 pb-4 font-sans text-lg leading-relaxed text-white/72">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F5D7AA]" />
                <BalancedText>{item}</BalancedText>
              </div>
            ))}
          </Reveal>
        </div>
      </SalesSection>

      <SalesSection id="preorder" className="pb-24 lg:pb-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Kicker>早鳥預購測試價</Kicker>
          <h2 className="mt-5 font-display text-[clamp(4rem,11vw,9rem)] font-light leading-none tracking-brand text-ink">
            NT$299
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink/62">
            <BalancedText>
              這是 imasque Celluloid 的第一輪早鳥預購測試。每一筆預購，都是對 CxY 第一款創意產品的支持，也會幫助我們決定首批打樣與量產方向。
            </BalancedText>
          </p>
          <div className="mx-auto mt-10 max-w-xl">
            <DreamListForm
              buttonLabel="我要預購"
              note="留下 email，首批打樣與預購開放時優先通知。表單目前為意向登記。"
              thanks="收到你的預購意向了。Dream more."
            />
          </div>
          <p className="mt-8 font-sans text-sm uppercase tracking-wider2 text-ink/42">
            玳瑁框靈感 × Tencel 透氣材質 × 雙側耳掛可調繩
          </p>
          <p className="mt-5 font-display text-4xl italic text-[#9A5B2C]">Dream More.</p>
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
