export type OnTrackResult = {
  id: string;
  year: string;
  client: string;
  project: string;
  role: string;
  summary: string;
  metrics: string[];
  image?: string;
  stack: string[];
};

export const ON_TRACK_RESULTS: OnTrackResult[] = [
  {
    id: "keyring",
    year: "2025",
    client: "Eleven Soft",
    project: "Keyring — Sistema Completo de Gestão de Licenças",
    role: "Desenvolvedor Full Stack · Product Manager · Arquitetura",
    summary:
      "Aplicação web completa desenvolvida integralmente por mim para gestão de licenças de software. Sistema inclui CRUD completo, painéis administrativos avançados, dashboard de métricas em tempo real, CLI customizado para operações batch, integrações com sistemas externos via APIs, sistema de notificações, auditoria completa e relatórios exportáveis. Arquitetura escalável com separação de concerns, testes automatizados e documentação técnica completa.",
    metrics: ["100% desenvolvimento end-to-end", "CLI customizado integrado", "Dashboard de métricas em tempo real", "Sistema de auditoria completo"],
    image: "/img/photos for cards/keyring.webp",
    stack: ["Laravel", "React", "PostgreSQL", "Docker", "PHPUnit", "CLI", "WebSockets"]
  },
  {
    id: "refatoracao-sites",
    year: "2025",
    client: "Eleven Soft",
    project: "Refatoração Completa dos Sites Corporativos",
    role: "Desenvolvedor Full Stack · UX Strategy · SEO",
    summary:
      "Refatoração completa da arquitetura dos sites corporativos migrando para stack moderna: React + Tailwind CSS + Laravel Blade + Filament. Implementação de sistema de captação de leads via quizzes interativos com scoring, integrações com plataformas de marketing (CRM, email marketing, analytics), sistema de materiais promocionais dinâmicos, otimização de performance (Core Web Vitals >95), SEO técnico avançado e experiência do usuário responsiva e acessível.",
    metrics: ["Nova arquitetura React + Tailwind", "Sistema de quizzes com scoring", "Integrações de marketing automatizadas", "Core Web Vitals >95"],
    image: "/img/photos for cards/eleven-soft.webp",
    stack: ["React", "Tailwind CSS", "Laravel Blade", "Filament", "SEO", "Analytics"]
  },
  {
    id: "esh-sistema",
    year: "2025",
    client: "Eleven Soft",
    project: "ESH — Sistema de Monitoramento e Controle de Terminais",
    role: "Desenvolvedor Full Stack · Arquitetura de Sistemas",
    summary:
      "Sistema proprietário completo para monitoramento e controle remoto de terminais em tempo real. Backend Laravel robusto com processamento assíncrono, filas de jobs, cache distribuído e otimização de queries. Frontend moderno com React, atualizações em tempo real via WebSockets, dashboards interativos, alertas configuráveis e histórico de eventos. Integrações contínuas com CI/CD, testes automatizados, monitoramento de performance e sistema de logs centralizado.",
    metrics: ["Monitoramento em tempo real", "WebSockets para atualizações live", "Sistema de alertas configurável", "CI/CD automatizado"],
    image: "/img/photos for cards/esh-dashboard.webp",
    stack: ["Laravel", "React", "PostgreSQL", "Docker", "WebSockets", "Redis", "CI/CD"]
  },
  {
    id: "integracao-asaas",
    year: "2025",
    client: "Eleven Soft",
    project: "Integração Completa com Asaas — Gateway de Pagamentos",
    role: "Desenvolvedor Backend · Integrações Financeiras",
    summary:
      "Integração completa e robusta com gateway de pagamentos Asaas para processamento de múltiplos métodos: boleto bancário, PIX (QR Code e chave), cartão de crédito (1x e parcelado) e débito automático. Implementação de webhooks seguros com validação de assinatura, sistema de retry automático, tratamento de erros e exceções, fluxos de reconciliação financeira automatizados, dashboard de transações, relatórios financeiros e sistema de notificações para clientes.",
    metrics: ["Múltiplos métodos de pagamento", "Webhooks com validação de segurança", "Reconciliação financeira automatizada", "Sistema de retry inteligente"],
    image: "/img/photos for cards/integracoes-pagamentos.webp",
    stack: ["Laravel", "REST API", "Webhooks", "PostgreSQL", "Queue Jobs", "Cryptography"]
  },
  {
    id: "apis-rest",
    year: "2025",
    client: "Eleven Soft",
    project: "APIs RESTful Documentadas e Testadas",
    role: "Desenvolvedor Backend · Arquitetura de APIs",
    summary:
      "Desenvolvimento de APIs RESTful seguindo padrões de mercado com documentação completa via Swagger/OpenAPI, autenticação JWT, rate limiting, versionamento semântico (v1, v2), validação de dados robusta, tratamento de erros padronizado, testes automatizados com PHPUnit (cobertura >80%), deploy automatizado com Docker, integração com PostgreSQL, cache estratégico com Redis e monitoramento de performance com logging estruturado.",
    metrics: ["Documentação Swagger completa", "Cobertura de testes >80%", "Versionamento semântico", "Rate limiting implementado"],
    image: "/img/photos for cards/integracoes-pagamentos.webp",
    stack: ["Laravel", "Swagger", "PHPUnit", "Docker", "PostgreSQL", "Redis", "JWT"]
  },
  {
    id: "sistema-gestao-tmot",
    year: "2016-2025",
    client: "TMOT The Magic Of Traveling",
    project: "Sistema de Gestão de Propriedades e Reservas",
    role: "Fundador · Desenvolvedor Full Stack",
    summary:
      "Sistema completo desenvolvido para gestão de propriedades de locação temporária. Inclui gestão de reservas com calendário integrado, sistema de check-in/check-out automatizado, gestão de limpeza e lavanderia, integração com plataformas de booking (Airbnb, Booking.com), sistema de precificação dinâmica, relatórios financeiros, gestão de hóspedes e comunicação automatizada. Plataforma que maximiza rentabilidade e automatiza processos operacionais.",
    metrics: ["Gestão completa de reservas", "Integração com plataformas de booking", "Precificação dinâmica", "Automação de processos"],
    image: "/img/photos for cards/tmot.webp",
    stack: ["Laravel", "React", "MySQL", "APIs Externas", "Automação"]
  },
  {
    id: "portfolio-digital",
    year: "2025",
    client: "LDB CLICK",
    project: "Portfólio Digital Cinematográfico",
    role: "Desenvolvedor Full Stack · Designer",
    summary:
      "Portfólio digital imersivo desenvolvido com Next.js 15, TypeScript, GSAP para animações cinematográficas e Tailwind CSS. Experiência inspirada em F1 com narrativa interativa, scroll-triggered animations, transições suaves, design responsivo, performance otimizada (Lighthouse >98), SEO técnico completo e storytelling visual. Demonstração prática de habilidades em frontend moderno, animações avançadas e arquitetura de projetos escaláveis.",
    metrics: ["Lighthouse Score >98", "Animações GSAP cinematográficas", "100% responsivo", "SEO técnico completo"],
    image: "/img/photos for cards/ldb click.webp",
    stack: ["Next.js 15", "TypeScript", "GSAP", "Tailwind CSS", "Framer Motion"]
  }
];

