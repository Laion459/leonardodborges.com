"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Projeto = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  github?: string;
  demo?: string;
  imagem?: string;
};

const PROJETOS: Projeto[] = [
  {
    nome: "LDB Digital Experience",
    descricao:
      "Narrativa interativa para apresentar minhas experiências com foco em storytelling, performance e animações GSAP integradas a Next.js.",
    tecnologias: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
    github: "https://github.com/Laion459",
    demo: "https://www.leonardodborges.com.br",
    imagem: "/img/sentado programando no escritorio.png"
  },
  {
    nome: "NF Motos",
    descricao:
      "Site institucional para oficina mecânica com foco em credibilidade local, SEO e captação de leads via formulários otimizados.",
    tecnologias: ["HTML", "CSS", "JavaScript", "SEO"],
    github: "https://github.com/Laion459/LDB",
    demo: "https://www.leonardodborges.com.br/#nf-motos"
  },
  {
    nome: "ESH Eleven Soft",
    descricao:
      "Landing page SaaS com estrutura modular, integração a CRM e microinterações para demonstrar produto digital de software.",
    tecnologias: ["Next.js", "Styled Components", "Framer Motion"],
    demo: "https://www.leonardodborges.com.br/#esh-eleven-soft"
  },
  {
    nome: "Marina Jodar Lab",
    descricao:
      "Experiência digital para laboratório de próteses dentárias com ênfase em diferenciais da marca e prova social através de cases.",
    tecnologias: ["React", "Tailwind CSS", "Vercel"],
    demo: "https://www.leonardodborges.com.br/#marina-jodar"
  }
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-project]", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-32 lg:px-12">
      <header className="space-y-6" data-project>
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Projetos</p>
        <h1 className="font-display text-5xl uppercase tracking-[0.25em] lg:text-6xl">Experiências em Destaque</h1>
        <p className="max-w-2xl text-base text-foreground/70">
          Cada projeto é um laboratório onde combino design, tecnologia e negócios. Priorizo experiências fluidas, performance de
          alto nível e comunicação que conecte pessoas à proposta de valor do produto.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-2">
        {PROJETOS.map((projeto) => (
          <article key={projeto.nome} data-project className="space-y-5">
            <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-foreground/10">
              {projeto.imagem ? (
                <Image
                  src={projeto.imagem}
                  alt={projeto.nome}
                  fill
                  className="object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-accent/10 via-transparent to-accent/30" />
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
              {projeto.tecnologias.map((tech) => (
                <span key={`${projeto.nome}-${tech}`} className="rounded-full border border-foreground/10 px-4 py-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-2xl uppercase tracking-[0.2em] text-foreground">{projeto.nome}</h2>
              <p className="text-base text-foreground/70">{projeto.descricao}</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.35em]">
              {projeto.demo && (
                <Link href={projeto.demo} target="_blank" rel="noopener noreferrer" data-cursor="interactive" className="text-accent">
                  Ver demo
                </Link>
              )}
              {projeto.github && (
                <Link href={projeto.github} target="_blank" rel="noopener noreferrer" data-cursor="interactive" className="text-accent">
                  GitHub
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

