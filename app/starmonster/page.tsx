import type { Metadata } from "next";
import Image from "next/image";
import { BalancedText } from "@/components/BalancedText";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "認識 StarMonster — imasque",
  description:
    "StarMonster 來自一位 11 歲小女孩的夢境，是一隻雲朵星星怪獸，給每一個人做夢想的勇氣。",
};

const profile = [
  ["名字", "StarMonster"],
  ["誕生地", "一位 11 歲小女孩的夢境"],
  ["種族", "Cloud Star™ 雲朵星星怪獸"],
  ["MBTI", "ESFP — The Performer"],
  ["個性", "開朗、充滿想像力、熱愛分享、喜歡冒險、樂觀、勇敢、帶著一點點調皮"],
  ["內心比例", "70% Little Angel / 30% Little Devil"],
  ["使命", "給每一個人做夢想的勇氣。"],
  [
    "超能力",
    "當有人失去希望，或當夢想受到傷害時，StarMonster 會喚醒心中的魔法，守護每一顆仍然相信未來的心。",
  ],
];

const storyBlocks = [
  [
    "在某個充滿月光與星星的夜晚，一位愛做夢的小女孩夢見了一個從未見過的小傢伙。",
    "牠有著像雲朵一樣柔軟的星星身體，兩隻小小的天使翅膀，一對糖果紅的小角，還有一張總是讓人猜不透的臉。",
    "醒來以後，女孩忘記了夢中的故事，卻始終記得那個可愛又神秘的小夥伴。",
    "於是，StarMonster 誕生了。",
  ],
  [
    "從那一天起，StarMonster 開始在每個人的夢裡旅行。",
    "牠喜歡唱歌、跳舞、收集星光，也喜歡和大家分享快樂。",
    "牠總是相信，世界上沒有太奇怪的夢，也沒有太遙遠的願望。",
    "因為每一個偉大的故事，都曾經只是某個人心裡的一個小小夢想。",
  ],
  [
    "StarMonster 的 MBTI 是 ESFP — The Performer。",
    "牠熱愛生活，充滿好奇，相信每個人都應該勇敢地發光。",
    "當有人因為害怕而不敢做夢，當有人因為別人的否定而放棄自己，當世界告訴你「不可能」，StarMonster 會輕輕地來到身邊，提醒你：",
    "「做夢想，是一件很酷的事。」",
  ],
  [
    "因為夢想不是用來證明自己有多厲害，而是讓我們知道，自己的心正在閃閃發亮。",
    "雖然平時總是愛玩又充滿活力，但當欺負、謊言、不公平，或有人試圖摧毀別人的夢想時，StarMonster 那條小小的糖果紅尾巴便會悄悄出現。",
    "因為牠知道，每一個夢想，都值得被好好守護。",
  ],
];

const closingLines = [
  "夢想不需要得到所有人的同意。",
  "只要你願意相信，",
  "星星就會開始發光。",
  "而我，會一直陪著你。",
  "一起做夢。",
  "一起發光。",
  "一起成為自己想成為的樣子。",
];

