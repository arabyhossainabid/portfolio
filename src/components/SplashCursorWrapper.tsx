"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const SplashCursor = dynamic(() => import("./SplashCursor"), {
  ssr: false,
});

export default function SplashCursorWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only load on desktop to save mobile resources
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
      // Delay loading to prioritize LCP and reduce TBT
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;

  return <SplashCursor />;
}
