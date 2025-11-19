"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const ITEMS = [
  {
    id: "on-track",
    label: "On Track",
    title: "Resultados em Produção",
    description:
      "Projetos comerciais, arquitetura escalável e experiências digitais com foco em conversão e impacto de negócio.",
    cta: "Explorar Projetos",
    href: "/on-track",
    image: "/img/on-track.png",
    accent: "bg-accent/10 border-accent/40 text-accent"
  },
  {
    id: "off-track",
    label: "Off Track",
    title: "Laboratório Criativo",
    description:
      "Explorações em arte generativa, open source, talks e mentorias. O espaço onde testo ideias e compartilho conhecimento.",
    cta: "Descobrir projetos paralelos",
    href: "/off-track",
    image: "/img/off-track.png",
    accent: "bg-foreground/10 border-foreground/40 text-foreground/80"
  }
];

export function DualShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll("[data-showcase-card]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 75%"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="dual-showcase"
      ref={sectionRef}
      className="relative flex flex-col gap-8 overflow-hidden px-4 py-12 text-foreground sm:gap-10 sm:px-5 sm:py-16 md:gap-12 md:px-10 lg:flex-row lg:px-16 xl:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08),_transparent_60%)]" />

      <header className="flex flex-col gap-2.5 sm:gap-3 lg:w-[32%]" data-showcase-card>
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">Panorama</p>
        <h2 className="font-display text-2xl uppercase tracking-[0.12em] sm:text-[2.2rem] sm:tracking-[0.14em] md:text-4xl md:tracking-[0.18em] lg:text-5xl">
          On Track &amp; Off Track
        </h2>
        <p className="text-sm text-foreground/70 sm:text-base">
          Do código de produção às experimentações artísticas, existe um ecossistema de projetos que alimentam minha evolução como
          desenvolvedor e storyteller.
        </p>
      </header>

      <div className="grid flex-1 gap-4 sm:gap-6 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <article
            key={item.id}
            data-showcase-card
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-foreground/10 bg-background/90 p-5 backdrop-blur sm:gap-6 sm:rounded-[2.5rem] sm:p-6 md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/50 sm:text-xs sm:tracking-[0.35em]">{item.label}</span>
              <span className={`rounded-full px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.28em] sm:px-3 sm:text-[0.65rem] sm:tracking-[0.3em] ${item.accent}`}>
                Desde 2019
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="font-display text-xl uppercase tracking-[0.16em] text-foreground sm:text-2xl sm:tracking-[0.18em] md:text-[2rem]">
                {item.title}
              </h3>
              <p className="text-xs text-foreground/70 sm:text-sm md:text-base">{item.description}</p>
            </div>

            <div className="relative mt-auto overflow-hidden rounded-2xl border border-foreground/10 sm:rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 transition-opacity duration-500 ease-expo-out group-hover:opacity-40" />
              <div className="relative h-40 w-full overflow-hidden sm:h-48 md:h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                />
              </div>
            </div>

            <a
              href={item.href}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent transition hover:text-accent/80 sm:gap-3 sm:tracking-[0.32em]"
              data-cursor="interactive"
            >
              {item.cta}
              <span className="block h-px w-6 bg-accent sm:w-8" aria-hidden />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

