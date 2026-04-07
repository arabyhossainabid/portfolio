"use client";
import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Your School Name",
    year: "2015 – 2020",
    description: "Completed secondary education with a strong focus on science and foundational learning.",
    achievements: ["Science Excellence Award"]
  }
];

function Education() {
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
            My <span className="text-[#deff00]">Education</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Academic background and achievements
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-[#deff00]/30 transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#deff00]/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-[#deff00]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-[#deff00] font-semibold mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {edu.description}
                      </p>
                      {edu.achievements.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-1 px-3 py-1 bg-[#deff00]/10 rounded-full">
                              <Award className="w-3 h-3 text-[#deff00]" />
                              <span className="text-sm text-[#deff00]">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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

export default Education;