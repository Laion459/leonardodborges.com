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
  signature?: string;
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
    id: "miami-2024",
    eyebrow: "GP de Miami, 2024",
    headline: [
      "Não importa onde você começa,",
      "é como você evolui cada volta."
    ],
    description:
      "Desde 2019, transformo estratégia em ações rápidas. Este sprint reúne avanços com storytelling, interfaces vivas e entregas que fogem da pista tradicional.",
    signature: "/img/ldb-signature.png",
    textPlacement: {
      gridColumn: "1 / span 3",
      gridRow: "2 / span 3"
    },
    mainImage: {
      image: "/img/hero-leonardo.png",
      alt: "Leonardo celebrando após entrega",
      gridColumn: "5 / span 4",
      gridRow: "3 / span 4",
      aspectRatio: "3 / 4"
    },
    gallery: [
      {
        id: "catar-2024",
        label: "Catar, 2024",
        description: "Experiência brutalista para redirecionar funil de leads.",
        image: "/img/highlight-brain.png",
        alt: "Interface destaque com cérebro neon",
        gridColumn: "2 / span 2",
        gridRow: "1 / span 2",
        aspectRatio: "1 / 1",
        tone: "muted"
      },
      {
        id: "fia-2024",
        label: "Cerimônia FIA, 2024",
        description: "Design system preparado para lives e keynotes.",
        image: "/img/on-track.png",
        alt: "Apresentação de projeto",
        gridColumn: "2 / span 2",
        gridRow: "4 / span 2",
        aspectRatio: "3 / 4"
      },
      {
        id: "monaco-2023",
        label: "Mônaco, 2023",
        description: "Motion + GSAP para produtos premium.",
        image: "/img/off-track.png",
        alt: "Experimentação criativa",
        gridColumn: "10 / span 2",
        gridRow: "1 / span 2",
        aspectRatio: "3 / 4",
        tone: "muted"
      },
      {
        id: "britain-2025",
        label: "Grã-Bretanha, 2025",
        description: "Arquitetura Edge e automações LangChain.",
        image: "/img/hero-cube.png",
        alt: "Cubo tecnológico",
        gridColumn: "9 / span 3",
        gridRow: "4 / span 3",
        aspectRatio: "4 / 3",
        tone: "vivid"
      },
      {
        id: "battersea-2024",
        label: "Battersea, 2024",
        description: "Mentorias para squads criativos.",
        image: "/img/timeline-leonardo.png",
        alt: "Leonardo em workshop",
        gridColumn: "6 / span 2",
        gridRow: "1 / span 2",
        aspectRatio: "4 / 5",
        tone: "muted"
      }
    ]
  },
  {
    id: "barcelona-2024",
    eyebrow: "Barcelona, 2024",
    headline: ["Storytelling técnico", "com impacto e performance."],
    description:
      "Projetos autorais e consultorias que alinham pesquisa, narrativa e engenharia. Uma coleção de sprints que mantém a garagem cheia de experimentos.",
    signature: "/img/ldb-signature.png",
    textPlacement: {
      gridColumn: "8 / span 3",
      gridRow: "2 / span 3"
    },
    mainImage: {
      image: "/img/sentado programando no escritorio.png",
      alt: "Leonardo programando no estúdio",
      gridColumn: "4 / span 5",
      gridRow: "2 / span 4",
      aspectRatio: "4 / 3"
    },
    gallery: [
      {
        id: "miami-2024",
        label: "Miami GP, 2024",
        description: "Landing com journey interativa e microcopys estratégicas.",
        image: "/img/highlight-brain.png",
        alt: "Detalhe de UI",
        gridColumn: "1 / span 3",
        gridRow: "3 / span 3",
        aspectRatio: "4 / 5"
      },
      {
        id: "monaco-golf",
        label: "Mônaco, 2023",
        description: "Labs de experimentação visual com WebGL.",
        image: "/img/off-track.png",
        alt: "Protótipo criativo",
        gridColumn: "10 / span 2",
        gridRow: "2 / span 2",
        aspectRatio: "3 / 4",
        tone: "muted"
      },
      {
        id: "austria-2020",
        label: "Áustria, 2020",
        description: "Primeiros sprints com acessibilidade e testes automatizados.",
        image: "/img/on-track.png",
        alt: "Primeiros projetos",
        gridColumn: "9 / span 2",
        gridRow: "5 / span 2",
        aspectRatio: "1 / 1"
      },
      {
        id: "gala-2024",
        label: "Gala 2024",
        description: "Workflows de conteúdo para campanhas periódicas.",
        image: "/img/logo-ciano.png",
        alt: "Marca iluminada",
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


