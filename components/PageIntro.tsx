"use client";

import { BalancedText } from "@/components/BalancedText";

export function PageIntro({
  index,
  title,
  intro,
  preserveCase = false,
}: {
  index: string;
  title: string;
  intro: string;
  preserveCase?: boolean;
}) {
  return (
    <header className="border-b border-[#080808]/10 bg-[#FFF6F7]">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-24">
      <span className={`reveal in inline-block font-sans text-[0.72rem] font-black tracking-widest2 text-[#FF1F0F] ${preserveCase ? "" : "uppercase"}`}>
        {index}
      </span>
      <h1 className={`mt-6 font-display text-[clamp(3.6rem,10vw,8rem)] font-semibold leading-[0.88] tracking-normal text-[#080808] animate-blurin ${preserveCase ? "" : "uppercase"}`}>
        <BalancedText>{title}</BalancedText>
      </h1>
      <p className="mt-6 max-w-2xl font-sans text-lg font-semibold leading-relaxed text-[#080808]/66 text-balance animate-rise [animation-delay:0.2s]">
        <BalancedText>{intro}</BalancedText>
      </p>
      </div>
    </header>
  );
}
