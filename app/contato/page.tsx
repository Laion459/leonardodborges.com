"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const CONTACTS = [
  {
    label: "E-mail",
    value: "laion459@gmail.com",
    href: "mailto:laion459@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/borgesleonardod",
    href: "https://www.linkedin.com/in/borgesleonardod/"
  },
  {
    label: "GitHub",
    value: "github.com/Laion459",
    href: "https://github.com/Laion459"
  },
  {
    label: "Instagram",
    value: "@laionzzzz",
    href: "https://www.instagram.com/laionzzzz/"
  },
  {
    label: "WhatsApp",
    value: "+55 51 99909-2387",
    href: "https://wa.me/5551999092387"
  }
];

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-contact]", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-12 px-4 pb-20 pt-24 sm:gap-16 sm:px-6 sm:pb-24 sm:pt-32 lg:px-12">
      <header className="space-y-4 sm:space-y-6" data-contact>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">Contato</p>
        <h1 className="font-display text-3xl uppercase tracking-[0.2em] sm:text-4xl sm:tracking-[0.22em] md:text-5xl md:tracking-[0.25em] lg:text-6xl">Vamos Criar</h1>
        <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
          Disponível para projetos freelance, consultorias, mentorias pontuais e oportunidades que valorizem tecnologia, design e
          estratégia unidas em um único produto digital. Conte comigo para transformar sua visão em experiências impactantes.
        </p>
      </header>

      <section className="space-y-6 sm:space-y-8" data-contact>
        <div className="rounded-2xl border border-foreground/10 p-6 sm:rounded-3xl sm:p-8 md:p-10">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">Localização</p>
          <h2 className="mt-2 text-base uppercase tracking-[0.28em] text-foreground sm:mt-3 sm:text-lg sm:tracking-[0.3em]">Florianópolis — SC, Brasil</h2>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-foreground/60 sm:mt-4 sm:text-sm sm:tracking-[0.2em]">Segunda à Sexta — 9h às 17h (BRT)</p>
        </div>

        <ul className="space-y-4 sm:space-y-6">
          {CONTACTS.map((contact) => (
            <li key={contact.label} className="flex flex-col gap-1.5 rounded-2xl border border-foreground/10 p-5 sm:gap-2 sm:rounded-3xl sm:p-6" data-contact>
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.35em]">{contact.label}</span>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-base uppercase tracking-[0.18em] text-foreground transition-colors duration-300 ease-expo-out hover:text-accent sm:text-lg sm:tracking-[0.2em]"
                data-cursor="interactive"
              >
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

