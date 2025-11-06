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
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-28 text-foreground sm:px-8 md:pt-32 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.12),_transparent_65%)]" />

      <header className="space-y-6" data-partner-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">Parcerias &amp; Campanhas</p>
        <h1 className="font-display text-[3rem] uppercase tracking-[0.18em] sm:text-[3.4rem] md:text-[4.2rem]">
          Aliados que aceleram juntos
          <span className="block text-accent">Colaborações com foco em performance</span>
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Trabalho lado a lado com marcas que buscam consistência e inteligência digital. Cada parceria cria rituais, linguagem e
          experiências únicas — sempre alinhadas à essência da marca.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3" data-partner-animate>
        {PARTNERSHIP_VALUES.map((value) => (
          <article
            key={value.title}
            className="rounded-3xl border border-foreground/12 bg-background/80 p-6 backdrop-blur transition-transform duration-500 ease-expo-out hover:-translate-y-3"
          >
            <p className="text-[0.62rem] uppercase tracking-[0.32em] text-foreground/45">{value.title}</p>
            <p className="mt-4 text-sm text-foreground/70">{value.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8" data-partner-animate>
        {partnerships.map((partner) => (
          <article
            key={partner.id}
            className="grid gap-6 rounded-[2.6rem] border border-foreground/12 bg-background/85 p-8 backdrop-blur-lg transition-transform duration-500 ease-expo-out hover:-translate-y-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.32em] text-foreground/45">
                <span>{partner.year}</span>
                <span className="rounded-full border border-foreground/20 px-4 py-1">{partner.segment}</span>
              </div>
              <h2 className="font-display text-[2rem] uppercase tracking-[0.16em] text-foreground">{partner.name}</h2>
              <p className="text-sm text-foreground/70 sm:text-base">{partner.description}</p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
                {partner.scope.map((item) => (
                  <span key={`${partner.id}-${item}`} className="rounded-full border border-foreground/20 px-4 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5">
              <div className="rounded-[2rem] border border-foreground/15 bg-background/70 p-6">
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-foreground/45">Como trabalhamos</p>
                <p className="mt-3 text-sm text-foreground/70">
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
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-accent transition hover:text-accent/80"
                >
                  Ver estudo
                  <span className="block h-px w-8 bg-accent" aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

