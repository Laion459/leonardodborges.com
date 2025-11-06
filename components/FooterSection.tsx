"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" }
] as const;

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
      className="relative mt-16 flex flex-col gap-12 overflow-hidden bg-background px-5 pb-16 pt-20 text-foreground sm:px-6 md:gap-16 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.15),_transparent_65%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(140deg,_rgba(0,255,255,0.06)_0%,_transparent_60%)]" />

      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div className="space-y-5 md:space-y-6" data-footer-column>
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">
            Vamos criar algo lendário
          </p>
          <h2 className="font-display text-[2.6rem] uppercase leading-[1.05] tracking-[0.12em] sm:text-5xl sm:tracking-[0.16em] md:text-[3.5rem] lg:text-[4.2rem]">
            Sempre levando a luta para o código. <span className="text-accent">Vamos acelerar juntos?</span>
          </h2>
        </div>

        <div className="space-y-5 text-sm text-foreground/70 sm:text-base" data-footer-column>
          <p>
            Disponível para projetos freelance, consultorias e parcerias estratégicas. Conte comigo para transformar ideias em
            experiências digitais imersivas com GSAP, Next.js e muita narrativa visual.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-accent transition hover:text-accent/80 sm:text-sm"
            data-cursor="interactive"
          >
            Entre em contato
            <span className="block h-px w-8 bg-accent" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4" data-footer-column>
          <h3 className="text-xs uppercase tracking-[0.35em] text-foreground/50">Localização</h3>
          <p className="font-display text-2xl uppercase tracking-[0.18em] text-foreground sm:text-3xl">
            Florianópolis — SC
          </p>
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/40">Brasil | Fuso BRT</p>
        </div>

        <div className="space-y-4" data-footer-column>
          <h3 className="text-xs uppercase tracking-[0.35em] text-foreground/50">Navegação</h3>
          <nav className="flex flex-col gap-3 text-sm uppercase tracking-[0.28em] sm:text-[0.88rem]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 transition hover:text-accent"
                data-cursor="interactive"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4" data-footer-column>
          <h3 className="text-xs uppercase tracking-[0.35em] text-foreground/50">Conecte-se</h3>
          <ul className="flex flex-col gap-3 text-sm uppercase tracking-[0.28em] sm:text-[0.88rem]">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-foreground/70 transition hover:text-accent"
                  data-cursor="interactive"
                >
                  <span className="block h-px w-5 bg-foreground/30" aria-hidden />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-foreground/10 pt-6 text-xs uppercase tracking-[0.35em] text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Leonardo Dario Borges. Todos os direitos reservados.</span>
        <span className="text-foreground/40">Always bringing the fight — digital edition.</span>
      </div>
    </footer>
  );
}