export default function StarMonsterPage() {
  return (
    <>
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden border-b-2 border-[#0B0B0C] bg-[#F7EFF6] pt-16 text-[#0B0B0C]">
        <div className="absolute inset-x-0 top-16 z-10 border-y-2 border-[#0B0B0C] bg-[#FF2B9A] py-2 font-sans text-[0.68rem] font-black uppercase tracking-widest2 text-white">
          <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-8 whitespace-nowrap px-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>✦ DREAM MORE ✦ ESFP THE PERFORMER ✦ CLOUD STAR™ ✦ BUILD IN PUBLIC</span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <Reveal className="relative z-10">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              meet the character ip
            </p>
            <h1 className="mt-5 font-sans text-[clamp(4rem,10vw,9.5rem)] font-black uppercase leading-[0.78] tracking-normal text-[#0B0B0C] [font-family:var(--font-anton)]">
              認識
              <span className="block text-[#FF2B9A] [-webkit-text-stroke:2px_#0B0B0C]">Star</span>
              <span className="block">Monster</span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-[clamp(1.6rem,3vw,2.9rem)] font-light leading-tight text-[#0B0B0C]">
              <BalancedText>StarMonster，來自一位 11 歲小女孩的夢境。</BalancedText>
            </p>
          </Reveal>

          <Reveal className="relative min-h-[430px] lg:min-h-[650px]">
            <div className="absolute inset-4 rotate-[-4deg] border-2 border-[#0B0B0C] bg-[#D9FF38] shadow-[10px_10px_0_#0B0B0C]" />
            <div className="absolute inset-x-0 top-16 h-[76%] rotate-[3deg] border-2 border-[#0B0B0C] bg-[#FF2B9A]" />
            <div className="absolute inset-x-8 top-24 h-[68%] border-2 border-[#0B0B0C] bg-white" />
            <Image
              src="/starmonster/starmonster_去背.png"
              alt="StarMonster character IP"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-contain px-4 pb-8 pt-10 drop-shadow-[10px_10px_0_rgba(11,11,12,0.22)]"
            />
            <div className="absolute bottom-8 left-2 rotate-[-5deg] border-2 border-[#0B0B0C] bg-white px-5 py-3 font-sans text-xs font-black uppercase tracking-wider2 shadow-[5px_5px_0_#0B0B0C]">
              70% Little Angel
            </div>
            <div className="absolute right-2 top-24 rotate-[7deg] bg-[#E01414] px-5 py-3 font-sans text-xs font-black uppercase tracking-wider2 text-white shadow-[5px_5px_0_#0B0B0C]">
              30% Little Devil
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-b-2 border-[#0B0B0C] bg-[#0B0B0C] text-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-white lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal className="bg-[#D9FF38] p-6 text-[#0B0B0C] lg:p-10">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              origin story
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.4rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal [font-family:var(--font-anton)]">
              Born from a dream.
            </h2>
            <p className="mt-7 max-w-xl font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/72">
              <BalancedText>
                StarMonster 不是被設計出來的角色，而是一個被記住的夢。牠帶著小女孩心裡那種「相信不可能也可以試試看」的亮光，開始旅行。
              </BalancedText>
            </p>
          </Reveal>

          <Reveal stagger className="bg-[#F7EFF6] p-6 text-[#0B0B0C] lg:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              {storyBlocks.map((block, index) => (
                <article key={index} className="space-y-4 border-t-2 border-[#0B0B0C] pt-5">
                  {block.map((line, lineIndex) => (
                    <p
                      key={line}
                      className={`font-sans leading-relaxed ${
                        lineIndex === block.length - 1 && line.includes("做夢想")
                          ? "font-serif text-2xl italic text-[#E01414] [font-family:var(--font-bodoni)]"
                          : "text-base font-semibold text-[#0B0B0C]/76"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#0B0B0C] bg-[#F7EFF6] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              StarMonster profile
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal text-[#0B0B0C] [font-family:var(--font-anton)]">
              小檔案
            </h2>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-px bg-[#0B0B0C] border-2 border-[#0B0B0C] md:grid-cols-2">
            {profile.map(([label, value]) => (
              <article key={label} className="bg-white p-5 lg:p-7">
                <p className="font-sans text-xs font-black uppercase tracking-widest2 text-[#E01414]">{label}</p>
                <p className="mt-3 font-sans text-xl font-black leading-snug text-[#0B0B0C]">{value}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FF2B9A] px-6 py-16 text-white lg:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#D9FF38]">
            StarMonster wants to tell you
          </p>
          <div className="mt-6 space-y-3 font-display text-[clamp(2.2rem,5.4vw,5.8rem)] font-light leading-[0.98] [-webkit-text-stroke:1px_#0B0B0C]">
            {closingLines.map((line) => (
              <p key={line}>
                <BalancedText>{line}</BalancedText>
              </p>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
