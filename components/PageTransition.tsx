"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";

export function PageTransition() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const previousPathRef = useRef<string>(pathname);

  useEffect(() => {
    if (!overlayRef.current) return;

    const overlay = overlayRef.current;
    const isInitialLoad = previousPathRef.current === pathname;

    if (isInitialLoad) {
      return;
    }

    const tl = gsap.timeline();

    tl.set(overlay, { yPercent: 100, opacity: 1 })
      .to(overlay, { yPercent: 0, duration: 0.4, ease: "power4.out" })
      .to(overlay, { yPercent: -100, duration: 0.6, ease: "power4.in" }, "+=0.1");

    previousPathRef.current = pathname;
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[55] bg-background opacity-0"
    />
  );
}

