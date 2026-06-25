"use client";

import Image from "next/image";
import Link from "next/link";
import { BalancedText } from "@/components/BalancedText";
import { DreamListForm } from "@/components/DreamListForm";
import { useLang } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

const products = [
  {
    name: "Celluloid Cream",
    image: "/product/celluloid-cream-front-cutout.webp",
    note: {
      en: "Tortoiseshell frame with a soft beige blackout cushion.",
      zh: "玳瑁輪廓搭配淺米色親膚遮光面。",
    },
  },
  {
    name: "Celluloid Black",
    image: "/product/celluloid-black-front-cutout.webp",
    note: {
      en: "Tortoiseshell frame with a deeper blackout surface and adjustable fit.",
      zh: "玳瑁輪廓搭配黑色遮光面與可調式配戴結構。",
    },
  },
];

const proof = [
  {
    title: { en: "Muji-level comfort", zh: "Muji 等級的舒適" },
    body: {
      en: "Soft, quiet and skin-friendly. The area around your eyes is designed for comfort first.",
      zh: "親膚、柔軟、安靜。眼周接觸面以舒服為第一原則。",
    },
  },
  {
    title: { en: "Eyewear creativity", zh: "精品眼鏡式創意" },
    body: {
      en: "Not a regular sleep mask in a new colour, but a rest accessory shaped by fashion eyewear.",
      zh: "不是普通眼罩換顏色，而是把精品太陽眼鏡輪廓變成休息配件。",
    },
  },
  {
    title: { en: "Under $10", zh: "10 美金以下" },
    body: {
      en: "A boutique feeling without a boutique barrier, made easy for the first wave to try.",
      zh: "精品感不是高壓價格，而是讓第一批使用者能輕鬆加入。",
    },
  },
];

const moments = [
  {
    title: { en: "Bedtime", zh: "睡前" },
    body: {
      en: "CxY and her favourite plush toys put on imasque together, turning bedtime into a little dream ritual.",
      zh: "CxY 和心愛玩偶一起戴上 imasque，睡前從日常切換到夢境。",
    },
  },
  {
    title: { en: "In-flight", zh: "飛行途中" },
    body: {
      en: "On a plane, it looks less like covering your eyes and more like finishing the outfit.",
      zh: "搭飛機時不是狼狽遮眼，而是像完成機場穿搭的精品配件。",
    },
  },
  {
    title: { en: "Recharge", zh: "短暫充電" },
    body: {
      en: "In a gaming room, study break or work pause, imasque becomes your personal pit stop.",
      zh: "在電競房、工作間、午休片刻，戴上就是自己的暫停鍵。",
    },
  },
  {
    title: { en: "Selfie", zh: "自拍時刻" },
    body: {
      en: "When friends wear it together, it is not something to hide. It is a moment to photograph.",
      zh: "朋友一起戴上時，它不是用品，是會被拍下來的社交畫面。",
    },
  },
];

