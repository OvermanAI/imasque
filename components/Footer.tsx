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
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="imasque — Dream More"
              className="relative block h-28 w-[min(82vw,400px)] overflow-hidden"
            >
              <Image
                src="/logo/IMASQUElogo.png"
                alt="imasque Dream More"
                fill
                sizes="(min-width: 768px) 400px, 82vw"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-5 font-sans text-sm font-bold leading-relaxed text-white/65">
              <BalancedText>{t(dict.footer.tagline, lang)}</BalancedText>
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 font-sans text-[0.72rem] font-black uppercase tracking-wider2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/68 transition hover:text-[#F8C8C8]">
                {t(dict.nav[l.key], lang)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/20 pt-6 text-[0.72rem] uppercase tracking-wider2 text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-couture text-xl italic normal-case tracking-normal text-[#F8C8C8]">
            {t(dict.footer.rights, lang)}
          </span>
          <span>© {year} imasque</span>
        </div>
      </div>
    </footer>
  );
}
