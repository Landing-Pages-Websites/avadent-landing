"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/**
 * matchMedia read as an external store so reduced-motion is known during render
 * (no setState in the effect). The server snapshot is `false` so hydration
 * matches the SSR markup, then resolves to the real preference post-hydration.
 */
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (delay) {
          setTimeout(() => setInView(true), delay);
        } else {
          setInView(true);
        }
        observer.disconnect();
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, reduced]);

  // Reduced-motion users get the final state with no transition — content is
  // visible immediately. Everyone else fades/translates in on intersection.
  const visible = reduced || inView;
  const style = reduced
    ? "opacity-100 translate-y-0"
    : `transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${style} ${className}`}
    >
      {children}
    </Tag>
  );
}
