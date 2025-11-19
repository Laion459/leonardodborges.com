"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { OFF_TRACK_EXPLORATIONS } from "@/lib/data/offTrack";

const LAB_PILLARS = [
  {
    label: "Exploração contínua",
    description: "Pelo menos um experimento por sprint — motion, áudio, IA, narrativas interativas."
  },
  {
    label: "Compartilhar é multiplicar",
    description: "Talks, open source e mentorias para devolver à comunidade o que aprendo em pista."
  },
  {
    label: "Foco em sensação",
    description: "Cada protótipo testa emoções com luz, som e movimentos coreografados."
  }
] as const;

export default function OffTrackPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const explorations = useMemo(() => OFF_TRACK_EXPLORATIONS, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-off-track-animate]"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent_70%)]" />

      <header className="space-y-4 sm:space-y-6" data-off-track-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">Off Track</p>
        <h1 className="font-display text-2xl uppercase tracking-[0.16em] sm:text-[3rem] sm:tracking-[0.18em] md:text-[3.4rem] lg:text-[4.2rem]">
          Laboratório criativo
          <span className="block text-accent">Onde o código encontra a arte</span>
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Fora das entregas em produção, piloto experimentos que testam novas sensações digitais. Este é o espaço onde converso com
          comunidades, construo ferramentas open source e levo tecnologia para além da tela.
        </p>
      </header>

      <section className="grid gap-4 sm:gap-6 md:grid-cols-3" data-off-track-animate>
        {LAB_PILLARS.map((pillar) => (
          <article
            key={pillar.label}
            className="rounded-2xl border border-foreground/10 bg-background/80 p-5 backdrop-blur transition-transform duration-500 ease-expo-out hover:-translate-y-3 sm:rounded-3xl sm:p-6"
          >
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/45 sm:text-[0.62rem] sm:tracking-[0.32em]">{pillar.label}</p>
            <p className="mt-3 text-xs text-foreground/70 sm:mt-4 sm:text-sm">{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 sm:gap-10" data-off-track-animate>
        {explorations.map((exploration) => (
          <article
            key={exploration.id}
            className="grid gap-6 rounded-2xl border border-foreground/10 bg-background/85 p-6 backdrop-blur-lg transition-transform duration-500 ease-expo-out hover:-translate-y-4 sm:gap-8 sm:rounded-[2.8rem] sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/45 sm:gap-3 sm:text-xs sm:tracking-[0.3em]">
                <span>{exploration.year}</span>
                <span className="rounded-full border border-foreground/20 px-3 py-1 sm:px-4">{exploration.category}</span>
                <span className="w-full text-accent sm:w-auto">{exploration.highlight}</span>
              </div>
              <h2 className="font-display text-xl uppercase tracking-[0.14em] text-foreground sm:text-[2rem] sm:tracking-[0.16em]">{exploration.title}</h2>
              <p className="text-sm text-foreground/70 sm:text-base">{exploration.description}</p>
              {exploration.links && (
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-accent sm:gap-4 sm:tracking-[0.32em]">
                  {exploration.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-cursor="interactive"
                      className="inline-flex items-center gap-2 transition hover:text-accent/80 sm:gap-3"
                    >
                      {link.label}
                      <span className="block h-px w-6 bg-accent sm:w-8" aria-hidden />
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-4 sm:gap-5">
              <div className="relative h-48 overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 sm:h-64 sm:rounded-3xl">
                {exploration.image ? (
                  <Image
                    src={exploration.image}
                    alt={exploration.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-expo-out hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-foreground/40">
                    Visual em captura
                  </div>
                )}
              </div>
              <div className="rounded-2xl border border-foreground/15 bg-background/70 p-5 sm:rounded-3xl sm:p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-foreground/45 sm:text-[0.62rem] sm:tracking-[0.3em]">Behind the scenes</p>
                <p className="mt-2 text-xs text-foreground/70 sm:mt-3 sm:text-sm">
                  {exploration.category === "Arte"
                    ? "Coreografias sonoras, shaders e recursos visuais para intensificar a narrativa."
                    : "Documentos vivos com guidelines, setups técnicos e aprendizados compartilhados."}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

