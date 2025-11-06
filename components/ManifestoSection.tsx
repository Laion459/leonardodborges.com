"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const heading = section.querySelector("[data-manifesto-title]");
    const paragraphs = section.querySelectorAll("[data-manifesto-text]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 80%"
        }
      });

      tl.fromTo(heading, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(
          paragraphs,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 },
          "<0.2"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100vh] flex-col justify-center gap-10 overflow-hidden bg-background px-6 py-32 text-foreground md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent_60%)]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="max-w-4xl space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-accent" data-manifesto-title>
          McLaren F1 desde 2019 — Minha pista desde 2015
        </p>
        <h2 className="font-display text-5xl uppercase tracking-[0.2em] md:text-6xl" data-manifesto-title>
          Redefinindo limites digitais,
          <span className="block text-accent">escrevendo legados com código.</span>
        </h2>
        <div className="space-y-4 text-base text-foreground/70 md:text-lg">
          <p data-manifesto-text>
            Dentro e fora das telas, meu foco é entregar experiências que combinem emoção e estratégia. Assim como um piloto evolui a cada corrida, mergulho em cada projeto para buscar a volta perfeita em tecnologia, storytelling e impacto.
          </p>
          <p data-manifesto-text>
            Do laboratório de ideias ao ambiente de produção, transformo insights em interfaces cheias de energia: microinterações, animações responsivas e arquitetura sólida para impulsionar marcas e pessoas.
          </p>
        </div>
      </div>
    </section>
  );
}

