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
        >
          {/* Section Header */}
          <div className="flex items-end gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">
              About
            </h2>
            <div className="h-px bg-[#e0e0e0] flex-grow mb-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 text-[#636e72] leading-relaxed">
              <p className="text-lg">
                I am an <strong className="text-[#2d3436]">Electronics & Communication Engineering</strong> graduate from Panimalar Engineering College with a passion for bridging the physical and digital worlds. My expertise lies in designing robust <span className="text-[#74b9ff] font-medium">IoT architectures</span> and automation systems.
              </p>
              <p className="text-lg">
                From hacking together prototypes in 48 hours to building reliable industrial solutions, I thrive on solving complex problems. I have hands-on experience with <span className="text-[#a29bfe] font-medium">MindSphere</span>, embedded microcontrollers, and cloud integration.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0f0f3] rounded-[50px] shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]">
                  <Zap size={16} className="text-[#74b9ff]" />
                  <span className="text-sm text-[#636e72]">Rapid Prototyping</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0f0f3] rounded-[50px] shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]">
                  <Smartphone size={16} className="text-[#a29bfe]" />
                  <span className="text-sm text-[#636e72]">App Developer</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0f0f3] rounded-[50px] shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]">
                  <Cpu size={16} className="text-[#81ecec]" />
                  <span className="text-sm text-[#636e72]">Embedded Systems</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0f0f3] rounded-[50px] shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]">
                  <Activity size={16} className="text-[#74b9ff]" />
                  <span className="text-sm text-[#636e72]">Industrial IoT</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-[#f0f0f3] rounded-[16px] p-8 shadow-[8px_8px_15px_#d1d1d1,-8px_-8px_15px_#ffffff]">
              <h3 className="font-medium text-lg text-[#2d3436] mb-6 border-b border-[#e0e0e0] pb-3">Stats</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-[#e9ecef] pb-2">
                  <span className="text-[#636e72]">CGPA</span>
                  <span className="text-[#2d3436] font-medium">7.85</span>
                </li>
                <li className="flex justify-between border-b border-[#e9ecef] pb-2">
                  <span className="text-[#636e72]">Experience</span>
                  <span className="text-[#2d3436] font-medium">Fresh Grad</span>
                </li>
                <li className="flex justify-between border-b border-[#e9ecef] pb-2">
                  <span className="text-[#636e72]">Projects</span>
                  <span className="text-[#2d3436] font-medium">10+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#636e72]">Location</span>
                  <span className="text-[#2d3436] font-medium">TN, India</span>
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