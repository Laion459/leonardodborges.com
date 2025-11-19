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
      className="relative mx-auto mt-16 flex w-full max-w-6xl flex-col gap-10 rounded-[3rem] border border-foreground/10 bg-background/80 px-6 py-12 text-foreground backdrop-blur sm:px-8 md:mt-20 md:px-12 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.12),_transparent_70%)]" />

      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3" data-milestone-animate>
          <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">Próxima entrega</p>
          <h2 className="font-display text-[2.3rem] uppercase tracking-[0.18em] sm:text-4xl md:text-[3.1rem]">
            Próxima corrida no mapa
            <span className="block text-accent">On Track</span>
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.32em] text-foreground/45 md:text-right" data-milestone-animate>
          <span>Atualizado em 06 • 2025</span>
          <span>Pipeline revisado semanalmente</span>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]" data-milestone-animate>
        <div className="space-y-5">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-foreground/45">{NEXT_MILESTONE.title}</p>
          <h3 className="font-display text-[2.1rem] uppercase tracking-[0.14em] text-foreground sm:text-[2.4rem]">
            {NEXT_MILESTONE.subtitle}
          </h3>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-foreground/45">
            <span>{NEXT_MILESTONE.location}</span>
            <span className="rounded-full border border-foreground/20 px-4 py-1">{NEXT_MILESTONE.timeframe}</span>
          </div>
          <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">{NEXT_MILESTONE.description}</p>

          <div className="flex flex-wrap gap-2">
            {NEXT_MILESTONE.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-accent"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 rounded-[2.5rem] border border-foreground/10 bg-background/85 p-6 backdrop-blur">
          {HIGHLIGHT_STATS.map((item) => (
            <div key={item.label} className="rounded-2xl border border-foreground/10 bg-background/70 p-5">
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-foreground/45">{item.label}</p>
              <p className="mt-3 font-display text-[1.6rem] uppercase tracking-[0.14em] text-foreground">{item.value}</p>
              <p className="mt-2 text-sm text-foreground/65">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

