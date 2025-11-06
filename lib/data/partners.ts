export type Partnership = {
  id: string;
  name: string;
  segment: string;
  description: string;
  scope: string[];
  year: string;
  logo?: string;
  website?: string;
};

export const PARTNERSHIPS: Partnership[] = [
  {
    id: "nf-motos",
    name: "NF Motos Performance",
    segment: "Motorsport & Serviços Premium",
    description:
      "Transformação digital completa com foco em agendamentos, brand storytelling e autoridade técnica para oficina referência em performance.",
    scope: ["Product Discovery", "Brand Narrative", "Dev Front-end"],
    year: "2025",
    website: "https://www.leonardodborges.com.br/#nf-motos"
  },
  {
    id: "esh-eleven-soft",
    name: "ESH Eleven Soft",
    segment: "Software Logístico",
    description:
      "Landing page modular, integrações com CRM e animações contextuais para aumentar conversão B2B, alinhada a sprints de Growth.",
    scope: ["Next.js", "CRM Integration", "Motion Design"],
    year: "2024",
    website: "https://www.leonardodborges.com.br/#esh-eleven-soft"
  },
  {
    id: "marina-jodar",
    name: "Marina Jodar Lab",
    segment: "Saúde & Estética",
    description:
      "Experiência digital boutique com foco em diferenciais técnicos, depoimentos e inbound marketing para laboratório odontológico.",
    scope: ["UX Research", "Design System", "GSAP"],
    year: "2024"
  },
  {
    id: "cronos-academy",
    name: "Cronos Academy",
    segment: "Educação Tech",
    description:
      "Mentorias e workshops para líderes técnicos sobre escalabilidade frontend, design systems e cultura de experimentação.",
    scope: ["Mentoria", "Workshops", "Playbooks"],
    year: "2023"
  }
];

