export type TimelineCategory = "On Track" | "Off Track";

export type TimelineSize = "sm" | "md" | "lg";

export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: TimelineCategory;
  location: string;
  size: TimelineSize;
  image?: string;
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "2025-immersive-portfolio",
    year: "2025",
    title: "Immersive Portfolio Launch",
    subtitle: "Experiência Cinematográfica em Next.js",
    description:
      "Construção de narrativa digital inspirada em F1 para apresentar projetos de software com GSAP, ScrollTrigger e animações customizadas.",
    category: "On Track",
    location: "Florianópolis, Brasil",
    size: "lg",
    image: "/img/hero-leonardo.png"
  },
  {
    id: "2024-tech-lead",
    year: "2024",
    title: "Tech Lead em Soluções Industriais",
    subtitle: "Integrações IoT + Cloud",
    description:
      "Coordenei squads para digitalizar processos fabris, implementando dashboards em tempo real e microsserviços escaláveis.",
    category: "On Track",
    location: "Santa Catarina, Brasil",
    size: "md"
  },
  {
    id: "2024-community",
    year: "2024",
    title: "Mentorias em Comunidades",
    subtitle: "Open Source & Career Talks",
    description:
      "Workshops sobre engenharia de software, segurança da informação e rotas de carreira para estudantes de tecnologia.",
    category: "Off Track",
    location: "Joinville, Brasil",
    size: "sm"
  },
  {
    id: "2023-startup",
    year: "2023",
    title: "Startup Weekend Winner",
    subtitle: "Experiência em Inovação",
    description:
      "Protótipo funcional em 54 horas combinando UX, arquitetura e pitch para apresentar solução de IA aplicada à educação.",
    category: "On Track",
    location: "Blumenau, Brasil",
    size: "md"
  },
  {
    id: "2022-certification",
    year: "2022",
    title: "Certificação em Segurança",
    subtitle: "Hardening & Incident Response",
    description:
      "Estudos focados em estratégias de contenção, análise de logs e defesa proativa de aplicações e infraestrutura.",
    category: "On Track",
    location: "Online",
    size: "sm"
  },
  {
    id: "2021-creative-labs",
    year: "2021",
    title: "Creative Coding Labs",
    subtitle: "Experimentos em Arte Generativa",
    description:
      "Explorações com shaders, WebGL e música procedimental para criar experiências sensoriais na web.",
    category: "Off Track",
    location: "Remote",
    size: "lg"
  },
  {
    id: "2020-freelance",
    year: "2020",
    title: "Primeiros Projetos Freelance",
    subtitle: "Landing Pages & Automação",
    description:
      "Desenvolvi soluções end-to-end para pequenas empresas, com foco em captação de leads e integrações low-code.",
    category: "On Track",
    location: "Itajaí, Brasil",
    size: "md"
  },
  {
    id: "2019-computer-science",
    year: "2019",
    title: "Ingressou em Ciência da Computação",
    subtitle: "UNIVALI",
    description:
      "Primeiro contato com engenharia de software, algoritmos, sistemas operacionais e visão de carreira em tecnologia.",
    category: "On Track",
    location: "Balneário Camboriú",
    size: "sm"
  }
];

