import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#74b9ff]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-[#a29bfe]/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="inline-block px-3 py-1 bg-[#74b9ff]/10 text-[#74b9ff] text-xs font-medium rounded-[50px] mb-4">
              Electronics & Communication Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-[#2d3436] mb-4"
          >
            Lokesh{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74b9ff] to-[#a29bfe]">
              Gopinath K
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-lg text-[#636e72] leading-relaxed mb-8 text-lg"
          >
            Building efficient solutions that scale from 48-hour hacks to
            production-ready IIoT systems. Passionate about embedded systems,
            Node-RED, automation, and app development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/Lokesh-Gopinath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0f0f3] rounded-[50px] text-[#2d3436] font-medium shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:scale-[0.98] active:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] transition-all duration-200"
            >
              <Github size={18} /> View Work
            </a>
            <a
              href="assets/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0f0f3] rounded-[50px] text-[#2d3436] font-medium shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:scale-[0.98] active:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] transition-all duration-200"
            >
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96 group">
            {/* Neumorphic Frame */}
            <div className="w-full h-full rounded-[16px] bg-[#f0f0f3] shadow-[12px_12px_24px_#d1d1d1,-12px_-12px_24px_#ffffff] overflow-hidden relative">
              <img
                src="assets/profile.png"
                alt="Lokesh Gopinath K"
                className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa]/40 via-transparent to-transparent" />
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-[#74b9ff] to-[#a29bfe] shadow-[2px_2px_6px_rgba(116,185,255,0.4)]" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#b2bec3]"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;