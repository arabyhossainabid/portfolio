"use client";

import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    title: "What technologies do you use?",
    content:
      "I specialize in React, Next.js, TypeScript, Tailwind CSS, and Shadcn UI. I also have strong knowledge of Node.js, PostgreSQL, and modern backend technologies for building full-stack applications.",
  },
  {
    title: "Can you build responsive websites?",
    content:
      "Yes! I make sure every website is fully responsive and works seamlessly across desktop, tablet, and mobile devices with pixel-perfect precision.",
  },
  {
    title: "Do you work with custom designs?",
    content:
      "Absolutely! I can turn any Figma, XD, or custom design into a fully functional and pixel-perfect frontend website with smooth animations.",
  },
  {
    title: "Do you provide ongoing support?",
    content:
      "Yes, I offer ongoing support, improvements, and updates to ensure your website always stays modern, functional, and secure.",
  },
  {
    title: "Why should I work with you?",
    content:
      "Because I focus on clean code, performance, and user-friendly experiences. My goal is to help your online presence stand out and grow with cutting-edge technology.",
  },
];

export default function AccordionsPages() {
  const router = useRouter();

  return (
    <section className="bg-[#0d0d0d] py-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#deff00]/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <HelpCircle className="w-4 h-4 text-[#deff00]" />
              <span className="text-sm text-gray-300">FAQ</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Frequently Asked
              <br />
              <span className="text-[#deff00]">Questions</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Here are some of the most common questions people ask me as a{" "}
              <span className="text-white font-semibold">Frontend Developer</span>.
              I&apos;ve added the answers to help you understand my skills, process, and services.
            </p>

            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-[#deff00] text-black font-bold rounded-full hover:shadow-[0_0_30px_0px_#deff00] transition-all duration-300"
            >
              Let&apos;s Work Together
            </button>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#deff00]/30 transition-all"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-white px-6 py-5 hover:text-[#deff00] data-[state=open]:text-[#deff00] transition-colors">
                      {faq.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 px-6 pb-5 leading-relaxed">
                      {faq.content}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
