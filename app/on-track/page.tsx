"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ON_TRACK_RESULTS } from "@/lib/data/onTrack";

const PERFORMANCE_PILLARS = [
  {
    label: "Stack predominante",
    value: "Laravel · React · Next.js",
    description: "Backend robusto com Laravel, frontend moderno com React/Next.js, Docker e PostgreSQL para escalabilidade."
  },
  {
    label: "Produtos entregues",
    value: "5+ projetos",
    description: "Keyring, ESH, refatoração de sites, integração Asaas e APIs REST documentadas com Swagger."
  },
  {
    label: "Qualidade e testes",
    value: "PHPUnit · Swagger",
    description: "APIs testadas com PHPUnit, documentadas com Swagger e deployadas com Docker/PostgreSQL."
  }
] as const;

export default function OnTrackPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const results = useMemo(() => ON_TRACK_RESULTS, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-on-track-animate]"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.12,
          delay: 0.1
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.14),_transparent_65%)]" />

      <header className="space-y-4 sm:space-y-6" data-on-track-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">On Track</p>
        <h1 className="font-display text-2xl uppercase tracking-[0.16em] sm:text-[3rem] sm:tracking-[0.18em] md:text-[3.4rem] lg:text-[4.2rem]">
          Resultados em produção
          <span className="block text-accent">Projetos que mantêm o ritmo acelerado</span>
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Cada entrega combina estratégia, engenharia e narrativa. Dos lançamentos de produtos à otimização de funis, mantenho o
          foco em métricas que importam: vitórias reais para negócios.
        </p>
      </header>

      <section className="grid gap-4 sm:gap-6 md:grid-cols-3" data-on-track-animate>
        {PERFORMANCE_PILLARS.map((pillar) => (
          <article
            key={pillar.label}
            className="rounded-2xl border border-foreground/10 bg-background/80 p-5 backdrop-blur transition-transform duration-500 ease-expo-out hover:-translate-y-3 sm:rounded-3xl sm:p-6"
          >
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/45 sm:text-[0.62rem] sm:tracking-[0.32em]">{pillar.label}</p>
            <p className="mt-3 font-display text-2xl uppercase tracking-[0.14em] text-foreground sm:mt-4 sm:text-3xl sm:tracking-[0.16em]">{pillar.value}</p>
            <p className="mt-2 text-xs text-foreground/65 sm:mt-3 sm:text-sm">{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 sm:gap-10" data-on-track-animate>
        {results.map((result) => (
          <article
            key={result.id}
            className="grid gap-6 rounded-2xl border border-foreground/10 bg-background/85 p-6 backdrop-blur-lg transition-transform duration-500 ease-expo-out hover:-translate-y-4 sm:gap-8 sm:rounded-[2.8rem] sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          >
            <div className="space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/45 sm:gap-4 sm:text-xs sm:tracking-[0.32em]">
                <span>{result.year}</span>
                <span className="rounded-full border border-foreground/20 px-3 py-1 sm:px-4">{result.client}</span>
                <span className="w-full sm:w-auto">{result.role}</span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-display text-xl uppercase tracking-[0.14em] text-foreground sm:text-[2rem] sm:tracking-[0.16em]">{result.project}</h2>
                <p className="text-sm text-foreground/70 sm:text-base">{result.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {result.metrics.map((metric) => (
                  <span
                    key={`${result.id}-${metric}`}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-accent sm:px-4 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.3em]"
                  >
                    {metric}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/45 sm:gap-3 sm:text-xs sm:tracking-[0.32em]">
                {result.stack.map((tech) => (
                  <span key={`${result.id}-${tech}`} className="rounded-full border border-foreground/20 px-3 py-1 sm:px-4">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="relative h-48 overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 sm:h-64 sm:rounded-3xl">
                {result.image ? (
                  <Image
                    src={result.image}
                    alt={result.project}
                    fill
                    className="object-cover transition-transform duration-700 ease-expo-out hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-foreground/40">
                    Visual em preparação
                  </div>
                )}
              </div>
              <div className="rounded-2xl border border-foreground/15 bg-background/70 p-5 sm:rounded-3xl sm:p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-foreground/45 sm:text-[0.62rem] sm:tracking-[0.3em]">Pit notes</p>
                <p className="mt-2 text-xs text-foreground/70 sm:mt-3 sm:text-sm">
                  Sopros diários de otimização: pair programming, reviews de performance e dashboards acionáveis com métricas em tempo real.
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

