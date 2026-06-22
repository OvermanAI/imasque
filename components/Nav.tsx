"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";

const links = [
  { href: "/shop", key: "shop" as const },
  { href: "/collections", key: "collections" as const },
  { href: "/journal", key: "journal" as const },
  { href: "/about", key: "about" as const },
];

export function Nav() {
  const { lang, toggle } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="backdrop-blur-md bg-[#080808]/90 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            aria-label="imasque — Dream More"
            className="flex items-center transition-opacity hover:opacity-70"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="imasque"
              width={1904}
              height={611}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <div className="hidden md:flex items-center gap-9 font-sans text-[0.82rem] uppercase tracking-wider2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative py-1 transition-colors ${
                    active ? "text-cream" : "text-white/55 hover:text-cream"
                  }`}
                >
                  {t(dict.nav[l.key], lang)}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-apricot-soft" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="font-sans text-[0.72rem] uppercase tracking-wider2 text-white/65 hover:text-cream transition-colors border border-white/20 rounded-full px-3 py-1.5"
            >
              {lang === "en" ? "中" : "EN"}
            </button>
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span
                className={`block h-px w-6 bg-cream transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span className={`block h-px w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-px w-6 bg-cream transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-md border-b border-white/10">
          <div className="px-6 py-6 flex flex-col gap-5 font-display text-2xl">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-cream/80 hover:text-cream lowercase"
              >
                {t(dict.nav[l.key], lang)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
