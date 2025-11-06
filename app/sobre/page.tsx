"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const CERTIFICACOES = [
  {
    titulo: "Empreende Brasil Conference 2025",
    cargaHoraria: "24h",
    ano: "2025"
  },
  {
    titulo: "Formação DEV Front-End",
    cargaHoraria: "9h40",
    ano: "2024"
  },
  {
    titulo: "Congresso de Segurança da Informação das FATECs",
    cargaHoraria: "8h",
    ano: "2024"
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-fade]", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.15
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-32 lg:px-12">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6" data-fade>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Sobre Mim</p>
          <h1 className="font-display text-5xl uppercase tracking-[0.25em] lg:text-6xl">Quem Sou</h1>
          <p className="text-base leading-relaxed text-foreground/75">
            Sou Leonardo Dario Borges, desenvolvedor de software e estudante de Ciência da Computação na UNIVALI. Minha jornada na tecnologia é movida pela curiosidade em entender como as coisas funcionam e pelo desejo de criar experiências digitais memoráveis. Atuo em projetos que combinam design imersivo, engenharia sólida e foco em performance. Tenho interesse especial em interfaces ricas em animações, sistemas web escaláveis, segurança da informação e produtos digitais que entregam propósito.
          </p>
          <p className="text-base leading-relaxed text-foreground/75">
            Quando não estou codificando, estou explorando novas referências criativas, estudando tendências de UX, ou participando de eventos de tecnologia e inovação para expandir meu repertório. Meu objetivo é construir soluções que gerem impacto real para pessoas e negócios, unindo estética, estratégia e tecnologia.
          </p>
        </div>
        <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-foreground/10" data-fade>
          <Image
            src="/img/foto leonardo em pe com terno meio corpo.png"
            alt="Leonardo Dario Borges"
            fill
            className="object-cover"
            priority
          />
        </figure>
      </section>

      <section className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6" data-fade>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Formação</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.2em]">Universidade do Vale do Itajaí</h2>
          <div className="rounded-3xl border border-foreground/10 p-8">
            <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-foreground">Bacharelado em Ciência da Computação</h3>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-foreground/60">2019 — 2026</p>
            <p className="mt-4 text-base text-foreground/70">
              Ênfase em engenharia de software, sistemas operacionais, segurança, computação forense e tecnologias emergentes. Participação ativa em eventos de inovação como Empreende Brasil Conference e iniciativas da comunidade Startup SC.
            </p>
          </div>
        </div>

        <div className="space-y-6" data-fade>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Certificações</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.2em]">Evolução Contínua</h2>
          <ul className="space-y-4">
            {CERTIFICACOES.map((certificacao) => (
              <li key={certificacao.titulo} className="rounded-3xl border border-foreground/10 p-6">
                <div className="flex items-start justify-between text-sm uppercase tracking-[0.2em] text-foreground/60">
                  <span>{certificacao.ano}</span>
                  <span>{certificacao.cargaHoraria}</span>
                </div>
                <p className="mt-3 text-lg font-semibold text-foreground">{certificacao.titulo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

