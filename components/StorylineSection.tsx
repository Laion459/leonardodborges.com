"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { STORYLINE_ITEMS } from "@/lib/data/storyline";
import { NAVIGATION_LINKS } from "@/lib/data/navigation";

const SECTION_ID = "ldb-storyline";

export function StorylineSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(track, { x: 0 });

      const updateDistance = () => Math.max(track.scrollWidth - wrapper.clientWidth, 0);

      const trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => `+=${updateDistance() + window.innerHeight * 0.2}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const distance = updateDistance();
          if (distance <= 0) {
            gsap.set(track, { x: 0 });
            return;
          }

          // Progress aumenta quando desce a página (0 -> 1)
          // Cards estão ordenados: mais novos (esquerda) -> mais antigos (direita)
          // Ao descer, queremos ver progressivamente os cards mais antigos
          // Isso significa mover o track para a esquerda (valores negativos de x)
          // Quando progress = 0: x = 0 (início, cards novos à esquerda visíveis)
          // Quando progress = 1: x = -distance (fim, cards antigos à direita visíveis)
          const progress = self.progress;
          gsap.set(track, { x: -distance * progress });
        }
      });

      ScrollTrigger.refresh();

      return () => {
        trigger.kill();
        gsap.set(track, { clearProps: "x" });
      };
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.set(track, { x: 0 });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id={SECTION_ID}
      className="relative bg-background text-foreground"
      aria-label="Linha narrativa de projetos On Track"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08),_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div
        ref={wrapperRef}
        className="relative mx-auto flex min-h-[100vh] w-full max-w-[1440px] items-center overflow-x-auto overflow-y-hidden pb-12 pt-20 sm:pt-24 lg:h-[100vh] lg:min-h-0 lg:overflow-hidden"
        style={{ width: "100%", maxWidth: "100vw", boxSizing: "border-box" }}
      >
        <div className="pointer-events-none absolute top-4 left-4 right-4 z-20 flex flex-col gap-2 text-[0.62rem] uppercase tracking-[0.3em] text-foreground/45 sm:top-6 sm:left-6 sm:right-6 sm:flex-row sm:items-center sm:justify-between">
          <span>Storyline — On Track & Off Track</span>
          <span>{STORYLINE_ITEMS.length} momentos</span>
        </div>

        <div
          ref={trackRef}
          data-storyline-track
          className="relative flex h-full items-center gap-6 px-4 py-16 sm:gap-8 sm:px-6 md:gap-10 md:px-8 lg:gap-12 lg:px-12"
          style={{
            width: "max-content",
            minWidth: "100%"
          }}
        >
          {STORYLINE_ITEMS.map((item) => {
            const CardContent = (
              <>
                <div className="flex w-full items-center justify-between text-[0.55rem] uppercase tracking-[0.28em] text-foreground/50 sm:text-[0.6rem]">
                  <span>{item.year}</span>
                  <span
                    className={clsx(
                      "rounded-full px-2 py-0.5 text-[0.5rem] uppercase tracking-[0.24em] sm:px-2.5 sm:text-[0.55rem]",
                      item.category === "On Track"
                        ? "bg-accent/20 text-accent"
                        : "bg-foreground/10 text-foreground/70"
                    )}
                  >
                    {item.category === "On Track" ? "On" : "Off"}
                  </span>
                </div>

                <div className="relative h-32 w-full overflow-hidden rounded-xl border border-foreground/10 bg-background/60 sm:h-40 md:h-44 lg:h-48">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[0.55rem] uppercase tracking-[0.24em] text-foreground/30">
                      Sem imagem
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-start gap-1.5 text-center sm:gap-2">
                  <h3 className="font-display text-xs uppercase leading-tight tracking-[0.12em] text-foreground sm:text-sm sm:tracking-[0.14em] md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-[0.6rem] leading-relaxed text-foreground/60 sm:text-[0.65rem] md:text-xs">
                    {item.shortDescription}
                  </p>
                  <p className="mt-auto text-[0.55rem] uppercase tracking-[0.24em] text-foreground/40 sm:text-[0.6rem]">
                    {item.location}
                  </p>
                </div>
              </>
            );

            const cardClassName =
              "group relative flex h-[280px] w-[200px] flex-shrink-0 flex-col items-center justify-start gap-3 rounded-2xl border border-foreground/10 bg-background/85 p-4 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-background/95 sm:h-[320px] sm:w-[240px] sm:gap-4 sm:p-5 md:h-[360px] md:w-[280px] lg:h-[400px] lg:w-[320px]";

            if (item.link) {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(cardClassName, "cursor-pointer")}
                  data-cursor="interactive"
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div key={item.id} className={cardClassName}>
                {CardContent}
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="relative flex h-[280px] w-[200px] flex-shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border border-foreground/12 bg-background/90 p-5 backdrop-blur sm:h-[320px] sm:w-[240px] sm:gap-5 sm:p-6 md:h-[360px] md:w-[280px] lg:h-[400px] lg:w-[320px]">
            <div className="space-y-3 text-center sm:space-y-4">
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-accent">Próximas voltas</p>
              <h3 className="font-display text-sm uppercase tracking-[0.12em] text-foreground sm:text-base md:text-lg">
                Explore outros destinos
              </h3>
              <p className="text-[0.6rem] leading-relaxed text-foreground/70 sm:text-[0.65rem] md:text-xs">
                Continue a jornada navegando pelos capítulos completos do portfólio.
              </p>
            </div>
            <div className="mt-auto grid w-full gap-2">
              {NAVIGATION_LINKS.filter((link) => link.href !== "/").slice(0, 2).map((link) => (
                <a
                  key={`storyline-cta-${link.href}`}
                  href={link.href}
                  data-cursor="interactive"
                  className="flex items-center justify-between rounded-xl border border-foreground/15 bg-background/75 px-3 py-2 text-[0.6rem] uppercase tracking-[0.24em] text-foreground/75 transition hover:border-accent hover:text-accent sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-[0.65rem]"
                >
                  {link.label}
                  <span className="block h-px w-6 bg-foreground/30 sm:w-8" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
