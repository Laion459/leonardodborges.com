"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const LOGOS = [
  {
    name: "Eleven Soft",
    src: "/img/logos/eleven soft.png",
    alt: "Eleven Soft Logo"
  },
  {
    name: "NF Motos",
    src: "/img/logos/nf motos.png",
    alt: "NF Motos Logo"
  },
  {
    name: "Marina Jodar",
    src: "/img/logos/marina jodar.png",
    alt: "Marina Jodar Lab Logo"
  },
  {
    name: "Salão Flor de Lis",
    src: "/img/logos/flor de lis.webp",
    alt: "Salão Flor de Lis Logo"
  },
  {
    name: "Gabriela N",
    src: "/img/logos/gabriela n.webp",
    alt: "Gabriela N Logo"
  }
];

export function PartnersCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const logos = track.children;
      const logosArray = Array.from(logos) as HTMLElement[];
      
      // Duplicate logos for seamless loop
      const logosClone = logosArray.map((logo) => logo.cloneNode(true) as HTMLElement);
      logosClone.forEach((logo) => track.appendChild(logo));

      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-foreground/10 py-12 sm:py-16 md:py-20" data-partner-animate>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-transparent to-background" />
      
      <div className="mb-6 text-center sm:mb-8">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">
          Parceiros & Clientes
        </p>
        <h3 className="mt-2 font-display text-lg uppercase tracking-[0.14em] text-foreground sm:text-xl sm:tracking-[0.16em] md:text-2xl">
          Empresas que confiam no nosso trabalho
        </h3>
      </div>

      <div ref={containerRef} className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20"
          style={{ width: "fit-content" }}
        >
          {LOGOS.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-16 w-32 flex-shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-40 md:h-24 md:w-48"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

