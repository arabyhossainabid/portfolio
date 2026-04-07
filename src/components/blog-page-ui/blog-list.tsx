"use client";

import React from "react";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Animation Variants for performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
};

const BlogList = () => {
  const featuredPost = {
    title: "My Journey as a Full-Stack Developer",
    excerpt: "I am a skilled full-stack web developer with hands-on experience in building fast, secure, and scalable applications using modern technologies...",
    content: [
      "I am a skilled full-stack web developer with hands-on experience in building fast, secure, and scalable applications using modern technologies. I work confidently with Next.js, React.js, TypeScript, Express.js, Node.js, PostgreSQL, Docker, AWS, and various developer tools. I also have solid experience with UI/UX-focused libraries like Tailwind CSS, shadcn/ui, GSAP, and other modern UI frameworks, ensuring attractive, responsive, and high-performance interfaces.",
      "I can design REST APIs, manage databases, integrate advanced animations, optimize applications for speed and SEO, handle deployments, and build production-ready full-stack systems. I regularly use Postman for API testing, Nginx for server configuration, and Docker for efficient app deployment. My experience also includes working with Prisma ORM, real-world backend logic, and cloud environments like AWS.",
      "I enjoy solving complex problems, writing clean code, and creating user-friendly digital experiences. I'm confident in taking responsibility for complete project development—from planning to deployment—and I'm always learning new technologies to improve my work even further."
    ],
    date: "Dec 4, 2025",
    readTime: "3 min read",
    tags: ["Career", "Full-Stack", "Web Development"],
    author: "Araby Hossain Abid"
  };

  const posts = [
    {
      title: "Mastering Next.js 15: What's New?",
      excerpt: "Explore the latest features in Next.js 15, from partial prerendering to the new caching model.",
      date: "Dec 2, 2025",
      readTime: "5 min read",
      tags: ["Next.js", "React"],
      image: "/images/nextjs-blog.png"

    },
    {
      title: "Why Tailwind CSS is the Future of Styling",
      excerpt: "A deep dive into utility-first CSS and why it scales better than traditional approaches.",
      date: "Nov 28, 2025",
      readTime: "4 min read",
      tags: ["CSS", "Tailwind"],
      image: "/images/tailwind-blog.png"
    },
    {
      title: "Dockerizing your React Application",
      excerpt: "Step-by-step guide to containerizing your frontend applications for consistent deployment.",
      date: "Nov 25, 2025",
      readTime: "6 min read",
      tags: ["DevOps", "Docker"],
      image: "/images/docker-blog.png"

    }
  ];

  return (
    <section className="min-h-screen bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#deff00]/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Insights & <span className="text-[#deff00]">Thoughts</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing my journey, tutorials, and thoughts on modern web development.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-[#deff00]/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 text-sm text-[#deff00]">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {featuredPost.title}
                </h2>
                <div className="space-y-4 text-gray-300 mb-8 leading-relaxed">
                  {featuredPost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex items-center gap-4 mb-8">
                  {featuredPost.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#deff00]/10 text-[#deff00] text-xs font-medium border border-[#deff00]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#deff00] to-orange-500 flex items-center justify-center text-black font-bold">
                    AH
                  </div>
                  <div>
                    <p className="text-white font-medium">{featuredPost.author}</p>
                    <p className="text-gray-500 text-xs">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[300px] md:min-h-full bg-linear-to-br from-[#deff00]/20 to-purple-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-[#deff00] rounded-full blur-[80px] opacity-20 animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-[url('/images/cubes.png')] opacity-10" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Recent Posts Grid - OPTIMIZED */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="bg-white/5 border-white/10 h-full hover:border-[#deff00]/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col will-change-transform">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100 will-change-transform"
                    priority={index === 0}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-[#deff00] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grow">
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="w-full">
                    <Button variant="link" className="text-[#deff00] p-0 h-auto hover:text-[#deff00]/80 group/btn">
                      Read More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogList;