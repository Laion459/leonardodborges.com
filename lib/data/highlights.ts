export type HighlightItem = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  tag: string;
  image?: string;
};

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "2025-keyring",
    title: "Keyring — Gestão de Licenças",
    subtitle: "App Web Completo",
    year: "2025",
    description:
      "App web completo para gestão de licenças desenvolvido integralmente por mim. Inclui CRUD completo, painéis administrativos, métricas em tempo real, CLI e integrações externas.",
    tag: "Produto Digital",
    image: "/img/highlight-brain.png"
  },
  {
    id: "2025-refatoracao-sites",
    title: "Refatoração dos Sites",
    subtitle: "Nova Arquitetura React + Tailwind",
    year: "2025",
    description:
      "Refatoração completa dos sites da empresa com nova arquitetura React + Tailwind + Blade/Filament. Captação de leads via quizzes, integrações de marketing e materiais promocionais.",
    tag: "Arquitetura Moderna"
  },
  {
    id: "2025-esh-sistema",
    title: "ESH — Monitoramento e Controle",
    subtitle: "Sistema Proprietário",
    year: "2025",
    description:
      "Sistema proprietário de monitoramento e controle de terminais com backend Laravel robusto, frontend moderno e integrações contínuas.",
    tag: "Sistema Proprietário"
  },
  {
    id: "2025-integracao-asaas",
    title: "Integração Asaas",
    subtitle: "Pagamentos e Automações",
    year: "2025",
    description:
      "Integração completa com Asaas para processamento de pagamentos (boleto, PIX, cartão) e automações em múltiplos produtos com webhooks robustos.",
    tag: "Integrações Financeiras"
  },
  {
    id: "2025-apis-rest",
    title: "APIs REST Documentadas",
    subtitle: "Swagger + PHPUnit + Docker",
    year: "2025",
    description:
      "APIs REST documentadas com Swagger, testadas com PHPUnit, versionadas e deployadas com Docker/PostgreSQL. Foco em boas práticas e segurança.",
    tag: "Arquitetura de APIs"
  },
  {
    id: "2025-product-management",
    title: "Product Management",
    subtitle: "Liderança Estratégica",
    year: "2025",
    description:
      "Papel estratégico de Product Manager informal, liderando projetos críticos e gerenciando entregas de alto valor na Eleven Soft.",
    tag: "Liderança"
  }
];


