"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsMobile } from "@/lib/useIsMobile";

type HorizontalScrollerProps = {
  children: ReactNode;
  id?: string;
};

export function HorizontalScroller({ children, id = "horizontal-scroll-container" }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const killTrigger = () => {
      triggerRef.current?.kill();
      triggerRef.current = null;
    };

    const resetContent = () => {
      gsap.set(content, { clearProps: "all" });
    };

    if (isMobile) {
      container.classList.add("vertical-scroll");
      killTrigger();
      resetContent();
      return () => undefined;
    }

    container.classList.remove("vertical-scroll");

    const ctx = gsap.context(() => {
      const setupHorizontalScroll = () => {
        killTrigger();
        const totalWidth = content.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        if (scrollDistance <= 0) {
          resetContent();
          return;
        }

        gsap.set(content, { display: "flex", x: 0 });

        triggerRef.current = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: () => `+=${scrollDistance + viewportWidth * 0.25}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(content, { x: -scrollDistance * progress });
          }
        });
      };

      setupHorizontalScroll();
      ScrollTrigger.addEventListener("refresh", setupHorizontalScroll);
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.removeEventListener("refresh", setupHorizontalScroll);
        killTrigger();
      };
    }, container);

    const releaseListener = () => {
      killTrigger();
      resetContent();
      ScrollTrigger.refresh();
    };

    window.addEventListener("release-horizontal-scroll", releaseListener);

    return () => {
      window.removeEventListener("release-horizontal-scroll", releaseListener);
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} id={id} className="horizontal-scroll-wrapper">
      <div ref={contentRef} className="horizontal-content flex flex-col gap-10 lg:flex-row">
        {children}
      </div>
    </div>
  );
}

