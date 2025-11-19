"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import type { MouseEvent } from "react";
import { gsap } from "@/lib/gsap";
import { TIMELINE_EVENTS, TimelineEvent } from "@/lib/data/timeline";

const SIZE_CLASS: Record<TimelineEvent["size"], string> = {
  sm: "lg:col-span-1",
  md: "lg:col-span-2",
  lg: "lg:col-span-2 xl:col-span-3"
};

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const events = useMemo(() => TIMELINE_EVENTS, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll("[data-timeline-card]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSkip = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.querySelector<HTMLElement>("#dual-showcase");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 text-foreground sm:gap-12 sm:px-6 sm:py-20 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.12),_transparent_65%)]" />
      <header className="space-y-3 sm:space-y-4">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">Linha do Tempo</p>
        <h2 className="font-display text-2xl uppercase tracking-[0.12em] sm:text-[2.2rem] sm:tracking-[0.14em] md:text-4xl md:tracking-[0.18em] lg:text-5xl">
          Na pista e fora dela,
          <span className="block text-accent">cada projeto acelera minha trajetória.</span>
        </h2>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Uma visão contínua da evolução profissional, com destaque para entregas em produção, iniciativas acadêmicas e
          experimentos que expandem minhas capacidades técnicas e criativas.
        </p>
      </header>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" data-animate>
        {events.map((event) => {
          const sizeClass = SIZE_CLASS[event.size];
          const tagColor = event.category === "On Track" ? "bg-accent/20 text-accent" : "bg-foreground/10 text-foreground/80";

          return (
            <article
              key={event.id}
              data-timeline-card
              className={clsx(
                "flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/85 p-5 backdrop-blur transition-transform duration-500 ease-expo-out hover:-translate-y-4 hover:border-accent/60 sm:gap-4 sm:rounded-3xl sm:p-6",
                sizeClass
              )}
            >
              <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.32em] text-foreground/50 sm:text-xs sm:tracking-[0.35em]">
                <span>{event.year}</span>
                <span className={clsx("rounded-full px-2.5 py-1 text-[0.55rem] sm:px-3 sm:text-[0.6rem]", tagColor)}>{event.category}</span>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="font-display text-lg uppercase tracking-[0.14em] text-foreground sm:text-xl sm:tracking-[0.16em] md:text-2xl">{event.title}</h3>
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-foreground/40 sm:text-[0.65rem] sm:tracking-[0.26em] md:text-sm md:tracking-[0.3em]">
                  {event.subtitle}
                </p>
              </div>

              <p className="text-xs leading-relaxed text-foreground/75 sm:text-sm md:text-base">{event.description}</p>

              <div className="mt-auto flex flex-col gap-1.5 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/40 sm:flex-row sm:items-center sm:justify-between sm:text-xs sm:tracking-[0.35em]">
                <span>{event.location}</span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="block h-px w-5 bg-accent sm:w-6" />
                  Highlights
                </span>
              </div>

              <div className="mt-4 h-28 overflow-hidden rounded-xl border border-foreground/10 sm:mt-6 sm:h-32 sm:rounded-2xl md:h-36 lg:h-40">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={640}
                    height={320}
                    className="h-full w-full object-cover transition-transform duration-700 ease-expo-out hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full border border-dashed border-accent/30 bg-accent/5" />
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex items-center justify-center pt-4">
        <a
          href="#dual-showcase"
          className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-6 py-3 text-xs uppercase tracking-[0.32em] text-accent transition hover:border-accent hover:text-accent/80"
          data-cursor="interactive"
          onClick={handleSkip}
        >
          Explorar Projetos Completos
          <span className="block h-px w-10 bg-accent" aria-hidden />
        </a>
      </div>
    </section>
  );
}

