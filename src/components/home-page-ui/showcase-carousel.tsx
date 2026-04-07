"use client";
import React from "react";
import { motion, Variants } from "motion/react";
import { useRouter } from "next/navigation";
import { ExternalLink, Github, Star, Eye, GitFork } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    id: 0,
    title: "PropSphere Platform",
    description: "Full-stack fractional real estate investment platform with real-time analytics and management.",
    image: "/images/project-propsphere.png",
    link: "https://propsphere.vercel.app/",
    github: "https://github.com/arabyhossainabid",
    tags: ["Next.js", "TypeScript", "Fintech"],
    stats: { stars: 45, views: "2.8k", forks: 15 }
  },
  {
    id: 1,
    title: "Mojito - GSAP Portfolio",
    description: "Premium portfolio featuring advanced GSAP animations and smooth scroll effects.",
    image: "/images/project-mojito.png",
    link: "https://mojito-ecru.vercel.app/",
    github: "https://github.com/arabyhossainabid/jsm_gsap_landing",
    tags: ["GSAP", "React", "Animation"],
    stats: { stars: 38, views: "1.9k", forks: 12 }
  },
  {
    id: 2,
    title: "FayraShop - E-Commerce",
    description: "Minimalist fashion e-commerce platform with optimized shopping experience.",
    image: "/images/project-fayrashop.png",
    link: "https://fayrashop.vercel.app/",
    github: "https://github.com/Fayra-Tech/fayrashop",
    tags: ["Next.js", "E-Commerce", "Tailwind"],
    stats: { stars: 32, views: "1.5k", forks: 10 }
  },
  {
    id: 3,
    title: "FoodHub Zone",
    description: "Full-stack food delivery platform with real-time order tracking and management.",
    image: "/images/project-foodhub-zone.png",
    link: "https://foodhubzone.vercel.app/",
    github: "https://github.com/arabyhossainabid/FOODHUB-BACKEND",
    tags: ["Next.js", "PostgreSQL", "Full-Stack"],
    stats: { stars: 29, views: "1.2k", forks: 7 }
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    description: "Real-time analytics dashboard for e-commerce inventory and sales management.",
    image: "/images/project-fastefy.png",
    link: "https://fastefy.com/",
    github: "https://github.com/mdasif-me/fastefy-csr",
    tags: ["React", "Dashboard", "PostgreSQL"],
    stats: { stars: 27, views: "1.1k", forks: 6 }
  },
  {
    id: 5,
    title: "Spylt Landing Page",
    description: "Creative landing page with deep GSAP integration and interactive parallax effects.",
    image: "/images/project-spylt.png",
    link: "https://spylt-bay.vercel.app/",
    github: "https://github.com/arabyhossainabid/gsap-spylt",
    tags: ["GSAP", "Creative", "Landing"],
    stats: { stars: 31, views: "1.4k", forks: 9 }
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export default function ShowcaseCarousel() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-(--neon-yellow)/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Featured <span className="bg-linear-to-r from-(--neon-yellow) to-yellow-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A showcase of my recent work, combining creativity with cutting-edge technology
          </p>
        </motion.div>

        {/* Optimized Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="bg-linear-to-br from-white/10 to-white/5 border-white/10 h-full hover:border-(--neon-yellow)/40 transition-all duration-500 hover:-translate-y-3 group overflow-hidden backdrop-blur-sm will-change-transform">
                {/* Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Hover Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="neon" className="font-bold shadow-lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline-glass">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1">
                      <Star className="w-3 h-3 text-(--neon-yellow) fill--(--neon-yellow)" />
                      <span className="text-xs text-white font-medium">{project.stats.stars}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-(--neon-yellow) transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-(--neon-yellow)/10 text-(--neon-yellow) text-xs font-medium border border-(--neon-yellow)/20 hover:bg-(--neon-yellow)/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            onClick={() => router.push('/projects')}
            variant="glass"
            className="px-10 py-6 text-lg"
          >
            View All Projects →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
