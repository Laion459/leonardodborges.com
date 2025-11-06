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
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 text-foreground sm:px-8 md:gap-20 md:pt-32 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent_70%)]" />

      <header className="space-y-6" data-off-track-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">Off Track</p>
        <h1 className="font-display text-[3rem] uppercase tracking-[0.18em] sm:text-[3.4rem] md:text-[4.2rem]">
          Laboratório criativo
          <span className="block text-accent">Onde o código encontra a arte</span>
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Fora das entregas em produção, piloto experimentos que testam novas sensações digitais. Este é o espaço onde converso com
          comunidades, construo ferramentas open source e levo tecnologia para além da tela.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3" data-off-track-animate>
        {LAB_PILLARS.map((pillar) => (
          <article
            key={pillar.label}
            className="rounded-3xl border border-foreground/10 bg-background/80 p-6 backdrop-blur transition-transform duration-500 ease-expo-out hover:-translate-y-3"
          >
            <p className="text-[0.62rem] uppercase tracking-[0.32em] text-foreground/45">{pillar.label}</p>
            <p className="mt-4 text-sm text-foreground/70">{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-10" data-off-track-animate>
        {explorations.map((exploration) => (
          <article
            key={exploration.id}
            className="grid gap-8 rounded-[2.8rem] border border-foreground/10 bg-background/85 p-8 backdrop-blur-lg transition-transform duration-500 ease-expo-out hover:-translate-y-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-foreground/45">
                <span>{exploration.year}</span>
                <span className="rounded-full border border-foreground/20 px-4 py-1">{exploration.category}</span>
                <span className="text-accent">{exploration.highlight}</span>
              </div>
              <h2 className="font-display text-[2rem] uppercase tracking-[0.16em] text-foreground">{exploration.title}</h2>
              <p className="text-sm text-foreground/70 sm:text-base">{exploration.description}</p>
              {exploration.links && (
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.32em] text-accent">
                  {exploration.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-cursor="interactive"
                      className="inline-flex items-center gap-3 transition hover:text-accent/80"
                    >
                      {link.label}
                      <span className="block h-px w-8 bg-accent" aria-hidden />
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-5">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-foreground/10 bg-background/60">
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
              <div className="rounded-3xl border border-foreground/15 bg-background/70 p-6">
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-foreground/45">Behind the scenes</p>
                <p className="mt-3 text-sm text-foreground/70">
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

