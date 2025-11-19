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
    id: "eleven-soft",
    name: "Eleven Soft",
    segment: "Software & Produtos Digitais",
    description:
      "Parceria estratégica desenvolvendo produtos digitais de alto impacto. Keyring, ESH, refatoração de arquitetura moderna e integrações financeiras robustas. Papel de Product Manager informal, liderando projetos críticos e entregas de alto valor.",
    scope: ["Full Stack Development", "Product Management", "Arquitetura", "Laravel", "React", "Next.js"],
    year: "2025",
    logo: "/img/logos/eleven soft.png",
    website: "https://elevensoft.dev/"
  },
  {
    id: "nf-motos",
    name: "NF Motos Performance",
    segment: "Motorsport & Serviços Premium",
    description:
      "Transformação digital completa com foco em agendamentos online, brand storytelling e autoridade técnica. Resultado: 300% de aumento em agendamentos online e posicionamento premium no mercado.",
    scope: ["Product Discovery", "Brand Narrative", "Dev Front-end"],
    year: "2025",
    logo: "/img/logos/nf motos.png",
    website: "https://nfmotos-com.vercel.app/"
  },
  {
    id: "marina-jodar",
    name: "Marina Jodar Lab",
    segment: "Saúde & Estética",
    description:
      "Experiência digital boutique com foco em diferenciais técnicos, depoimentos e inbound marketing para laboratório odontológico. Design sofisticado que reflete a qualidade do serviço.",
    scope: ["UX Research", "Design System", "GSAP"],
    year: "2025",
    logo: "/img/logos/marina jodar.png",
    website: "https://www.marinajodar.com.br/"
  },
  {
    id: "salao-flor-lis",
    name: "Salão Flor de Lis",
    segment: "Beleza & Estética",
    description:
      "Transformação digital completa para salão de beleza: agendamento online, galeria de serviços e branding premium. Sistema que automatiza reservas e aumenta visibilidade online.",
    scope: ["UX Design", "Branding", "E-commerce"],
    year: "2025",
    logo: "/img/logos/flor de lis.webp",
    website: "https://www.salaoflordelis.com.br/"
  },
  {
    id: "gabriela-n",
    name: "Gabriela N",
    segment: "Moda & E-commerce",
    description:
      "E-commerce boutique com UX otimizada e conversão elevada para marca de moda feminina. Foco em experiência do usuário, performance e storytelling visual.",
    scope: ["E-commerce", "UX Design", "Branding"],
    year: "2025",
    logo: "/img/logos/gabriela n.webp",
    website: "https://gabrialan-com.vercel.app/"
  },
  {
    id: "ldb-click",
    name: "LDB CLICK",
    segment: "Consultoria & Desenvolvimento",
    description:
      "Empreendimento digital próprio focado em soluções digitais e consultoria em tecnologia. Desenvolvimento de produtos digitais de alto impacto e estratégias de inovação.",
    scope: ["Consultoria", "Desenvolvimento", "Product Strategy"],
    year: "2025",
    website: "https://www.leonardodborges.com.br/"
  }
];

