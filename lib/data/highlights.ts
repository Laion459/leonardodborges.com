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
    id: "2025-neural-canvas",
    title: "Neural Canvas UI",
    subtitle: "Experiência WebGL + GSAP",
    year: "2025",
    description:
      "Interface generativa com shaders customizados para um laboratório de IA. Transições sensoriais, navegação linear e storytelling audiovisual.",
    tag: "Experiência Imersiva",
    image: "/img/highlight-brain.png"
  },
  {
    id: "2024-esh-eleven",
    title: "ESH Eleven Soft",
    subtitle: "Plataforma SaaS modular",
    year: "2024",
    description:
      "Landing page reativa com componentes reutilizáveis, copy orientada a conversão e integrações com CRM/analytics.",
    tag: "Produto Digital"
  },
  {
    id: "2024-nf-motos",
    title: "NF Motos Turbo",
    subtitle: "Presença digital + SEO local",
    year: "2024",
    description:
      "Site institucional com identidade brutalista, formulários de orçamento com automação e otimização de performance para mobile.",
    tag: "Brand Experience"
  },
  {
    id: "2023-marina-lab",
    title: "Marina Jodar Lab",
    subtitle: "Portfólio dental premium",
    year: "2023",
    description:
      "Storytelling visual com foco em qualidade e prova social. Grid fotográfico, depoimentos e CTA estratégico para captação.",
    tag: "UX Narrativa"
  },
  {
    id: "2022-creative-tools",
    title: "Creative Dev Tools",
    subtitle: "Design Systems + Automação",
    year: "2022",
    description:
      "Kit de componentes e scripts para acelerar prototipagem e consistência visual em múltiplos projetos front-end.",
    tag: "Tooling"
  },
  {
    id: "2021-open-source",
    title: "Contribuições Open Source",
    subtitle: "Bibliotecas JS",
    year: "2021",
    description:
      "Fixes, otimizações e documentação para libs JS/TS focadas em performance e DX. Mentoria para novos contribuidores.",
    tag: "Comunidade"
  }
];

