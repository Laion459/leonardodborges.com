export type OffTrackExploration = {
  id: string;
  title: string;
  category: "Pesquisa" | "Arte" | "Comunidade" | "Open Source";
  description: string;
  year: string;
  image?: string;
  links?: { label: string; href: string }[];
  highlight: string;
};

export const OFF_TRACK_EXPLORATIONS: OffTrackExploration[] = [
  {
    id: "empreende-brazil-2025",
    title: "Empreende Brasil Conference 2025",
    category: "Comunidade",
    description:
      "Participação no Empreende Brasil Conference 2025, evento de 24 horas focado em inovação, empreendedorismo e tecnologia. Networking com líderes do ecossistema de startups e aprendizado sobre tendências do mercado.",
    year: "2025",
    highlight: "24 horas de imersão em inovação"
  },
  {
    id: "acate-invest-pitch",
    title: "ACATE Invest — Pitch Day",
    category: "Comunidade",
    description:
      "Participação no ACATE Invest — Pitch Day, evento intenso com empreendedores competindo por patrocínio. Ambiente de alta energia, ideias afiadas e oportunidades de networking estratégico.",
    year: "2025",
    highlight: "Evento de pitch e investimento"
  },
  {
    id: "acadepol-seminario",
    title: "VII Seminário Internacional ACADEPOL/SC",
    category: "Pesquisa",
    description:
      "Participação no VII Seminário Internacional de Ciência, Tecnologia, Inovação e Segurança Pública, parceria entre ACADEPOL-SC, EGC e UFSC. Ambiente técnico com representantes de forças de segurança de diversas regiões do país.",
    year: "2025",
    highlight: "Seminário internacional de segurança pública"
  },
  {
    id: "eternauta-ciberameacas",
    title: "O Eternauta — Paralelos com Ciberameaças",
    category: "Pesquisa",
    description:
      "Análise e apresentação sobre paralelos da série O Eternauta com o cenário atual de ciberameaças. Discussão sobre segurança da informação, superfície de ataque e estratégias de defesa.",
    year: "2025",
    highlight: "Análise de segurança e ciberameaças"
  },
  {
    id: "pentest-desec",
    title: "Certificação — Introdução ao Pentest na Prática",
    category: "Pesquisa",
    description:
      "Certificação em Introdução ao Pentest na Prática pela Desec Security. Aprofundamento em segurança da informação, testes de penetração e estratégias de defesa proativa.",
    year: "2023",
    highlight: "Certificação Desec Security"
  },
  {
    id: "computacao-forense",
    title: "Computação Forense e Cibersegurança",
    category: "Pesquisa",
    description:
      "Estudos e pesquisas em computação forense e cibersegurança. Interesse ativo em arquitetura de APIs, microsserviços, segurança em backend e boas práticas em desenvolvimento seguro.",
    year: "2023-2025",
    highlight: "Foco em segurança e forense"
  },
  {
    id: "formacao-laravel",
    title: "Formação MALT — Especialista Laravel PHP",
    category: "Pesquisa",
    description:
      "Formação completa em Laravel PHP com 40 horas de conteúdo especializado. Aprofundamento em boas práticas, arquitetura e desenvolvimento full stack com PHP/Laravel.",
    year: "2024-2025",
    highlight: "40 horas de formação especializada"
  },
  {
    id: "javascript-certificado",
    title: "Certificado JavaScript — UNIVALI",
    category: "Pesquisa",
    description:
      "Certificado em JavaScript pela Universidade do Vale do Itajaí. Estudo detalhado das ferramentas e exemplos de uso eficiente com aplicação prática de exercícios.",
    year: "2020",
    highlight: "Certificação universitária"
  }
];

