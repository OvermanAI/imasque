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
      <p className="font-couture text-2xl italic text-[#FF2B9A]">
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
          className="flex-1 border-2 border-[#0B0B0C] bg-white px-5 py-3.5 font-sans font-bold text-[#0B0B0C] placeholder:text-[#0B0B0C]/35 outline-none shadow-[4px_4px_0_#0B0B0C] transition focus:bg-[#D9FF38]"
        />
        <button
          type="submit"
          className="group relative overflow-hidden border-2 border-[#0B0B0C] bg-[#E01414] px-7 py-3.5 font-sans text-sm font-black uppercase tracking-wider2 text-white shadow-[4px_4px_0_#0B0B0C] transition hover:-translate-y-0.5 hover:bg-[#FF2B9A]"
        >
          {buttonLabel ?? t(dict.home.emailButton, lang)}
        </button>
      </div>
      <p className="mt-4 font-sans text-xs font-bold text-[#0B0B0C]/50">
        <BalancedText>{note ?? t(dict.home.emailNote, lang)}</BalancedText>
      </p>
    </form>
  );
}
