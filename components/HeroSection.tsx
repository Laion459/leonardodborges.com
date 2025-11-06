"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { PlexusBackground } from "@/components/PlexusBackground";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);

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

  const handleLockToggle = () => {
    setIsLocked((previous) => !previous);
  };

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

      <header className="max-w-5xl space-y-6" data-hero-animate>
        <p className="text-[0.62rem] uppercase tracking-[0.36em] text-accent sm:text-xs sm:tracking-[0.4em]">
          Leonardo Dario Borges — Desenvolvedor de Software
        </p>
        <h1 className="font-display text-[3rem] uppercase leading-[1.03] tracking-[0.1em] sm:text-[3.4rem] sm:tracking-[0.14em] md:text-[4.2rem] md:tracking-[0.16em] lg:text-[4.8rem] xl:text-[5.4rem]">
          Sempre levando a luta para o código.
          <span className="block text-accent">Construindo experiências imersivas, on e off track.</span>
        </h1>
        <p ref={subtitleRef} className="space-y-2 text-sm text-foreground/70 sm:text-base md:text-lg">
          <span className="block overflow-hidden">
            <span className="inline-block">Desde 2019, transformo estratégias digitais em histórias interativas,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block">usando Next.js, GSAP e engenharia de software para entregar performance real.</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block">Este é o meu paddock — tudo que acelera minha trajetória como dev.</span>
          </span>
        </p>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end" data-hero-animate>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-foreground/15 bg-background/60 p-6 backdrop-blur">
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-foreground/40">On Track</p>
              <p className="mt-3 font-display text-3xl uppercase tracking-[0.18em] text-foreground">Resultados em produção</p>
              <p className="mt-3 text-sm text-foreground/65">
                Produtos digitais que impulsionam negócios com arquitetura escalável, SEO cirúrgico e microinterações de alto impacto.
              </p>
            </div>
            <div className="rounded-3xl border border-foreground/15 bg-background/60 p-6 backdrop-blur">
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-foreground/40">Off Track</p>
              <p className="mt-3 font-display text-3xl uppercase tracking-[0.18em] text-foreground">Laboratório criativo</p>
              <p className="mt-3 text-sm text-foreground/65">
                Explorações com arte generativa, talks e open source — o espaço onde experimento tecnologias e storytelling.
              </p>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-foreground/10 bg-background/80 p-6 backdrop-blur md:grid-cols-3">
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.32em] text-foreground/40">Vitórias Digitais</p>
              <p className="mt-2 font-display text-3xl uppercase tracking-[0.14em] text-foreground">+32</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/45">entregas lançadas</p>
            </div>
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.32em] text-foreground/40">Velocidade Média</p>
              <p className="mt-2 font-display text-3xl uppercase tracking-[0.14em] text-foreground">98</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/45">lighthouse médio</p>
            </div>
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.32em] text-foreground/40">Base Técnica</p>
              <p className="mt-2 font-display text-3xl uppercase tracking-[0.14em] text-foreground">Full Stack</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/45">Next.js · GSAP · Edge</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-accent/20 bg-accent/10 p-6 text-background backdrop-blur">
          <p className="text-[0.62rem] uppercase tracking-[0.32em]">Mensagem do Leonardo</p>
          <p className="mt-5 font-display text-[1.6rem] uppercase tracking-[0.12em]">
            “Não importa onde você começa, e sim como evolui cada entrega. Eu crio experiências que ressoam, elevam marcas e criam
            valor real.”
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-accent/90">2025 — Florianópolis, Brasil</p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 pb-4 md:flex-row md:items-center md:justify-between" data-hero-animate>
        <button
          type="button"
          onClick={handleLockToggle}
          data-cursor="interactive"
          className="inline-flex items-center gap-3 rounded-full border border-foreground/25 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/85 transition hover:border-accent hover:text-accent sm:gap-4 sm:px-6 sm:py-3 sm:text-xs"
        >
          <span>{isLocked ? "Experiência travada — role para acompanhar" : "Toque para travar a experiência"}</span>
          <span className="block h-px w-10 bg-foreground/35" aria-hidden />
        </button>
        <span className="text-[0.58rem] uppercase tracking-[0.45em] text-foreground/40 sm:text-[0.68rem]">
          {isLocked ? "Scroll liberado — acompanhe a linha do tempo" : "Scroll para desbloquear cada capítulo"}
        </span>
      </div>
    </section>
  );
}

