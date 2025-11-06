"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const evaluate = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    evaluate();
    window.addEventListener("resize", evaluate);

    return () => {
      window.removeEventListener("resize", evaluate);
    };
  }, [breakpoint]);

  return isMobile;
}

