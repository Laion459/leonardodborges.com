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
    id: "neon-sprints",
    title: "Neon Sprints — Experimentos GSAP + WebGL",
    category: "Arte",
    description:
      "Coleção de microexperiências com GSAP e shaders leves inspirados em traçados de pistas, explorando profundidade, paralaxe horizontal e sincronização com áudio procedimental.",
    year: "2025",
    image: "/img/cubo 3d.png",
    links: [{ label: "Ver protótipo", href: "https://www.leonardodborges.com.br/#neon-sprints" }],
    highlight: "Premiado no DevMotion Challenge 2025"
  },
  {
    id: "security-talks",
    title: "Talks — Segurança da Informação nas FATECs",
    category: "Comunidade",
    description:
      "Palestras e roteiros interativos sobre engenharia social e hardening de aplicações, traduzindo tópicos complexos para estudantes em formação. Material aberto com labs práticos.",
    year: "2024",
    image: "/img/codigo_assinatura-removebg-preview.png",
    highlight: "Mais de 250 participantes entre 5 campus"
  },
  {
    id: "lnk-stack",
    title: "LNK Stack — Boilerplate Next.js cinematográfico",
    category: "Open Source",
    description:
      "Starter kit opinativo utilizando Next.js 15, Tailwind, GSAP e animações sequenciais prontas para experiências imersivas. Inclui Storybook, linting, CLI de scaffolding e componentes acessíveis.",
    year: "2023",
    links: [{ label: "GitHub", href: "https://github.com/Laion459" }],
    image: "/img/codico com fundo preto.svg",
    highlight: "500+ clones e 60 issues respondidas"
  },
  {
    id: "sound-ux",
    title: "Sound & Code — UX sonora para a web",
    category: "Pesquisa",
    description:
      "Investigação sobre áudio espacializado na web, prototipando interações sonoras responsivas a scroll e cursor. Resultou em manual com guidelines e componentes React load-on-demand.",
    year: "2022",
    highlight: "Apresentado no Empreende Brasil Conference"
  }
];

