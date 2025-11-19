import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import { personSchema, professionalServiceSchema } from "./schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Leonardo Dario Borges | Desenvolvedor Full Stack & Product Manager",
  description:
    "Desenvolvedor Full Stack entregando produtos completos, não apenas código. Soluções que reduzem tempo de operação em até 70%, aumentam conversões e impulsionam negócios com arquitetura escalável.",
  metadataBase: new URL("https://www.leonardodborges.com.br"),
  keywords: [
    "Desenvolvedor Full Stack",
    "Laravel",
    "React",
    "Next.js",
    "Product Manager",
    "Desenvolvimento de Software",
    "Arquitetura de Software",
    "Cibersegurança",
    "Florianópolis"
  ],
  authors: [{ name: "Leonardo Dario Borges" }],
  creator: "Leonardo Dario Borges",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.leonardodborges.com.br",
    title: "Leonardo Dario Borges | Desenvolvedor Full Stack & Product Manager",
    description:
      "Desenvolvedor Full Stack entregando produtos completos, não apenas código. Soluções que reduzem tempo de operação em até 70%, aumentam conversões e impulsionam negócios.",
    siteName: "Leonardo Dario Borges",
    images: [
      {
        url: "/img/foto leonardo em pe com terno meio corpo.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Dario Borges - Desenvolvedor Full Stack"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Dario Borges | Desenvolvedor Full Stack & Product Manager",
    description:
      "Desenvolvedor Full Stack entregando produtos completos, não apenas código. Soluções que reduzem tempo de operação em até 70%, aumentam conversões e impulsionam negócios.",
    images: ["/img/foto leonardo em pe com terno meio corpo.png"],
    creator: "@laionzzzz"
  },
  icons: {
    icon: "/img/favicon/favicon-32x32.png",
    shortcut: "/img/favicon/favicon.ico",
    apple: "/img/favicon/apple-touch-icon.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-foreground`}>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

