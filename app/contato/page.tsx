"use client";

import Link from "next/link";
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
    <div ref={containerRef} className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-16 px-6 pb-24 pt-32 lg:px-12">
      <header className="space-y-6" data-contact>
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Contato</p>
        <h1 className="font-display text-5xl uppercase tracking-[0.25em] lg:text-6xl">Vamos Criar</h1>
        <p className="max-w-2xl text-base text-foreground/70">
          Disponível para projetos freelance, consultorias, mentorias pontuais e oportunidades que valorizem tecnologia, design e
          estratégia unidas em um único produto digital. Conte comigo para transformar sua visão em experiências impactantes.
        </p>
      </header>

      <section className="space-y-8" data-contact>
        <div className="rounded-3xl border border-foreground/10 p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Localização</p>
          <h2 className="mt-3 text-lg uppercase tracking-[0.3em] text-foreground">Florianópolis — SC, Brasil</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-foreground/60">Segunda à Sexta — 9h às 17h (BRT)</p>
        </div>

        <ul className="space-y-6">
          {CONTACTS.map((contact) => (
            <li key={contact.label} className="flex flex-col gap-2 rounded-3xl border border-foreground/10 p-6" data-contact>
              <span className="text-xs uppercase tracking-[0.35em] text-accent">{contact.label}</span>
              <Link
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-lg uppercase tracking-[0.2em] text-foreground transition-colors duration-300 ease-expo-out hover:text-accent"
                data-cursor="interactive"
              >
                {contact.value}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

