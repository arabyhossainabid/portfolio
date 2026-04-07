"use client";
import React from "react";
import { motion } from "motion/react";
import { BookOpen, Code, Palette, Gamepad2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutIntro() {
  return (
    <section className="bg-[#0d0d0d] py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            More <span className="text-[#deff00]">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I am a passionate web developer who loves building digital experiences. Here is a little more about my journey, what I enjoy doing, my hobbies outside of code, and my educational background.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Programming Journey & Work */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-white/5 border-white/10 h-full hover:border-[#deff00]/30 transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#deff00]/10 rounded-full">
                    <Code className="w-6 h-6 text-[#deff00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Programming Journey</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  My programming journey started out of curiosity for how websites work. Soon, that curiosity turned into a passion for creating interactive, user-friendly, and modern web applications. From learning the fundamentals of HTML, CSS, and JavaScript, I have grown to specialize in modern frameworks like React and Next.js, always eager to tackle complex challenges and learn new technologies.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <h4 className="text-lg font-semibold text-white">What I Enjoy:</h4>
                </div>
                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                  <li>Building responsive, pixel-perfect user interfaces</li>
                  <li>Adding smooth, engaging GSAP animations</li>
                  <li>Solving complex state management in React</li>
                  <li>Working on full-stack projects combining clean UI with robust generic APIs</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex flex-col gap-8">
            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <Card className="bg-white/5 border-white/10 h-full hover:border-[#deff00]/30 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-500/10 rounded-full">
                      <Palette className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Hobbies & Interests</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    When I am not coding, I believe in maintaining a balanced lifestyle. I enjoy getting away from screens and exploring my other passions:
                  </p>
                  <ul className="mt-4 text-gray-400 space-y-3">
                    <li className="flex items-start gap-3">
                      <Gamepad2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>Video Games:</strong> I love playing video games, which sparked my initial interest in how digital worlds and logic work.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>Reading:</strong> I enjoy reading technology blogs and science fiction to stay inspired.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1"
            >
              <Card className="bg-white/5 border-white/10 h-full hover:border-[#deff00]/30 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                      <GraduationCap className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-500/30 pl-4 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5" />
                      <h4 className="text-xl font-bold text-white">Secondary School Certificate (SSC)</h4>
                      <p className="text-[#deff00] text-sm mb-2">2015 - 2020</p>
                      <p className="text-gray-400">
                        Completed secondary education with a strong focus on science.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
