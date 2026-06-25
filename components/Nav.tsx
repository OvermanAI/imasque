"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import { dict, t } from "@/lib/dictionary";

const leftLinks = [
  { href: "/about", key: "about" as const },
  { href: "/product", key: "product" as const },
];

const rightLinks = [
  { href: "/starmonster", key: "starmonster" as const },
];

const mobileLinks = [...leftLinks, ...rightLinks];

export function Nav() {
  const { lang, toggle } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-[#F8C8C8]/25 bg-[#080808]">
        <nav className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-6 sm:h-28 lg:px-10">
          <div className="hidden min-w-0 flex-1 items-center gap-8 font-sans text-[0.72rem] font-black uppercase tracking-wider2 md:flex">
            {leftLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`transition ${
                    active
                      ? "text-[#FF1F0F]"
                      : "text-white hover:text-[#FF1F0F]"
                  }`}
                >
                  {t(dict.nav[l.key], lang)}
                </Link>
              );
            })}
          </div>

          <Link
            href="/"
            aria-label="imasque — Dream More"
            className="absolute left-1/2 top-1/2 h-20 w-52 -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:h-24 sm:w-80"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo/IMASQUElogo.png"
              alt="imasque Dream More"
              fill
              priority
              sizes="(min-width: 640px) 320px, 256px"
              className="object-contain object-center"
            />
          </Link>

          <div className="ml-auto flex flex-1 items-center justify-end gap-4">
            <div className="hidden items-center gap-8 font-sans text-[0.72rem] font-black uppercase tracking-wider2 md:flex">
              {rightLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`transition ${
                      active
                        ? "text-[#FF1F0F]"
                        : "text-white hover:text-[#FF1F0F]"
                    }`}
                  >
                    {t(dict.nav[l.key], lang)}
                  </Link>
                );
              })}
            </div>
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="border border-[#F8C8C8]/55 bg-[#080808] px-3 py-1.5 font-sans text-[0.72rem] font-black uppercase tracking-wider2 text-white transition hover:border-[#FF1F0F] hover:text-[#FF1F0F]"
            >
              {lang === "en" ? "中" : "EN"}
            </button>
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span
                className={`block h-[2px] w-6 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`block h-[2px] w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-[2px] w-6 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-b border-[#F8C8C8]/25 bg-[#080808] md:hidden">
          <div className="flex flex-col gap-4 px-6 py-7 font-sans text-sm font-black uppercase tracking-wider2">
            {mobileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border border-[#F8C8C8]/30 px-4 py-3 text-white hover:border-[#FF1F0F] hover:text-[#FF1F0F]"
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
