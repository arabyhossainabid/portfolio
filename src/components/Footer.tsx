"use client";
import React from "react";
import { Github, Linkedin, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Araby Hossain Abid</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer specializing in modern web technologies.
              Creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-[#deff00] transition-colors">Home</a>
              <a href="/about-us" className="block text-gray-400 hover:text-[#deff00] transition-colors">About</a>
              <a href="/projects" className="block text-gray-400 hover:text-[#deff00] transition-colors">Projects</a>
              <a href="/contact" className="block text-gray-400 hover:text-[#deff00] transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>arabyhossainabid@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/arabyhossainabid"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/araby-hossain-abid-6790a5318/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.facebook.com/araby.hossain.abid"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Araby Hossain Abid. Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;