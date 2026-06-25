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
  { href: "/about", key: "about" as const },
];

export function Nav() {
  const { lang, toggle } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-[#F8C8C8]/35 bg-[#080808]/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            aria-label="imasque — Dream More"
            className="relative h-16 w-56 overflow-hidden sm:w-72"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo/IMASQUElogo.png"
              alt="imasque Dream More"
              fill
              priority
              sizes="(min-width: 640px) 288px, 224px"
              className="object-contain object-left"
            />
          </Link>

          <div className="hidden items-center gap-7 font-sans text-[0.72rem] font-black uppercase tracking-wider2 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`transition ${
                    active
                      ? "text-[#F8C8C8]"
                      : "text-white/72 hover:text-[#F8C8C8]"
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
              className="border border-[#F8C8C8]/55 bg-[#080808] px-3 py-1.5 font-sans text-[0.72rem] font-black uppercase tracking-wider2 text-[#F8C8C8] transition hover:bg-[#F8C8C8] hover:text-[#080808]"
            >
              {lang === "en" ? "中" : "EN"}
            </button>
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span
                className={`block h-[2px] w-6 bg-[#F8C8C8] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`block h-[2px] w-6 bg-[#F8C8C8] transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-[2px] w-6 bg-[#F8C8C8] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-b border-[#F8C8C8]/35 bg-[#080808] md:hidden">
          <div className="flex flex-col gap-4 px-6 py-7 font-sans text-sm font-black uppercase tracking-wider2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border border-[#F8C8C8]/40 px-4 py-3 text-[#F8C8C8] hover:bg-[#F8C8C8] hover:text-[#080808]"
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
