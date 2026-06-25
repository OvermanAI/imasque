"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { BalancedText } from "@/components/BalancedText";

const links = [
  { href: "/product", key: "product" as const },
  { href: "/about", key: "about" as const },
];

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#F8C8C8]/25 bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Link
          href="/"
          aria-label="imasque — Dream More"
          className="relative mx-auto block h-36 w-full max-w-5xl overflow-hidden sm:h-52 lg:h-72"
        >
          <Image
            src="/logo/IMASQUElogo.png"
            alt="imasque Dream More"
            fill
            sizes="(min-width: 1024px) 960px, 92vw"
            className="object-contain object-center"
          />
        </Link>

        <div className="mt-12 flex flex-col gap-8 border-t border-white/20 pt-8 md:flex-row md:items-start md:justify-between">
          <p className="max-w-xl font-sans text-sm font-bold leading-relaxed text-white/65">
            <BalancedText>{t(dict.footer.tagline, lang)}</BalancedText>
          </p>
          <nav className="flex flex-wrap gap-5 font-sans text-[0.72rem] font-black uppercase tracking-wider2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/68 transition hover:text-[#F8C8C8]">
                {t(dict.nav[l.key], lang)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 text-[0.72rem] uppercase tracking-wider2 text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-sans text-sm font-black tracking-widest2 text-[#FF1F0F]">
            {t(dict.footer.rights, lang)}
          </span>
          <span>© {year} imasque</span>
        </div>
      </div>
    </footer>
  );
}
