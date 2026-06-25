"use client";

import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { BalancedText } from "@/components/BalancedText";
import { useLang } from "@/components/LanguageProvider";

const aboutCopy = {
  en: {
    intro: {
      index: "About / CxY",
      title: "About imasque",
      intro: "A brand where CxY and her dad turn imagination into something real.",
    },
    openingTitle: "I am CxY.",
    opening: [
      "I am CxY.",
      "An 11-year-old girl full of cuteness and creativity.",
      "imasque is a brand my dad and I imagined together.",
      "I want to make the fun pictures in my head real.",
      "Not just think about them.",
      "Not just draw them on paper.",
      "I want to try.",
      "I want to see whether my dream can become real.",
    ],
    whyTitle: "This is why imasque began.",
    whyBody: ["I like dreaming.", "I also like imagining strange, cute and interesting things.", "Sometimes I wonder:"],
    questions: [
      "What if an eye mask did not have to look ordinary?",
      "What if an eye mask could be as cool as sunglasses?",
      "What if my plush toys had their own eye masks too?",
      "What if every night before sleep, we all put on eye masks together, like we are travelling into dreams?",
    ],
    panels: [
      {
        title: "Dad said",
        accent: "Then let's make it and see.",
        lines: ["I told my dad these ideas.", "He did not say, 'That is only imagination.'"],
      },
      {
        title: "First dream",
        accent: "A two-tone sunglasses-shaped eye mask",
        lines: [
          "I want to make the first two-tone eye mask shaped like sunglasses.",
          "It should look a little cool.",
          "Also a little fun.",
          "But it still has to feel soft and comfortable.",
          "Before sleep, I love the feeling of having my own little ritual.",
        ],
      },
      {
        title: "Plush toys",
        accent: "Each one has its own dream.",
        lines: [
          "I also want to wear imasque myself in photos.",
          "Because this is something my dad and I imagined together, I want to be its model.",
          "I want to make different eye masks for more than ten of my favourite plush toys.",
          "They may have different colours, shapes and sleepy faces.",
          "Maybe each one has its own dream.",
        ],
      },
    ],
    buildKicker: "build with dad",
    buildTitle: "We try it step by step.",
    buildTogether: [
      "I think of many fun ideas.",
      "Dad helps me organize them.",
      "We look at colours together.",
      "We imagine shapes together.",
      "We build the website together.",
      "We find ways to make it real together.",
    ],
    buildExtra: [
      "Sometimes I suddenly think of something very strange.",
      "Dad asks me: What would it look like? Would it feel comfortable? How do you want to photograph it?",
    ],
    maskTitle: "Not just a mask.",
    maskBody: [
      "To me, imasque is not just making an eye mask.",
      "It is me bravely starting a brand.",
      "It is also how I let my imagination out.",
      "I want to believe in my dream and dare to make it.",
      "Even if I do not know what it will become at first, I can still make it step by step.",
    ],
    publicTitle: "imasque is the beginning of my imagination.",
    publicBody: "I will record the process of making imasque.",
    records: ["Ideas", "Colours", "Design", "Photos", "Website", "First real product", "The process of making the dream with dad", "Dreaming with my plush toys"],
  },
  zh: {
    intro: {
      index: "About / CxY",
      title: "About imasque",
      intro: "CxY 和爸爸一起把想像力做出來的品牌。",
    },
    openingTitle: "我是 CxY。",
    opening: [
      "我是 CxY。",
      "一個可愛、充滿創意的 11 歲小美女。",
      "imasque 是我和爸爸想出來的品牌。",
      "我想把腦袋裡那些很好玩的畫面，真的做出來。",
      "不是只有想一想。",
      "也不是只有畫在紙上。",
      "我想試試看。",
      "我想看看我的夢，可不可以變成真的。",
    ],
    whyTitle: "這就是 imasque 開始的原因。",
    whyBody: ["我喜歡做夢。", "也喜歡想很多奇奇怪怪、可愛又有趣的東西。", "有時候我會想："],
    questions: [
      "如果眼罩不是只有普通的樣子呢？",
      "如果眼罩可以像太陽眼鏡一樣酷呢？",
      "如果我的玩偶也有自己的眼罩呢？",
      "如果每天睡覺前，我們都一起戴上眼罩，好像要去夢裡旅行一樣呢？",
    ],
    panels: [
      { title: "爸爸說", accent: "那我們就把它做出來看看。", lines: ["我把這些想法告訴爸爸。", "爸爸沒有說：「這只是想像而已。」"] },
      {
        title: "第一個夢",
        accent: "太陽眼鏡造型的雙色眼罩",
        lines: [
          "我想做第一個太陽眼鏡造型的雙色眼罩。",
          "它看起來有一點酷。",
          "也有一點好玩。",
          "但戴起來還是要軟軟的、舒服的。",
          "因為睡覺前，我最喜歡那種：「自己專屬的儀式感」的感覺。",
        ],
      },
      {
        title: "玩偶們",
        accent: "每一個都有自己的夢。",
        lines: [
          "我也想自己戴上 imasque 拍照。",
          "因為這是我和爸爸一起想出來的東西，我想自己當它的模特兒。",
          "我還想幫我最喜歡的 10 多個玩偶，每一個都做一個不一樣的眼罩。",
          "牠們可能有不同顏色、不同造型、不同的睡覺表情。",
          "也可能每一個都有自己的夢。",
        ],
      },
    ],
    buildKicker: "一起打造",
    buildTitle: "我們就一步一步試。",
    buildTogether: [
      "我負責想很多好玩的點子。",
      "爸爸陪我把想法整理出來。",
      "一起看顏色。",
      "一起想造型。",
      "一起做網站。",
      "一起想辦法讓它變成真的。",
    ],
    buildExtra: ["有時候我會突然想到很奇怪的東西。", "爸爸就會問我：「那它會長什麼樣子？」「戴起來會舒服嗎？」「妳想怎麼拍照？」"],
    maskTitle: "Not just a mask.",
    maskBody: [
      "對我來說，imasque 不只是做眼罩。",
      "它是我勇敢開始做一個品牌。",
      "也是我把想像力放出來的方式。",
      "我想相信自己的夢，也想大膽去做。",
      "就算一開始還不知道會變成什麼樣子，也可以一步一步做出來。",
    ],
    publicTitle: "imasque 是我想像力的開始。",
    publicBody: "我會把 imasque 做出來的過程記錄下來。",
    records: ["想法", "顏色", "設計", "拍照", "網站", "第一個真的產品", "我和爸爸一起把夢做出來的過程", "我和玩偶們一起做夢的樣子"],
  },
};

