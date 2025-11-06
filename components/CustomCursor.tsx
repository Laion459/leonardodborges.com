"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    const setActive = () => cursor.classList.add("custom-cursor--active");
    const removeActive = () => cursor.classList.remove("custom-cursor--active");

    const interactiveSelectors = "a, button, [data-cursor='interactive']";
    const setListeners = (add: boolean) => {
      document.querySelectorAll<HTMLElement>(interactiveSelectors).forEach((element) => {
        element[add ? "addEventListener" : "removeEventListener"]("mouseenter", setActive);
        element[add ? "addEventListener" : "removeEventListener"]("mouseleave", removeActive);
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", setActive);
    window.addEventListener("mouseup", removeActive);
    setListeners(true);

    const observer = new MutationObserver(() => {
      setListeners(false);
      setListeners(true);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", setActive);
      window.removeEventListener("mouseup", removeActive);
      setListeners(false);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}

