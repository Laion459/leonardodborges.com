"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function BackgroundLogo() {
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const xTo = gsap.quickTo(logo, "x", { duration: 1.2, ease: "power3.out" });
    const yTo = gsap.quickTo(logo, "y", { duration: 1.2, ease: "power3.out" });

    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (event.clientX / innerWidth - 0.5) * -30;
      const normalizedY = (event.clientY / innerHeight - 0.5) * -30;
      xTo(normalizedX);
      yTo(normalizedY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div ref={logoRef} className="background-logo">
      <svg viewBox="0 0 800 400" aria-hidden="true">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="font-display"
          style={{
            fontSize: "240px",
            letterSpacing: "0.25em",
            fill: "currentColor"
          }}
        >
          LDB
        </text>
      </svg>
    </div>
  );
}

