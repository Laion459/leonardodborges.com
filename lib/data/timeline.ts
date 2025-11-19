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
    id: "2025-ldb-click",
    year: "2025",
    title: "Fundador — LDB CLICK",
    subtitle: "Empreendimento Digital",
    description:
      "Fundação da LDB CLICK, focada em soluções digitais e consultoria em tecnologia. Desenvolvimento de produtos digitais de alto impacto e estratégias de inovação.",
    category: "On Track",
    location: "Florianópolis, Santa Catarina, Brasil",
    size: "lg",
    image: "/img/photos for cards/ldb click.webp"
  },
  {
    id: "2025-eleven-soft",
    year: "2025",
    title: "Desenvolvedor Full Stack — Eleven Soft",
    subtitle: "Produtos Digitais & Product Management",
    description:
      "Atuação como Desenvolvedor Full Stack entregando produtos digitais de ponta a ponta. Papel estratégico de Product Manager informal, liderando projetos críticos e gerenciando entregas de alto valor.",
    category: "On Track",
    location: "Palhoça, Santa Catarina, Brasil",
    size: "md",
    image: "/img/photos for cards/eleven soft.webp"
  },
  {
    id: "2025-acate-invest",
    year: "2025",
    title: "ACATE Invest — Pitch Day",
    subtitle: "Evento de Inovação e Empreendedorismo",
    description:
      "Participação no ACATE Invest — Pitch Day, evento intenso com empreendedores competindo por patrocínio, ideias afiadas e energia alta. Oportunidade de networking e evolução profissional.",
    category: "Off Track",
    location: "Florianópolis, Santa Catarina, Brasil",
    size: "sm",
    image: "/img/photos for cards/pitch day acate 2025.webp"
  },
  {
    id: "2025-acadepol",
    year: "2025",
    title: "VII Seminário Internacional ACADEPOL/SC",
    subtitle: "Ciência, Tecnologia, Inovação e Segurança Pública",
    description:
      "Participação no VII Seminário Internacional de Ciência, Tecnologia, Inovação e Segurança Pública, parceria entre ACADEPOL-SC, EGC e UFSC. Ambiente técnico com representantes de forças de segurança de diversas regiões do país.",
    category: "Off Track",
    location: "Florianópolis, Santa Catarina, Brasil",
    size: "md",
    image: "/img/photos for cards/policia civil acadepol canas 11-2025.webp"
  },
  {
    id: "2023-pentest",
    year: "2023",
    title: "Certificação — Introdução ao Pentest na Prática",
    subtitle: "Desec Security",
    description:
      "Certificação em Introdução ao Pentest na Prática pela Desec Security, aprofundando conhecimentos em segurança da informação e testes de penetração.",
    category: "On Track",
    location: "Online",
    size: "sm",
    image: "/img/photos for cards/pentest desec.webp"
  },
  {
    id: "2016-tmot",
    year: "2016",
    title: "Fundador — TMOT The Magic Of Traveling",
    subtitle: "Gestão de Propriedades e Locação Temporária",
    description:
      "Gerente de propriedades especializado em locações de temporada. Soluções completas para proprietários que buscam maximizar rentabilidade sem se preocupar com a operação. Gestão de reservas, check-in/out, limpeza e lavanderia.",
    category: "Off Track",
    location: "Florianópolis, Santa Catarina, Brasil",
    size: "lg",
    image: "/img/photos for cards/tmot.webp"
  },
  {
    id: "2019-univali",
    year: "2019",
    title: "Bacharelado em Ciência da Computação",
    subtitle: "Universidade do Vale do Itajaí — UNIVALI",
    description:
      "Ingresso no curso de Bacharelado em Ciência da Computação. Base sólida em C, C++, PHP, Python e Java, aplicada à arquitetura e boas práticas em desenvolvimento full stack. Formação com ênfase em engenharia de software, sistemas operacionais, segurança e computação forense.",
    category: "On Track",
    location: "Balneário Camboriú, Santa Catarina, Brasil",
    size: "md",
    image: "/img/photos for cards/ciencias da computacao.webp"
  }
];

