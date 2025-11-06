"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function SignatureSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const signature = section.querySelector("[data-signature]");
    const textElements = section.querySelectorAll("[data-signature-text]");

    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 30%",
          scrub: false
        }
      })
        .fromTo(signature, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 })
        .fromTo(textElements, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, "<0.3");
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="signature-section"
      ref={sectionRef}
      className="relative flex min-h-[80vh] flex-col items-center justify-center gap-12 overflow-hidden bg-background px-6 py-24 text-center text-foreground md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.2),_transparent_55%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom,_rgba(0,255,255,0.08),_transparent_60%)]" />

      <div data-signature className="relative flex flex-col items-center gap-6">
        <div className="relative h-48 w-[520px] max-w-full">
          <Image src="/img/ldb-signature.png" alt="Assinatura Leonardo Dario Borges" fill className="object-contain" />
        </div>
        <span className="text-xs uppercase tracking-[0.4em] text-foreground/60">Digital Autograph</span>
      </div>

      <div className="space-y-4 text-base text-foreground/70 md:max-w-3xl md:text-lg">
        <p data-signature-text>
          Desde os primeiros experimentos com linhas de código até experiências interativas de alto impacto, busco transformar ideias em produtos digitais memoráveis.
        </p>
        <p data-signature-text>
          Tecnologia, design e narrativa se encontram em cada projeto — um compromisso contínuo em elevar o padrão da web com animações, performance e storytelling.
        </p>
      </div>
    </section>
  );
}

