export type AgendaEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "Projeto" | "Talk" | "Mentoria" | "Lançamento";
  description: string;
  status: "Em preparação" | "Confirmado" | "Em andamento";
  link?: string;
};

export const AGENDA: AgendaEvent[] = [
  {
    id: "fintech-onboarding",
    title: "Entrega Sprint — Onboarding assistido por IA",
    date: "Março 2026",
    location: "São Paulo · Remoto",
    type: "Projeto",
    status: "Em andamento",
    description:
      "Finalização do fluxo de onboarding com validação biométrica e automação de relatórios em tempo real para fintech B2B.",
    link: "mailto:laion459@gmail.com"
  },
  {
    id: "talk-gsap",
    title: "Talk — Motion Thinking para produtos digitais",
    date: "Abril 2026",
    location: "Florianópolis · Presencial",
    type: "Talk",
    status: "Confirmado",
    description:
      "Sessão imersiva sobre como planejar animações com GSAP focadas em narrativa e performance, do storyboard ao deploy."
  },
  {
    id: "mentoria-crews",
    title: "Mentoria — Squad acelerada em tecnologia educacional",
    date: "Maio 2026",
    location: "Remoto",
    type: "Mentoria",
    status: "Em preparação",
    description:
      "Programa intensivo de 6 semanas para reorganizar arquitetura front-end, fluxos de QA e cultura de experimentação."
  },
  {
    id: "launch-lnk",
    title: "Release — LNK Stack v3",
    date: "Julho 2026",
    location: "Open Source",
    type: "Lançamento",
    status: "Em preparação",
    description:
      "Atualização do boilerplate cinematográfico com suporte a React Server Components, transições previsíveis e Mitosis para multiplataforma.",
    link: "https://github.com/Laion459"
  }
];

