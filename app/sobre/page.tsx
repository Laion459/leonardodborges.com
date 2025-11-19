"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const CERTIFICACOES = [
  {
    titulo: "Empreende Brasil Conference 2025",
    cargaHoraria: "24h",
    ano: "2025",
    instituicao: "Empreende Brasil"
  },
  {
    titulo: "Conectando Pontos Invisíveis",
    cargaHoraria: "Especialização",
    ano: "2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "A Arte do Red Team",
    cargaHoraria: "Especialização",
    ano: "2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Blue Team — Defesa Cibernética",
    cargaHoraria: "Especialização",
    ano: "2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Formação MALT — Especialista Laravel PHP",
    cargaHoraria: "40h",
    ano: "2024-2025",
    instituicao: "MALT"
  },
  {
    titulo: "Boas Práticas para o Laravel",
    cargaHoraria: "Especialização",
    ano: "2024-2025",
    instituicao: "Comunidade Laravel"
  },
  {
    titulo: "Computação Forense",
    cargaHoraria: "Especialização",
    ano: "2023-2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Cibersegurança — Ameaças e Defesa",
    cargaHoraria: "Especialização",
    ano: "2023-2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Governança na Cibersegurança",
    cargaHoraria: "Especialização",
    ano: "2024-2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Proteção de Dados — Bancos e Fintechs",
    cargaHoraria: "Especialização",
    ano: "2024-2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Criptografia Pós-Quântica",
    cargaHoraria: "Especialização",
    ano: "2024-2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Inteligência em Segurança",
    cargaHoraria: "Especialização",
    ano: "2024-2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Meus Dados, Minha Identidade — Visão de DPO",
    cargaHoraria: "Especialização",
    ano: "2024-2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "O Eternauta — Paralelos com Ciberameaças",
    cargaHoraria: "Apresentação",
    ano: "2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Sinais IDCIBER",
    cargaHoraria: "Especialização",
    ano: "2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Segurança da Informação",
    cargaHoraria: "Especialização",
    ano: "2024-2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Introdução ao Pentest na Prática",
    cargaHoraria: "Certificação",
    ano: "2023",
    instituicao: "Desec Security"
  },
  {
    titulo: "Certificado IDCIBER — 09/07/2025",
    cargaHoraria: "Evento",
    ano: "2025",
    instituicao: "IDCIBER"
  },
  {
    titulo: "Certificado Startup",
    cargaHoraria: "Evento",
    ano: "2024-2025",
    instituicao: "Startup SC"
  },
  {
    titulo: "Campanha Natal 2023",
    cargaHoraria: "Participação",
    ano: "2023",
    instituicao: "Comunidade"
  },
  {
    titulo: "Certificado ELIS 2021",
    cargaHoraria: "Evento",
    ano: "2021",
    instituicao: "ELIS"
  },
  {
    titulo: "Certificado ELIS — TCC",
    cargaHoraria: "Trabalho de Conclusão",
    ano: "2021",
    instituicao: "ELIS"
  },
  {
    titulo: "Certificado JavaScript — UNIVALI",
    cargaHoraria: "Curso",
    ano: "2020",
    instituicao: "UNIVALI"
  },
  {
    titulo: "Certificação em Liderança, Capacidade de Aprender e Resiliência",
    cargaHoraria: "66 horas",
    ano: "2024",
    instituicao: "Formação Profissional"
  },
  {
    titulo: "Fórmula de Lançamento — Marketing Digital",
    cargaHoraria: "44 horas",
    ano: "2024",
    instituicao: "Formação Profissional"
  },
  {
    titulo: "Curso Banco de Dados — Danki Code",
    cargaHoraria: "Especialização",
    ano: "2024",
    instituicao: "Danki Code"
  },
  {
    titulo: "Fundamentos Obrigatórios PHP",
    cargaHoraria: "Curso",
    ano: "2024",
    instituicao: "Formação Online"
  },
  {
    titulo: "Maratona Python",
    cargaHoraria: "Competição",
    ano: "2024",
    instituicao: "Comunidade Python"
  },
  {
    titulo: "SUSE Rancher",
    cargaHoraria: "Especialização",
    ano: "2024-2025",
    instituicao: "SUSE"
  },
  {
    titulo: "PUC RS",
    cargaHoraria: "Formação",
    ano: "2024-2025",
    instituicao: "PUC RS"
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
    <div ref={containerRef} className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-24 sm:gap-16 sm:px-6 sm:pb-24 sm:pt-32 lg:px-12">
      <section className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4 sm:space-y-6" data-fade>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">Sobre Mim</p>
          <h1 className="font-display text-3xl uppercase tracking-[0.2em] sm:text-4xl sm:tracking-[0.22em] md:text-5xl md:tracking-[0.25em] lg:text-6xl">Quem Sou</h1>
          <p className="text-sm leading-relaxed text-foreground/75 sm:text-base">
            Sou Leonardo Dario Borges, Desenvolvedor Full Stack na Eleven Soft, entregando produtos digitais de ponta a ponta, do backend ao frontend, sempre com foco em métricas, experiência do usuário e impacto direto no negócio. Além do desenvolvimento, exerço papel estratégico de Product Manager informal, liderando projetos críticos e gerenciando entregas de alto valor.
          </p>
          <p className="text-sm leading-relaxed text-foreground/75 sm:text-base">
            Entrego produtos completos, não apenas código. Reconhecido pelos sócios por rapidez, qualidade e visão estratégica. Minha formação em Bacharelado em Ciência da Computação pela UNIVALI me proporcionou base sólida em C, C++, PHP, Python e Java, aplicada à arquitetura e boas práticas em desenvolvimento full stack.
          </p>
          <p className="text-sm leading-relaxed text-foreground/75 sm:text-base">
            Tenho interesse ativo em arquitetura de APIs e microsserviços, segurança e boas práticas em backend, boas práticas e responsividade em frontend, testes automatizados e CI/CD, e computação forense e cibersegurança. Aberto a oportunidades desafiadoras em Full Stack e projetos estratégicos de alto impacto.
          </p>
        </div>
        <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-foreground/10 sm:rounded-3xl" data-fade>
          <Image
            src="/img/foto leonardo em pe com terno meio corpo.png"
            alt="Leonardo Dario Borges"
            fill
            className="object-cover"
            priority
          />
        </figure>
      </section>

      <section className="grid gap-8 sm:gap-12 lg:grid-cols-2">
        <div className="space-y-4 sm:space-y-6" data-fade>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">Formação</p>
          <h2 className="font-display text-2xl uppercase tracking-[0.18em] sm:text-3xl sm:tracking-[0.2em]">Universidade do Vale do Itajaí</h2>
          <div className="rounded-2xl border border-foreground/10 p-6 sm:rounded-3xl sm:p-8">
            <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-foreground sm:text-xl sm:tracking-[0.2em]">Bacharelado em Ciência da Computação</h3>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-foreground/60 sm:mt-4 sm:text-sm sm:tracking-[0.2em]">2019 — 2026</p>
            <p className="mt-3 text-sm text-foreground/70 sm:mt-4 sm:text-base">
              Ênfase em engenharia de software, sistemas operacionais, segurança, computação forense e tecnologias emergentes. Base sólida em C, C++, PHP, Python e Java, aplicada à arquitetura e boas práticas em desenvolvimento full stack. Participação ativa em eventos de inovação como Empreende Brasil Conference, ACATE Invest e seminários de segurança pública.
            </p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6" data-fade>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">Certificações</p>
          <h2 className="font-display text-2xl uppercase tracking-[0.18em] sm:text-3xl sm:tracking-[0.2em]">Evolução Contínua</h2>
          <ul className="space-y-3 max-h-[600px] overflow-y-auto pr-2 sm:space-y-4 sm:max-h-[700px]">
            {CERTIFICACOES.map((certificacao) => (
              <li key={certificacao.titulo} className="rounded-2xl border border-foreground/10 p-4 transition-colors hover:border-accent/30 sm:rounded-3xl sm:p-6">
                <div className="flex items-start justify-between text-xs uppercase tracking-[0.18em] text-foreground/60 mb-1.5 sm:text-sm sm:tracking-[0.2em] sm:mb-2">
                  <span>{certificacao.ano}</span>
                  <span className="text-accent/70 text-[0.65rem] sm:text-sm">{certificacao.cargaHoraria}</span>
                </div>
                <p className="text-base font-semibold text-foreground mb-1 sm:text-lg">{certificacao.titulo}</p>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-foreground/50 sm:text-xs sm:tracking-[0.2em]">{certificacao.instituicao}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4 sm:space-y-6" data-fade>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">Idiomas</p>
        <h2 className="font-display text-2xl uppercase tracking-[0.18em] sm:text-3xl sm:tracking-[0.2em]">Competências Linguísticas</h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {IDIOMAS.map((idioma) => (
            <div key={idioma.nome} className="rounded-2xl border border-foreground/10 p-5 sm:rounded-3xl sm:p-6">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-foreground sm:text-xl sm:tracking-[0.2em]">{idioma.nome}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-accent font-semibold sm:text-sm sm:tracking-[0.2em]">{idioma.codigo}</span>
              </div>
              <p className="text-sm text-foreground/70 sm:text-base">{idioma.nivel}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 sm:space-y-6" data-fade>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">Experiência Profissional</p>
        <h2 className="font-display text-2xl uppercase tracking-[0.18em] sm:text-3xl sm:tracking-[0.2em]">Trajetória</h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-2xl border border-foreground/10 p-6 sm:rounded-3xl sm:p-8">
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-foreground sm:text-xl sm:tracking-[0.2em]">Desenvolvedor de Software</h3>
                <p className="text-base text-foreground/70 mt-1 sm:text-lg">Eleven Soft</p>
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/60 sm:text-sm sm:tracking-[0.2em]">Fev 2025 — Atual</span>
            </div>
            <p className="text-sm text-foreground/70 mb-4 sm:text-base">
              Desenvolvimento de funcionalidades, criação e manutenção de sistemas, revisão e otimização de código, testes e validação, documentação técnica, pesquisa e aprendizado contínuo. Colaboração em metodologias ágeis (Scrum), participação em reuniões de planejamento e refinamento.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60 px-2.5 py-1 rounded-full border border-foreground/20 sm:text-xs sm:tracking-[0.2em] sm:px-3">PHP</span>
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60 px-2.5 py-1 rounded-full border border-foreground/20 sm:text-xs sm:tracking-[0.2em] sm:px-3">Laravel</span>
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60 px-2.5 py-1 rounded-full border border-foreground/20 sm:text-xs sm:tracking-[0.2em] sm:px-3">React</span>
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60 px-2.5 py-1 rounded-full border border-foreground/20 sm:text-xs sm:tracking-[0.2em] sm:px-3">Next.js</span>
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60 px-2.5 py-1 rounded-full border border-foreground/20 sm:text-xs sm:tracking-[0.2em] sm:px-3">PostgreSQL</span>
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60 px-2.5 py-1 rounded-full border border-foreground/20 sm:text-xs sm:tracking-[0.2em] sm:px-3">Docker</span>
            </div>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-6 sm:rounded-3xl sm:p-8">
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-foreground sm:text-xl sm:tracking-[0.2em]">Fundador</h3>
                <p className="text-base text-foreground/70 mt-1 sm:text-lg">LDB CLICK</p>
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/60 sm:text-sm sm:tracking-[0.2em]">Out 2025 — Atual</span>
            </div>
            <p className="text-sm text-foreground/70 sm:text-base">
              Empreendimento digital focado em soluções digitais e consultoria em tecnologia. Desenvolvimento de produtos digitais de alto impacto e estratégias de inovação.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-6 sm:rounded-3xl sm:p-8">
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-foreground sm:text-xl sm:tracking-[0.2em]">Fundador</h3>
                <p className="text-base text-foreground/70 mt-1 sm:text-lg">TMOT The Magic Of Traveling</p>
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/60 sm:text-sm sm:tracking-[0.2em]">Set 2016 — Atual</span>
            </div>
            <p className="text-sm text-foreground/70 sm:text-base">
              Gerente de propriedades especializado em locações de temporada. Soluções completas para proprietários que buscam maximizar rentabilidade sem se preocupar com a operação. Gestão de reservas, check-in/out, limpeza e lavanderia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

