"use client";

import Image from "next/image";
import { BalancedText } from "@/components/BalancedText";
import { useLang } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

const smCopy = {
  en: {
    meet: "meet the character ip",
    titleLead: "Meet",
    hero: "A Cloud Star™ dream creature born from an 11-year-old girl's imagination, here to give people the courage to dream.",
    definitionKicker: "official definition",
    definitionTitle: "Dream creature. Stage energy.",
    definitionBody:
      "StarMonster is not a character that finishes dreams for you. It appears when someone is not brave enough to believe yet, and helps them believe again. It is not quiet and passive. It brings energy, movement and courage back into the room.",
    storyBlocks: [
      [
        "On a moonlit night full of stars, a girl who loved dreaming met a little creature she had never seen before.",
        "It had a soft cloud-like star body, tiny angel wings, candy-red horns and a face that was impossible to read.",
        "When she woke up, she forgot the story of the dream, but she still remembered that cute and mysterious friend.",
        "That was how StarMonster was born.",
      ],
      [
        "Since that day, StarMonster has travelled through people's dreams.",
        "It loves singing, dancing, collecting starlight and sharing joy.",
        "It believes no dream is too strange, and no wish is too far away.",
        "Every great story once began as a tiny dream in someone's heart.",
      ],
    ],
    profileKicker: "StarMonster profile",
    profileTitle: "Profile",
    profile: [
      ["Name", "StarMonster"],
      ["Birthplace", "An 11-year-old girl's dream"],
      ["Species", "Cloud Star™ dream creature"],
      ["MBTI", "ESFP — The Performer"],
      ["Personality", "A little performer from dreams: lively, playful, generous and able to turn an ordinary day into a tiny stage."],
      ["Mission", "To give everyone the courage to dream."],
    ],
    magicTitle: "Dual magic system",
    magicBody: "This is not good versus evil. It is a balance of two kinds of courage. Little Angel gives StarMonster the freedom to fly, while Little Devil gives it the power to protect kindness.",
    magicCards: [
      {
        title: "Little Angel Wing Magic",
        label: "70% Little Angel",
        body: "Tiny angel wings give StarMonster the magic of free flight. It does not flap its wings. The wings release moonlight and starlight, lifting it like a soft cloud inside a dream.",
        points: ["Freedom", "Imagination", "Companionship", "Hope", "Courage to dream"],
      },
      {
        title: "Little Devil Horn Magic",
        label: "30% Little Devil",
        body: "Candy-red horns hold its protective power. When StarMonster senses bullying, lies, unfairness or someone destroying another person's dream, the horns begin to glow.",
        points: ["Courage", "Justice", "Protecting the weak", "Stopping harm", "Protecting dreams"],
      },
    ],
    tailTitle: "The tail is not a weapon. It is a protection signal.",
    tailBody: "StarMonster's little devil tail is usually hidden. It appears only when Little Devil magic wakes up, reminding everyone that StarMonster has come to protect a dream.",
    tailTriggers: ["Bullying", "Lies that hurt", "Unfair treatment", "Mocking someone's dream", "Malicious damage", "Stopping kind people from shining"],
    flightTitle: "It does not flap. It is lifted by dreams.",
    flightBody: "StarMonster can fly, but not by flapping wings. Its little angel wings are an outlet for dream magic, releasing moonlight, starlight and dream-lift.",
    flightModes: [
      ["Normal mode", "Floats slowly, like a cloud."],
      ["Performer mode", "Bounces lightly, like dancing between stars."],
      ["Dream courage mode", "Moves forward steadily, as if pushed by a soft light."],
      ["When sensing unfairness", "It can move faster, but must never feel like a battle character."],
      ["When the magic tail wakes", "The tail and wings glow together, creating a short burst of dream speed."],
    ],
    rulesTitle: "Never-change design rules",
    designRules: [
      "The face never changes: two extremely wide-spaced black dot eyes and a small black X mouth.",
      "No smile, no open mouth, no teeth, no tongue, no eyebrows and no eyelashes.",
      "The body is Cloud Star™: a soft cloud shape, not a geometric star.",
      "The horns must be candy red, rounded, cute and never weapon-like.",
      "The wings must be tiny, round and cloud-like, never the main visual focus.",
      "The tail is usually hidden; when visible, it must remain smaller than the wings and never become a weapon.",
    ],
    closingKicker: "StarMonster wants to tell you",
    closingLines: [
      "Believe in yourself, believe in dreams",
      "Release imagination and let dreams shine",
      "STARMONSTER stays with you",
      "Dream together",
      "Shine together",
      "Sleep happily every night",
    ],
  },
  zh: {
    meet: "認識角色 IP",
    titleLead: "認識",
    hero: "來自一位 11 歲小女孩夢境裡的 Cloud Star™ 雲朵星星怪獸，給每一個人做夢想的勇氣。",
    definitionKicker: "官方設定",
    definitionTitle: "夢境生物。舞台能量。",
    definitionBody:
      "StarMonster 不是幫人完成夢想的角色，而是在一個人還不敢相信自己時，陪他重新相信。牠不是安靜守護型角色，牠是會跳出來、帶動氣氛、讓大家重新燃起勇氣的夢想夥伴。",
    storyBlocks: [
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
    ],
    profileKicker: "StarMonster 小檔案",
    profileTitle: "小檔案",
    profile: [
      ["名字", "StarMonster"],
      ["誕生地", "一位 11 歲小女孩的夢境"],
      ["種族", "Cloud Star™ 雲朵星星怪獸"],
      ["MBTI", "ESFP — The Performer"],
      ["人格", "夢境裡的小小表演家。活潑、愛玩、愛分享，也喜歡把平凡的一天變成閃閃發亮的舞台。"],
      ["使命", "給每一個人做夢想的勇氣。"],
    ],
    magicTitle: "雙魔法系統",
    magicBody: "這不是善與惡的對立，而是兩種勇氣的平衡。Little Angel 給牠自由飛行的能力，Little Devil 給牠保護善良的力量。",
    magicCards: [
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
    ],
    tailTitle: "尾巴不是武器，是守護訊號。",
    tailBody: "StarMonster 的小惡魔尾巴平時是隱藏的。只有當 Little Devil 小角的力量被喚醒時，尾巴才會悄悄出現，提醒大家：StarMonster 來保護夢想了。",
    tailTriggers: ["有人被欺負", "有人被說謊傷害", "有人被不公平對待", "有人嘲笑別人的夢想", "有人惡意破壞", "有人讓善良的人不敢發光"],
    flightTitle: "不是拍翅膀，是被夢托起來。",
    flightBody: "StarMonster 會飛，但不是靠翅膀揮動。牠的小天使翅膀是夢境魔法的出口，散出月光、星光與夢想浮力。",
    flightModes: [
      ["平常狀態", "慢慢漂浮，像雲。"],
      ["表演狀態", "輕快彈跳，像在星星之間跳舞。"],
      ["夢想勇氣模式", "穩定向前，像被一道溫柔的光推著前進。"],
      ["感應不公平時", "速度可以變快，但仍不可像戰鬥角色。"],
      ["魔法尾巴甦醒時", "尾巴與翅膀一起發光，形成短暫的夢境加速。"],
    ],
    rulesTitle: "設計不可變規則",
    designRules: [
      "臉永遠不變：兩顆極寬距離黑點眼，小小黑色 X 嘴。",
      "不可微笑、不可張嘴、不可露牙、不可吐舌、不可加眉毛或睫毛。",
      "身體是 Cloud Star™，像柔軟雲朵，不是幾何星星。",
      "小角必須是糖果紅、圓鈍、可愛，不是邪惡武器。",
      "翅膀必須小小的、圓圓的、像小雲朵，不能成為主視覺焦點。",
      "尾巴平時隱藏；出現時也必須小於翅膀，且不是攻擊武器。",
    ],
    closingKicker: "StarMonster 想告訴你",
    closingLines: ["相信自己，相信夢想", "釋放想像力，讓夢想發光", "STARMONSTER 陪著你", "一起做夢", "一起發光", "每天晚上開開心心睡個好覺"],
  },
};

