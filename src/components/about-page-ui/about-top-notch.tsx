"use client";
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Zap, Layers, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Quickly turn ideas into interactive prototypes with clean design and intuitive components, reducing time from concept to reality."
  },
  {
    icon: Layers,
    title: "Component Library",
    description: "Reuse prebuilt components and layouts from modern design systems for faster development and consistent UI across your application."
  }
];

function AboutTopNotch() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#deff00]/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Exceptional <span className="text-[#deff00]">Frontend</span>
              <br />
              Solutions, Crafted with
              <br />
              <span className="text-[#deff00]">Precision</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => router.push("/projects")}
            className="px-8 py-4 bg-[#deff00] text-black font-bold rounded-full hover:shadow-[0_0_30px_0px_#deff00] transition-all duration-300 flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            Start a Project
          </motion.button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 h-full hover:border-[#deff00]/30 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#deff00]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#deff00] transition-colors">
                    <service.icon className="w-8 h-8 text-[#deff00] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#deff00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-linear-to-br from-[#deff00]/10 to-purple-500/10 border-[#deff00]/20 overflow-hidden">
            <CardContent className="p-12 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-center lg:text-left max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Collaborate Seamlessly in Real-Time
                </h3>
                <p className="text-gray-300 text-lg">
                  Work closely to create interactive, modern, and responsive frontend experiences
                  tailored perfectly to your vision.
                </p>
              </div>
              <div className="flex -space-x-4">
                {[
                  "https://randomuser.me/api/portraits/women/65.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-4 border-[#0d0d0d] overflow-hidden relative"
                  >
                    <Image src={img} alt={`Team ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-[#0d0d0d] bg-[#deff00] flex items-center justify-center">
                  <span className="text-black font-bold text-xs uppercase">Done</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutTopNotch;
