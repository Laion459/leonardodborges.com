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
    id: "nf-motos",
    year: "2025",
    client: "NF Motos",
    project: "Plataforma de agendamento e acompanhamento em tempo real",
    role: "Tech Lead · UX Strategy · Performance",
    summary:
      "Reestruturação completa do site institucional para oficina premium, com funil de conversão centrado em agendamentos e SEO local. Resultado: experiência mobile-first com animações leves e credibilidade reforçada por storytelling.",
    metrics: ["+62% leads em 45 dias", "Core Web Vitals nota 98", "1.4s TTFB médio"],
    image: "/img/highlight-brain.png",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Cloudflare"]
  },
  {
    id: "marina-jodar",
    year: "2024",
    client: "Marina Jodar Lab",
    project: "Experiência digital de próteses dentárias com showroom interativo",
    role: "Product Designer · Front-end Engineer",
    summary:
      "Criação de journey digital para laboratório boutique com foco em diferenciais técnicos, prova social e fluxo de contato direto. Microinterações com GSAP e conteúdo editorial alinham marca e autoridade.",
    metrics: ["Tempo médio na página +210%", "Bounce Rate -38%", "100% SEO técnico"],
    image: "/img/hero-cube.png",
    stack: ["React", "Vercel", "Tailwind CSS"]
  },
  {
    id: "esh-eleven",
    year: "2024",
    client: "ESH Eleven Soft",
    project: "Landing Page SaaS com CRM integrado",
    role: "Front-end Engineer · Motion Designer",
    summary:
      "Desenvolvimento de landing modular para software de logística com integrações automáticas em CRM e conteúdo dinâmico via CMS headless. Animações sincronizadas com narrativa de produto.",
    metrics: ["+35% MQLs no trimestre", "0.7s LCP", "Playbook CMS em Notion"],
    image: "/img/off-track.png",
    stack: ["Next.js", "Styled Components", "GSAP", "HubSpot"]
  },
  {
    id: "esh-mentor",
    year: "2023",
    client: "Mentorias Autorais",
    project: "Programa de aceleração para equipes de produto",
    role: "Mentor · Facilitador · Engenheiro",
    summary:
      "Estruturação de programa intensivo para squads de tecnologia com foco em arquitetura frontend, acessibilidade e entregas orientadas a métricas. Incluiu diagnósticos, pair-programming e revisão de pipelines.",
    metrics: ["8 equipes mentoradas", "Roadmaps triplamente validados", "Playbooks replicáveis"],
    image: "/img/on-track.png",
    stack: ["Workshops", "Figma", "Design Systems", "CI/CD"]
  }
];

