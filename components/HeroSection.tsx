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
    if (isDriveActive) return;
    setIsDriveActive(true);
    const signatureSection = document.querySelector("#signature-section");
    if (signatureSection) {
      setTimeout(() => {
        signatureSection.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-12 pt-28 text-foreground md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 -z-10">
        <PlexusBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
      </div>

      <header className="max-w-5xl space-y-6" data-hero-animate>
        <p className="text-xs uppercase tracking-[0.38em] text-accent">Leonardo Dario Borges</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-[0.18em] sm:text-6xl lg:text-7xl">
          Desenvolvedor de Software<br />
          <span className="text-accent">Experiências Imersivas</span>
        </h1>
        <p ref={subtitleRef} className="overflow-hidden text-base text-foreground/70 md:text-lg">
          <span className="inline-block">Redefinindo limites digitais,</span> <span className="inline-block">criando soluções</span> <span className="inline-block">que combinam</span>{" "}
          <span className="inline-block">design brutalista,</span> <span className="inline-block">animações avançadas</span> <span className="inline-block">e engenharia</span> <span className="inline-block">de software.</span>
        </p>
      </header>

      <div className="relative mt-10 flex h-[52vh] items-center justify-center md:mt-0">
        <div ref={portraitRef} className="relative h-full w-[300px] md:w-[360px] lg:w-[420px]" data-hero-animate>
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
          <Image src="/img/hero-leonardo.png" alt="Leonardo Dario Borges" fill priority className="object-contain" />
        </div>
        <div ref={cubeRef} className="absolute -bottom-6 left-1/2 h-32 w-32 -translate-x-1/2 md:-bottom-10 md:h-40 md:w-40" data-hero-animate>
          <Image src="/img/hero-cube.png" alt="Elemento futurista" fill priority className="object-contain" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 pb-6" data-hero-animate>
        <button
          type="button"
          onClick={handleDriveClick}
          data-cursor="interactive"
          className="inline-flex items-center gap-4 rounded-full border border-foreground/20 px-6 py-3 text-xs uppercase tracking-[0.35em] text-foreground/80 transition hover:border-accent hover:text-accent"
        >
          <span>{isDriveActive ? "Scroll to explore" : "Tap to drive"}</span>
          <span className="block h-px w-10 bg-foreground/40" aria-hidden />
        </button>
        <span className="text-[0.65rem] uppercase tracking-[0.5em] text-foreground/40">Scroll para desbloquear a experiência</span>
      </div>
    </section>
  );
}

