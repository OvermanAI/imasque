"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { BalancedText } from "@/components/BalancedText";

// UI-only for now — no backend wired up yet (by design).
export function DreamListForm({
  compact = false,
  buttonLabel,
  note,
  thanks,
}: {
  compact?: boolean;
  buttonLabel?: string;
  note?: string;
  thanks?: string;
}) {
  const { lang } = useLang();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // No backend yet — capture intent locally so the UI feels real.
    // eslint-disable-next-line no-console
    console.log("[Dream List] would subscribe:", email);
    setDone(true);
  };

  if (done) {
    return (
      <p className="font-couture text-2xl italic text-[#FF1F0F]">
        {thanks ?? t(dict.home.emailThanks, lang)}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div
        className={`flex flex-col sm:flex-row gap-3 ${compact ? "" : "max-w-xl"}`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t(dict.home.emailPlaceholder, lang)}
          className="flex-1 border border-[#080808]/25 bg-white px-5 py-3.5 font-sans font-bold text-[#080808] placeholder:text-[#080808]/35 outline-none transition focus:border-[#080808] focus:bg-[#FFF6F7]"
        />
        <button
          type="submit"
          className="bg-[#FF1F0F] px-7 py-3.5 font-sans text-sm font-black uppercase tracking-wider2 text-white transition hover:bg-[#080808]"
        >
          {buttonLabel ?? t(dict.home.emailButton, lang)}
        </button>
      </div>
      <p className="mt-4 font-sans text-xs font-bold text-[#080808]/50">
        <BalancedText>{note ?? t(dict.home.emailNote, lang)}</BalancedText>
      </p>
    </form>
  );
}
