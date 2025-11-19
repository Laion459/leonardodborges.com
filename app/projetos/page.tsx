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
    nome: "Keyring — Sistema Completo de Gestão de Licenças",
    descricao:
      "Aplicação web completa desenvolvida integralmente por mim para gestão de licenças de software. Sistema inclui CRUD completo, painéis administrativos avançados, dashboard de métricas em tempo real, CLI customizado para operações batch, integrações com sistemas externos via APIs, sistema de notificações, auditoria completa e relatórios exportáveis. Arquitetura escalável com separação de concerns, testes automatizados e documentação técnica completa.",
    tecnologias: ["Laravel", "React", "PostgreSQL", "Docker", "PHPUnit", "CLI", "WebSockets"],
    imagem: "/img/sentado programando no escritorio.png"
  },
  {
    nome: "Refatoração Completa dos Sites Corporativos",
    descricao:
      "Refatoração completa da arquitetura dos sites corporativos migrando para stack moderna: React + Tailwind CSS + Laravel Blade + Filament. Implementação de sistema de captação de leads via quizzes interativos com scoring, integrações com plataformas de marketing (CRM, email marketing, analytics), sistema de materiais promocionais dinâmicos, otimização de performance (Core Web Vitals >95), SEO técnico avançado e experiência do usuário responsiva e acessível.",
    tecnologias: ["React", "Tailwind CSS", "Laravel Blade", "Filament", "SEO", "Analytics", "CRM"],
    imagem: "/img/hero-cube.png"
  },
  {
    nome: "ESH — Sistema de Monitoramento e Controle de Terminais",
    descricao:
      "Sistema completo que reduz tempo de resposta em até 70% com monitoramento em tempo real e automação de processos. Backend Laravel robusto com processamento assíncrono, filas de jobs, cache distribuído. Frontend moderno com React, atualizações via WebSockets, dashboards interativos e alertas configuráveis. CI/CD automatizado, testes e monitoramento de performance.",
    tecnologias: ["Laravel", "React", "PostgreSQL", "Docker", "WebSockets", "Redis", "CI/CD", "Queue Jobs"],
    imagem: "/img/photos for cards/esh-dashboard.webp",
    demo: "https://esh.elevensoft.dev/"
  },
  {
    nome: "Integração Completa com Asaas — Gateway de Pagamentos",
    descricao:
      "Integração que aumenta conversão de pagamentos em 40% com múltiplos métodos: boleto, PIX, cartão de crédito e débito automático. Webhooks seguros com validação de assinatura, retry automático, reconciliação financeira automatizada e dashboard de transações em tempo real. Resultado: redução de 60% no tempo de reconciliação.",
    tecnologias: ["Laravel", "REST API", "Webhooks", "PostgreSQL", "Queue Jobs", "Cryptography", "Payment Gateway"],
    imagem: "/img/photos for cards/integracoes-pagamentos.webp"
  },
  {
    nome: "APIs RESTful Documentadas e Testadas",
    descricao:
      "APIs que aumentam produtividade de desenvolvedores em 50% com documentação Swagger completa e testes automatizados (cobertura >80%). Autenticação JWT, rate limiting, versionamento semântico e monitoramento de performance. Deploy automatizado com Docker/PostgreSQL e cache estratégico com Redis.",
    tecnologias: ["Laravel", "Swagger", "PHPUnit", "Docker", "PostgreSQL", "Redis", "JWT", "OpenAPI"],
    imagem: "/img/photos for cards/integracoes-pagamentos.webp"
  },
  {
    nome: "Sistema de Gestão de Propriedades e Reservas — TMOT",
    descricao:
      "Sistema completo desenvolvido para gestão de propriedades de locação temporária. Inclui gestão de reservas com calendário integrado, sistema de check-in/check-out automatizado, gestão de limpeza e lavanderia, integração com plataformas de booking (Airbnb, Booking.com), sistema de precificação dinâmica, relatórios financeiros, gestão de hóspedes e comunicação automatizada. Plataforma que maximiza rentabilidade e automatiza processos operacionais.",
    tecnologias: ["Laravel", "React", "MySQL", "APIs Externas", "Automação", "Calendar Integration"],
    imagem: "/img/on-track.png"
  },
  {
    nome: "Portfólio Digital Cinematográfico",
    descricao:
      "Portfólio digital imersivo desenvolvido com Next.js 15, TypeScript, GSAP para animações cinematográficas e Tailwind CSS. Experiência inspirada em F1 com narrativa interativa, scroll-triggered animations, transições suaves, design responsivo, performance otimizada (Lighthouse >98), SEO técnico completo e storytelling visual. Demonstração prática de habilidades em frontend moderno, animações avançadas e arquitetura de projetos escaláveis.",
    tecnologias: ["Next.js 15", "TypeScript", "GSAP", "Tailwind CSS", "Framer Motion", "SEO"],
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
    <div ref={containerRef} className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-24 sm:gap-16 sm:px-6 sm:pb-24 sm:pt-32 lg:px-12">
      <header className="space-y-4 sm:space-y-6" data-project>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">Projetos</p>
        <h1 className="font-display text-3xl uppercase tracking-[0.2em] sm:text-4xl sm:tracking-[0.22em] md:text-5xl md:tracking-[0.25em] lg:text-6xl">Experiências em Destaque</h1>
        <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
          Soluções que reduzem tempo de operação em até 70%, aumentam conversões e impulsionam negócios. Cada projeto combina design, tecnologia e resultados mensuráveis.
        </p>
      </header>

      <section className="grid gap-8 sm:gap-10 md:grid-cols-2">
        {PROJETOS.map((projeto) => (
          <article key={projeto.nome} data-project className="space-y-4 sm:space-y-5">
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-foreground/10 sm:rounded-3xl">
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
            <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/60 sm:gap-3 sm:text-xs sm:tracking-[0.3em]">
              {projeto.tecnologias.map((tech) => (
                <span key={`${projeto.nome}-${tech}`} className="rounded-full border border-foreground/10 px-3 py-1.5 sm:px-4 sm:py-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-display text-xl uppercase tracking-[0.18em] text-foreground sm:text-2xl sm:tracking-[0.2em]">{projeto.nome}</h2>
              <p className="text-sm text-foreground/70 sm:text-base">{projeto.descricao}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.32em] sm:gap-6 sm:text-sm sm:tracking-[0.35em]">
              {projeto.demo && (
                <a href={projeto.demo} target="_blank" rel="noopener noreferrer" data-cursor="interactive" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-all hover:gap-3">
                  Ver Projeto
                  <span className="block h-px w-6 bg-accent transition-all hover:w-8" aria-hidden />
                </a>
              )}
              {projeto.github && (
                <a href={projeto.github} target="_blank" rel="noopener noreferrer" data-cursor="interactive" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-all hover:gap-3">
                  Ver Código
                  <span className="block h-px w-6 bg-accent transition-all hover:w-8" aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

