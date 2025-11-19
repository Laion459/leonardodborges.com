export type StorylineItem = {
  id: string;
  year: string;
  title: string;
  shortDescription: string;
  image?: string;
  category: "On Track" | "Off Track";
  location: string;
};

export const STORYLINE_ITEMS: StorylineItem[] = [
  {
    id: "2019-univali",
    year: "2019",
    title: "Bacharelado em Ciência da Computação",
    shortDescription: "UNIVALI — Base sólida em desenvolvimento full stack",
    image: "/img/hero-leonardo.png",
    category: "On Track",
    location: "Balneário Camboriú, SC"
  },
  {
    id: "2016-tmot",
    year: "2016",
    title: "Fundador — TMOT",
    shortDescription: "Gestão de propriedades e locação temporária",
    image: "/img/on-track.png",
    category: "Off Track",
    location: "Florianópolis, SC"
  },
  {
    id: "2023-pentest",
    year: "2023",
    title: "Certificação Pentest",
    shortDescription: "Desec Security — Segurança da informação",
    image: "/img/off-track.png",
    category: "On Track",
    location: "Online"
  },
  {
    id: "2025-eleven-soft",
    year: "2025",
    title: "Desenvolvedor Full Stack",
    shortDescription: "Eleven Soft — Produtos digitais e Product Management",
    image: "/img/hero-leonardo.png",
    category: "On Track",
    location: "Palhoça, SC"
  },
  {
    id: "2025-keyring",
    year: "2025",
    title: "Keyring — Gestão de Licenças",
    shortDescription: "App web completo desenvolvido integralmente",
    image: "/img/highlight-brain.png",
    category: "On Track",
    location: "Eleven Soft"
  },
  {
    id: "2025-refatoracao",
    year: "2025",
    title: "Refatoração dos Sites",
    shortDescription: "Nova arquitetura React + Tailwind + Filament",
    image: "/img/on-track.png",
    category: "On Track",
    location: "Eleven Soft"
  },
  {
    id: "2025-esh",
    year: "2025",
    title: "ESH Sistema",
    shortDescription: "Sistema proprietário de monitoramento",
    image: "/img/off-track.png",
    category: "On Track",
    location: "Eleven Soft"
  },
  {
    id: "2025-asaas",
    year: "2025",
    title: "Integração Asaas",
    shortDescription: "Pagamentos e automações completas",
    image: "/img/hero-cube.png",
    category: "On Track",
    location: "Eleven Soft"
  },
  {
    id: "2025-apis-rest",
    year: "2025",
    title: "APIs REST Documentadas",
    shortDescription: "Swagger + PHPUnit + Docker + PostgreSQL",
    image: "/img/highlight-brain.png",
    category: "On Track",
    location: "Eleven Soft"
  },
  {
    id: "2025-ldb-click",
    year: "2025",
    title: "Fundador — LDB CLICK",
    shortDescription: "Soluções digitais e consultoria em tecnologia",
    image: "/img/sentado programando no escritorio.png",
    category: "On Track",
    location: "Florianópolis, SC"
  },
  {
    id: "2025-acate-invest",
    year: "2025",
    title: "ACATE Invest — Pitch Day",
    shortDescription: "Evento de inovação e empreendedorismo",
    image: "/img/timeline-leonardo.png",
    category: "Off Track",
    location: "Florianópolis, SC"
  },
  {
    id: "2025-acadepol",
    year: "2025",
    title: "VII Seminário ACADEPOL/SC",
    shortDescription: "Ciência, Tecnologia e Segurança Pública",
    image: "/img/off-track.png",
    category: "Off Track",
    location: "Florianópolis, SC"
  },
  {
    id: "2025-empreende-brasil",
    year: "2025",
    title: "Empreende Brasil Conference",
    shortDescription: "24 horas de imersão em inovação",
    image: "/img/logo-ciano.png",
    category: "Off Track",
    location: "Florianópolis, SC"
  }
];
