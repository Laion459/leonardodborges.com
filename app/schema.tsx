export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonardo Dario Borges",
  jobTitle: "Desenvolvedor Full Stack & Product Manager",
  description: "Desenvolvedor Full Stack entregando produtos completos, não apenas código. Soluções que reduzem tempo de operação em até 70%, aumentam conversões e impulsionam negócios.",
  url: "https://www.leonardodborges.com.br",
  image: "https://www.leonardodborges.com.br/img/foto leonardo em pe com terno meio corpo.png",
  email: "laion459@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR"
  },
  sameAs: [
    "https://www.linkedin.com/in/borgesleonardod/",
    "https://github.com/Laion459",
    "https://www.instagram.com/laionzzzz/"
  ],
  knowsAbout: [
    "Desenvolvimento Full Stack",
    "Laravel",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Docker",
    "PostgreSQL",
    "Product Management",
    "Cibersegurança"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Eleven Soft",
    url: "https://elevensoft.dev/"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Universidade do Vale do Itajaí",
    url: "https://www.univali.br/"
  }
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LDB CLICK",
  description: "Soluções digitais e consultoria em tecnologia. Desenvolvimento de produtos digitais de alto impacto e estratégias de inovação.",
  url: "https://www.leonardodborges.com.br",
  provider: {
    "@type": "Person",
    name: "Leonardo Dario Borges"
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil"
  },
  serviceType: [
    "Desenvolvimento Full Stack",
    "Consultoria em Tecnologia",
    "Product Management",
    "Arquitetura de Software"
  ]
};

