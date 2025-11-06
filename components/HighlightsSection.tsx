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
      className="relative flex flex-col gap-12 overflow-hidden px-5 pb-24 pt-16 text-foreground sm:px-6 md:gap-14 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.1),_transparent_70%)]" />
      <header className="space-y-4 sm:space-y-5" data-highlight-card>
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">Highlights</p>
        <h2 className="font-display text-[2.3rem] uppercase tracking-[0.14em] sm:text-4xl sm:tracking-[0.18em] md:text-5xl">
          Hall da Inovação
        </h2>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Projetos, experimentos e conquistas que moldam meu repertório. Uma coleção que combina performance, pesquisa e design —
          cada item é um capacete personalizado na minha garagem digital.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {HIGHLIGHTS.map((highlight) => (
          <article
            key={highlight.id}
            data-highlight-card
            className="group relative flex min-h-[320px] flex-col gap-5 overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-background/90 p-6 backdrop-blur-sm transition-transform duration-500 ease-expo-out hover:-translate-y-3 sm:min-h-[340px] sm:p-7"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-foreground/40">
              <span>{highlight.year}</span>
              <span className="rounded-full border border-foreground/20 px-3 py-1 text-[0.62rem] uppercase tracking-[0.32em] text-foreground/60">
                {highlight.tag}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl uppercase tracking-[0.18em] text-foreground sm:text-[1.4rem]">
                {highlight.title}
              </h3>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/50 sm:text-xs">
                {highlight.subtitle}
              </p>
            </div>

            <p className="text-sm text-foreground/70 sm:text-base">{highlight.description}</p>

            <div className="mt-auto overflow-hidden rounded-3xl border border-foreground/10">
              <div className="relative h-32 w-full overflow-hidden sm:h-36">
                {highlight.image ? (
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-accent/5 text-xs uppercase tracking-[0.3em] text-accent/70">
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

