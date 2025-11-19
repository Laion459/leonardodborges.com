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
      className="relative flex min-h-[80vh] flex-col justify-center gap-8 overflow-hidden bg-background px-5 py-20 text-foreground sm:px-6 md:min-h-[90vh] md:gap-10 md:px-12 lg:min-h-[100vh] lg:px-20 xl:px-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent_60%)]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="max-w-4xl space-y-5 sm:space-y-6">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]" data-manifesto-title>
          Desenvolvedor Full Stack desde 2019 — Product Management desde 2025
        </p>
        <h2 className="font-display text-[2.4rem] uppercase tracking-[0.14em] sm:text-4xl sm:tracking-[0.18em] md:text-5xl md:tracking-[0.2em] lg:text-6xl" data-manifesto-title>
          Produtos completos,
          <span className="block text-accent">não apenas código.</span>
        </h2>
        <div className="space-y-4 text-sm text-foreground/75 sm:text-base md:text-lg">
          <p data-manifesto-text className="px-1 sm:px-0 font-medium">
            Entregando soluções que reduzem tempo de operação em até 60%, aumentam conversões e impulsionam negócios com arquitetura escalável e experiência de usuário impecável.
          </p>
          <p data-manifesto-text className="px-1 sm:px-0">
            Na Eleven Soft, lidero projetos críticos end-to-end: Keyring (gestão de licenças completa), ESH (monitoramento em tempo real), refatoração de arquitetura moderna e integrações financeiras robustas. Cada entrega combina estratégia, engenharia e impacto mensurável.
          </p>
        </div>
      </div>
    </section>
  );
}

