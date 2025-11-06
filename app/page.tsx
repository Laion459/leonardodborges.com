"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { HorizontalScroller } from "@/components/HorizontalScroller";
import { useIsMobile } from "@/lib/useIsMobile";
import { HeroSection } from "@/components/HeroSection";
import { SignatureSection } from "@/components/SignatureSection";
import { ManifestoSection } from "@/components/ManifestoSection";

const FEATURED_PROJECT = {
  name: "LDB Digital Experience",
  description:
    "Experiência interativa inspirada em F1 para apresentar meu trabalho com storytelling, animações GSAP e foco em resultados.",
  link: "https://www.leonardodborges.com.br",
  image: "/img/timeline-leonardo.png"
};

const TECHNOLOGIES = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL",
  "Docker"
];

export default function HomePage() {
  const isMobile = useIsMobile();

  useEffect(() => {
    const scroller = document.getElementById("horizontal-scroll-container");
    const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section");

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        const elements = section.querySelectorAll("[data-animate]");

        gsap.fromTo(
          elements,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              scroller: isMobile ? undefined : scroller || undefined,
              start: isMobile ? "top 80%" : "left center",
              end: isMobile ? "bottom 10%" : "center center",
              horizontal: !isMobile,
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <>
      <HeroSection />
      <SignatureSection />
      <ManifestoSection />

      <HorizontalScroller>
        <section data-scroll-section className="horizontal-section">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6" data-animate>
              <p className="text-xs uppercase tracking-[0.35em] text-accent">Projeto Destaque</p>
              <h2 className="font-display text-4xl uppercase tracking-[0.2em] lg:text-5xl">
                {FEATURED_PROJECT.name}
              </h2>
              <p className="max-w-xl text-base text-foreground/70">{FEATURED_PROJECT.description}</p>
              <Link
                href={FEATURED_PROJECT.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="interactive"
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-accent"
              >
                Ver projeto
                <span aria-hidden className="block h-px w-12 bg-accent" />
              </Link>
            </div>
            <figure className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-foreground/10" data-animate>
              <Image
                src={FEATURED_PROJECT.image}
                alt="Mockup do projeto LDB Digital Experience"
                fill
                className="object-contain object-center transition-transform duration-700 ease-expo-out group-hover:scale-105"
                priority
              />
            </figure>
          </div>
        </section>

        <section data-scroll-section className="horizontal-section">
          <div className="flex w-full flex-col gap-8" data-animate>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">Stack</p>
            <h2 className="font-display text-4xl uppercase tracking-[0.2em] lg:text-5xl">Minhas Ferramentas</h2>
            <div className="grid grid-cols-2 gap-6 text-lg text-foreground/70 sm:grid-cols-3 lg:grid-cols-4">
              {TECHNOLOGIES.map((tech) => (
                <span key={tech} className="border border-foreground/10 px-5 py-4 text-center">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section data-scroll-section className="horizontal-section">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="space-y-6" data-animate>
              <p className="text-xs uppercase tracking-[0.35em] text-accent">Sobre Mim</p>
              <h2 className="font-display text-4xl uppercase tracking-[0.2em] lg:text-5xl">Sobre Mim</h2>
              <p className="max-w-xl text-base text-foreground/70">
                Apaixonado por transformar ideias complexas em realidade digital. Atualmente cursando Ciência da Computação na UNIVALI e sempre em busca de novos desafios que unam tecnologia, estética e impacto real.
              </p>
              <Link
                href="/sobre"
                data-cursor="interactive"
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-accent"
              >
                Saiba mais
                <span aria-hidden className="block h-px w-12 bg-accent" />
              </Link>
            </div>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-foreground/10" data-animate>
              <Image
                src="/img/hero-leonardo.png"
                alt="Leonardo Borges"
                fill
                className="object-contain transition-transform duration-700 ease-expo-out group-hover:scale-105"
              />
            </figure>
          </div>
        </section>

        <section data-scroll-section className="horizontal-section">
          <div className="space-y-6" data-animate>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">Contato</p>
            <h2 className="font-display text-4xl uppercase tracking-[0.2em] lg:text-5xl">Vamos Construir Algo Juntos?</h2>
            <p className="max-w-xl text-base text-foreground/70">
              Disponível para projetos freelance e oportunidades de colaboração. Vamos tirar sua ideia do papel com tecnologia de ponta, narrativa envolvente e foco em resultados de negócio.
            </p>
            <Link href="/contato" className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-accent" data-cursor="interactive">
              Entre em contato
              <span aria-hidden className="block h-px w-12 bg-accent" />
            </Link>
          </div>
        </section>
      </HorizontalScroller>
    </>
  );
}

