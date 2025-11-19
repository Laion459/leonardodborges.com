export type StorylineGalleryItem = {
  id: string;
  label: string;
  description?: string;
  image: string;
  alt: string;
  gridColumn: string;
  gridRow: string;
  aspectRatio: string;
  tone?: "muted" | "vivid";
};

export type StorylineSlide = {
  id: string;
  eyebrow: string;
  headline: string[];
  description: string;
  textPlacement: {
    gridColumn: string;
    gridRow: string;
  };
  mainImage: {
    image: string;
    alt: string;
    gridColumn: string;
    gridRow: string;
    aspectRatio: string;
  };
  gallery: StorylineGalleryItem[];
};

export type StorylineCTA = {
  id: string;
  type: "cta";
};

export type StorylineEntry = StorylineSlide | StorylineCTA;

export const STORYLINE: StorylineEntry[] = [
  {
    id: "eleven-soft-2025",
    eyebrow: "Eleven Soft, 2025",
    headline: [
      "Não importa onde você começa,",
      "é como você evolui cada entrega."
    ],
    description:
      "Desde 2019, transformo estratégia em ações rápidas. Como Desenvolvedor Full Stack na Eleven Soft, entrego produtos digitais completos com foco em métricas, experiência do usuário e impacto direto no negócio. Product Manager informal, liderando projetos críticos.",
    textPlacement: {
      gridColumn: "1 / span 3",
      gridRow: "2 / span 3"
    },
    mainImage: {
      image: "/img/hero-leonardo.png",
      alt: "Leonardo Dario Borges — Desenvolvedor Full Stack",
      gridColumn: "5 / span 4",
      gridRow: "3 / span 4",
      aspectRatio: "3 / 4"
    },
    gallery: [
      {
        id: "keyring-2025",
        label: "Keyring, 2025",
        description: "App web completo para gestão de licenças.",
        image: "/img/highlight-brain.png",
        alt: "Keyring — Sistema de gestão de licenças",
        gridColumn: "2 / span 2",
        gridRow: "1 / span 2",
        aspectRatio: "1 / 1",
        tone: "muted"
      },
      {
        id: "refatoracao-2025",
        label: "Refatoração Sites, 2025",
        description: "Nova arquitetura React + Tailwind + Filament.",
        image: "/img/on-track.png",
        alt: "Refatoração dos sites da empresa",
        gridColumn: "2 / span 2",
        gridRow: "4 / span 2",
        aspectRatio: "3 / 4"
      },
      {
        id: "esh-2025",
        label: "ESH Sistema, 2025",
        description: "Sistema de monitoramento e controle.",
        image: "/img/off-track.png",
        alt: "ESH — Sistema proprietário",
        gridColumn: "10 / span 2",
        gridRow: "1 / span 2",
        aspectRatio: "3 / 4",
        tone: "muted"
      },
      {
        id: "asaas-2025",
        label: "Integração Asaas, 2025",
        description: "Pagamentos e automações completas.",
        image: "/img/hero-cube.png",
        alt: "Integração com Asaas",
        gridColumn: "9 / span 3",
        gridRow: "4 / span 3",
        aspectRatio: "4 / 3",
        tone: "vivid"
      },
      {
        id: "acate-2025",
        label: "ACATE Invest, 2025",
        description: "Pitch Day e networking estratégico.",
        image: "/img/timeline-leonardo.png",
        alt: "ACATE Invest — Pitch Day",
        gridColumn: "6 / span 2",
        gridRow: "1 / span 2",
        aspectRatio: "4 / 5",
        tone: "muted"
      }
    ]
  },
  {
    id: "ldb-click-2025",
    eyebrow: "LDB CLICK, 2025",
    headline: ["Produtos digitais completos", "com impacto e estratégia."],
    description:
      "Fundação da LDB CLICK, focada em soluções digitais e consultoria em tecnologia. Desenvolvimento de produtos digitais de alto impacto e estratégias de inovação. Projetos que combinam pesquisa, narrativa e engenharia.",
    textPlacement: {
      gridColumn: "8 / span 3",
      gridRow: "2 / span 3"
    },
    mainImage: {
      image: "/img/sentado programando no escritorio.png",
      alt: "Leonardo Dario Borges programando",
      gridColumn: "4 / span 5",
      gridRow: "2 / span 4",
      aspectRatio: "4 / 3"
    },
    gallery: [
      {
        id: "apis-rest-2025",
        label: "APIs REST, 2025",
        description: "Swagger + PHPUnit + Docker + PostgreSQL.",
        image: "/img/highlight-brain.png",
        alt: "APIs REST documentadas",
        gridColumn: "1 / span 3",
        gridRow: "3 / span 3",
        aspectRatio: "4 / 5"
      },
      {
        id: "acadepol-2025",
        label: "ACADEPOL/SC, 2025",
        description: "Seminário internacional de segurança pública.",
        image: "/img/off-track.png",
        alt: "VII Seminário ACADEPOL/SC",
        gridColumn: "10 / span 2",
        gridRow: "2 / span 2",
        aspectRatio: "3 / 4",
        tone: "muted"
      },
      {
        id: "univali-2019",
        label: "UNIVALI, 2019",
        description: "Bacharelado em Ciência da Computação.",
        image: "/img/on-track.png",
        alt: "Formação acadêmica",
        gridColumn: "9 / span 2",
        gridRow: "5 / span 2",
        aspectRatio: "1 / 1"
      },
      {
        id: "empreende-2025",
        label: "Empreende Brasil, 2025",
        description: "Conference de 24 horas em inovação.",
        image: "/img/logo-ciano.png",
        alt: "Empreende Brasil Conference",
        gridColumn: "6 / span 2",
        gridRow: "6 / span 2",
        aspectRatio: "1 / 1",
        tone: "muted"
      }
    ]
  },
  {
    id: "cta",
    type: "cta"
  }
];


