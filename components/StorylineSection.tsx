"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { STORYLINE, StorylineCTA, StorylineEntry, StorylineSlide } from "@/lib/data/storyline";
import { NAVIGATION_LINKS } from "@/lib/data/navigation";

function isStorylineSlide(entry: StorylineEntry): entry is StorylineSlide {
  return (entry as StorylineCTA).type !== "cta";
}

const SECTION_ID = "ldb-storyline";

export function StorylineSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const storylineEntries = useMemo(() => STORYLINE, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) {
      return;
    }

    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-story-slide]"));
    const totalSlides = slides.length;

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
            setActiveIndex(0);
            return;
          }

          const progress = self.progress;
          gsap.set(track, { x: -distance * progress });
          const nextIndex = Math.min(totalSlides - 1, Math.round(progress * (totalSlides - 1)));
          setActiveIndex(nextIndex);
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

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible?.target) {
            const index = Number(visible.target.getAttribute("data-story-index"));
            if (!Number.isNaN(index)) {
              setActiveIndex(index);
            }
          }
        },
        {
          root: null,
          threshold: [0.35, 0.5, 0.65]
        }
      );

      slides.forEach((slide, index) => {
        slide.setAttribute("data-story-index", String(index));
        observer.observe(slide);
      });

      return () => {
        observer.disconnect();
        slides.forEach((slide) => slide.removeAttribute("data-story-index"));
      };
    });

    return () => {
      mm.revert();
    };
  }, [storylineEntries.length]);

  const totalSlides = storylineEntries.length;

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
        className="relative mx-auto flex min-h-[100vh] w-full max-w-[1440px] items-stretch overflow-hidden pb-12 pt-20 sm:pt-24 lg:h-[105vh] lg:min-h-0"
      >
        <div className="pointer-events-none absolute top-6 left-6 right-6 z-20 flex flex-col gap-2 text-[0.62rem] uppercase tracking-[0.3em] text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Storyline — On Track</span>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}</span>
        </div>

        <div
          ref={trackRef}
          className="relative flex h-full w-full min-w-full flex-col gap-12 px-4 pb-10 pt-20 sm:px-6 md:flex-row md:items-center md:gap-10 md:px-10 md:py-16 lg:px-16"
        >
          {storylineEntries.map((entry, index) => {
            if (isStorylineSlide(entry)) {
              return (
                <article
                  key={entry.id}
                  data-story-slide
                  className="storyline-slide group relative flex h-max w-full max-w-[720px] flex-shrink-0 flex-col justify-center rounded-[2.2rem] border border-foreground/10 bg-background/85 px-5 py-8 backdrop-blur sm:max-w-[820px] sm:px-7 sm:py-10 md:h-[82%] md:w-[68vw] md:max-w-[960px] md:rounded-[2.8rem] md:px-10 lg:h-[88%]"
                >
                  <div
                    className="relative flex flex-col gap-4 sm:gap-5 lg:grid lg:gap-6 lg:[grid-template-columns:repeat(12,minmax(0,1fr))] lg:[grid-template-rows:repeat(8,minmax(48px,1fr))]"
                  >
                    <div
                      className="space-y-4 text-left"
                      style={{
                        gridColumn: entry.textPlacement.gridColumn,
                        gridRow: entry.textPlacement.gridRow
                      }}
                    >
                      <p className="text-[0.6rem] uppercase tracking-[0.32em] text-foreground/45">{entry.eyebrow}</p>
                      <h3 className="font-display text-[1.6rem] uppercase tracking-[0.12em] text-foreground sm:text-[1.85rem] lg:text-[2.3rem]">
                        {entry.headline.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                      <p className="w-full max-w-[min(56ch,100%)] text-xs leading-relaxed text-foreground/70 sm:text-sm lg:text-base">
                        {entry.description}
                      </p>
                      {entry.signature && (
                        <div className="w-24 select-none opacity-75 sm:w-28 lg:w-32">
                          <Image src={entry.signature} alt="Assinatura" width={320} height={120} className="h-auto w-full object-contain" />
                        </div>
                      )}
                    </div>

                    <figure
                      className="relative overflow-hidden rounded-[1.6rem] border border-foreground/15 bg-background/70 sm:rounded-[2rem]"
                      style={{
                        gridColumn: entry.mainImage.gridColumn,
                        gridRow: entry.mainImage.gridRow,
                        aspectRatio: entry.mainImage.aspectRatio,
                        maxWidth: "min(28vw, 340px)",
                        justifySelf: "center"
                      }}
                    >
                      <Image src={entry.mainImage.image} alt={entry.mainImage.alt} fill className="object-cover" />
                    </figure>

                    {entry.gallery.map((item) => (
                      <figure
                        key={item.id}
                        className="group flex flex-col gap-2"
                        style={{
                          gridColumn: item.gridColumn,
                          gridRow: item.gridRow,
                          maxWidth: "min(22vw, 220px)"
                        }}
                      >
                        <figcaption className="text-[0.55rem] uppercase tracking-[0.3em] text-foreground/40">
                          {item.label}
                        </figcaption>
                        <div
                          className={clsx(
                            "relative overflow-hidden rounded-[1.2rem] border border-foreground/12 sm:rounded-[1.6rem]",
                            item.tone === "muted" ? "opacity-85" : ""
                          )}
                          style={{ aspectRatio: item.aspectRatio }}
                        >
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover transition duration-700 ease-expo-out group-hover:scale-[1.03]"
                          />
                        </div>
                        {item.description && (
                          <p className="text-[0.55rem] uppercase tracking-[0.26em] text-foreground/45">
                            {item.description}
                          </p>
                        )}
                      </figure>
                    ))}
                  </div>
                </article>
              );
            }

            return (
              /* CTA Slide */
              <article
                key={entry.id}
                data-story-slide
                className="relative flex h-max w-full max-w-[640px] flex-shrink-0 flex-col justify-center rounded-[2.2rem] border border-foreground/12 bg-background/90 px-5 py-9 backdrop-blur sm:max-w-[720px] sm:px-7 sm:py-10 md:h-[82%] md:w-[60vw] md:max-w-[840px] md:rounded-[2.6rem] md:px-10"
              >
                <div className="space-y-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-accent">Próximas voltas</p>
                  <h3 className="font-display text-[2rem] uppercase tracking-[0.14em] text-foreground sm:text-[2.2rem] md:text-[2.5rem]">
                    Explore outros destinos
                  </h3>
                  <p className="max-w-xl text-sm text-foreground/75">
                    Continue a jornada navegando pelos capítulos completos do portfólio. On Track aprofunda cases em produção, Off Track
                    apresenta laboratórios criativos e a Agenda mantém o radar atualizado.
                  </p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {NAVIGATION_LINKS.filter((link) => link.href !== "/").map((link) => (
                    <a
                      key={`storyline-cta-${link.href}`}
                      href={link.href}
                      data-cursor="interactive"
                      className="flex items-center justify-between rounded-3xl border border-foreground/15 bg-background/75 px-5 py-4 text-xs uppercase tracking-[0.3em] text-foreground/75 transition hover:border-accent hover:text-accent"
                    >
                      {link.label}
                      <span className="block h-px w-10 bg-foreground/30" aria-hidden />
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
