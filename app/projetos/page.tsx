"use client";

import Image from "next/image";
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
    nome: "Keyring — Gestão de Licenças",
    descricao:
      "App web completo para gestão de licenças desenvolvido integralmente por mim. Inclui CRUD completo, painéis administrativos, métricas em tempo real, CLI para operações e integrações externas. Projeto end-to-end com arquitetura escalável e documentação técnica completa.",
    tecnologias: ["Laravel", "React", "PostgreSQL", "Docker", "PHPUnit"],
    imagem: "/img/sentado programando no escritorio.png"
  },
  {
    nome: "Refatoração dos Sites da Empresa",
    descricao:
      "Refatoração completa dos sites da empresa com nova arquitetura utilizando React + Tailwind + Blade/Filament. Implementação de captação de leads via quizzes interativos, integrações de marketing e materiais promocionais. Foco em performance, SEO e experiência do usuário.",
    tecnologias: ["React", "Tailwind CSS", "Laravel Blade", "Filament"],
    imagem: "/img/hero-cube.png"
  },
  {
    nome: "ESH — Sistema de Monitoramento",
    descricao:
      "Sistema proprietário de monitoramento e controle de terminais com backend Laravel robusto, frontend moderno e integrações contínuas. Solução completa para gestão e monitoramento em tempo real com alta disponibilidade e escalabilidade.",
    tecnologias: ["Laravel", "React", "PostgreSQL", "Docker", "CI/CD"]
  },
  {
    nome: "Integração com Asaas",
    descricao:
      "Integração completa com Asaas para processamento de pagamentos (boleto, PIX, cartão) e automações em múltiplos produtos. Implementação de webhooks, tratamento de erros e fluxos de reconciliação financeira.",
    tecnologias: ["Laravel", "REST API", "Webhooks", "PostgreSQL"]
  },
  {
    nome: "APIs REST Documentadas",
    descricao:
      "Desenvolvimento de APIs REST documentadas com Swagger, testadas com PHPUnit, versionadas e deployadas com Docker/PostgreSQL. Foco em boas práticas, segurança, performance e documentação técnica completa para facilitar integrações.",
    tecnologias: ["Laravel", "Swagger", "PHPUnit", "Docker", "PostgreSQL"]
  },
  {
    nome: "Portfólio Digital",
    descricao:
      "Narrativa interativa para apresentar minhas experiências com foco em storytelling, performance e animações GSAP integradas a Next.js. Experiência cinematográfica inspirada em F1.",
    tecnologias: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
    demo: "https://www.leonardodborges.com.br",
    imagem: "/img/hero-leonardo.png"
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
                <a href={projeto.demo} target="_blank" rel="noopener noreferrer" data-cursor="interactive" className="text-accent">
                  Ver demo
                </a>
              )}
              {projeto.github && (
                <a href={projeto.github} target="_blank" rel="noopener noreferrer" data-cursor="interactive" className="text-accent">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

