
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Terminal } from 'lucide-react';
import GlitchText from './ui/GlitchText';

const FloatingShard = ({ className, delay, duration = 6 }: { className: string, delay: number, duration?: number }) => (
  <motion.div
    className={`absolute ${className} backdrop-blur-sm bg-white/5 border border-white/10 z-0 pointer-events-none`}
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0.1, 0.4, 0.1],
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Abstract Shapes behind */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-fast" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-[80px]" />

      {/* Floating Shattered Shards with new colors */}
      <FloatingShard className="top-24 left-[10%] w-16 h-16 clip-triangle bg-primary/20" delay={0} />
      <FloatingShard className="top-1/3 right-[15%] w-24 h-24 clip-shard-1 bg-secondary/10" delay={2} duration={8} />
      <FloatingShard className="bottom-32 left-[20%] w-12 h-12 clip-shard-2 bg-accent/10" delay={1} duration={5} />
      <FloatingShard className="bottom-1/4 right-[5%] w-20 h-20 clip-shatter bg-primary/10" delay={3} />
      <FloatingShard className="top-20 right-[30%] w-8 h-8 clip-triangle bg-white/10" delay={4} duration={4} />

      <div className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="z-10"
        >
          <motion.div variants={item} className="flex items-center gap-2 mb-4 text-secondary font-mono text-sm">
             <Terminal size={16} />
             <span>SYSTEM_ONLINE</span>
          </motion.div>
          
          <motion.div variants={item}>
            <GlitchText 
                text="LOKESH GOPINATH K" 
                as="h1" 
                className="text-5xl md:text-7xl font-display font-black leading-tight text-white mb-4 tracking-tighter" 
            />
          </motion.div>
          
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-sans text-gray-400 mb-6 font-bold">
            Electronics and Communication Engineer
          </motion.h2>
          
          <motion.p variants={item} className="max-w-lg text-gray-300 leading-relaxed mb-8 border-l-4 border-primary pl-4">
            Building efficient solutions that scale from 48-hour hacks to production-ready IIoT systems.
            Passionate about embedded systems, Node-RED, automation, and app development.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/Lokesh-Gopinath"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-secondary/10 border border-secondary text-secondary font-bold font-display clip-shatter hover:bg-secondary hover:text-black transition-all duration-300"
            >
              VIEW WORK
            </a>
            <a 
              href="assets/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary text-primary font-bold font-display clip-shatter hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} /> RESUME
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96 group">
            {/* Decorative Borders */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-white/5 rounded-full z-0"
            />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-secondary group-hover:border-primary transition-colors duration-300" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary group-hover:border-secondary transition-colors duration-300" />
            
            {/* Image Container with Clip Path */}
            <div className="w-full h-full clip-shatter bg-gray-800 relative z-10 shadow-2xl shadow-primary/20 group-hover:shadow-secondary/30 transition-shadow duration-500">
               
               {/* Main Image */}
               <img 
                src="assets/profile.png" 
                alt="Lokesh Gopinath K" 
                className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
              />
              
              {/* Glitch Overlay Image (Visible on Hover) */}
               <img 
                src="assets/profile.png" 
                alt="Glitch Layer" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-50 group-hover:animate-glitch mix-blend-color-dodge pointer-events-none"
              />

               {/* Inner Border Glow */}
               <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
