"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsMobile } from "@/lib/useIsMobile";

type HorizontalScrollerProps = {
  children: ReactNode;
  id?: string;
};

export function HorizontalScroller({ children, id = "horizontal-scroll-container" }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let loco: any;
    let isCancelled = false;

    if (isMobile) {
      container.classList.add("vertical-scroll");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    container.classList.remove("vertical-scroll");

    const init = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (isCancelled) return;

      loco = new LocomotiveScroll({
        el: container,
        smooth: true,
        direction: "horizontal",
        smartphone: { smooth: false },
        tablet: { smooth: false }
      });

      const handleRefresh = () => loco?.update();

      ScrollTrigger.scrollerProxy(container, {
        scrollLeft(value) {
          if (loco) {
            if (value !== undefined) {
              loco.scrollTo(value, { duration: 0, disableLerp: true });
            }
            return loco.scroll.instance.scroll.x;
          }
          return 0;
        },
        scrollTop() {
          return 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });

      ScrollTrigger.addEventListener("refresh", handleRefresh);
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.removeEventListener("refresh", handleRefresh);
      };
    };

    let cleanupFn: (() => void) | undefined;

    init().then((cleanup) => {
      cleanupFn = cleanup ?? cleanupFn;
    });

    return () => {
      isCancelled = true;
      cleanupFn?.();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (loco) {
        loco.destroy();
      }
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} id={id} data-scroll-container className="horizontal-scroll-wrapper">
      <div className="horizontal-content">{children}</div>
    </div>
  );
}

