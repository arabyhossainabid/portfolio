"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiPrisma, SiExpress } from 'react-icons/si';
import { Sparkles, Download, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const techStack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#fff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiExpress, name: "express.js", color: "#2496ED" },
  { icon: SiPrisma, name: "Prisma", color: "#000000" },
];

function HeroSection() {
  const router = useRouter();

  const handleViewWork = () => {
    router.push('/projects');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/Abid.pdf';
    link.download = 'Araby_Hossain_Abid_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-14 px-4 relative overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#deff0008_1px,transparent_1px),linear-gradient(to_bottom,#deff0008_1px,transparent_1px)] bg-[size:80px_80px]"
        />
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(222,255,0,0.05),transparent)]"
        />
        
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,0.05),transparent)]"
        />
        
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.05),transparent)]"
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-4 mb-10 lg:mt-6">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-(--neon-yellow)/20 to-purple-500/20 border border-(--neon-yellow)/30 mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-(--neon-yellow) animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest bg-linear-to-r from-(--neon-yellow) to-white bg-clip-text text-transparent">
                Expert Frontend Developer & Backend Enthusiast
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]"
            >
              Crafting Digital
              <br />
              <span className="bg-linear-to-r from-(--neon-yellow) via-yellow-300 to-(--neon-yellow) bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Masterpieces
              </span>
              <br />
              with Code
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              I&apos;m <span className="text-white font-bold">Araby Hossain Abid</span>, a dedicated <span className="text-(--neon-yellow) font-bold">Frontend Expert</span>
              specializing in building exceptional digital experiences while rapidly expanding my mastery into
              <span className="text-(--neon-yellow) font-semibold"> Backend Development</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-16"
            >
              <Button
                onClick={handleViewWork}
                variant="neon"
                className="group px-8 py-6 text-lg"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleDownloadCV}
                variant="glass"
                className="group px-8 py-6 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* Profile Image Space */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end items-center relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-(--neon-yellow)/10 rounded-full blur-[80px]" />
            </div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(222,255,0,0.15)] ring-4 ring-[#0d0d0d] z-10 group">
              <Image
                src="/images/abid.jpg"
                alt="Araby Hossain Abid - Professional Photo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full box-shadow-inner opacity-0 transition-opacity group-hover:opacity-100 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-4 -left-4 lg:bottom-10 lg:-left-10 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="w-10 h-10 rounded-full bg-(--neon-yellow)/20 flex items-center justify-center">
                <SiReact className="text-(--neon-yellow) text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-0.5">Frontend</p>
                <p className="text-sm text-white font-bold">Expertise</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-4 -right-4 lg:top-10 lg:-right-6 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: '4s' }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <SiNodedotjs className="text-green-500 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-0.5">Backend</p>
                <p className="text-sm text-white font-bold">Skilled</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm uppercase tracking-[0.3em] font-bold">Tech Stack Mastery</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                className="group relative"
              >
                <div className="flex flex-col items-center gap-3 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-(--neon-yellow)/40 transition-all backdrop-blur-sm hover:bg-white/10">
                  <div className="relative">
                    <tech.icon
                      className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]"
                      style={{ color: tech.color }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-xl" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                    {tech.name}
                  </span>
                </div>

                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap backdrop-blur-md border border-white/10">
                  {tech.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          background-position: 0% 50%;
        }
        @media (min-width: 768px) {
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
