import type { Metadata } from "next";
import Image from "next/image";
import { BalancedText } from "@/components/BalancedText";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "認識 StarMonster — imasque",
  description:
    "StarMonster 是來自一位 11 歲小女孩夢境裡的 Cloud Star™ 雲朵星星怪獸，給每一個人做夢想的勇氣。",
};

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
];

const profile = [
  ["名字", "StarMonster"],
  ["誕生地", "一位 11 歲小女孩的夢境"],
  ["種族", "Cloud Star™ 雲朵星星怪獸"],
  ["MBTI", "ESFP — The Performer"],
  ["人格", "夢境裡的小小表演家。活潑、愛玩、愛分享，也喜歡把平凡的一天變成閃閃發亮的舞台。"],
  ["使命", "給每一個人做夢想的勇氣。"],
];

const magicCards = [
  {
    title: "Little Angel Wing Magic",
    label: "70% Little Angel",
    body: "小天使翅膀給 StarMonster 自由飛行的魔法。牠不是靠翅膀拍動飛行，而是讓翅膀散發月光與星光，像雲朵一樣被夢境托起。",
    points: ["自由", "想像力", "陪伴", "希望", "做夢想的勇氣"],
  },
  {
    title: "Little Devil Horn Magic",
    label: "30% Little Devil",
    body: "糖果紅小角藏著守護力量。當牠感應到欺負、謊言、不公平，或有人破壞別人的夢想時，小角會亮起來。",
    points: ["勇氣", "正義感", "保護弱小", "阻止壞事", "守護夢想"],
  },
];

const tailTriggers = ["有人被欺負", "有人被說謊傷害", "有人被不公平對待", "有人嘲笑別人的夢想", "有人惡意破壞", "有人讓善良的人不敢發光"];

const flightModes = [
  ["平常狀態", "慢慢漂浮，像雲。"],
  ["表演狀態", "輕快彈跳，像在星星之間跳舞。"],
  ["夢想勇氣模式", "穩定向前，像被一道溫柔的光推著前進。"],
  ["感應不公平時", "速度可以變快，但仍不可像戰鬥角色。"],
  ["魔法尾巴甦醒時", "尾巴與翅膀一起發光，形成短暫的夢境加速。"],
];

const designRules = [
  "臉永遠不變：兩顆極寬距離黑點眼，小小黑色 X 嘴。",
  "不可微笑、不可張嘴、不可露牙、不可吐舌、不可加眉毛或睫毛。",
  "身體是 Cloud Star™，像柔軟雲朵，不是幾何星星。",
  "小角必須是糖果紅、圓鈍、可愛，不是邪惡武器。",
  "翅膀必須小小的、圓圓的、像小雲朵，不能成為主視覺焦點。",
  "尾巴平時隱藏；出現時也必須小於翅膀，且不是攻擊武器。",
];

