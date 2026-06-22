"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";

const links = [
  { href: "/shop", key: "shop" as const },
  { href: "/collections", key: "collections" as const },
  { href: "/journal", key: "journal" as const },
  { href: "/about", key: "about" as const },
];

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-md">
            <Link href="/" aria-label="imasque — Dream More" className="inline-block">
              <Image
                src="/logo.png"
                alt="imasque"
                width={1904}
                height={611}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 font-sans text-sm text-ink/55 leading-relaxed">
              {t(dict.footer.tagline, lang)}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-[0.8rem] uppercase tracking-wider2 text-ink/60">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
                {t(dict.nav[l.key], lang)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[0.72rem] uppercase tracking-wider2 text-ink/40">
          <span className="font-display text-base lowercase tracking-normal text-dusk-deep/80 normal-case">
            {t(dict.footer.rights, lang)}
          </span>
          <span>© {year} imasque</span>
        </div>
      </div>
    </footer>
  );
}