export default function StarMonsterPage() {
  const { lang } = useLang();
  const copy = smCopy[lang];

  return (
    <>
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden border-b-2 border-[#080808] bg-[#FFF6F7] pt-16 text-[#080808]">
        <div className="absolute inset-x-0 top-16 z-10 border-y border-[#080808]/10 bg-[#F8C8C8] py-2 font-sans text-[0.68rem] font-black uppercase tracking-widest2 text-[#080808]">
          <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-8 whitespace-nowrap px-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>DREAM COURAGE MODE / ESFP THE PERFORMER / WING MAGIC FLIGHT / CLOUD STAR™</span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <Reveal className="relative z-10">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.meet}
            </p>
            <h1 className="mt-5 font-sans text-[clamp(4rem,10vw,9.5rem)] font-black uppercase leading-[0.78] tracking-normal text-[#080808] [font-family:var(--font-fraunces)]">
              {copy.titleLead}
              <span className="block text-[#F8C8C8] [-webkit-text-stroke:2px_#080808]">Star</span>
              <span className="block">Monster</span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-[clamp(1.55rem,3vw,2.75rem)] font-light leading-tight text-[#080808]">
              <BalancedText>
                {copy.hero}
              </BalancedText>
            </p>
          </Reveal>

          <Reveal className="relative min-h-[430px] lg:min-h-[650px]">
            <div className="absolute inset-4 rotate-[-4deg] border-2 border-[#080808] bg-[#F6E7D8] shadow-[10px_10px_0_#080808]" />
            <div className="absolute inset-x-0 top-16 h-[76%] rotate-[3deg] border-2 border-[#080808] bg-[#F8C8C8]" />
            <div className="absolute inset-x-8 top-24 h-[68%] border-2 border-[#080808] bg-white" />
            <Image
              src="/starmonster/starmonster_去背.png"
              alt="StarMonster character IP"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-contain px-4 pb-8 pt-10 drop-shadow-[10px_10px_0_rgba(11,11,12,0.22)]"
            />
            <div className="absolute bottom-8 left-2 rotate-[-5deg] border-2 border-[#080808] bg-white px-5 py-3 font-sans text-xs font-black uppercase tracking-wider2 shadow-[5px_5px_0_#080808]">
              70% Little Angel
            </div>
            <div className="absolute right-2 top-24 rotate-[7deg] bg-[#FF1F0F] px-5 py-3 font-sans text-xs font-black uppercase tracking-wider2 text-white shadow-[5px_5px_0_#080808]">
              30% Little Devil
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-b-2 border-[#080808] bg-[#080808] text-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-white lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal className="bg-[#F6E7D8] p-6 text-[#080808] lg:p-10">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.definitionKicker}
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal [font-family:var(--font-fraunces)]">
              {copy.definitionTitle}
            </h2>
            <p className="mt-7 max-w-xl font-sans text-lg font-bold leading-relaxed text-[#080808]/72">
              <BalancedText>
                {copy.definitionBody}
              </BalancedText>
            </p>
          </Reveal>

          <Reveal stagger className="bg-[#FFF6F7] p-6 text-[#080808] lg:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              {copy.storyBlocks.map((block, index) => (
                <article key={index} className="space-y-4 border-t-2 border-[#080808] pt-5">
                  {block.map((line) => (
                    <p key={line} className="font-sans text-base font-semibold leading-relaxed text-[#080808]/76">
                      {line}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#080808] bg-[#FFF6F7] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.profileKicker}
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal text-[#080808] [font-family:var(--font-fraunces)]">
              {copy.profileTitle}
            </h2>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-px border-2 border-[#080808] bg-[#080808] md:grid-cols-2">
            {copy.profile.map(([label, value]) => (
              <article key={label} className="bg-white p-5 lg:p-7">
                <p className="font-sans text-xs font-black uppercase tracking-widest2 text-[#FF1F0F]">{label}</p>
                <p className="mt-3 font-sans text-xl font-black leading-snug text-[#080808]">{value}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#080808] bg-[#080808] px-6 py-16 text-white lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F6E7D8]">
              Little Angel × Little Devil
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.1rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal [font-family:var(--font-fraunces)]">
              {copy.magicTitle}
            </h2>
            <p className="mt-6 max-w-3xl font-sans text-lg font-bold leading-relaxed text-white/72">
              <BalancedText>
                {copy.magicBody}
              </BalancedText>
            </p>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-px overflow-hidden border-2 border-white bg-white md:grid-cols-2">
            {copy.magicCards.map((card) => (
              <article key={card.title} className="bg-[#FFF6F7] p-6 text-[#080808] lg:p-10">
                <p className="font-sans text-xs font-black uppercase tracking-widest2 text-[#FF1F0F]">{card.label}</p>
                <h3 className="mt-4 font-sans text-4xl font-black uppercase leading-none [font-family:var(--font-fraunces)]">
                  {card.title}
                </h3>
                <p className="mt-5 font-sans text-base font-semibold leading-relaxed text-[#080808]/72">{card.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {card.points.map((point) => (
                    <span key={point} className="border-2 border-[#080808] bg-white px-4 py-2 font-sans text-sm font-black shadow-[3px_3px_0_#080808]">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal className="mt-10 border-2 border-white bg-[#FF1F0F] p-6 shadow-[8px_8px_0_#F6E7D8] lg:p-8">
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F6E7D8]">
              Magic Devil Tail
            </p>
            <h3 className="mt-4 font-sans text-4xl font-black uppercase leading-none [font-family:var(--font-fraunces)]">
              {copy.tailTitle}
            </h3>
            <p className="mt-5 max-w-3xl font-sans text-base font-bold leading-relaxed text-white/82">
              {copy.tailBody}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {copy.tailTriggers.map((trigger) => (
                <span key={trigger} className="border-2 border-white bg-[#080808] px-4 py-2 font-sans text-sm font-black text-white">
                  {trigger}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#080808] bg-[#F6E7D8] px-6 py-16 text-[#080808] lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              Wing Magic Flight System
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.1rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal [font-family:var(--font-fraunces)]">
              {copy.flightTitle}
            </h2>
            <p className="mt-6 max-w-xl font-sans text-lg font-bold leading-relaxed text-[#080808]/72">
              <BalancedText>
                {copy.flightBody}
              </BalancedText>
            </p>
          </Reveal>

          <Reveal stagger className="grid gap-px border-2 border-[#080808] bg-[#080808]">
            {copy.flightModes.map(([mode, body]) => (
              <article key={mode} className="grid gap-3 bg-[#FFF6F7] p-5 md:grid-cols-[0.35fr_0.65fr] md:items-center lg:p-6">
                <p className="font-sans text-lg font-black text-[#FF1F0F]">{mode}</p>
                <p className="font-sans text-base font-bold leading-relaxed text-[#080808]/74">{body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[#080808] bg-[#FFF6F7] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              Never change
            </p>
            <h2 className="mt-5 font-sans text-[clamp(3.1rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-normal text-[#080808] [font-family:var(--font-fraunces)]">
              {copy.rulesTitle}
            </h2>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-4 md:grid-cols-2">
            {copy.designRules.map((rule) => (
              <p key={rule} className="border-2 border-[#080808] bg-white p-5 font-sans text-base font-black leading-relaxed shadow-[4px_4px_0_#080808]">
                {rule}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F8C8C8] px-6 py-16 text-[#080808] lg:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F6E7D8]">
            {copy.closingKicker}
          </p>
          <div className="mt-6 space-y-3 font-display text-[clamp(2.2rem,5.4vw,5.8rem)] font-light leading-[0.98] [-webkit-text-stroke:1px_#080808]">
            {copy.closingLines.map((line) => (
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
