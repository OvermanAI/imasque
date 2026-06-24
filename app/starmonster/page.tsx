import type { Metadata } from "next";
import { BalancedText } from "@/components/BalancedText";
import { Reveal } from "@/components/Reveal";
import { StarMonsterMark } from "@/components/StarMonsterMark";

export const metadata: Metadata = {
  title: "STARMONSTER — imasque",
  description:
    "Star Monster 是 imasque 的夢境角色，介於 Little Angel 與 Little Devil 之間，柔軟可愛，也會守護正義。",
};

const traits = [
  ["Core", "介於 Little Angel 與 Little Devil 之間的夢境生物。外表柔軟可愛，內在有守護正義的魔法力量。"],
  ["Shape", "Cloud Hex Star™ 雲朵五角星。雲朵與星星混合的圓潤身體，像從夢境裡跑出來的生物。"],
  ["Face", "超寬眼距加固定 X 嘴。永遠看不出牠在想什麼，呆萌、神秘，又像藏著秘密。"],
  ["Horn", "兩個小紅角，圓潤短胖，不尖銳也不邪惡，讓牠多了一點淘氣反差。"],
];

const shapeDetails = [
  "軟綿綿、胖嘟嘟",
  "像五角星，但邊緣不是尖銳線條，而是雲朵般圓潤",
  "日式專業手繪感",
  "正面可見一雙小天使翅膀",
  "頭上固定有兩個小紅角",
  "整體像從夢境裡跑出來的生物",
];

const faceDetails = [
  "眼睛是兩個小黑點：• •",
  "眼距非常寬",
  "嘴巴是固定的 X",
  "沒有嘴型變化",
  "X 嘴是 Star Monster 的靈魂識別符號",
];

const angelDetails = ["善良", "陪伴", "守護", "安慰", "默默站在你身邊"];

const tailTriggers = ["欺負人", "說謊", "不公平", "傷害弱小", "惡意破壞"];

const tailDetails = [
  "小惡魔尾巴",
  "帶有魔法能量",
  "充滿淘氣感",
  "可用來攻擊壞人或阻止不公平的事情",
];

