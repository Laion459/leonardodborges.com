export type StorylineItem = {
  id: string;
  year: string;
  title: string;
  shortDescription: string;
  image?: string;
  category: "On Track" | "Off Track";
  location: string;
  link?: string;
};

export const STORYLINE_ITEMS: StorylineItem[] = [
  // 2025 - Eventos e Certificações
  {
    id: "2025-empreende-brasil",
    year: "2025",
    title: "Empreende Brasil Conference",
    shortDescription: "24 horas de imersão em inovação",
    image: "/img/photos for cards/emreende brazil conference 2025 univali.webp",
    category: "Off Track",
    location: "Florianópolis, SC"
  },
  {
    id: "2025-acadepol",
    year: "2025",
    title: "VII Seminário ACADEPOL/SC",
    shortDescription: "Ciência, Tecnologia e Segurança Pública",
    image: "/img/photos for cards/policia civil acadepol canas 11-2025.webp",
    category: "Off Track",
    location: "Florianópolis, SC"
  },
  {
    id: "2025-acate-invest",
    year: "2025",
    title: "ACATE Invest — Pitch Day",
    shortDescription: "Evento de inovação e empreendedorismo",
    image: "/img/photos for cards/pitch day acate 2025.webp",
    category: "Off Track",
    location: "Florianópolis, SC"
  },
  {
    id: "2025-sinais-idciber",
    year: "2025",
    title: "Sinais IDCIBER",
    shortDescription: "Análise avançada de sinais de segurança",
    image: "/img/photos for cards/eu enxergo os sinais.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2025-eternauta",
    year: "2025",
    title: "O Eternauta — Ciberameaças",
    shortDescription: "Análise publicada sobre segurança",
    image: "/img/photos for cards/o eternauta.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2025-conectando-pontos",
    year: "2025",
    title: "Conectando Pontos Invisíveis",
    shortDescription: "Certificação IDCIBER em análise avançada",
    image: "/img/photos for cards/conectando pontos invisiveis.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2025-red-team",
    year: "2025",
    title: "A Arte do Red Team",
    shortDescription: "Especialização em técnicas ofensivas",
    image: "/img/photos for cards/a arte do red team pensar como inimigo.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2025-blue-team",
    year: "2025",
    title: "Blue Team — Defesa Cibernética",
    shortDescription: "Especialização em defesa cibernética",
    image: "/img/photos for cards/blue team a linha defensora.webp",
    category: "Off Track",
    location: "Online"
  },
  // 2025 - Projetos On Track
  {
    id: "2025-nf-motos",
    year: "2025",
    title: "NF Motos Performance",
    shortDescription: "Transformação digital completa — agendamentos e brand storytelling",
    image: "/img/photos for cards/nf motos.webp",
    category: "On Track",
    location: "LDB CLICK",
    link: "https://nfmotos-com.vercel.app/"
  },
  {
    id: "2025-salao-flor-lis",
    year: "2025",
    title: "Salão Flor de Lis",
    shortDescription: "Transformação digital completa — agendamento online, galeria de serviços e branding premium",
    image: "/img/photos for cards/salao flor de lis.webp",
    category: "On Track",
    location: "LDB CLICK",
    link: "https://www.salaoflordelis.com.br/"
  },
  {
    id: "2025-gabriela-n",
    year: "2025",
    title: "Gabriela N",
    shortDescription: "E-commerce boutique com UX otimizada e conversão elevada — moda feminina",
    image: "/img/photos for cards/gabriela n.webp",
    category: "On Track",
    location: "LDB CLICK",
    link: "https://gabrialan-com.vercel.app/"
  },
  {
    id: "2025-marina-jodar",
    year: "2025",
    title: "Marina Jodar Lab",
    shortDescription: "Experiência digital boutique — saúde e estética",
    image: "/img/photos for cards/marina jodar lab de proteses dentarias.webp",
    category: "On Track",
    location: "LDB CLICK",
    link: "https://www.marinajodar.com.br/"
  },
  {
    id: "2025-ldb-click",
    year: "2025",
    title: "Fundador — LDB CLICK",
    shortDescription: "Soluções digitais e consultoria em tecnologia",
    image: "/img/photos for cards/ldb click.webp",
    category: "On Track",
    location: "Florianópolis, SC"
  },
  {
    id: "2025-apis-rest",
    year: "2025",
    title: "APIs REST Documentadas",
    shortDescription: "Swagger + PHPUnit + Docker + PostgreSQL",
    image: "/img/photos for cards/integracoes-pagamentos.webp",
    category: "On Track",
    location: "Eleven Soft"
  },
  {
    id: "2025-esh",
    year: "2025",
    title: "ESH Sistema",
    shortDescription: "Sistema proprietário de monitoramento",
    image: "/img/photos for cards/esh-dashboard.webp",
    category: "On Track",
    location: "Eleven Soft",
    link: "https://esh.elevensoft.dev/"
  },
  {
    id: "2025-refatoracao",
    year: "2025",
    title: "Refatoração dos Sites",
    shortDescription: "Nova arquitetura React + Tailwind + Filament",
    image: "/img/photos for cards/eleven-soft.webp",
    category: "On Track",
    location: "Eleven Soft"
  },
  {
    id: "2025-keyring",
    year: "2025",
    title: "Keyring — Gestão de Licenças",
    shortDescription: "App web completo desenvolvido integralmente",
    image: "/img/photos for cards/keyring.webp",
    category: "On Track",
    location: "Eleven Soft"
  },
  {
    id: "2025-eleven-soft",
    year: "2025",
    title: "Desenvolvedor Full Stack",
    shortDescription: "Eleven Soft — Produtos digitais e Product Management",
    image: "/img/photos for cards/eleven soft.webp",
    category: "On Track",
    location: "Palhoça, SC",
    link: "https://elevensoft.dev/"
  },
  // 2024-2025 - Formações e Certificações
  {
    id: "2024-2025-laravel-malt",
    year: "2024-2025",
    title: "Formação MALT — Laravel PHP",
    shortDescription: "40 horas de formação especializada",
    image: "/img/photos for cards/especializacao laravel beer and code.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-laravel-boas-praticas",
    year: "2024-2025",
    title: "Boas Práticas Laravel",
    shortDescription: "Especialização em boas práticas",
    image: "/img/photos for cards/boas praticas no laravel beer and code.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-governanca",
    year: "2024-2025",
    title: "Governança na Cibersegurança",
    shortDescription: "Governança e gestão de segurança corporativa",
    image: "/img/photos for cards/governanca da ciberseguranca no brasil.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-protecao-dados",
    year: "2024-2025",
    title: "Proteção de Dados — Fintechs",
    shortDescription: "Segurança especializada para setor financeiro",
    image: "/img/photos for cards/protecao de bancos e fintechs.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-criptografia-quantica",
    year: "2024-2025",
    title: "Criptografia Pós-Quântica",
    shortDescription: "Preparação para era pós-quântica",
    image: "/img/photos for cards/criptografia pos quantica.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-inteligencia-seguranca",
    year: "2024-2025",
    title: "Inteligência em Segurança",
    shortDescription: "Inteligência de ameaças e análise de IOCs",
    image: "/img/photos for cards/inteligencia economica uma visao geopolitica na seguranca cibernetica.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-dpo",
    year: "2024-2025",
    title: "Meus Dados, Minha Identidade — DPO",
    shortDescription: "Especialização em proteção de dados e LGPD",
    image: "/img/photos for cards/meus dados minha identidade uma visao de dpo.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-computacao-forense",
    year: "2023-2025",
    title: "Computação Forense",
    shortDescription: "Especialização em investigação digital",
    image: "/img/photos for cards/computacao forense univali.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-suse-rancher",
    year: "2024-2025",
    title: "SUSE Rancher",
    shortDescription: "Especialização em orquestração de containers",
    image: "/img/photos for cards/rodeo suse rancher.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-2025-puc-rs",
    year: "2024-2025",
    title: "PUC RS — Formação Complementar",
    shortDescription: "Formação complementar em universidade renomada",
    image: "/img/photos for cards/lideranca capacidade de aprender e resiliencia pucrs.webp",
    category: "Off Track",
    location: "Porto Alegre, RS"
  },
  {
    id: "2024-startup",
    year: "2024-2025",
    title: "Certificado Startup",
    shortDescription: "Ativa participação no ecossistema de startups",
    image: "/img/photos for cards/startup day sebrae.webp",
    category: "Off Track",
    location: "Santa Catarina"
  },
  {
    id: "2024-maratona-python",
    year: "2024",
    title: "Maratona Python",
    shortDescription: "Competição nacional de programação",
    image: "/img/photos for cards/maratona python.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-lideranca",
    year: "2024",
    title: "Certificação em Liderança",
    shortDescription: "66 horas de formação em liderança e resiliência",
    image: "/img/photos for cards/lideranca capacidade de aprender e resiliencia pucrs.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-marketing-digital",
    year: "2024",
    title: "Fórmula de Lançamento",
    shortDescription: "44 horas de formação em marketing digital",
    image: "/img/photos for cards/formula de lancamento.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-banco-dados",
    year: "2024",
    title: "Curso Banco de Dados",
    shortDescription: "Formação completa em banco de dados",
    image: "/img/photos for cards/banco de dados danki code.webp",
    category: "Off Track",
    location: "Online"
  },
  {
    id: "2024-fundamentos-php",
    year: "2024",
    title: "Fundamentos Obrigatórios PHP",
    shortDescription: "Fundamentos sólidos em PHP",
    image: "/img/photos for cards/fundamentos obrigatorios beer and code.webp",
    category: "Off Track",
    location: "Online"
  },
  // 2023
  {
    id: "2023-pentest",
    year: "2023",
    title: "Certificação Pentest",
    shortDescription: "Desec Security — Segurança da informação",
    image: "/img/photos for cards/pentest desec.webp",
    category: "On Track",
    location: "Online"
  },
  // 2021
  {
    id: "2021-elis",
    year: "2021",
    title: "Certificado ELIS 2021",
    shortDescription: "Evento de inovação e tecnologia",
    image: "/img/photos for cards/semana academica univali.webp",
    category: "Off Track",
    location: "Santa Catarina"
  },
  // 2020
  {
    id: "2020-javascript",
    year: "2020",
    title: "Certificado JavaScript — UNIVALI",
    shortDescription: "Certificação universitária em JavaScript",
    image: "/img/photos for cards/javascript em detalhe univali.webp",
    category: "On Track",
    location: "UNIVALI"
  },
  // 2019
  {
    id: "2019-univali",
    year: "2019",
    title: "Bacharelado em Ciência da Computação",
    shortDescription: "UNIVALI — Base sólida em desenvolvimento full stack",
    image: "/img/photos for cards/ciencias da computacao.webp",
    category: "On Track",
    location: "Balneário Camboriú, SC"
  },
  // 2016
  {
    id: "2016-tmot",
    year: "2016",
    title: "Fundador — TMOT",
    shortDescription: "Gestão de propriedades e locação temporária",
    image: "/img/photos for cards/tmot.webp",
    category: "Off Track",
    location: "Florianópolis, SC"
  }
];

