"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type PreloaderProps = {
  isVisible: boolean;
  onComplete: () => void;
};

export function Preloader({ isVisible, onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!isVisible || !containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete
      });

      tl.fromTo(
        textRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8 }
      )
        .to(textRef.current, { opacity: 0, duration: 0.4, delay: 0.5 })
        .to(containerRef.current, { yPercent: -100, duration: 0.8, ease: "power4.in" }, "<");
    }, containerRef);

    return () => ctx.revert();
  }, [isVisible, onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
    >
      <span
        ref={textRef}
        className="font-display text-5xl uppercase tracking-[0.4em] text-accent md:text-7xl"
      >
        LDB
      </span>
    </div>
  );
}

