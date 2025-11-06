"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { AGENDA } from "@/lib/data/agenda";

const FILTERS = ["Todos", "Projeto", "Talk", "Mentoria", "Lançamento"] as const;

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
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 text-foreground sm:px-8 md:gap-20 md:pt-32 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(0,255,255,0.1),_transparent_70%)]" />

      <header className="space-y-6" data-agenda-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent sm:text-xs">Agenda &amp; Calendário</p>
        <h1 className="font-display text-[3rem] uppercase tracking-[0.18em] sm:text-[3.4rem] md:text-[4.2rem]">
          O que vem pela frente
          <span className="block text-accent">Datas, talks e lançamentos</span>
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
          A jornada continua on e off track. Aqui estão os próximos capítulos e como participar. Eventos são atualizados em tempo
          real — status e convites ficam sinalizados abaixo.
        </p>
      </header>

      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.32em] text-foreground/45" data-agenda-animate>
        {FILTERS.map((filter) => (
          <span key={filter} className="rounded-full border border-foreground/20 px-4 py-1">
            {filter}
          </span>
        ))}
        <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-accent">Atualização mensal</span>
      </div>

      <section className="grid gap-6" data-agenda-animate>
        {events.map((event) => {
          const isExternal = event.link?.startsWith("http");
          return (
          <article
            key={event.id}
            className="grid gap-6 rounded-[2.5rem] border border-foreground/12 bg-background/85 p-7 backdrop-blur-lg transition-transform duration-400 ease-expo-out hover:-translate-y-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.32em] text-foreground/45">
                <span>{event.date}</span>
                <span className="rounded-full border border-foreground/20 px-4 py-1">{event.type}</span>
                <span
                  className={
                    event.status === "Confirmado"
                      ? "rounded-full border border-accent/50 bg-accent/15 px-4 py-1 text-accent"
                      : event.status === "Em andamento"
                      ? "rounded-full border border-foreground/20 bg-foreground/10 px-4 py-1 text-foreground/85"
                      : "rounded-full border border-foreground/15 px-4 py-1 text-foreground/55"
                  }
                >
                  {event.status}
                </span>
              </div>
              <h2 className="font-display text-[1.9rem] uppercase tracking-[0.16em] text-foreground">{event.title}</h2>
              <p className="text-sm text-foreground/70 sm:text-base">{event.description}</p>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-[2rem] border border-foreground/15 bg-background/70 p-6">
              <div className="space-y-3 text-xs uppercase tracking-[0.32em] text-foreground/45">
                <span>Localização</span>
                <span className="text-sm text-foreground/75">{event.location}</span>
              </div>
                {event.link && (
                  <a
                    href={event.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    data-cursor="interactive"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-accent transition hover:text-accent/80"
                  >
                    Quero participar
                    <span className="block h-px w-8 bg-accent" aria-hidden />
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

