import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-1"
        >
          {/* Section Header */}
          <div className="flex items-end gap-4 mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              01. ABOUT
            </h2>
            <div className="h-px bg-gray-700 flex-grow mb-4 relative">
              <span className="absolute right-0 -top-1 w-2 h-2 bg-primary rounded-full"></span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-lg text-gray-300 font-sans leading-relaxed">
              <p>
                I am an <strong className="text-white">Electronics & Communication Engineering</strong> graduate from Panimalar Engineering College with a passion for bridging the physical and digital worlds. My expertise lies in designing robust <span className="text-secondary">IoT architectures</span> and automation systems.
              </p>
              <p>
                From hacking together prototypes in 48 hours to building reliable industrial solutions, I thrive on solving complex problems. I have hands-on experience with <span className="text-primary">MindSphere</span>, embedded microcontrollers, and cloud integration.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                 <div className="flex items-center gap-2">
                    <Zap className="text-accent" />
                    <span>Rapid Prototyping</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Smartphone className="text-white" />
                    <span>App Developer</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Cpu className="text-primary" />
                    <span>Embedded Systems</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Activity className="text-secondary" />
                    <span>Industrial IoT</span>
                 </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-surface/50 border border-white/10 p-8 clip-corner backdrop-blur-sm hover:border-primary/50 transition-colors">
               <h3 className="font-mono text-xl text-primary mb-6">&lt;Stats /&gt;</h3>
               <ul className="space-y-4 font-mono">
                 <li className="flex justify-between border-b border-gray-800 pb-2">
                   <span>CGPA</span>
                   <span className="text-white">7.85</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-800 pb-2">
                   <span>Experience</span>
                   <span className="text-white">Fresh Grad</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-800 pb-2">
                   <span>Projects</span>
                   <span className="text-white">10+</span>
                 </li>
                 <li className="flex justify-between">
                   <span>Location</span>
                   <span className="text-white">TN, India</span>
                 </li>
               </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;