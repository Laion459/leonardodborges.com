"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ON_TRACK_RESULTS } from "@/lib/data/onTrack";

const PERFORMANCE_PILLARS = [
  {
    label: "Tempo médio de lançamento",
    value: "4 semanas",
    description: "Do discovery ao deploy com pipelines automatizados e QA contínuo."
  },
  {
    label: "Stack predominante",
    value: "Next.js · Edge",
    description: "RSC, caching inteligente e animações GSAP controladas por métricas."
  },
  {
    label: "Core Web Vitals",
    value: ">95",
    description: "Monitoramento e otimizações desde a concepção da interface."
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
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 text-foreground sm:px-8 md:gap-20 md:pt-32 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.14),_transparent_65%)]" />

      <header className="space-y-6" data-on-track-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">On Track</p>
        <h1 className="font-display text-[3rem] uppercase tracking-[0.18em] sm:text-[3.4rem] md:text-[4.2rem]">
          Resultados em produção
          <span className="block text-accent">Projetos que mantêm o ritmo acelerado</span>
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Cada entrega combina estratégia, engenharia e narrativa. Dos lançamentos de produtos à otimização de funis, mantenho o
          foco em métricas que importam: vitórias reais para negócios.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3" data-on-track-animate>
        {PERFORMANCE_PILLARS.map((pillar) => (
          <article
            key={pillar.label}
            className="rounded-3xl border border-foreground/10 bg-background/80 p-6 backdrop-blur transition-transform duration-500 ease-expo-out hover:-translate-y-3"
          >
            <p className="text-[0.62rem] uppercase tracking-[0.32em] text-foreground/45">{pillar.label}</p>
            <p className="mt-4 font-display text-3xl uppercase tracking-[0.16em] text-foreground">{pillar.value}</p>
            <p className="mt-3 text-sm text-foreground/65">{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-10" data-on-track-animate>
        {results.map((result) => (
          <article
            key={result.id}
            className="grid gap-8 rounded-[2.8rem] border border-foreground/10 bg-background/85 p-8 backdrop-blur-lg transition-transform duration-500 ease-expo-out hover:-translate-y-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.32em] text-foreground/45">
                <span>{result.year}</span>
                <span className="rounded-full border border-foreground/20 px-4 py-1">{result.client}</span>
                <span>{result.role}</span>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-[2rem] uppercase tracking-[0.16em] text-foreground">{result.project}</h2>
                <p className="text-sm text-foreground/70 sm:text-base">{result.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {result.metrics.map((metric) => (
                  <span
                    key={`${result.id}-${metric}`}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-accent"
                  >
                    {metric}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.32em] text-foreground/45">
                {result.stack.map((tech) => (
                  <span key={`${result.id}-${tech}`} className="rounded-full border border-foreground/20 px-4 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-foreground/10 bg-background/60">
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
              <div className="rounded-3xl border border-foreground/15 bg-background/70 p-6">
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-foreground/45">Pit notes</p>
                <p className="mt-3 text-sm text-foreground/70">
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

