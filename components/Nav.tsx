"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";

const links = [
  { href: "/starmonster", key: "starmonster" as const },
  { href: "/product", key: "product" as const },
  { href: "/journal", key: "journal" as const },
  { href: "/about", key: "about" as const },
];

export function Nav() {
  const { lang, toggle } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b-2 border-[#FFB8C8] bg-[#080808]">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            aria-label="imasque — Dream More"
            className="relative h-14 w-44 overflow-hidden transition-transform hover:-rotate-1 sm:w-56"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo/5.png"
              alt="imasque Dream More"
              fill
              priority
              sizes="(min-width: 640px) 224px, 176px"
              className="object-contain object-left"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2 font-sans text-[0.72rem] font-black uppercase tracking-wider2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`border-2 border-[#0B0B0C] px-3 py-2 transition ${
                    active
                      ? "bg-[#FFB8C8] text-[#080808] shadow-[4px_4px_0_#E01414]"
                      : "bg-[#080808] text-[#FFB8C8] hover:-translate-y-0.5 hover:bg-[#FFB8C8] hover:text-[#080808]"
                  }`}
                >
                  {t(dict.nav[l.key], lang)}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="border-2 border-[#FFB8C8] bg-[#080808] px-3 py-1.5 font-sans text-[0.72rem] font-black uppercase tracking-wider2 text-[#FFB8C8] shadow-[3px_3px_0_#E01414] transition hover:-translate-y-0.5 hover:bg-[#FFB8C8] hover:text-[#080808]"
            >
              {lang === "en" ? "中" : "EN"}
            </button>
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span
                className={`block h-[2px] w-6 bg-[#FFB8C8] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`block h-[2px] w-6 bg-[#FFB8C8] transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-[2px] w-6 bg-[#FFB8C8] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-b-2 border-[#FFB8C8] bg-[#080808]">
          <div className="px-6 py-6 flex flex-col gap-3 font-monster text-4xl uppercase">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-2 border-[#FFB8C8] bg-[#080808] px-4 py-3 text-[#FFB8C8] shadow-[4px_4px_0_#E01414] hover:bg-[#FFB8C8] hover:text-[#080808]"
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
