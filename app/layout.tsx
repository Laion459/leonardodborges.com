import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Leonardo Dario Borges | Desenvolvedor de Software",
  description:
    "Portfólio de Leonardo Dario Borges, desenvolvedor de software focado em experiências digitais imersivas e soluções inovadoras.",
  metadataBase: new URL("https://www.leonardodborges.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.leonardodborges.com.br",
    title: "Leonardo Dario Borges | Desenvolvedor de Software",
    description:
      "Desenvolvedor de software criativo com foco em experiências imersivas, animações GSAP e soluções web de alta performance.",
    siteName: "Leonardo Dario Borges",
    images: [{ url: "/img/foto leonardo em pe com terno meio corpo.png" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Dario Borges | Desenvolvedor de Software",
    description:
      "Desenvolvedor de software criativo com foco em experiências imersivas, animações GSAP e soluções web de alta performance.",
    images: ["/img/foto leonardo em pe com terno meio corpo.png"],
    creator: "@laionzzzz"
  },
  icons: {
    icon: "/img/favicon/favicon-32x32.png",
    shortcut: "/img/favicon/favicon.ico",
    apple: "/img/favicon/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-foreground`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

