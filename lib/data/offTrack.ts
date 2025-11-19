export type OffTrackExploration = {
  id: string;
  title: string;
  category: "Pesquisa" | "Arte" | "Comunidade" | "Open Source";
  description: string;
  year: string;
  image?: string;
  links?: { label: string; href: string }[];
  highlight: string;
};

export const OFF_TRACK_EXPLORATIONS: OffTrackExploration[] = [
  {
    id: "empreende-brazil-2025",
    title: "Empreende Brasil Conference 2025",
    category: "Comunidade",
    description:
      "Participação completa no Empreende Brasil Conference 2025, evento de 24 horas focado em inovação, empreendedorismo e tecnologia. Networking estratégico com líderes do ecossistema de startups, aprendizado sobre tendências de mercado, pitch de projetos e conexões para futuras parcerias.",
    year: "2025",
    highlight: "24 horas de imersão em inovação e networking"
  },
  {
    id: "acate-invest-pitch",
    title: "ACATE Invest — Pitch Day",
    category: "Comunidade",
    description:
      "Participação ativa no ACATE Invest — Pitch Day, evento intenso com empreendedores competindo por patrocínio e investimento. Ambiente de alta energia, apresentação de ideias, feedback de investidores e oportunidades de networking estratégico no ecossistema de inovação de Santa Catarina.",
    year: "2025",
    highlight: "Evento de pitch e investimento no ecossistema SC"
  },
  {
    id: "acadepol-seminario",
    title: "VII Seminário Internacional ACADEPOL/SC",
    category: "Pesquisa",
    description:
      "Participação no VII Seminário Internacional de Ciência, Tecnologia, Inovação e Segurança Pública, parceria entre ACADEPOL-SC, EGC e UFSC. Ambiente técnico de alto nível com representantes de forças de segurança de diversas regiões do país, discussões sobre tecnologia aplicada à segurança pública e possíveis parcerias estratégicas.",
    year: "2025",
    highlight: "Seminário internacional com representantes de segurança pública"
  },
  {
    id: "eternauta-ciberameacas",
    title: "O Eternauta — Paralelos com Ciberameaças",
    category: "Pesquisa",
    description:
      "Análise profunda e apresentação sobre paralelos da série O Eternauta com o cenário atual de ciberameaças. Discussão sobre segurança da informação, superfície de ataque ampla, estratégias de defesa proativa, ameaças clássicas ainda efetivas e IA como vetor real de ataque. Material publicado e compartilhado com a comunidade.",
    year: "2025",
    highlight: "Análise publicada sobre segurança e ciberameaças"
  },
  {
    id: "conectando-pontos",
    title: "Conectando Pontos Invisíveis — IDCIBER",
    category: "Pesquisa",
    description:
      "Certificação em análise de segurança focada em conectar pontos invisíveis entre diferentes vetores de ataque. Aprofundamento em análise de padrões, correlação de eventos de segurança e identificação de ameaças complexas que não são detectadas por análises isoladas.",
    year: "2025",
    highlight: "Certificação IDCIBER em análise avançada"
  },
  {
    id: "red-team",
    title: "A Arte do Red Team",
    category: "Pesquisa",
    description:
      "Formação especializada em técnicas de Red Team, simulando ataques reais para testar defesas. Aprendizado sobre metodologias de ataque, técnicas de evasão, exploração de vulnerabilidades e como pensar como um atacante para melhorar as defesas.",
    year: "2025",
    highlight: "Especialização em técnicas ofensivas de segurança"
  },
  {
    id: "blue-team",
    title: "Blue Team — Defesa Cibernética",
    category: "Pesquisa",
    description:
      "Certificação em técnicas de Blue Team, focada em defesa proativa e detecção de ameaças. Aprendizado sobre monitoramento de segurança, análise de logs, detecção de anomalias, resposta a incidentes e hardening de sistemas.",
    year: "2025",
    highlight: "Especialização em defesa cibernética"
  },
  {
    id: "pentest-desec",
    title: "Certificação — Introdução ao Pentest na Prática",
    category: "Pesquisa",
    description:
      "Certificação em Introdução ao Pentest na Prática pela Desec Security. Aprofundamento em segurança da informação, testes de penetração, metodologias de teste, ferramentas de pentest e estratégias de defesa proativa baseadas em vulnerabilidades identificadas.",
    year: "2023",
    highlight: "Certificação Desec Security em pentest"
  },
  {
    id: "computacao-forense",
    title: "Computação Forense — Investigação Digital",
    category: "Pesquisa",
    description:
      "Estudos especializados em computação forense e investigação digital. Aprendizado sobre coleta de evidências digitais, análise forense, preservação de evidências, técnicas de recuperação de dados, análise de logs e relatórios técnicos para processos legais.",
    year: "2023-2025",
    highlight: "Especialização em investigação digital e forense"
  },
  {
    id: "criptografia-pos-quantica",
    title: "Criptografia Pós-Quântica",
    category: "Pesquisa",
    description:
      "Formação em criptografia pós-quântica, preparando-se para o futuro da segurança digital quando computadores quânticos se tornarem realidade. Aprendizado sobre algoritmos resistentes a ataques quânticos, migração de sistemas criptográficos e preparação para transição pós-quântica.",
    year: "2024-2025",
    highlight: "Preparação para era pós-quântica"
  },
  {
    id: "governanca-ciberseguranca",
    title: "Governança na Cibersegurança",
    category: "Pesquisa",
    description:
      "Especialização em governança de segurança da informação, focada em políticas, processos e controles organizacionais. Aprendizado sobre frameworks de governança, gestão de riscos, compliance, auditoria de segurança e criação de programas de segurança corporativa.",
    year: "2024-2025",
    highlight: "Governança e gestão de segurança corporativa"
  },
  {
    id: "protecao-dados-financeiro",
    title: "Proteção de Dados — Bancos e Fintechs",
    category: "Pesquisa",
    description:
      "Especialização em proteção de dados aplicada ao setor financeiro. Aprendizado sobre regulamentações específicas (LGPD, normas do BACEN), segurança em transações financeiras, proteção de dados sensíveis, compliance financeiro e melhores práticas para instituições financeiras.",
    year: "2024-2025",
    highlight: "Segurança especializada para setor financeiro"
  },
  {
    id: "inteligencia-seguranca",
    title: "Inteligência em Segurança",
    category: "Pesquisa",
    description:
      "Formação em inteligência de segurança, focada em coleta, análise e uso de informações sobre ameaças. Aprendizado sobre threat intelligence, análise de IOCs (Indicators of Compromise), compartilhamento de informações de segurança e uso de inteligência para melhorar defesas.",
    year: "2024-2025",
    highlight: "Inteligência de ameaças e análise de IOCs"
  },
  {
    id: "dpo-visao",
    title: "Meus Dados, Minha Identidade — Visão de DPO",
    category: "Pesquisa",
    description:
      "Especialização em proteção de dados pessoais com foco na visão de DPO (Data Protection Officer). Aprendizado sobre LGPD, direitos dos titulares, processos de privacidade, gestão de consentimento, impacto de privacidade e responsabilidades do DPO.",
    year: "2024-2025",
    highlight: "Especialização em proteção de dados e LGPD"
  },
  {
    id: "sinais-idciber",
    title: "Sinais IDCIBER — Análise de Sinais",
    category: "Pesquisa",
    description:
      "Certificação em análise de sinais de segurança, focada em identificar padrões e anomalias que indicam possíveis ameaças. Aprendizado sobre análise comportamental, detecção de padrões suspeitos e correlação de eventos de segurança.",
    year: "2025",
    highlight: "Análise avançada de sinais de segurança"
  },
  {
    id: "formacao-laravel",
    title: "Formação MALT — Especialista Laravel PHP",
    category: "Pesquisa",
    description:
      "Formação completa em Laravel PHP com 40 horas de conteúdo especializado. Aprofundamento em boas práticas, arquitetura MVC, Eloquent ORM, testes automatizados, APIs RESTful, autenticação e autorização, filas e jobs, cache, e desenvolvimento full stack com PHP/Laravel.",
    year: "2024-2025",
    highlight: "40 horas de formação especializada em Laravel"
  },
  {
    id: "boas-praticas-laravel",
    title: "Boas Práticas para o Laravel",
    category: "Pesquisa",
    description:
      "Especialização em boas práticas de desenvolvimento com Laravel. Aprendizado sobre design patterns, SOLID principles, refatoração de código, otimização de performance, segurança em aplicações Laravel e arquitetura escalável.",
    year: "2024-2025",
    highlight: "Especialização em boas práticas Laravel"
  },
  {
    id: "maratona-python",
    title: "Maratona Python",
    category: "Comunidade",
    description:
      "Participação em maratona de programação Python, competindo com desenvolvedores de todo o país. Desafios de algoritmos, estruturas de dados, otimização de código e resolução de problemas complexos em tempo limitado.",
    year: "2024",
    highlight: "Competição nacional de programação Python"
  },
  {
    id: "certificado-startup",
    title: "Certificado Startup — Ecossistema de Inovação",
    category: "Comunidade",
    description:
      "Participação em eventos e programas do ecossistema de startups de Santa Catarina. Networking com empreendedores, mentoria, workshops sobre inovação e tecnologia, e conexões para desenvolvimento de projetos inovadores.",
    year: "2024-2025",
    highlight: "Ativa participação no ecossistema de startups"
  },
  {
    id: "elis-2021",
    title: "Certificado ELIS 2021",
    category: "Comunidade",
    description:
      "Participação no evento ELIS 2021, focado em inovação, tecnologia e empreendedorismo. Networking, palestras técnicas, workshops e aprendizado sobre tendências do mercado de tecnologia.",
    year: "2021",
    highlight: "Evento de inovação e tecnologia"
  },
  {
    id: "elis-tcc",
    title: "Certificado ELIS — Trabalho de Conclusão",
    category: "Pesquisa",
    description:
      "Desenvolvimento e apresentação de Trabalho de Conclusão no evento ELIS. Projeto técnico demonstrando conhecimentos em desenvolvimento de software, pesquisa aplicada e solução de problemas reais.",
    year: "2021",
    highlight: "TCC apresentado em evento técnico"
  },
  {
    id: "javascript-certificado",
    title: "Certificado JavaScript — UNIVALI",
    category: "Pesquisa",
    description:
      "Certificado em JavaScript pela Universidade do Vale do Itajaí. Estudo detalhado das ferramentas modernas do ecossistema JavaScript, exemplos de uso eficiente, aplicação prática de exercícios e fundamentos sólidos para desenvolvimento frontend e backend.",
    year: "2020",
    highlight: "Certificação universitária em JavaScript"
  },
  {
    id: "banco-dados-danki",
    title: "Curso Banco de Dados — Danki Code",
    category: "Pesquisa",
    description:
      "Formação completa em banco de dados, incluindo modelagem, normalização, queries avançadas, otimização de performance, índices, transações, stored procedures, triggers e administração de bancos de dados relacionais.",
    year: "2024",
    highlight: "Formação completa em banco de dados"
  },
  {
    id: "fundamentos-php",
    title: "Fundamentos Obrigatórios PHP",
    category: "Pesquisa",
    description:
      "Curso completo sobre fundamentos essenciais de PHP, incluindo sintaxe, tipos de dados, funções, orientação a objetos, tratamento de erros, segurança, boas práticas e preparação para desenvolvimento com frameworks modernos.",
    year: "2024",
    highlight: "Fundamentos sólidos em PHP"
  },
  {
    id: "suse-rancher",
    title: "SUSE Rancher — Container Orchestration",
    category: "Pesquisa",
    description:
      "Especialização em SUSE Rancher para orquestração de containers. Aprendizado sobre Kubernetes, gestão de clusters, deployment de aplicações containerizadas, monitoramento e gestão de infraestrutura cloud-native.",
    year: "2024-2025",
    highlight: "Especialização em orquestração de containers"
  },
  {
    id: "puc-rs",
    title: "PUC RS — Formação Complementar",
    category: "Pesquisa",
    description:
      "Formação complementar na Pontifícia Universidade Católica do Rio Grande do Sul, expandindo conhecimentos em áreas específicas de tecnologia, inovação e gestão de projetos.",
    year: "2024-2025",
    highlight: "Formação complementar em universidade renomada"
  },
  {
    id: "lideranca-resiliencia",
    title: "Certificação em Liderança, Capacidade de Aprender e Resiliência",
    category: "Comunidade",
    description:
      "Formação de 66 horas focada em desenvolvimento de habilidades de liderança, capacidade de aprendizado contínuo e resiliência profissional. Aprendizado sobre gestão de equipes, comunicação eficaz, adaptabilidade e crescimento pessoal.",
    year: "2024",
    highlight: "66 horas de formação em liderança e resiliência"
  },
  {
    id: "marketing-digital",
    title: "Fórmula de Lançamento — Marketing Digital",
    category: "Comunidade",
    description:
      "Formação de 44 horas em marketing digital e estratégias de lançamento de produtos. Aprendizado sobre funis de conversão, captação de leads, automação de marketing, análise de métricas e estratégias de crescimento digital.",
    year: "2024",
    highlight: "44 horas de formação em marketing digital"
  }
];

