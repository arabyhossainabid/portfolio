"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,        // Smoothness (0.1 is default, smaller is smoother/slower)
        duration: 1.5,    // Duration of the scroll animation
        smoothWheel: true,
        wheelMultiplier: 0.8, // Slightly slower scroll
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
