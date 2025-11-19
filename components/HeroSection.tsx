"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { PlexusBackground } from "@/components/PlexusBackground";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const subtitle = subtitleRef.current;
    if (!section || !subtitle) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        section.querySelectorAll("[data-hero-animate]") || [],
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12 }
      ).fromTo(
        subtitle.querySelectorAll("span") || [],
        { yPercent: 100 },
        { yPercent: 0, duration: 1, stagger: 0.08 },
        "<0.2"
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-5 pb-12 pt-24 text-foreground sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <PlexusBackground />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <header className="max-w-5xl space-y-4 sm:space-y-6" data-hero-animate>
        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-accent sm:text-[0.62rem] sm:tracking-[0.36em] md:text-xs md:tracking-[0.4em]">
          Leonardo Dario Borges — Desenvolvedor Full Stack | Laravel | React | Next.js | Node.js | Python
        </p>
        <h1 className="font-display text-[2.5rem] uppercase leading-[1.05] tracking-[0.08em] sm:text-[3rem] sm:leading-[1.03] sm:tracking-[0.1em] md:text-[3.4rem] md:tracking-[0.14em] lg:text-[4.2rem] lg:tracking-[0.16em] xl:text-[4.8rem] 2xl:text-[5.4rem]">
          Sempre levando a luta para o código.
          <span className="block text-accent">Construindo produtos digitais completos, on e off track.</span>
        </h1>
        <p ref={subtitleRef} className="space-y-2 text-xs leading-relaxed text-foreground/70 sm:text-sm sm:leading-normal md:text-base lg:text-lg">
          <span className="block overflow-hidden">
            <span className="inline-block">Desenvolvedor Full Stack na Eleven Soft, entregando produtos digitais de ponta a ponta,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block">do backend ao frontend, com foco em métricas, experiência do usuário e impacto direto no negócio.</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block">Product Manager informal, liderando projetos críticos e gerenciando entregas de alto valor.</span>
          </span>
        </p>
      </header>

      <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end lg:gap-10" data-hero-animate>
        <div className="space-y-4 sm:space-y-6">
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 backdrop-blur sm:rounded-3xl sm:p-6">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/40 sm:text-[0.62rem] sm:tracking-[0.32em]">On Track</p>
              <p className="mt-2 font-display text-2xl uppercase tracking-[0.16em] text-foreground sm:mt-3 sm:text-3xl sm:tracking-[0.18em]">Resultados em produção</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/65 sm:mt-3 sm:text-sm">
                Produtos digitais que impulsionam negócios com arquitetura escalável, SEO cirúrgico e microinterações de alto impacto.
              </p>
            </div>
            <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 backdrop-blur sm:rounded-3xl sm:p-6">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/40 sm:text-[0.62rem] sm:tracking-[0.32em]">Off Track</p>
              <p className="mt-2 font-display text-2xl uppercase tracking-[0.16em] text-foreground sm:mt-3 sm:text-3xl sm:tracking-[0.18em]">Laboratório criativo</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/65 sm:mt-3 sm:text-sm">
                Explorações com arte generativa, talks e open source — o espaço onde experimento tecnologias e storytelling.
              </p>
            </div>
          </div>
          <div className="grid gap-3 rounded-2xl border border-foreground/10 bg-background/80 p-4 backdrop-blur sm:gap-4 sm:rounded-3xl sm:p-6 md:grid-cols-3">
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.3em] text-foreground/40 sm:text-[0.58rem] sm:tracking-[0.32em]">Vitórias Digitais</p>
              <p className="mt-1.5 font-display text-2xl uppercase tracking-[0.12em] text-foreground sm:mt-2 sm:text-3xl sm:tracking-[0.14em]">+32</p>
              <p className="mt-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-foreground/45 sm:mt-2 sm:text-xs sm:tracking-[0.3em]">entregas lançadas</p>
            </div>
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.3em] text-foreground/40 sm:text-[0.58rem] sm:tracking-[0.32em]">Velocidade Média</p>
              <p className="mt-1.5 font-display text-2xl uppercase tracking-[0.12em] text-foreground sm:mt-2 sm:text-3xl sm:tracking-[0.14em]">98</p>
              <p className="mt-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-foreground/45 sm:mt-2 sm:text-xs sm:tracking-[0.3em]">lighthouse médio</p>
            </div>
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.3em] text-foreground/40 sm:text-[0.58rem] sm:tracking-[0.32em]">Base Técnica</p>
              <p className="mt-1.5 font-display text-2xl uppercase tracking-[0.12em] text-foreground sm:mt-2 sm:text-3xl sm:tracking-[0.14em]">Full Stack</p>
              <p className="mt-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-foreground/45 sm:mt-2 sm:text-xs sm:tracking-[0.3em]">Laravel · React · Next.js · Docker</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-accent/20 bg-accent/10 p-5 text-background backdrop-blur sm:rounded-[2.5rem] sm:p-6">
          <p className="text-[0.6rem] uppercase tracking-[0.3em] sm:text-[0.62rem] sm:tracking-[0.32em]">Mensagem do Leonardo</p>
          <p className="mt-4 font-display text-lg uppercase leading-tight tracking-[0.1em] sm:mt-5 sm:text-[1.6rem] sm:tracking-[0.12em]">
            &ldquo;Entrego produtos completos, não apenas código. Reconhecido por rapidez, qualidade e visão estratégica. Cada projeto é uma oportunidade de criar impacto real.&rdquo;
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-accent/90 sm:mt-6 sm:text-sm sm:tracking-[0.3em]">2025 — Florianópolis, Santa Catarina, Brasil</p>
        </div>
      </div>
    </section>
  );
}

