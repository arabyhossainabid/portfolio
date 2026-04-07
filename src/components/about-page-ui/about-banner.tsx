import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Rocket, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutBanner() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0d0d0d] py-16 px-4 relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#deff00]/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#deff00]" />
            <span className="text-sm font-bold uppercase tracking-widest text-gray-300">About Me</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Turning Ideas into
            <br />
            <span className="text-[#deff00]">Modern Web</span> Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            I turn your ideas into engaging, responsive web applications with clean code,
            modern technology, and smooth user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              onClick={() => router.push("/projects")}
              variant="neon"
              className="px-8 py-4"
            >
              <Rocket className="w-5 h-5" />
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => router.push("/blog")}
              variant="glass"
              className="px-8 py-4"
            >
              View Portfolio
            </Button>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-52 h-80 rounded-3xl overflow-hidden border-2 border-white/10 hover:border-[#deff00]/30 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/about_idea.svg"
              alt="Development"
              width={320}
              height={400}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-80 h-80 rounded-3xl overflow-hidden border-2 border-[#deff00]/20 hover:border-[#deff00]/50 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_0px_#deff00]/20"
          >
            <Image
              src="/images/about_coding.svg"
              alt="Frontend Development"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-52 h-80 rounded-3xl overflow-hidden border-2 border-white/10 hover:border-[#deff00]/30 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/about_speed.svg"
              alt="Modern Design"
              width={320}
              height={400}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
