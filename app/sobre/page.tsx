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
    titulo: "Formação MALT — Especialista Laravel PHP",
    cargaHoraria: "40h",
    ano: "2024-2025"
  },
  {
    titulo: "Introdução ao Pentest na Prática",
    cargaHoraria: "Desec Security",
    ano: "2023"
  },
  {
    titulo: "Certificado JavaScript — UNIVALI",
    cargaHoraria: "Universidade do Vale do Itajaí",
    ano: "2020"
  },
  {
    titulo: "Certificação em Liderança, Capacidade de Aprender e Resiliência",
    cargaHoraria: "66 horas",
    ano: "2024"
  },
  {
    titulo: "Fórmula de Lançamento — Marketing Digital",
    cargaHoraria: "44 horas",
    ano: "2024"
  },
  {
    titulo: "Boas Práticas para o Laravel",
    cargaHoraria: "Especialização",
    ano: "2024-2025"
  },
  {
    titulo: "Computação Forense",
    cargaHoraria: "Especialização",
    ano: "2023-2025"
  },
  {
    titulo: "Cibersegurança — Ameaças e Defesa",
    cargaHoraria: "Especialização",
    ano: "2023-2025"
  },
  {
    titulo: "Governança na Cibersegurança",
    cargaHoraria: "Especialização",
    ano: "2024-2025"
  },
  {
    titulo: "Proteção de Dados — Bancos e Fintechs",
    cargaHoraria: "Especialização",
    ano: "2024-2025"
  },
  {
    titulo: "Criptografia Pós-Quântica",
    cargaHoraria: "Especialização",
    ano: "2024-2025"
  },
  {
    titulo: "Inteligência em Segurança",
    cargaHoraria: "Especialização",
    ano: "2024-2025"
  },
  {
    titulo: "Meus Dados, Minha Identidade — Visão de DPO",
    cargaHoraria: "Especialização",
    ano: "2024-2025"
  },
  {
    titulo: "Curso Banco de Dados — Danki Code",
    cargaHoraria: "Especialização",
    ano: "2024"
  },
  {
    titulo: "Fundamentos Obrigatórios PHP",
    cargaHoraria: "Especialização",
    ano: "2024"
  },
  {
    titulo: "Maratona Python",
    cargaHoraria: "Especialização",
    ano: "2024"
  },
  {
    titulo: "SUSE Rancher",
    cargaHoraria: "Especialização",
    ano: "2024-2025"
  }
];

const IDIOMAS = [
  {
    nome: "Português",
    nivel: "Nativo",
    codigo: "C2"
  },
  {
    nome: "Espanhol",
    nivel: "Fluente",
    codigo: "C1"
  },
  {
    nome: "Inglês",
    nivel: "Intermediário",
    codigo: "B2"
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
            Sou Leonardo Dario Borges, Desenvolvedor Full Stack na Eleven Soft, entregando produtos digitais de ponta a ponta, do backend ao frontend, sempre com foco em métricas, experiência do usuário e impacto direto no negócio. Além do desenvolvimento, exerço papel estratégico de Product Manager informal, liderando projetos críticos e gerenciando entregas de alto valor.
          </p>
          <p className="text-base leading-relaxed text-foreground/75">
            Entrego produtos completos, não apenas código. Reconhecido pelos sócios por rapidez, qualidade e visão estratégica. Minha formação em Bacharelado em Ciência da Computação pela UNIVALI me proporcionou base sólida em C, C++, PHP, Python e Java, aplicada à arquitetura e boas práticas em desenvolvimento full stack.
          </p>
          <p className="text-base leading-relaxed text-foreground/75">
            Tenho interesse ativo em arquitetura de APIs e microsserviços, segurança e boas práticas em backend, boas práticas e responsividade em frontend, testes automatizados e CI/CD, e computação forense e cibersegurança. Aberto a oportunidades desafiadoras em Full Stack e projetos estratégicos de alto impacto.
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
              Ênfase em engenharia de software, sistemas operacionais, segurança, computação forense e tecnologias emergentes. Base sólida em C, C++, PHP, Python e Java, aplicada à arquitetura e boas práticas em desenvolvimento full stack. Participação ativa em eventos de inovação como Empreende Brasil Conference, ACATE Invest e seminários de segurança pública.
            </p>
          </div>
        </div>

        <div className="space-y-6" data-fade>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Certificações</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.2em]">Evolução Contínua</h2>
          <ul className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
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

      <section className="space-y-6" data-fade>
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Idiomas</p>
        <h2 className="font-display text-3xl uppercase tracking-[0.2em]">Competências Linguísticas</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {IDIOMAS.map((idioma) => (
            <div key={idioma.nome} className="rounded-3xl border border-foreground/10 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-foreground">{idioma.nome}</h3>
                <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">{idioma.codigo}</span>
              </div>
              <p className="text-base text-foreground/70">{idioma.nivel}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6" data-fade>
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Experiência Profissional</p>
        <h2 className="font-display text-3xl uppercase tracking-[0.2em]">Trajetória</h2>
        <div className="space-y-6">
          <div className="rounded-3xl border border-foreground/10 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-foreground">Desenvolvedor de Software</h3>
                <p className="text-lg text-foreground/70 mt-1">Eleven Soft</p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-foreground/60">Fev 2025 — Atual</span>
            </div>
            <p className="text-base text-foreground/70 mb-4">
              Desenvolvimento de funcionalidades, criação e manutenção de sistemas, revisão e otimização de código, testes e validação, documentação técnica, pesquisa e aprendizado contínuo. Colaboração em metodologias ágeis (Scrum), participação em reuniões de planejamento e refinamento.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 px-3 py-1 rounded-full border border-foreground/20">PHP</span>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 px-3 py-1 rounded-full border border-foreground/20">Laravel</span>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 px-3 py-1 rounded-full border border-foreground/20">React</span>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 px-3 py-1 rounded-full border border-foreground/20">Next.js</span>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 px-3 py-1 rounded-full border border-foreground/20">PostgreSQL</span>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 px-3 py-1 rounded-full border border-foreground/20">Docker</span>
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-foreground">Fundador</h3>
                <p className="text-lg text-foreground/70 mt-1">LDB CLICK</p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-foreground/60">Out 2025 — Atual</span>
            </div>
            <p className="text-base text-foreground/70">
              Empreendimento digital focado em soluções digitais e consultoria em tecnologia. Desenvolvimento de produtos digitais de alto impacto e estratégias de inovação.
            </p>
          </div>
          <div className="rounded-3xl border border-foreground/10 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-foreground">Fundador</h3>
                <p className="text-lg text-foreground/70 mt-1">TMOT The Magic Of Traveling</p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-foreground/60">Set 2016 — Atual</span>
            </div>
            <p className="text-base text-foreground/70">
              Gerente de propriedades especializado em locações de temporada. Soluções completas para proprietários que buscam maximizar rentabilidade sem se preocupar com a operação. Gestão de reservas, check-in/out, limpeza e lavanderia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

