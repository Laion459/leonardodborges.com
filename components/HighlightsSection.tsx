"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { HIGHLIGHTS } from "@/lib/data/highlights";

export function HighlightsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll("[data-highlight-card]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
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
      ref={sectionRef}
      className="relative flex flex-col gap-10 overflow-hidden px-4 pb-20 pt-12 text-foreground sm:gap-12 sm:px-5 sm:pb-24 sm:pt-16 md:gap-14 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.1),_transparent_70%)]" />
      <header className="space-y-3 sm:space-y-4 md:space-y-5" data-highlight-card>
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">Highlights</p>
        <h2 className="font-display text-2xl uppercase tracking-[0.12em] sm:text-[2.3rem] sm:tracking-[0.14em] md:text-4xl md:tracking-[0.18em] lg:text-5xl">
          Hall da Inovação
        </h2>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Projetos, experimentos e conquistas que moldam meu repertório. Uma coleção que combina performance, pesquisa e design —
          cada item é um capacete personalizado na minha garagem digital.
        </p>
      </header>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {HIGHLIGHTS.map((highlight) => (
          <article
            key={highlight.id}
            data-highlight-card
            className="group relative flex min-h-[280px] flex-col gap-4 overflow-hidden rounded-2xl border border-foreground/10 bg-background/90 p-5 backdrop-blur-sm transition-transform duration-500 ease-expo-out hover:-translate-y-3 sm:min-h-[320px] sm:gap-5 sm:rounded-[2.5rem] sm:p-6 md:min-h-[340px] md:p-7"
          >
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.32em] text-foreground/40 sm:text-xs sm:tracking-[0.35em]">
              <span>{highlight.year}</span>
              <span className="rounded-full border border-foreground/20 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.3em] text-foreground/60 sm:px-3 sm:text-[0.62rem] sm:tracking-[0.32em]">
                {highlight.tag}
              </span>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="font-display text-lg uppercase tracking-[0.16em] text-foreground sm:text-xl sm:tracking-[0.18em] md:text-[1.4rem]">
                {highlight.title}
              </h3>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50 sm:text-[0.7rem] sm:tracking-[0.3em] md:text-xs">
                {highlight.subtitle}
              </p>
            </div>

            <p className="text-xs text-foreground/70 sm:text-sm md:text-base">{highlight.description}</p>

            <div className="mt-auto overflow-hidden rounded-2xl border border-foreground/10 sm:rounded-3xl">
              <div className="relative h-28 w-full overflow-hidden sm:h-32 md:h-36">
                {highlight.image ? (
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-accent/5 text-[0.65rem] uppercase tracking-[0.28em] text-accent/70 sm:text-xs sm:tracking-[0.3em]">
                    Coming soon
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



