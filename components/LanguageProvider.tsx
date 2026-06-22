"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/dictionary";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("imasque-lang") as Lang | null;
    if (saved === "en" || saved === "zh") {
      setLangState(saved);
      document.documentElement.lang = saved === "zh" ? "zh-Hant" : "en";
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("imasque-lang", l);
    document.documentElement.lang = l === "zh" ? "zh-Hant" : "en";
  };

  const toggle = () => setLang(lang === "en" ? "zh" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
