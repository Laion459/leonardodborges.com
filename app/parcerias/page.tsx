"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { PARTNERSHIPS } from "@/lib/data/partners";

const PARTNERSHIP_VALUES = [
  {
    title: "Co-criação estratégica",
    description: "Diagnóstico aprofundado, jornadas de usuário e alinhamento com objetivos de negócio antes de qualquer linha de código."
  },
  {
    title: "Performance como norte",
    description: "Cada parceria nasce com KPIs claros: tempo de resposta, conversão, storytelling e indicadores técnicos monitorados."
  },
  {
    title: "Transparência total",
    description: "Playbooks, documentação viva e rituais semanais para manter stakeholders a par de cada sprint."
  }
] as const;

export default function PartnershipsPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const partnerships = useMemo(() => PARTNERSHIPS, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-partner-animate]"),
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
    <div
      ref={sectionRef}
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-24 text-foreground sm:gap-16 sm:px-6 sm:pb-24 sm:pt-28 md:gap-20 md:pt-32 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.12),_transparent_65%)]" />

      <header className="space-y-4 sm:space-y-6" data-partner-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">Parcerias &amp; Campanhas</p>
        <h1 className="font-display text-2xl uppercase tracking-[0.16em] sm:text-[3rem] sm:tracking-[0.18em] md:text-[3.4rem] lg:text-[4.2rem]">
          Aliados que aceleram juntos
          <span className="block text-accent">Colaborações com foco em performance</span>
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Trabalho lado a lado com marcas que buscam consistência e inteligência digital. Cada parceria cria rituais, linguagem e
          experiências únicas — sempre alinhadas à essência da marca.
        </p>
      </header>

      <section className="grid gap-4 sm:gap-6 md:grid-cols-3" data-partner-animate>
        {PARTNERSHIP_VALUES.map((value) => (
          <article
            key={value.title}
            className="rounded-2xl border border-foreground/12 bg-background/80 p-5 backdrop-blur transition-transform duration-500 ease-expo-out hover:-translate-y-3 sm:rounded-3xl sm:p-6"
          >
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/45 sm:text-[0.62rem] sm:tracking-[0.32em]">{value.title}</p>
            <p className="mt-3 text-xs text-foreground/70 sm:mt-4 sm:text-sm">{value.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 sm:gap-8" data-partner-animate>
        {partnerships.map((partner) => (
          <article
            key={partner.id}
            className="grid gap-5 rounded-2xl border border-foreground/12 bg-background/85 p-6 backdrop-blur-lg transition-transform duration-500 ease-expo-out hover:-translate-y-4 sm:gap-6 sm:rounded-[2.6rem] sm:p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          >
            <div className="space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/45 sm:gap-4 sm:text-xs sm:tracking-[0.32em]">
                <span>{partner.year}</span>
                <span className="rounded-full border border-foreground/20 px-3 py-1 sm:px-4">{partner.segment}</span>
              </div>
              <h2 className="font-display text-xl uppercase tracking-[0.14em] text-foreground sm:text-[2rem] sm:tracking-[0.16em]">{partner.name}</h2>
              <p className="text-sm text-foreground/70 sm:text-base">{partner.description}</p>
              <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50 sm:gap-3 sm:text-xs sm:tracking-[0.3em]">
                {partner.scope.map((item) => (
                  <span key={`${partner.id}-${item}`} className="rounded-full border border-foreground/20 px-3 py-1 sm:px-4">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 sm:gap-5">
              <div className="rounded-xl border border-foreground/15 bg-background/70 p-5 sm:rounded-[2rem] sm:p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-foreground/45 sm:text-[0.62rem] sm:tracking-[0.3em]">Como trabalhamos</p>
                <p className="mt-2 text-xs text-foreground/70 sm:mt-3 sm:text-sm">
                  Workshops iniciais para alinhar narrativa, cronograma e design system. Sprints quinzenais com entregas revisadas e
                  dashboards compartilhados.
                </p>
              </div>
              {partner.website && (
                <a
                  href={partner.website}
                  target={partner.website.startsWith("http") ? "_blank" : undefined}
                  rel={partner.website.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="interactive"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent transition hover:text-accent/80 sm:gap-3 sm:tracking-[0.32em]"
                >
                  Ver estudo
                  <span className="block h-px w-6 bg-accent sm:w-8" aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

