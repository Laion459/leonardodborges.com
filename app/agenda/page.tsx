"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { AGENDA } from "@/lib/data/agenda";

export default function AgendaPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const events = useMemo(() => AGENDA, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-agenda-animate]"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(0,255,255,0.1),_transparent_70%)]" />

      <header className="space-y-4 sm:space-y-6" data-agenda-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">Agenda &amp; Calendário</p>
        <h1 className="font-display text-2xl uppercase tracking-[0.16em] sm:text-[3rem] sm:tracking-[0.18em] md:text-[3.4rem] lg:text-[4.2rem]">
          O que vem pela frente
          <span className="block text-accent">Datas, talks e lançamentos</span>
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          A jornada continua on e off track. Aqui estão os próximos capítulos e como participar. Eventos são atualizados em tempo
          real — status e convites ficam sinalizados abaixo.
        </p>
      </header>

      <section className="grid gap-6 sm:gap-8" data-agenda-animate>
        {events.map((event) => {
          const isExternal = event.link?.startsWith("http");
          return (
          <article
            key={event.id}
            className="grid gap-5 rounded-2xl border border-foreground/12 bg-background/85 p-5 backdrop-blur-lg transition-transform duration-400 ease-expo-out hover:-translate-y-4 sm:gap-6 sm:rounded-[2.5rem] sm:p-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/45 sm:gap-3 sm:text-xs sm:tracking-[0.32em]">
                <span>{event.date}</span>
                <span className="rounded-full border border-foreground/20 px-3 py-1 sm:px-4">{event.type}</span>
                <span
                  className={
                    event.status === "Confirmado"
                      ? "rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-accent sm:px-4"
                      : event.status === "Em andamento"
                      ? "rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 text-foreground/85 sm:px-4"
                      : "rounded-full border border-foreground/15 px-3 py-1 text-foreground/55 sm:px-4"
                  }
                >
                  {event.status}
                </span>
              </div>
              <h2 className="font-display text-xl uppercase tracking-[0.14em] text-foreground sm:text-[1.9rem] sm:tracking-[0.16em]">{event.title}</h2>
              <p className="text-sm text-foreground/70 sm:text-base">{event.description}</p>
            </div>
            <div className="flex flex-col justify-between gap-5 rounded-xl border border-foreground/15 bg-background/70 p-5 sm:gap-6 sm:rounded-[2rem] sm:p-6">
              <div className="space-y-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/45 sm:space-y-3 sm:text-xs sm:tracking-[0.32em]">
                <span>Localização</span>
                <span className="block text-xs text-foreground/75 sm:text-sm">{event.location}</span>
              </div>
                {event.link && (
                  <a
                    href={event.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    data-cursor="interactive"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent transition hover:text-accent/80 sm:gap-3 sm:tracking-[0.32em]"
                  >
                    Quero participar
                    <span className="block h-px w-6 bg-accent sm:w-8" aria-hidden />
                  </a>
                )}
            </div>
          </article>
          );
        })}
      </section>
    </div>
  );
}

