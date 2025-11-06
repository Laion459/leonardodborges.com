"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/on-track", label: "On Track" },
  { href: "/off-track", label: "Off Track" },
  { href: "/parcerias", label: "Parcerias" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contato", label: "Contato" }
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuItems = useMemo(() => NAV_LINKS, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="relative h-8 w-24 transition-opacity duration-300 ease-expo-out hover:opacity-80 sm:h-9 sm:w-28 md:h-10 md:w-32">
          <Image src="/img/logo-ciano.png" alt="Leonardo Dario Borges" fill priority className="object-contain" />
        </Link>
        <button
          type="button"
          onClick={handleToggleMenu}
          data-cursor="interactive"
          aria-expanded={menuOpen}
          aria-controls="ldb-menu-overlay"
          className={clsx(
            "group inline-flex items-center gap-3 rounded-full border border-foreground/25 px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em]",
            "text-foreground/70 transition duration-300 ease-expo-out hover:border-accent hover:text-accent sm:px-6 sm:py-2.5"
          )}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="block h-px w-8 bg-foreground/30 transition-colors duration-300 ease-expo-out group-hover:bg-accent" aria-hidden />
        </button>
      </header>

      <div
        id="ldb-menu-overlay"
        className={clsx(
          "pointer-events-none fixed inset-0 z-40 overflow-hidden transition-opacity duration-500 ease-expo-out",
          menuOpen ? "pointer-events-auto opacity-100" : "opacity-0"
        )}
      >
        <div className={clsx("absolute inset-0 bg-background/95 backdrop-blur-2xl transition-opacity duration-500 ease-expo-out", menuOpen ? "opacity-100" : "opacity-0")} />

        <div
          className={clsx(
            "relative flex h-full flex-col px-6 py-10 text-foreground sm:px-10 md:px-16",
            "transition-all duration-500 ease-expo-out",
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.35em] text-foreground/40">Selecione um destino</span>
            <span className="text-[0.62rem] uppercase tracking-[0.32em] text-foreground/45">Use scroll para navegar</span>
          </div>

          <nav className="menu-scroll mt-12 flex-1 overflow-y-auto pr-2">
            <ul className="flex flex-col divide-y divide-foreground/10">
              {menuItems.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-cursor="interactive"
                      className={clsx(
                        "group flex items-center justify-between gap-6 py-6 transition duration-300 ease-expo-out",
                        isActive ? "text-accent" : "text-foreground/80 hover:text-accent"
                      )}
                    >
                      <span className="text-6xl font-light text-accent sm:text-7xl md:text-8xl">{formatIndex(index)}</span>
                      <span className="flex-1 text-right text-xl uppercase tracking-[0.32em] sm:text-2xl md:text-[1.8rem]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-foreground/40">
            <span>Scroll — Cyan trail</span>
            <span>Leonardo Dario Borges</span>
          </div>
        </div>
      </div>
    </>
  );
}

