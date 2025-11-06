"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { BackgroundLogo } from "@/components/BackgroundLogo";
import { PageTransition } from "@/components/PageTransition";

type ClientLayoutProps = {
  children: ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps) {
  const [preloading, setPreloading] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPreloading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", preloading);
  }, [preloading]);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
    document.body.classList.toggle("touch-device", isTouchDevice);
  }, [pathname]);

  return (
    <>
      <Preloader isVisible={preloading} onComplete={() => setPreloading(false)} />
      <CustomCursor />
      <BackgroundLogo />
      <Navigation />
      <PageTransition />
      <main className="relative z-10 min-h-screen">{children}</main>
    </>
  );
}