export default function StarMonsterPage() {
  return (
    <>
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden border-b-2 border-[#0B0B0C] bg-[#FF2B9A] pt-16 text-[#0B0B0C]">
        <div className="absolute inset-x-0 top-16 z-10 border-y-2 border-[#0B0B0C] bg-[#0B0B0C] py-2 font-sans text-[0.68rem] font-black uppercase tracking-widest2 text-[#D9FF38]">
          <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-8 whitespace-nowrap px-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>✦ LITTLE ANGEL ✦ LITTLE DEVIL ✦ CLOUD HEX STAR ✦ MAGIC DEVIL TAIL</span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-6 pb-16 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal className="relative z-10">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-white">
              imasque character bible / dream creature 001
            </p>
            <h1 className="mt-5 font-sans text-[clamp(4.5rem,12vw,11rem)] font-black uppercase leading-[0.78] tracking-normal text-white [-webkit-text-stroke:2px_#0B0B0C] [font-family:var(--font-anton)]">
              Star
              <span className="block text-[#D9FF38]">Monster</span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-[clamp(1.55rem,3vw,2.8rem)] font-light leading-tight text-white">
              <BalancedText>
                來自夢境的雲朵五角星小怪物。柔軟像小天使，但遇到不公平時，Little Devil 的魔法尾巴會醒來。
              </BalancedText>
            </p>
          </Reveal>

          <Reveal className="relative min-h-[430px] lg:min-h-[650px]">
            <div className="absolute inset-6 rotate-[-4deg] border-2 border-[#0B0B0C] bg-[#D9FF38] shadow-[10px_10px_0_#0B0B0C]" />
            <div className="absolute inset-x-0 top-20 h-[70%] rotate-[3deg] border-2 border-[#0B0B0C] bg-[#F7EFF6]" />
            <StarMonsterMark className="absolute inset-x-0 top-20 mx-auto h-[min(72vw,560px)] w-[min(72vw,560px)] text-[#D9FF38] drop-shadow-[10px_10px_0_#0B0B0C]" />
            <div className="absolute bottom-8 left-2 rotate-[-5deg] border-2 border-[#0B0B0C] bg-white px-5 py-3 font-sans text-xs font-black uppercase tracking-wider2 shadow-[5px_5px_0_#0B0B0C]">
              Cloud Hex Star™
            </div>
            <div className="absolute right-2 top-24 rotate-[7deg] bg-[#E01414] px-5 py-3 font-sans text-xs font-black uppercase tracking-wider2 text-white shadow-[5px_5px_0_#0B0B0C]">
              X mouth forever
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#0B0B0C] bg-[#0B0B0C] text-white">
        <Reveal stagger className="mx-auto grid max-w-7xl gap-px bg-[#0B0B0C] font-sans md:grid-cols-4">
          {traits.map(([title, body]) => (
            <article key={title} className="bg-[#F7EFF6] p-6 text-[#0B0B0C] lg:p-8">
              <h2 className="font-sans text-3xl font-black uppercase tracking-normal [font-family:var(--font-anton)]">
                {title}
              </h2>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-[#0B0B0C]/72">{body}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <CharacterSection kicker="01 / Shape" title="Cloud Hex Star™" className="bg-[#F7EFF6]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="relative min-h-[340px]">
            <div className="absolute inset-0 rotate-[-3deg] border-2 border-[#0B0B0C] bg-[#D9FF38] shadow-[8px_8px_0_#0B0B0C]" />
            <StarMonsterMark className="absolute inset-0 m-auto h-64 w-64 text-[#D9FF38] drop-shadow-[5px_5px_0_#0B0B0C]" />
          </Reveal>
          <Reveal>
            <p className="max-w-2xl font-sans text-xl font-bold leading-relaxed text-[#0B0B0C]/76">
              Star Monster 的身體是「雲朵 × 星星」的混合輪廓。它不是尖銳的星星，而是被夢泡軟之後，長成胖嘟嘟形狀的小生物。
            </p>
            <TagList items={shapeDetails} />
          </Reveal>
        </div>
      </CharacterSection>

      <CharacterSection kicker="02 / Face" title="Wide eyes. X mouth." className="bg-[#D9FF38]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="max-w-2xl font-sans text-xl font-bold leading-relaxed text-[#0B0B0C]/76">
              固定表情是 Star Monster 的品牌記憶點。兩顆小黑點離得很遠，嘴巴永遠是 X，所以牠看起來呆萌，卻又永遠像有祕密。
            </p>
            <TagList items={faceDetails} />
          </Reveal>
          <Reveal className="border-2 border-[#0B0B0C] bg-[#F7EFF6] p-8 text-center shadow-[8px_8px_0_#0B0B0C]">
            <p className="font-sans text-[clamp(5rem,14vw,10rem)] font-black leading-none tracking-normal [font-family:var(--font-anton)]">
              • <span className="inline-block px-8">×</span> •
            </p>
            <p className="mt-5 font-serif text-2xl italic text-[#E01414] [font-family:var(--font-bodoni)]">
              no mood, all mystery
            </p>
          </Reveal>
        </div>
      </CharacterSection>

      <CharacterSection kicker="03 / Angel + Devil" title="Soft guardian energy." className="bg-[#0B0B0C] text-white">
        <div className="grid gap-px overflow-hidden border-2 border-white bg-white md:grid-cols-2">
          <Reveal className="bg-[#F7EFF6] p-6 text-[#0B0B0C] lg:p-10">
            <p className="font-sans text-4xl font-black uppercase leading-none [font-family:var(--font-anton)]">
              Little Angel Wings
            </p>
            <p className="mt-5 font-sans text-base font-semibold leading-relaxed text-[#0B0B0C]/72">
              小小一雙天使翅膀，正面就看得到。圓潤、柔軟、不誇張，像是角色身體的一部分，不是外加裝飾。
            </p>
            <TagList items={angelDetails} />
          </Reveal>

          <Reveal className="bg-[#FF2B9A] p-6 text-white lg:p-10">
            <p className="font-sans text-4xl font-black uppercase leading-none [font-family:var(--font-anton)]">
              Magic Devil Tail
            </p>
            <p className="mt-5 font-sans text-base font-semibold leading-relaxed text-white/82">
              平時看不見。當牠感受到不正義時，Little Devil 的力量會啟動，尾巴出現，釋放魔法能量保護他人。
            </p>
            <TagList items={tailDetails} dark />
          </Reveal>
        </div>

        <Reveal className="mt-10 border-2 border-white bg-[#E01414] p-6 shadow-[8px_8px_0_#D9FF38] lg:p-8">
          <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#D9FF38]">
            Tail appears when
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {tailTriggers.map((item) => (
              <span
                key={item}
                className="border-2 border-white bg-[#0B0B0C] px-4 py-2 font-sans text-sm font-black text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </CharacterSection>

      <section className="bg-[#F7EFF6] px-6 py-16 lg:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
            one-line positioning
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,6rem)] font-light leading-[0.96] text-[#0B0B0C]">
            <BalancedText>
              Star Monster 是一隻來自夢境的雲朵五角星小怪物，外表像天使般柔軟可愛，卻藏著一條只會在不公平出現時啟動的魔法惡魔尾巴。
            </BalancedText>
          </h2>
        </Reveal>
      </section>
    </>
  );
}

function CharacterSection({
  kicker,
  title,
  children,
  className = "",
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`overflow-hidden border-b-2 border-[#0B0B0C] ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">{kicker}</p>
          <h2 className="mt-4 max-w-5xl font-sans text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal [font-family:var(--font-anton)]">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function TagList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className={`border-2 px-4 py-2 font-sans text-sm font-black ${
            dark
              ? "border-white bg-[#0B0B0C] text-white"
              : "border-[#0B0B0C] bg-white text-[#0B0B0C] shadow-[3px_3px_0_#0B0B0C]"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
