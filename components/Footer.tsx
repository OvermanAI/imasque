"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { BalancedText } from "@/components/BalancedText";
import { StarMonsterMark } from "@/components/StarMonsterMark";

const links = [
  { href: "/product", key: "product" as const },
  { href: "/journal", key: "journal" as const },
  { href: "/about", key: "about" as const },
];

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#0B0B0C] bg-[#0B0B0C] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-md">
            <Link href="/" aria-label="imasque — Dream More" className="inline-flex items-center gap-4">
              <StarMonsterMark className="h-16 w-16 text-[#D9FF38]" />
              <span className="font-monster text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.8] tracking-normal">
                ima<span className="text-[#FF2B9A]">sque</span>
              </span>
            </Link>
            <p className="mt-5 font-sans text-sm font-bold leading-relaxed text-white/65">
              <BalancedText>{t(dict.footer.tagline, lang)}</BalancedText>
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 font-sans text-[0.72rem] font-black uppercase tracking-wider2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="border-2 border-white bg-[#0B0B0C] px-3 py-2 text-white transition hover:bg-[#D9FF38] hover:text-[#0B0B0C]">
                {t(dict.nav[l.key], lang)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/20 pt-6 text-[0.72rem] uppercase tracking-wider2 text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-couture text-xl italic normal-case tracking-normal text-[#FF2B9A]">
            {t(dict.footer.rights, lang)}
          </span>
          <span>© {year} imasque</span>
        </div>
      </div>
    </footer>
  );
}
