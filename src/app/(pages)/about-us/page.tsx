"use client";

import { motion } from "motion/react";
import AboutIntro from '@/components/about-page-ui/about-intro';
import AboutBanner from '@/components/about-page-ui/about-banner';
import AboutTopNotch from '@/components/about-page-ui/about-top-notch';
import AccordionsPages from '@/components/about-page-ui/accordions-page';
import NumberSection from '@/components/about-page-ui/number-section';
import Worked from '@/components/about-page-ui/worked';
import Education from '@/components/about-page-ui/education';
import SomthingSection from '@/components/home-page-ui/somthing-section';

// Reusable animation wrapper
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  return (
    <section className="overflow-hidden">
      <AboutBanner />

      <FadeUp delay={0.05}>
        <AboutIntro />
      </FadeUp>

      <FadeUp delay={0.1}>
        <NumberSection />
      </FadeUp>

      <FadeUp delay={0.1}>
        <AboutTopNotch />
      </FadeUp>

      <FadeUp delay={0.15}>
        <Worked />
      </FadeUp>

      <FadeUp delay={0.2}>
        <Education />
      </FadeUp>

      <FadeUp delay={0.25}>
        <AccordionsPages />
      </FadeUp>

      <FadeUp delay={0.25}>
        <SomthingSection />
      </FadeUp>
    </section>
  );
}