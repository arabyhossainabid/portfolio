"use client";
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    date: "2025 – Present",
    company: "Freelance Client Project",
    role: "Frontend Developer",
    description: "Successfully delivered a 100% complete frontend web application for a client. Built with React, Next.js, and Tailwind CSS — delivered on time with full client satisfaction.",
  },
  {
    id: 2,
    date: "2024 – 2025",
    company: "Personal Full-Stack Projects",
    role: "Full-Stack Developer (Self-Directed)",
    description: "Built 3 full-stack projects using Next.js, Node.js, Express, PostgreSQL, and Prisma ORM. Applied real-world backend skills including REST API design, database management, and deployment.",
  },
  {
    id: 3,
    date: "2023 – 2024",
    company: "Frontend Development (Self-Study & Projects)",
    role: "Frontend Expert",
    description: "Mastered frontend development through intensive practice with React, TypeScript, GSAP animations, and modern UI libraries — completing multiple open-source and portfolio projects.",
  },
];

function Worked() {
  const router = useRouter();

  return (
    <section className="bg-[#0d0d0d] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            I&apos;ve Worked with
            <br />
            <span className="text-[#deff00]">Amazing</span> Tech Companies
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-[#deff00]/30 transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {exp.date}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#deff00] transition-colors">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-[#deff00] font-semibold mb-3">
                        <Briefcase className="w-4 h-4" />
                        {exp.role}
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    <button
                      onClick={() => router.push("/contact")}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#deff00] hover:border-[#deff00] flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    >
                      <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Worked;
