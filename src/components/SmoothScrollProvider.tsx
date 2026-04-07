"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.035,        // Even smoother feel
        duration: 2.0,     // Longer, more cinematic duration
        smoothWheel: true,
        wheelMultiplier: 1.0, // Default speed but with high smoothness
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
