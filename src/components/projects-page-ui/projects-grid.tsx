"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Filter, X, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = ["All", "React", "Next.js", "GSAP", "Full-Stack"];

const projects = [
    {
        id: 0,
        title: "PropSphere Platform",
        description: "A comprehensive fractional real estate investment platform with real-time analytics, property management, and social integration.",
        image: "/images/project-propsphere.png",
        link: "https://propsphere.vercel.app/",
        github: "https://github.com/arabyhossainabid",
        category: "Full-Stack",
        tags: ["Next.js", "TypeScript", "Real-Estate", "Fintech"],
        challenges: "Ensuring secure and synchronized financial transactions across distributed systems while providing a real-time responsive UI for investors.",
        futurePlans: "Integrating AI-driven property valuation and a secondary market for trading real estate shares."
    },
    {
        id: 1,
        title: "Mojito - GSAP Portfolio",
        description: "A stunning portfolio website featuring advanced GSAP animations, smooth scroll effects, and interactive transitions.",
        image: "/images/project-mojito.png",
        link: "https://mojito-ecru.vercel.app/",
        github: "https://github.com/arabyhossainabid/jsm_gsap_landing",
        category: "GSAP",
        tags: ["GSAP", "React", "Animation", "ScrollTrigger"],
        challenges: "Ensuring smooth performance while running multiple heavy GSAP animations and maintaining responsive layouts across all screen sizes.",
        futurePlans: "Implementing a dynamic 3D background using Three.js and adding a headless CMS for blog management."
    },
    {
        id: 3,
        title: "FayraShop - E-Commerce",
        description: "A premium e-commerce platform built with Next.js, featuring a clean minimalist design, product filtering, and smooth shopping experience.",
        image: "/images/project-fayrashop.png",
        link: "https://fayrashop.vercel.app/",
        github: "https://github.com/Fayra-Tech/fayrashop",
        category: "Next.js",
        tags: ["Next.js", "E-Commerce", "Tailwind", "Responsive"],
        challenges: "Creating a seamless mobile-first shopping experience with optimized image loading and dynamic product management.",
        futurePlans: "Integrating Stripe for secure payments and a multi-vendor dashboard for sellers."
    },
    {
        id: 5,
        title: "Spylt Landing Page",
        description: "Creative landing page with interactive GSAP animations and parallax effects.",
        image: "/images/project-spylt.png",
        link: "https://spylt-bay.vercel.app/",
        github: "https://github.com/arabyhossainabid/gsap-spylt",
        category: "GSAP",
        tags: ["GSAP", "Landing Page", "Animations", "Creative"],
        challenges: "Synchronizing complex parallax animations with user scroll speed while maintaining a high frame rate.",
        futurePlans: "Developing a set of reusable animation components to speed up future creative landing page builds."
    },
    {
        id: 6,
        title: "E-Commerce Dashboard",
        description: "Full-stack e-commerce admin dashboard with real-time analytics and inventory management.",
        image: "/images/project-fastefy.png",
        link: "https://fastefy.com/",
        github: "https://github.com/mdasif-me/fastefy-csr",
        category: "Full-Stack",
        tags: ["Next.js", "PostgreSQL", "Dashboard", "Analytics"],
        challenges: "Optimizing SQL queries to provide real-time updates for high-volume sales analytics.",
        futurePlans: "Moving towards a micro-frontend architecture to allow independent deployment of dashboard modules."
    },
    {
        id: 7,
        title: "FoodHub Zone",
        description: "Full-stack food delivery platform with real-time order management.",
        image: "/images/project-foodhub-zone.png",
        link: "https://foodhubzone.vercel.app/",
        github: "https://github.com/arabyhossainabid/FOODHUB-BACKEND",
        category: "Full-Stack",
        tags: ["Next.js", "PostgreSQL", "prisma io", "shadcn ui"],
        challenges: "Designing a scalable order state machine that handles edge cases like order cancellations and restaurant busy status.",
        futurePlans: "Implementing an driver tracking app and a multi-vendor payout system using Stripe connect."
    },
    {
        id: 2,
        title: "Career Hub Platform",
        description: "A comprehensive job search platform with advanced filtering and application tracking.",
        image: "/images/project-career-hub.png",
        link: "https://react-career-hub-three.vercel.app/",
        github: "https://github.com/arabyhossainabid/react-career-hub",
        category: "React",
        tags: ["React", "UI/UX", "Platform", "Responsive"],
        challenges: "Managing complex states for multiple filters and ensuring a seamless experience when handling large job lists.",
        futurePlans: "Integrating AI-based job recommendations and a real-time messaging system for employers and candidates."
    }
];

export default function ProjectsGrid() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = React.useMemo(() =>
        selectedCategory === "All"
            ? projects
            : projects.filter(p => p.category === selectedCategory),
        [selectedCategory]
    );

    const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <section className="bg-[#0d0d0d] py-16 px-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-(--neon-yellow)/5 rounded-full blur-[100px] opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Featured <span className="text-(--neon-yellow)">Work</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Explore my latest projects showcasing modern web development
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setShowAll(true);
                                }}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-(--neon-yellow) text-black shadow-[0_0_20px_0px_var(--neon-yellow)]"
                                    : "bg-white/5 text-gray-300 border border-white/10 hover:border-(--neon-yellow)/50"
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                onHoverStart={() => setHoveredId(project.id)}
                                onHoverEnd={() => setHoveredId(null)}
                            >
                                <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-(--neon-yellow)/30 transition-all duration-300 group h-full flex flex-col cursor-pointer" onClick={() => setSelectedProject(project)}>
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 grow flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-(--neon-yellow) transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 italic">
                                            Click to view details...
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-(--neon-yellow)/10 text-(--neon-yellow) text-xs font-medium border border-(--neon-yellow)/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {!showAll && filteredProjects.length > 6 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Button 
                            onClick={() => setShowAll(true)}
                            className="bg-(--neon-yellow) text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_20px_var(--neon-yellow)] transition-all"
                        >
                            View All Projects
                        </Button>
                    </motion.div>
                )}
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-(--neon-yellow) hover:text-black transition-all z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 md:h-full min-h-[400px]">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="mb-8">
                                        <span className="px-3 py-1 rounded-full bg-(--neon-yellow)/10 text-(--neon-yellow) text-xs font-bold uppercase tracking-wider border border-(--neon-yellow)/20 mb-4 inline-block">
                                            {selectedProject.category}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-lg">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="space-y-6 mb-10">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                                                <Zap className="w-6 h-6 text-purple-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1 italic">The Challenges</h4>
                                                <p className="text-gray-400 text-sm">{selectedProject.challenges}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                                <Target className="w-6 h-6 text-blue-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1 italic">Future Plans</h4>
                                                <p className="text-gray-400 text-sm">{selectedProject.futurePlans}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button className="w-full bg-(--neon-yellow) text-black font-bold h-12 hover:shadow-[0_0_20px_var(--neon-yellow)] rounded-xl">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </Button>
                                        </a>
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button variant="outline-glass" className="w-full h-12 border-white/10 hover:border-(--neon-yellow)/50 text-white rounded-xl">
                                                <Github className="w-4 h-4 mr-2" />
                                                Source Code
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
