"use client";

import React, { useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRouter } from "next/navigation";
import {
  Code,
  Palette,
  Lightbulb,
  Rocket,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const journey = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "I create fast, responsive, and modern web applications using React, Next.js, Tailwind CSS, and TypeScript. My goal is to deliver seamless user experiences while maintaining high performance and clean code architecture.",
    image: "/images/tech_frontend.svg",
    color: "var(--neon-yellow)",
    gradient: "from-(--neon-yellow)/20 to-transparent",
    bgClass: "bg-[#18181A]",
    skills: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "Interactive UI & Animations",
    description:
      "I build intricate and visually appealing interfaces with smooth animations and micro-interactions, using GSAP and Framer Motion to create dynamic experiences that captivate users.",
    image: "/images/tech_ui.svg",
    color: "#8b5cf6",
    gradient: "from-purple-500/20 to-transparent",
    bgClass: "bg-[#1C1628]",
    skills: ["GSAP Animations", "Framer Motion", "UI Implementation", "Micro-interactions"],
  },
  {
    icon: Lightbulb,
    title: "Problem Solving & Innovation",
    description:
      "I tackle complex frontend challenges with innovative solutions, ensuring every project not only works flawlessly but also pushes the boundaries of modern web development.",
    image: "/images/tech_problem.svg",
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-transparent",
    bgClass: "bg-[#141C24]",
    skills: ["Algorithm Design", "Code Optimization", "Logic Implementation", "Best Practices"],
  },
  {
    icon: Rocket,
    title: "Backend Foundations",
    description:
      "I have successfully completed my backend learning journey and am capable of building scalable APIs with Node.js and Express. I have already applied these skills in 3 completed projects.",
    image: "/images/tech_backend.png",
    color: "#deff00",
    gradient: "from-(--neon-yellow)/20 to-transparent",
    bgClass: "bg-[#1A1A0D]",
    skills: ["Node.js & Express", "PostgreSQL", "REST APIs", "Prisma ORM"],
  },
];

function DesignScroll() {
  const router = useRouter();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={container} className="min-h-screen bg-[#0d0d0d] pt-16 pb-12 px-4 relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#deff0005,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-(--neon-yellow)/5 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-(--neon-yellow)/20 to-purple-500/20 border border-(--neon-yellow)/30 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-(--neon-yellow)" />
            <span className="text-sm font-bold uppercase tracking-widest text-white">My Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            My{" "}
            <span className="bg-linear-to-r from-(--neon-yellow) to-yellow-300 bg-clip-text text-transparent">
              Journey
            </span>{" "}
            as a
            <br />
            Frontend{" "}
            <span className="bg-linear-to-r from-(--neon-yellow) to-yellow-300 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Combining technical expertise with creative vision to build exceptional web experiences that
            stand out. Scroll down to explore. 👇
          </p>
        </motion.div>
      </div>

      <div className="w-full relative pb-20 md:pb-40">
        {journey.map((item, i) => {
          const targetScale = 1 - ((journey.length + 1) - i) * 0.05;
          return (
            <JourneyStackCard
              key={i}
              item={item}
              i={i}
              progress={scrollYProgress}
              range={[i * (1 / (journey.length + 1)), 1]}
              targetScale={targetScale}
            />
          );
        })}

        {/* CTA Card as the last item in the stack */}
        <CTAStackCard
          i={journey.length}
          progress={scrollYProgress}
          range={[journey.length * (1 / (journey.length + 1)), 1]}
          targetScale={1}
          router={router}
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// ---------------------- Inner Component for CTA Stack ---------------------- 
const CTAStackCard = ({ i, progress, range, targetScale, router }: { i: number, progress: MotionValue<number>, range: [number, number], targetScale: number, router: any }) => {
  const container = useRef(null);
  useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 z-20 px-4 mt-12">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className="w-full max-w-7xl origin-top bg-[#0d0d0d] rounded-2xl"
      >
        <Card className="bg-linear-to-br from-(--neon-yellow)/15 via-purple-500/10 to-blue-500/10 border-(--neon-yellow)/30 backdrop-blur-sm overflow-hidden relative h-auto md:min-h-[500px] rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('/images/cubes.png')]" />
          </div>

          <CardContent className="p-12 md:p-20 relative z-10 h-full flex flex-col justify-center">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-24 h-24 text-(--neon-yellow) mx-auto mb-8 drop-shadow-[0_0_20px_var(--neon-yellow)]" />
            </motion.div>

            <h3 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight text-center">
              Let&apos;s Build the <span className="text-(--neon-yellow)">Future</span> Together
            </h3>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-center">
              Ready to transform your ideas into reality? Let&apos;s create something amazing that stands out
              and makes a lasting impact.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => router.push("/contact")}
                variant="neon"
                className="group px-10 py-6 text-lg"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => router.push("/projects")}
                variant="glass"
                className="px-10 py-6 text-lg"
              >
                View Projects
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

// ---------------------- Inner Card Component ---------------------- 

interface JourneyItem {
  icon: any;
  title: string;
  description: string;
  image: string;
  color: string;
  gradient: string;
  skills: string[];
}

interface StackCardProps {
  item: JourneyItem;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const JourneyStackCard: React.FC<StackCardProps> = ({ item, i, progress, range, targetScale }) => {
  const container = useRef(null);
  useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 z-20 px-4">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className="w-full max-w-7xl origin-top bg-[#0d0d0d] rounded-2xl"
      >
        <Card className="bg-linear-to-br from-white/10 to-white/5 border-white/10 overflow-hidden hover:border-(--neon-yellow)/40 transition-all duration-500 group backdrop-blur-md relative h-auto md:min-h-[500px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          {/* Animated Glow */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
          />

          <div className={`grid md:grid-cols-2 gap-0 h-full ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
            {/* Content Side */}
            <div
              className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 ${i % 2 === 1 ? "md:col-start-2" : ""}`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border-2 relative group-hover:shadow-2xl transition-all duration-500"
                style={{
                  backgroundColor: `${item.color}15`,
                  borderColor: `${item.color}40`,
                }}
              >
                <item.icon className="w-10 h-10 relative z-10" style={{ color: item.color }} />
                <div
                  className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-(--neon-yellow) transition-colors leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-lg mb-8">{item.description}</p>

              {/* Skills List */}
              <div className="space-y-3 mb-6">
                {item.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <CheckCircle2 className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-3 text-sm mt-auto">
                <TrendingUp className="w-5 h-5 text-(--neon-yellow)" />
                <span className="text-gray-400">Continuously improving and learning</span>
              </div>
            </div>

            {/* Image Side */}
            <div
              className={cn(
                "relative min-h-[250px] md:min-h-full bg-linear-to-br flex items-center justify-center p-6 md:p-12 overflow-hidden",
                item.gradient,
                i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
              )}
            >
              {/* Animated Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>

              {/* Decorative Circles */}
              <div
                className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 opacity-20 animate-pulse"
                style={{ borderColor: item.color }}
              />
              <div
                className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-2 opacity-20 animate-pulse"
                style={{ borderColor: item.color, animationDelay: "1s" }}
              />

              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{ backgroundColor: item.color }}
                />
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full max-w-md h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default DesignScroll;