const closingLines = [
  "夢想不需要得到所有人的同意。",
  "只要你願意相信，星星就會開始發光。",
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
              <span key={i}>DREAM COURAGE MODE / ESFP THE PERFORMER / WING MAGIC FLIGHT / CLOUD STAR™</span>
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
            <p className="mt-7 max-w-xl font-display text-[clamp(1.55rem,3vw,2.75rem)] font-light leading-tight text-[#0B0B0C]">
              <BalancedText>
                來自一位 11 歲小女孩夢境裡的 Cloud Star™ 雲朵星星怪獸，給每一個人做夢想的勇氣。
              </BalancedText>
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
              official definition
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal [font-family:var(--font-anton)]">
              Dream creature. Stage energy.
            </h2>
            <p className="mt-7 max-w-xl font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/72">
              <BalancedText>
                StarMonster 不是幫人完成夢想的角色，而是在一個人還不敢相信自己時，陪他重新相信。牠不是安靜守護型角色，牠是會跳出來、帶動氣氛、讓大家重新燃起勇氣的夢想夥伴。
              </BalancedText>
            </p>
          </Reveal>

          <Reveal stagger className="bg-[#F7EFF6] p-6 text-[#0B0B0C] lg:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              {storyBlocks.map((block, index) => (
                <article key={index} className="space-y-4 border-t-2 border-[#0B0B0C] pt-5">
                  {block.map((line) => (
                    <p key={line} className="font-sans text-base font-semibold leading-relaxed text-[#0B0B0C]/76">
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

          <Reveal stagger className="mt-10 grid gap-px border-2 border-[#0B0B0C] bg-[#0B0B0C] md:grid-cols-2">
            {profile.map(([label, value]) => (
              <article key={label} className="bg-white p-5 lg:p-7">
                <p className="font-sans text-xs font-black uppercase tracking-widest2 text-[#E01414]">{label}</p>
                <p className="mt-3 font-sans text-xl font-black leading-snug text-[#0B0B0C]">{value}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#0B0B0C] bg-[#0B0B0C] px-6 py-16 text-white lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#D9FF38]">
              Little Angel × Little Devil
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.1rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal [font-family:var(--font-anton)]">
              雙魔法系統
            </h2>
            <p className="mt-6 max-w-3xl font-sans text-lg font-bold leading-relaxed text-white/72">
              <BalancedText>
                這不是善與惡的對立，而是兩種勇氣的平衡。Little Angel 給牠自由飛行的能力，Little Devil 給牠保護善良的力量。
              </BalancedText>
            </p>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-px overflow-hidden border-2 border-white bg-white md:grid-cols-2">
            {magicCards.map((card) => (
              <article key={card.title} className="bg-[#F7EFF6] p-6 text-[#0B0B0C] lg:p-10">
                <p className="font-sans text-xs font-black uppercase tracking-widest2 text-[#E01414]">{card.label}</p>
                <h3 className="mt-4 font-sans text-4xl font-black uppercase leading-none [font-family:var(--font-anton)]">
                  {card.title}
                </h3>
                <p className="mt-5 font-sans text-base font-semibold leading-relaxed text-[#0B0B0C]/72">{card.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {card.points.map((point) => (
                    <span key={point} className="border-2 border-[#0B0B0C] bg-white px-4 py-2 font-sans text-sm font-black shadow-[3px_3px_0_#0B0B0C]">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal className="mt-10 border-2 border-white bg-[#E01414] p-6 shadow-[8px_8px_0_#D9FF38] lg:p-8">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#D9FF38]">
              Magic Devil Tail
            </p>
            <h3 className="mt-4 font-sans text-4xl font-black uppercase leading-none [font-family:var(--font-anton)]">
              尾巴不是武器，是守護訊號。
            </h3>
            <p className="mt-5 max-w-3xl font-sans text-base font-bold leading-relaxed text-white/82">
              StarMonster 的小惡魔尾巴平時是隱藏的。只有當 Little Devil 小角的力量被喚醒時，尾巴才會悄悄出現，提醒大家：StarMonster 來保護夢想了。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tailTriggers.map((trigger) => (
                <span key={trigger} className="border-2 border-white bg-[#0B0B0C] px-4 py-2 font-sans text-sm font-black text-white">
                  {trigger}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#0B0B0C] bg-[#D9FF38] px-6 py-16 text-[#0B0B0C] lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              Wing Magic Flight System
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.1rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal [font-family:var(--font-anton)]">
              不是拍翅膀，是被夢托起來。
            </h2>
            <p className="mt-6 max-w-xl font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/72">
              <BalancedText>
                StarMonster 會飛，但不是靠翅膀揮動。牠的小天使翅膀是夢境魔法的出口，散出月光、星光與夢想浮力。
              </BalancedText>
            </p>
          </Reveal>

          <Reveal stagger className="grid gap-px border-2 border-[#0B0B0C] bg-[#0B0B0C]">
            {flightModes.map(([mode, body]) => (
              <article key={mode} className="grid gap-3 bg-[#F7EFF6] p-5 md:grid-cols-[0.35fr_0.65fr] md:items-center lg:p-6">
                <p className="font-sans text-lg font-black text-[#E01414]">{mode}</p>
                <p className="font-sans text-base font-bold leading-relaxed text-[#0B0B0C]/74">{body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#0B0B0C] bg-[#F7EFF6] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              Never change
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.1rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal text-[#0B0B0C] [font-family:var(--font-anton)]">
              設計不可變規則
            </h2>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-4 md:grid-cols-2">
            {designRules.map((rule) => (
              <p key={rule} className="border-2 border-[#0B0B0C] bg-white p-5 font-sans text-base font-black leading-relaxed shadow-[4px_4px_0_#0B0B0C]">
                {rule}
              </p>
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
