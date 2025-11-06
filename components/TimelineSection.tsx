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
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 text-foreground sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.12),_transparent_65%)]" />
      <header className="space-y-4">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">Linha do Tempo</p>
        <h2 className="font-display text-[2.2rem] uppercase tracking-[0.14em] sm:text-4xl sm:tracking-[0.18em] md:text-5xl">
          Na pista e fora dela,
          <span className="block text-accent">cada projeto acelera minha trajetória.</span>
        </h2>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          Uma visão contínua da evolução profissional, com destaque para entregas em produção, iniciativas acadêmicas e
          experimentos que expandem minhas capacidades técnicas e criativas.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-animate>
        {events.map((event) => {
          const sizeClass = SIZE_CLASS[event.size];
          const tagColor = event.category === "On Track" ? "bg-accent/20 text-accent" : "bg-foreground/10 text-foreground/80";

          return (
            <article
              key={event.id}
              data-timeline-card
              className={clsx(
                "flex flex-col gap-4 rounded-3xl border border-foreground/10 bg-background/85 p-6 backdrop-blur transition-transform duration-500 ease-expo-out hover:-translate-y-4 hover:border-accent/60",
                sizeClass
              )}
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-foreground/50">
                <span>{event.year}</span>
                <span className={clsx("rounded-full px-3 py-1 text-[0.6rem]", tagColor)}>{event.category}</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl uppercase tracking-[0.16em] text-foreground sm:text-2xl">{event.title}</h3>
                <p className="text-[0.65rem] uppercase tracking-[0.26em] text-foreground/40 sm:text-sm sm:tracking-[0.3em]">
                  {event.subtitle}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">{event.description}</p>

              <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.35em] text-foreground/40">
                <span>{event.location}</span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="block h-px w-6 bg-accent" />
                  Highlights
                </span>
              </div>

              <div className="mt-6 h-32 overflow-hidden rounded-2xl border border-foreground/10 sm:h-36 md:h-40">
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
          Continuar Experiência
          <span className="block h-px w-10 bg-accent" aria-hidden />
        </a>
      </div>
    </section>
  );
}

