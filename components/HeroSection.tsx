"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { PlexusBackground } from "@/components/PlexusBackground";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const [isDriveActive, setIsDriveActive] = useState<boolean>(false);
  const driveTriggeredRef = useRef<boolean>(false);

  const triggerDrive = () => {
    if (driveTriggeredRef.current) return;
    driveTriggeredRef.current = true;
    setIsDriveActive(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!driveTriggeredRef.current && window.scrollY > window.innerHeight * 0.1) {
        triggerDrive();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const portrait = portraitRef.current;
    const cube = cubeRef.current;
    const subtitle = subtitleRef.current;
    if (!section || !portrait || !cube || !subtitle) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        section.querySelectorAll("[data-hero-animate]") || [],
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12 }
      )
        .fromTo(portrait, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, "<" )
        .fromTo(cube, { yPercent: -60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out" }, "<0.2" )
        .fromTo(subtitle.querySelectorAll("span") || [], { yPercent: 100 }, { yPercent: 0, duration: 1, stagger: 0.08 }, "<");
    }, section);

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 30;
      const y = (event.clientY / innerHeight - 0.5) * 30;

      gsap.to(portrait, { x: x * 0.6, y: y * 0.6, duration: 1.2, ease: "power3.out" });
      gsap.to(cube, { x: -x * 1.2, y: -y * 1.2, duration: 1.2, ease: "power3.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!isDriveActive) return;

    const portrait = portraitRef.current;
    const cube = cubeRef.current;
    if (!portrait || !cube) return;

    const tl = gsap.timeline();
    tl.to(portrait, { yPercent: -10, duration: 1, ease: "power4.out" }).to(
      cube,
      { yPercent: 20, rotation: 360, duration: 1.2, ease: "power4.out" },
      "<"
    );
  }, [isDriveActive]);

  const handleDriveClick = () => {
    triggerDrive();
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-5 pb-10 pt-24 text-foreground sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <PlexusBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <header className="max-w-5xl space-y-5" data-hero-animate>
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.38em]">
          Leonardo Dario Borges
        </p>
        <h1 className="font-display text-[2.7rem] uppercase leading-[1.05] tracking-[0.1em] sm:text-5xl sm:tracking-[0.14em] md:text-[3.6rem] md:tracking-[0.16em] lg:text-6xl lg:tracking-[0.18em] xl:text-7xl">
          Desenvolvedor de Software
          <br className="hidden sm:block" />
          <span className="block text-accent">Experiências Imersivas</span>
        </h1>
        <p ref={subtitleRef} className="overflow-hidden text-sm text-foreground/70 sm:text-base md:text-lg">
          <span className="inline-block">Redefinindo limites digitais,</span>{" "}
          <span className="inline-block">criando soluções</span>{" "}
          <span className="inline-block">que combinam design brutalista,</span>{" "}
          <span className="inline-block">animações avançadas</span>{" "}
          <span className="inline-block">e engenharia de software.</span>
        </p>
      </header>

      <div className="relative mt-10 flex h-[48vh] items-center justify-center md:mt-4 md:h-[52vh] lg:h-[58vh]">
        <div
          ref={portraitRef}
          className="relative h-full w-[58vw] max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px]"
          data-hero-animate
        >
          <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl" />
          <Image
            src="/img/hero-leonardo.png"
            alt="Leonardo Dario Borges"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
        <div
          ref={cubeRef}
          className="absolute -bottom-10 left-1/2 h-20 w-20 -translate-x-1/2 sm:-bottom-12 sm:h-24 sm:w-24 md:-bottom-16 md:h-28 md:w-28 lg:-bottom-20 lg:h-32 lg:w-32"
          data-hero-animate
        >
          <Image src="/img/hero-cube.png" alt="Elemento futurista" fill priority className="object-contain" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 pb-6" data-hero-animate>
        <button
          type="button"
          onClick={handleDriveClick}
          data-cursor="interactive"
          className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/80 transition hover:border-accent hover:text-accent sm:gap-4 sm:px-6 sm:py-3 sm:text-xs sm:tracking-[0.32em]"
        >
          <span>{driveTriggeredRef.current || isDriveActive ? "Scroll to explore" : "Tap to drive"}</span>
          <span className="block h-px w-10 bg-foreground/40" aria-hidden />
        </button>
        <span className="text-[0.55rem] uppercase tracking-[0.42em] text-foreground/40 sm:text-[0.65rem] sm:tracking-[0.5em]">
          Scroll para desbloquear a experiência
        </span>
      </div>
    </section>
  );
}

