"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const NEXT_MILESTONE = {
  title: "Sprint atual",
  subtitle: "Desenvolvimento Full Stack e Product Management",
  location: "Florianópolis, Santa Catarina, Brasil",
  timeframe: "Em andamento — Eleven Soft",
  description:
    "Continuando o desenvolvimento de produtos digitais completos na Eleven Soft, com foco em Keyring, ESH, refatoração de sites e integrações. Papel estratégico de Product Manager informal, liderando projetos críticos e gerenciando entregas de alto valor.",
  badges: ["Laravel", "React", "Next.js", "Docker", "PostgreSQL"]
} as const;

const HIGHLIGHT_STATS = [
  { label: "Última conquista", value: "Keyring", detail: "App completo de gestão de licenças" },
  { label: "Empresa", value: "Eleven Soft", detail: "Desenvolvedor Full Stack desde Fev 2025" },
  { label: "Disponibilidade", value: "Aberto", detail: "Oportunidades em Full Stack e projetos estratégicos" }
] as const;

export function NextMilestoneSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-milestone-animate]"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto mt-12 flex w-full max-w-6xl flex-col gap-8 rounded-2xl border border-foreground/10 bg-background/80 px-4 py-10 text-foreground backdrop-blur sm:mt-16 sm:gap-10 sm:rounded-[3rem] sm:px-6 sm:py-12 md:mt-20 md:px-12 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.12),_transparent_70%)] sm:rounded-[3rem]" />

      <header className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2 sm:space-y-3" data-milestone-animate>
          <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">Próxima entrega</p>
          <h2 className="font-display text-xl uppercase tracking-[0.16em] sm:text-[2.3rem] sm:tracking-[0.18em] md:text-4xl lg:text-[3.1rem]">
            Próxima corrida no mapa
            <span className="block text-accent">On Track</span>
          </h2>
        </div>
        <div className="flex flex-col gap-1.5 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/45 sm:gap-2 sm:text-xs sm:tracking-[0.32em] md:text-right" data-milestone-animate>
          <span>Atualizado em 06 • 2025</span>
          <span>Pipeline revisado semanalmente</span>
        </div>
      </header>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]" data-milestone-animate>
        <div className="space-y-4 sm:space-y-5">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/45 sm:text-[0.7rem] sm:tracking-[0.32em]">{NEXT_MILESTONE.title}</p>
          <h3 className="font-display text-xl uppercase tracking-[0.12em] text-foreground sm:text-[2.1rem] sm:tracking-[0.14em] md:text-[2.4rem]">
            {NEXT_MILESTONE.subtitle}
          </h3>
          <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/45 sm:gap-4 sm:text-xs sm:tracking-[0.3em]">
            <span>{NEXT_MILESTONE.location}</span>
            <span className="rounded-full border border-foreground/20 px-3 py-1 sm:px-4">{NEXT_MILESTONE.timeframe}</span>
          </div>
          <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">{NEXT_MILESTONE.description}</p>

          <div className="flex flex-wrap gap-2">
            {NEXT_MILESTONE.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.26em] text-accent sm:px-4 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.28em]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-2xl border border-foreground/10 bg-background/85 p-5 backdrop-blur sm:gap-5 sm:rounded-[2.5rem] sm:p-6">
          {HIGHLIGHT_STATS.map((item) => (
            <div key={item.label} className="rounded-xl border border-foreground/10 bg-background/70 p-4 sm:rounded-2xl sm:p-5">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/45 sm:text-[0.62rem] sm:tracking-[0.32em]">{item.label}</p>
              <p className="mt-2 font-display text-xl uppercase tracking-[0.12em] text-foreground sm:mt-3 sm:text-[1.6rem] sm:tracking-[0.14em]">{item.value}</p>
              <p className="mt-1.5 text-xs text-foreground/65 sm:mt-2 sm:text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

