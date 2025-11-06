"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 lg:px-10">
      <Link
        href="/"
        className="text-sm uppercase tracking-[0.35em] text-foreground/70 transition hover:text-accent"
      >
        LDB
      </Link>
      <nav className="flex gap-4 text-xs uppercase tracking-[0.25em] lg:gap-6">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative pb-1 text-foreground/60 transition-colors duration-300 ease-expo-out",
                isActive ? "text-accent" : "hover:text-foreground"
              )}
            >
              <span>{link.label}</span>
              <span
                className={clsx(
                  "pointer-events-none absolute left-0 top-full h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-expo-out",
                  isActive && "scale-x-100"
                )}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

