"use client";

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Users, Award } from "lucide-react";

export default function NumberSection() {
  const stats = [
    { icon: Users, value: 1, suffix: "", label: "Happy Client", color: "#deff00" },
    { icon: TrendingUp, value: 12, suffix: "K+", label: "Hours on Craft", color: "#deff00" },
    { icon: Award, value: 5.0, suffix: "", label: "Review Rate", decimalPlaces: 1, color: "#deff00" },
  ];

  return (
    <section className="bg-[#0d0d0d] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#deff00]/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-full bg-[#deff00]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#deff00] transition-colors">
                <stat.icon className="w-8 h-8 text-[#deff00] group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-[#deff00] mb-2">
                {stat.value}
                {stat.suffix}
              </h3>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
