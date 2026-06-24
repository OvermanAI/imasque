"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";
import { StarMonsterMark } from "@/components/StarMonsterMark";

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
      <div className="border-b-2 border-[#0B0B0C] bg-[#F7EFF6]">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            aria-label="imasque — Dream More"
            className="flex items-center gap-3 transition-transform hover:-rotate-1"
            onClick={() => setOpen(false)}
          >
            <StarMonsterMark className="h-9 w-9 text-[#D9FF38]" />
            <span className="font-monster text-[1.55rem] uppercase leading-none tracking-normal text-[#0B0B0C]">
              ima<span className="text-[#FF2B9A]">sque</span>
            </span>
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
                      ? "bg-[#FF2B9A] text-white shadow-[4px_4px_0_#0B0B0C]"
                      : "bg-white text-[#0B0B0C] hover:-translate-y-0.5 hover:bg-[#D9FF38]"
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
              className="border-2 border-[#0B0B0C] bg-[#D9FF38] px-3 py-1.5 font-sans text-[0.72rem] font-black uppercase tracking-wider2 text-[#0B0B0C] shadow-[3px_3px_0_#0B0B0C] transition hover:-translate-y-0.5"
            >
              {lang === "en" ? "中" : "EN"}
            </button>
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span
                className={`block h-[2px] w-6 bg-[#0B0B0C] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`block h-[2px] w-6 bg-[#0B0B0C] transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-[2px] w-6 bg-[#0B0B0C] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-b-2 border-[#0B0B0C] bg-[#F7EFF6]">
          <div className="px-6 py-6 flex flex-col gap-3 font-monster text-4xl uppercase">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-2 border-[#0B0B0C] bg-white px-4 py-3 text-[#0B0B0C] shadow-[4px_4px_0_#0B0B0C] hover:bg-[#D9FF38]"
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
