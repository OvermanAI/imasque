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
    <header className="border-b-2 border-[#0B0B0C] bg-[#F7EFF6]">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-24">
      <span className={`reveal in inline-block border-2 border-[#0B0B0C] bg-[#D9FF38] px-4 py-2 font-sans text-[0.72rem] font-black tracking-widest2 text-[#0B0B0C] shadow-[4px_4px_0_#0B0B0C] ${preserveCase ? "" : "uppercase"}`}>
        {index}
      </span>
      <h1 className={`mt-6 font-monster text-[clamp(4rem,12vw,9rem)] leading-[0.82] tracking-normal text-[#0B0B0C] animate-blurin ${preserveCase ? "" : "uppercase"}`}>
        <BalancedText>{title}</BalancedText>
      </h1>
      <p className="mt-6 max-w-2xl font-sans text-lg font-bold leading-relaxed text-[#0B0B0C]/70 text-balance animate-rise [animation-delay:0.2s]">
        <BalancedText>{intro}</BalancedText>
      </p>
      </div>
    </header>
  );
}
