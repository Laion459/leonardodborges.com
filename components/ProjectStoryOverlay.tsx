"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { NAVIGATION_LINKS } from "@/lib/data/navigation";
import { ON_TRACK_RESULTS } from "@/lib/data/onTrack";

type ProjectStoryToggleDetail = {
  active: boolean;
};

export function ProjectStoryOverlay() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const storyPanels = useMemo(() => ON_TRACK_RESULTS, []);

  useEffect(() => {
    const handleToggle = (event: Event) => {
      const detail = (event as CustomEvent<ProjectStoryToggleDetail>).detail;
      setIsActive(detail?.active ?? false);
    };

    window.addEventListener("ldb:project-story-toggle", handleToggle);

    return () => {
      window.removeEventListener("ldb:project-story-toggle", handleToggle);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isActive);
    document.body.classList.toggle("project-story-active", isActive);

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollByAmount(1);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollByAmount(-1);
      }
    };

    if (isActive) {
      window.addEventListener("keydown", handleKey);
      requestAnimationFrame(() => {
        containerRef.current?.focus({ preventScroll: true });
      });
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.classList.remove("no-scroll");
      document.body.classList.remove("project-story-active");
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;

      const primaryDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (primaryDelta === 0) return;

      event.preventDefault();
      scroller.scrollBy({
        left: primaryDelta,
        behavior: "smooth"
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isActive]);

  const close = () => {
    setIsActive(false);
    window.dispatchEvent(
      new CustomEvent<ProjectStoryToggleDetail>("ldb:project-story-toggle", {
        detail: { active: false }
      })
    );
  };

  const scrollByAmount = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const viewportWidth = scroller.clientWidth;
    scroller.scrollBy({
      left: direction * viewportWidth * 0.85,
      behavior: "smooth"
    });
  };

  if (!isActive) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="Narrativa de projetos Leonardo Borges"
      className="fixed inset-0 z-[70] flex flex-col bg-background outline-none"
    >
      <header className="flex items-center justify-between border-b border-foreground/20 px-6 py-4 text-xs uppercase tracking-[0.32em] text-foreground/60 sm:px-10">
        <span>Leonardo Dario Borges — Storyline</span>
        <button
          type="button"
          onClick={close}
          data-cursor="interactive"
          className="rounded-full border border-foreground/25 px-5 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-foreground/75 transition hover:border-accent hover:text-accent"
        >
          Fechar
        </button>
      </header>

      <div ref={scrollerRef} className="flex-1 overflow-hidden">
        <div className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden touch-pan-x">
          {storyPanels.map((panel) => (
            <section
              key={panel.id}
              className="flex w-full flex-shrink-0 snap-center flex-col gap-8 overflow-y-auto px-6 py-10 sm:px-10 md:px-14 lg:gap-10"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.32em] text-foreground/50">
                    <span>{panel.year}</span>
                    <span className="rounded-full border border-foreground/20 px-4 py-1">{panel.client}</span>
                    <span>{panel.role}</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.32em] text-accent">Capítulo On Track</p>
                    <h3 className="font-display text-[2.4rem] uppercase tracking-[0.14em] text-foreground sm:text-[2.8rem]">
                      {panel.project}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/70 sm:text-base">{panel.summary}</p>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
                    {panel.metrics.map((metric) => (
                      <span key={`${panel.id}-${metric}`} className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-accent">
                        {metric}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-foreground/45">
                    {panel.stack.map((tech) => (
                      <span key={`${panel.id}-${tech}`} className="rounded-full border border-foreground/20 px-4 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative h-64 overflow-hidden rounded-3xl border border-foreground/15 bg-background/60 sm:h-72">
                    {panel.image ? (
                      <Image src={panel.image} alt={panel.project} fill className="object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.32em] text-foreground/35">
                        Visual em produção
                      </div>
                    )}
                  </div>
                  <div className="rounded-3xl border border-foreground/12 bg-background/70 p-6 text-sm text-foreground/65">
                    <p className="text-[0.62rem] uppercase tracking-[0.3em] text-foreground/45">Insights</p>
                    <p className="mt-3">
                      Cada capítulo da linha On Track revela como narrativa, arquitetura e performance sustentam resultados práticos.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}

          <section className="flex w-full flex-shrink-0 snap-center flex-col justify-between gap-10 px-6 py-10 sm:px-10 md:px-14">
            <div className="space-y-5">
              <p className="text-[0.65rem] uppercase tracking-[0.34em] text-accent">Próximas voltas</p>
              <h3 className="font-display text-[2.6rem] uppercase tracking-[0.14em] text-foreground sm:text-[3rem]">
                Explore outros destinos
              </h3>
              <p className="text-sm text-foreground/70 sm:text-base">
                Continue a jornada navegando pelos capítulos completos do portfólio. On Track aprofunda cases em produção, Off Track
                mostra experimentos e a Agenda mantém o radar atualizado.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {NAVIGATION_LINKS.filter((link) => link.href !== "/").map((link) => (
                <a
                  key={`story-${link.href}`}
                  href={link.href}
                  data-cursor="interactive"
                  className="flex items-center justify-between rounded-3xl border border-foreground/15 bg-background/75 px-6 py-4 text-xs uppercase tracking-[0.3em] text-foreground/75 transition hover:border-accent hover:text-accent"
                >
                  {link.label}
                  <span className="block h-px w-10 bg-foreground/30" aria-hidden />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-foreground/15 px-6 py-4 text-[0.62rem] uppercase tracking-[0.3em] text-foreground/45 sm:px-10">
        <span>Use scroll ou setas para navegar</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            data-cursor="interactive"
            className="rounded-full border border-foreground/25 px-3 py-1 transition hover:border-accent hover:text-accent"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            data-cursor="interactive"
            className="rounded-full border border-foreground/25 px-3 py-1 transition hover:border-accent hover:text-accent"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

