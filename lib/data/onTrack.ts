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
    project: "Keyring — App Web Completo para Gestão de Licenças",
    role: "Desenvolvedor Full Stack · Product Manager",
    summary:
      "App web completo para gestão de licenças desenvolvido integralmente por mim. Inclui CRUD completo, painéis administrativos, métricas em tempo real, CLI para operações, e integrações externas. Projeto end-to-end com arquitetura escalável e documentação técnica completa.",
    metrics: ["100% desenvolvimento próprio", "Sistema completo de gestão", "CLI integrado"],
    image: "/img/highlight-brain.png",
    stack: ["Laravel", "React", "PostgreSQL", "Docker", "PHPUnit"]
  },
  {
    id: "refatoracao-sites",
    year: "2025",
    client: "Eleven Soft",
    project: "Refatoração dos Sites da Empresa — Nova Arquitetura e Captação de Leads",
    role: "Desenvolvedor Full Stack · UX Strategy",
    summary:
      "Refatoração completa dos sites da empresa com nova arquitetura utilizando React + Tailwind + Blade/Filament. Implementação de captação de leads via quizzes interativos, integrações de marketing e materiais promocionais. Foco em performance, SEO e experiência do usuário.",
    metrics: ["Nova arquitetura moderna", "Captação via quizzes", "Integrações de marketing"],
    image: "/img/hero-cube.png",
    stack: ["React", "Tailwind CSS", "Laravel Blade", "Filament"]
  },
  {
    id: "esh-sistema",
    year: "2025",
    client: "Eleven Soft",
    project: "ESH — Sistema Proprietário de Monitoramento e Controle",
    role: "Desenvolvedor Full Stack · Arquitetura",
    summary:
      "Sistema proprietário de monitoramento e controle de terminais com backend Laravel robusto, frontend moderno e integrações contínuas. Solução completa para gestão e monitoramento em tempo real com alta disponibilidade e escalabilidade.",
    metrics: ["Backend Laravel robusto", "Frontend moderno", "Integrações contínuas"],
    image: "/img/off-track.png",
    stack: ["Laravel", "React", "PostgreSQL", "Docker", "CI/CD"]
  },
  {
    id: "integracao-asaas",
    year: "2025",
    client: "Eleven Soft",
    project: "Integração com Asaas — Pagamentos e Automações",
    role: "Desenvolvedor Backend · Integrações",
    summary:
      "Integração completa com Asaas para processamento de pagamentos (boleto, PIX, cartão) e automações em múltiplos produtos. Implementação de webhooks, tratamento de erros e fluxos de reconciliação financeira.",
    metrics: ["Múltiplos métodos de pagamento", "Automações integradas", "Webhooks robustos"],
    image: "/img/on-track.png",
    stack: ["Laravel", "REST API", "Webhooks", "PostgreSQL"]
  },
  {
    id: "apis-rest",
    year: "2025",
    client: "Eleven Soft",
    project: "APIs REST Documentadas e Testadas",
    role: "Desenvolvedor Backend · Arquitetura de APIs",
    summary:
      "Desenvolvimento de APIs REST documentadas com Swagger, testadas com PHPUnit, versionadas e deployadas com Docker/PostgreSQL. Foco em boas práticas, segurança, performance e documentação técnica completa para facilitar integrações.",
    metrics: ["Documentação Swagger", "Cobertura PHPUnit", "Versionamento semântico"],
    image: "/img/highlight-brain.png",
    stack: ["Laravel", "Swagger", "PHPUnit", "Docker", "PostgreSQL"]
  }
];

