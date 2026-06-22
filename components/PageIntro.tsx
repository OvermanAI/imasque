"use client";

import { BalancedText } from "@/components/BalancedText";

export function PageIntro({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 lg:pt-28 pb-10">
      <span className="reveal in font-sans text-[0.75rem] uppercase tracking-widest2 text-dusk-deep">
        {index}
      </span>
      <h1 className="mt-5 font-display font-light text-[clamp(3rem,9vw,7rem)] leading-[0.88] tracking-brand text-ink animate-blurin">
        <BalancedText>{title}</BalancedText>
      </h1>
      <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink/60 text-balance animate-rise [animation-delay:0.2s]">
        <BalancedText>{intro}</BalancedText>
      </p>
    </header>
  );
}
