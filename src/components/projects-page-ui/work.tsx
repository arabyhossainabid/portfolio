"use client";
import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Mojito",
    subtitle: "Dynamic About Page / Motion Effects",
    image: "/images/project-mojito.png",
    link: "https://mojito-ecru.vercel.app/",
    github: "https://github.com/arabyhossainabid/jsm_gsap_landing",
    tags: ["GSAP", "React", "Animation"]
  },
  {
    id: 2,
    title: "Career Hub",
    subtitle: "Job Search Platform / Responsive UI",
    image: "/images/project-career-hub.png",
    link: "https://react-career-hub-three.vercel.app/",
    github: "https://github.com/arabyhossainabid/react-career-hub",
    tags: ["React", "UI/UX", "Platform"]
  },
  {
    id: 3,
    title: "Medical Service",
    subtitle: "NextUI / Tailwind / Validation",
    image: "/images/project-medical-service.png",
    link: "/",
    github: "#",
    tags: ["Next.js", "Healthcare", "Forms"]
  },
  {
    id: 4,
    title: "FoodHub Zone",
    subtitle: "Full-Stack / Next.js / PostgreSQL / Prisma",
    description: "Full-stack food delivery platform with real-time order management, restaurant inventory tracking, and seamless checkout experience. Built with Next.js, PostgreSQL, Prisma ORM, and shadcn UI for a scalable, modern solution.",
    image: "/images/project-foodhub-zone.png",
    link: "https://foodhubzone.vercel.app/",
    github: "https://github.com/arabyhossainabid/foodhub",
    category: "Full-Stack",
    tags: ["Next.js", "PostgreSQL", "prisma io", "shadcn ui"]
  }
];

const Work = React.memo(function Work() {
  return (
    <section className="bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-(--neon-yellow)/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-(--neon-yellow)" />
            <span className="text-sm text-gray-300">Portfolio</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Take <span className="text-(--neon-yellow)">a Look</span> at
            <br />
            My <span className="text-(--neon-yellow)">Past</span> Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-(--neon-yellow)/30 transition-all duration-300 hover:-translate-y-2 group will-change-transform">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-3 pb-6">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="neon">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline-glass">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-(--neon-yellow) transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-(--neon-yellow)/10 text-(--neon-yellow) text-xs font-medium border border-(--neon-yellow)/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});


export default Work;
