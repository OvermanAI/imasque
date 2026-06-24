"use client";

import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { BalancedText } from "@/components/BalancedText";

const opening = [
  "我是 CxY。",
  "一個可愛、充滿創意的 11 歲小美女。",
  "imasque 是我和爸爸想出來的品牌。",
  "我想把腦袋裡那些很好玩的畫面，真的做出來。",
  "不是只有想一想。",
  "也不是只有畫在紙上。",
  "我想試試看。",
  "我想看看我的夢，可不可以變成真的。",
];

const questions = [
  "如果眼罩不是只有普通的樣子呢？",
  "如果眼罩可以像太陽眼鏡一樣酷呢？",
  "如果我的玩偶也有自己的眼罩呢？",
  "如果每天睡覺前，我們都一起戴上眼罩，好像要去夢裡旅行一樣呢？",
];

const productDream = [
  "我想做第一個太陽眼鏡造型的雙色眼罩。",
  "它看起來有一點酷。",
  "也有一點好玩。",
  "但戴起來還是要軟軟的、舒服的。",
  "因為睡覺前，我最喜歡那種：「自己專屬的儀式感」的感覺。",
];

const plushDream = [
  "我也想自己戴上 imasque 拍照。",
  "因為這是我和爸爸一起想出來的東西，我想自己當它的模特兒。",
  "我還想幫我最喜歡的 10 多個玩偶，每一個都做一個不一樣的眼罩。",
  "牠們可能有不同顏色、不同造型、不同的睡覺表情。",
  "也可能每一個都有自己的夢。",
];

const buildTogether = [
  "我負責想很多好玩的點子。",
  "爸爸陪我把想法整理出來。",
  "一起看顏色。",
  "一起想造型。",
  "一起做網站。",
  "一起想辦法讓它變成真的。",
];

const records = ["想法", "顏色", "設計", "拍照", "網站", "第一個真的產品", "我和爸爸一起把夢做出來的過程", "我和玩偶們一起做夢的樣子"];

export default function AboutPage() {
  return (
    <>
      <PageIntro index="About / CxY" title="About imasque" intro="CxY 和爸爸一起把想像力做出來的品牌。" />

      <section className="bg-[#F7EFF6] px-6 pb-16 pt-12 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal className="space-y-7">
            <p className="max-w-3xl font-monster text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] text-[#0B0B0C]">
              <BalancedText>我是 CxY。</BalancedText>
            </p>
            <div className="max-w-2xl space-y-4 font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/74">
              {opening.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="inline-block rotate-[-2deg] bg-[#FF2B9A] px-5 py-3 font-couture text-3xl italic text-white shadow-[5px_5px_0_#0B0B0C]">
              Dream More.
            </p>
          </Reveal>

          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rotate-[-3deg] border-2 border-[#0B0B0C] bg-[#D9FF38]" />
            <div className="relative border-2 border-[#0B0B0C] bg-white p-8 shadow-[8px_8px_0_#0B0B0C] lg:p-10">
              <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
                Why imasque exists
              </p>
              <h2 className="mt-5 font-monster text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.82] text-[#0B0B0C]">
                <BalancedText>這就是 imasque 開始的原因。</BalancedText>
              </h2>
              <div className="mt-7 space-y-4 font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/72">
                <p>我喜歡做夢。</p>
                <p>也喜歡想很多奇奇怪怪、可愛又有趣的東西。</p>
                <p>有時候我會想：</p>
              </div>
              <div className="mt-6 grid gap-3">
                {questions.map((question) => (
                  <p
                    key={question}
                    className="border-2 border-[#0B0B0C] bg-[#F7EFF6] p-4 font-sans text-base font-black leading-relaxed shadow-[3px_3px_0_#0B0B0C]"
                  >
                    {question}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-[#0B0B0C] bg-[#0B0B0C]">
        <Reveal stagger className="mx-auto grid max-w-7xl gap-px bg-[#0B0B0C] md:grid-cols-3">
          <StoryPanel title="爸爸說" accent="那我們就把它做出來看看。">
            <p>我把這些想法告訴爸爸。</p>
            <p>爸爸沒有說：「這只是想像而已。」</p>
          </StoryPanel>
          <StoryPanel title="第一個夢" accent="太陽眼鏡造型的雙色眼罩">
            {productDream.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </StoryPanel>
          <StoryPanel title="玩偶們" accent="每一個都有自己的夢。">
            {plushDream.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </StoryPanel>
        </Reveal>
      </section>

      <section className="bg-[#F7EFF6] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#E01414]">
              build with dad
            </p>
            <h2 className="mt-5 max-w-3xl font-monster text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] text-[#0B0B0C]">
              <BalancedText>我們就一步一步試。</BalancedText>
            </h2>
            <div className="mt-7 max-w-2xl space-y-4 font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/74">
              {buildTogether.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>有時候我會突然想到很奇怪的東西。</p>
              <p>爸爸就會問我：「那它會長什麼樣子？」「戴起來會舒服嗎？」「妳想怎麼拍照？」</p>
            </div>
          </Reveal>

          <Reveal className="border-2 border-[#0B0B0C] bg-[#FF2B9A] p-7 text-white shadow-[8px_8px_0_#0B0B0C] lg:p-9">
            <h3 className="font-monster text-5xl uppercase leading-none">Not just a mask.</h3>
            <div className="mt-6 space-y-4 font-sans text-lg font-bold leading-relaxed text-white/90">
              <p>對我來說，imasque 不只是做眼罩。</p>
              <p>它是我勇敢開始做一個品牌。</p>
              <p>也是我把想像力放出來的方式。</p>
              <p>我想相信自己的夢，也想大膽去做。</p>
              <p>就算一開始還不知道會變成什麼樣子，也可以一步一步做出來。</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t-2 border-[#0B0B0C] bg-[#0B0B0C] px-6 py-16 text-white lg:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-[0.72rem] font-black uppercase tracking-widest2 text-[#D9FF38]">
            building in public
          </p>
          <h2 className="mt-5 font-monster text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] text-[#FFB8C8]">
            <BalancedText>imasque 是我想像力的開始。</BalancedText>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-sans text-lg font-bold leading-relaxed text-white/76">
            我會把 imasque 做出來的過程記錄下來。
          </p>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {records.map((item) => (
              <span key={item} className="border-2 border-[#FFB8C8] px-4 py-2 font-sans text-sm font-black text-[#FFB8C8]">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-10 font-couture text-5xl italic text-[#D9FF38]">Dream More.</p>
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
    <article className="bg-[#F7EFF6] p-7 lg:p-9">
      <h2 className="font-monster text-5xl uppercase leading-none text-[#0B0B0C]">{title}</h2>
      <p className="mt-5 inline-block bg-[#E01414] px-4 py-2 font-couture text-2xl italic text-white shadow-[4px_4px_0_#0B0B0C]">
        {accent}
      </p>
      <div className="mt-6 space-y-3 font-sans font-bold leading-relaxed text-[#0B0B0C]/72">{children}</div>
    </article>
  );
}