export default function Home() {
  const { lang } = useLang();
  const copy = {
    eyebrow: { en: "Boutique sleep accessory", zh: "精品睡眠配件" },
    heroTitle: {
      en: "Muji-level comfort. Fashion-eyewear creativity.",
      zh: "Muji 等級舒適。精品眼鏡式創意。",
    },
    heroBody: {
      en: "imasque is a boutique eye mask inspired by Celluloid sunglasses. Comfortable enough to wear every day, stylish enough to show, and designed to launch under $10.",
      zh: "imasque 是一款以 Celluloid 太陽眼鏡為靈感的精品眼罩。舒服到每天想戴，好看到想拍給別人看，定價在 10 美金以下。",
    },
    productCta: { en: "Explore Celluloid", zh: "探索 Celluloid" },
    dropCta: { en: "Join first drop", zh: "加入首發名單" },
    productBadge: { en: "Looks like eyewear. Feels like a dream.", zh: "看起來像眼鏡，戴起來像夢。" },
    firstKicker: { en: "The first two pieces", zh: "首發兩款" },
    firstTitle: { en: "Comfort first. Creativity visible.", zh: "舒適優先，創意看得見。" },
    firstBody: {
      en: "Muji made comfort a daily standard. imasque builds on that softness with boutique eyewear shapes, original colourways, miniature plush versions and personal add-on ideas.",
      zh: "Muji 讓舒服成為日用品標準。imasque 在這個舒適基礎上，加入精品眼鏡輪廓、原創配色、迷你玩偶尺寸與可組裝小配件的想像。",
    },
    ritualKicker: { en: "Ritual, not novelty", zh: "不是噱頭，是儀式" },
    ritualTitle: { en: "Every imasque has a moment.", zh: "每一個 imasque 都有自己的使用時刻。" },
    storyKicker: { en: "CxY's AI entrepreneurship story", zh: "CxY 的 AI 創業故事" },
    storyTitle: { en: "11 years old, building a product the new way.", zh: "11 歲，用新的方式打造產品。" },
    storyA: {
      en: "imasque is not a product made by adults to please children. It comes from CxY's imagination around rest, styling, plush toys and AI creation.",
      zh: "imasque 不是大人做出來討好小孩的產品。它來自 CxY 對休息、造型、玩偶與 AI 創作的想像。",
    },
    storyB: {
      en: "She first uses AI to imagine real usage scenes, then works with her dad on materials, form, website and the first products. The story keeps its childlike spark, but the brand has to be good enough for adults to buy.",
      zh: "她先把使用情境用 AI 做出來，再和爸爸一起討論材質、造型、網站與首批產品。故事保留童心，但品牌必須讓成年人也願意買單。",
    },
    dropKicker: { en: "First drop", zh: "首發上市" },
    dropTitle: { en: "Be first to see the Celluloid drop.", zh: "第一時間看到 Celluloid 首發。" },
    formNote: {
      en: "No spam. Only first-drop notes, product progress, and launch timing.",
      zh: "不寄垃圾信，只寄首發消息、產品進度與上市時間。",
    },
    formThanks: { en: "You're on the first-drop list. Dream More.", zh: "你已加入首發名單。Dream More." },
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#FFF6F7] text-[#080808]">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.84fr_1.16fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.eyebrow[lang]}
            </p>
            <h1 className="mt-6 font-display text-[clamp(3.7rem,9vw,8.7rem)] font-semibold leading-[0.9] tracking-normal">
              <BalancedText>{copy.heroTitle[lang]}</BalancedText>
            </h1>
            <p className="mt-7 max-w-xl font-sans text-lg font-semibold leading-relaxed text-[#080808]/68">
              <BalancedText>{copy.heroBody[lang]}</BalancedText>
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/product"
                className="inline-flex min-h-14 items-center justify-center bg-[#FF1F0F] px-8 font-sans text-sm font-black uppercase tracking-wider2 text-white transition hover:bg-[#080808]"
              >
                {copy.productCta[lang]}
              </Link>
              <a
                href="#dream-list"
                className="inline-flex min-h-14 items-center justify-center border border-[#080808]/25 bg-white px-8 font-sans text-sm font-black uppercase tracking-wider2 text-[#080808] transition hover:border-[#080808]"
              >
                {copy.dropCta[lang]}
              </a>
            </div>
          </Reveal>

          <Reveal className="relative min-h-[420px] lg:min-h-[650px]">
            <div className="absolute inset-0 rounded-[2rem] bg-[#080808]" />
            <div className="absolute left-8 right-8 top-8 h-28 bg-[#F8C8C8]/60 blur-3xl" />
            <div className="absolute inset-x-6 bottom-8 top-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03]" />
            <Image
              src="/product/去背/imasqueBlack/imasqueBlack.png"
              alt="imasque Celluloid Black"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="object-contain px-4 pb-24 pt-24 drop-shadow-[0_30px_55px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute bottom-7 left-7 max-w-[15rem] bg-[#F8C8C8] px-5 py-4 font-sans text-xs font-black uppercase tracking-wider2 text-[#080808]">
              {copy.productBadge[lang]}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#080808]/10 bg-white">
        <Reveal stagger className="mx-auto grid max-w-7xl divide-y divide-[#080808]/10 px-6 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-10">
          {proof.map((item) => (
            <article key={item.title.en} className="py-10 lg:px-8">
              <h2 className="font-display text-[clamp(2.2rem,4vw,4.25rem)] font-semibold leading-[0.95]">{item.title[lang]}</h2>
              <p className="mt-5 font-sans text-base font-semibold leading-relaxed text-[#080808]/62">{item.body[lang]}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="bg-[#080808] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F8C8C8]">
              {copy.firstKicker[lang]}
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9]">
              <BalancedText>{copy.firstTitle[lang]}</BalancedText>
            </h2>
            <p className="mt-7 max-w-xl font-sans text-lg font-semibold leading-relaxed text-white/66">
              <BalancedText>{copy.firstBody[lang]}</BalancedText>
            </p>
          </Reveal>
          <Reveal stagger className="grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="bg-white p-5 text-[#080808]">
                <div className="relative aspect-[4/3] bg-[#FFF6F7]">
                  <Image
                    src={product.image}
                    alt={`imasque ${product.name}`}
                    fill
                    sizes="(min-width: 1024px) 26vw, 80vw"
                    className="object-contain p-5"
                  />
                </div>
                <h3 className="mt-5 font-display text-4xl font-semibold">{product.name}</h3>
                <p className="mt-3 font-sans text-sm font-semibold leading-relaxed text-[#080808]/62">{product.note[lang]}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F6E7D8]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.ritualKicker[lang]}
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9]">
              <BalancedText>{copy.ritualTitle[lang]}</BalancedText>
            </h2>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-px overflow-hidden bg-[#080808] md:grid-cols-2">
            {moments.map((item) => (
              <article key={item.title.en} className="bg-[#FFF6F7] p-7 lg:p-10">
                <p className="font-display text-5xl font-semibold leading-none">{item.title[lang]}</p>
                <p className="mt-5 max-w-md font-sans text-base font-semibold leading-relaxed text-[#080808]/64">{item.body[lang]}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.storyKicker[lang]}
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.9]">
              <BalancedText>{copy.storyTitle[lang]}</BalancedText>
            </h2>
          </Reveal>
          <Reveal className="space-y-5 font-sans text-lg font-semibold leading-relaxed text-[#080808]/66">
            <p>
              {copy.storyA[lang]}
            </p>
            <p>
              {copy.storyB[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="dream-list" className="bg-[#FFF6F7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.dropKicker[lang]}
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.9]">
              <BalancedText>{copy.dropTitle[lang]}</BalancedText>
            </h2>
          </Reveal>
          <Reveal className="bg-white p-6 shadow-[0_20px_80px_rgba(8,8,8,0.08)] lg:p-8">
            <DreamListForm
              buttonLabel={copy.dropCta[lang]}
              note={copy.formNote[lang]}
              thanks={copy.formThanks[lang]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
