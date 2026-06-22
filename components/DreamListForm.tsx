"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { BalancedText } from "@/components/BalancedText";

// UI-only for now — no backend wired up yet (by design).
export function DreamListForm({ compact = false }: { compact?: boolean }) {
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
      <p className="font-display text-2xl text-dusk-deep">
        {t(dict.home.emailThanks, lang)}
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
          className="flex-1 bg-cream/70 border border-ink/15 rounded-full px-6 py-3.5 font-sans text-ink placeholder:text-ink/35 outline-none focus:border-dusk-deep focus:ring-1 focus:ring-dusk-deep/30 transition"
        />
        <button
          type="submit"
          className="group relative overflow-hidden rounded-full bg-ink px-7 py-3.5 font-sans text-sm uppercase tracking-wider2 text-cream transition-colors hover:bg-dusk-deep"
        >
          {t(dict.home.emailButton, lang)}
        </button>
      </div>
      <p className="mt-3 font-sans text-xs text-ink/40">
        <BalancedText>{t(dict.home.emailNote, lang)}</BalancedText>
      </p>
    </form>
  );
}
