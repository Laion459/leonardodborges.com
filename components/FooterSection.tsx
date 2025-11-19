"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { Route } from "next";
import { NAVIGATION_LINKS } from "@/lib/data/navigation";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/borgesleonardod/" },
  { label: "GitHub", href: "https://github.com/Laion459" },
  { label: "Instagram", href: "https://www.instagram.com/laionzzzz/" },
  { label: "E-mail", href: "mailto:laion459@gmail.com" }
] as const;

export function FooterSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const columns = section.querySelectorAll("[data-footer-column]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        columns,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative mt-12 flex flex-col gap-10 overflow-hidden bg-background px-4 pb-12 pt-16 text-foreground sm:mt-16 sm:gap-12 sm:px-5 sm:pb-16 sm:pt-20 md:gap-16 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.15),_transparent_65%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(140deg,_rgba(0,255,255,0.06)_0%,_transparent_60%)]" />

      <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div className="space-y-4 sm:space-y-5 md:space-y-6" data-footer-column>
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">
            Vamos criar algo lendário
          </p>
          <h2 className="font-display text-2xl uppercase leading-[1.05] tracking-[0.1em] sm:text-[2.6rem] sm:tracking-[0.12em] md:text-5xl md:tracking-[0.16em] lg:text-[3.5rem] xl:text-[4.2rem]">
            Sempre levando a luta para o código. <span className="text-accent">Vamos acelerar juntos?</span>
          </h2>
        </div>

        <div className="space-y-4 text-sm text-foreground/70 sm:space-y-5 sm:text-base" data-footer-column>
          <p>
            Disponível para projetos freelance, consultorias e parcerias estratégicas. Conte comigo para transformar ideias em
            experiências digitais imersivas com GSAP, Next.js e muita narrativa visual.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent transition hover:text-accent/80 sm:gap-3 sm:text-sm sm:tracking-[0.32em]"
            data-cursor="interactive"
          >
            Entre em contato
            <span className="block h-px w-6 bg-accent sm:w-8" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3 sm:space-y-4" data-footer-column>
          <h3 className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/50 sm:text-xs sm:tracking-[0.35em]">Localização</h3>
          <p className="font-display text-xl uppercase tracking-[0.16em] text-foreground sm:text-2xl sm:tracking-[0.18em] md:text-3xl">
            Florianópolis — SC
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/40 sm:text-xs sm:tracking-[0.35em]">Brasil | Fuso BRT</p>
        </div>

        <div className="space-y-3 sm:space-y-4" data-footer-column>
          <h3 className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/50 sm:text-xs sm:tracking-[0.35em]">Navegação</h3>
          <nav className="flex flex-col gap-2.5 text-xs uppercase tracking-[0.26em] sm:gap-3 sm:text-sm sm:tracking-[0.28em] md:text-[0.88rem]">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href as Route}
                className="text-foreground/70 transition hover:text-accent"
                data-cursor="interactive"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3 sm:space-y-4" data-footer-column>
          <h3 className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/50 sm:text-xs sm:tracking-[0.35em]">Conecte-se</h3>
          <ul className="flex flex-col gap-2.5 text-xs uppercase tracking-[0.26em] sm:gap-3 sm:text-sm sm:tracking-[0.28em] md:text-[0.88rem]">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-foreground/70 transition hover:text-accent"
                  data-cursor="interactive"
                >
                  <span className="block h-px w-4 bg-foreground/30 sm:w-5" aria-hidden />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-foreground/10 pt-5 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/40 sm:gap-4 sm:flex-row sm:items-center sm:justify-between sm:pt-6 sm:text-xs sm:tracking-[0.35em]">
        <span>© {new Date().getFullYear()} Leonardo Dario Borges. Todos os direitos reservados.</span>
        <span className="text-foreground/40">Always bringing the fight — digital edition.</span>
      </div>
    </footer>
  );
}