export default function AboutPage() {
  const { lang } = useLang();
  const copy = aboutCopy[lang];

  return (
    <>
      <PageIntro index={copy.intro.index} title={copy.intro.title} intro={copy.intro.intro} preserveCase />

      <section className="bg-[#FFF6F7] px-6 pb-16 pt-12 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal className="space-y-7">
            <p className="max-w-3xl font-display text-[clamp(3rem,7vw,7rem)] leading-[0.82] text-[#080808]">
              <BalancedText>{copy.openingTitle}</BalancedText>
            </p>
            <div className="max-w-2xl space-y-4 font-sans text-lg font-bold leading-relaxed text-[#080808]/74">
              {copy.opening.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="inline-block bg-[#F8C8C8] px-5 py-3 font-couture text-3xl italic text-[#080808]">
              Dream More.
            </p>
          </Reveal>

          <Reveal className="relative overflow-hidden">
            <div className="absolute -left-4 -top-4 h-full w-full rotate-[-3deg] border-2 border-[#080808] bg-[#F6E7D8]" />
            <div className="relative border-2 border-[#080808] bg-white p-8 shadow-[8px_8px_0_#080808] lg:p-10">
              <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
                Why imasque exists
              </p>
              <h2 className="mt-5 font-display text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.82] text-[#080808]">
                <BalancedText>{copy.whyTitle}</BalancedText>
              </h2>
              <div className="mt-7 space-y-4 font-sans text-lg font-bold leading-relaxed text-[#080808]/72">
                {copy.whyBody.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                {copy.questions.map((question) => (
                  <p
                    key={question}
                    className="border-2 border-[#080808] bg-[#FFF6F7] p-4 font-sans text-base font-black leading-relaxed shadow-[3px_3px_0_#080808]"
                  >
                    {question}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-[#080808] bg-[#080808]">
        <Reveal stagger className="mx-auto grid max-w-7xl gap-px bg-[#080808] md:grid-cols-3">
          {copy.panels.map((panel) => (
            <StoryPanel key={panel.title} title={panel.title} accent={panel.accent}>
              {panel.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </StoryPanel>
          ))}
        </Reveal>
      </section>

      <section className="bg-[#FFF6F7] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#FF1F0F]">
              {copy.buildKicker}
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] text-[#080808]">
              <BalancedText>{copy.buildTitle}</BalancedText>
            </h2>
            <div className="mt-7 max-w-2xl space-y-4 font-sans text-lg font-bold leading-relaxed text-[#080808]/74">
              {copy.buildTogether.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {copy.buildExtra.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="border border-[#080808]/10 bg-[#F8C8C8] p-7 text-[#080808] lg:p-9">
            <h3 className="font-display text-5xl uppercase leading-none">{copy.maskTitle}</h3>
            <div className="mt-6 space-y-4 font-sans text-lg font-bold leading-relaxed text-[#080808]/72">
              {copy.maskBody.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t-2 border-[#080808] bg-[#080808] px-6 py-16 text-white lg:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#F6E7D8]">
            building in public
          </p>
          <h2 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] text-[#F8C8C8]">
            <BalancedText>{copy.publicTitle}</BalancedText>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-sans text-lg font-bold leading-relaxed text-white/76">
            {copy.publicBody}
          </p>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {copy.records.map((item) => (
              <span key={item} className="border-2 border-[#F8C8C8] px-4 py-2 font-sans text-sm font-black text-[#F8C8C8]">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-10 font-couture text-5xl italic text-[#F6E7D8]">Dream More.</p>
        </Reveal>
      </section>
    </>
  );
}

function StoryPanel({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-[#FFF6F7] p-7 lg:p-9">
      <h2 className="font-display text-5xl uppercase leading-none text-[#080808]">{title}</h2>
      <p className="mt-5 inline-block bg-[#FF1F0F] px-4 py-2 font-couture text-2xl italic text-white shadow-[4px_4px_0_#080808]">
        {accent}
      </p>
      <div className="mt-6 space-y-3 font-sans font-bold leading-relaxed text-[#080808]/72">{children}</div>
    </article>
  );
}
