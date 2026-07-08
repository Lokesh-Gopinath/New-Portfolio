import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#f0f0f3]/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#74b9ff] to-[#a29bfe] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#e0e0e0] md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty space for the other side */}
                  <div className="hidden md:block flex-1" />

                  {/* Icon Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#f0f0f3] rounded-full flex items-center justify-center z-10 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">
                    {exp.type === 'education' ? (
                      <GraduationCap size={18} className="text-[#74b9ff]" />
                    ) : (
                      <Briefcase size={18} className="text-[#a29bfe]" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="ml-20 md:ml-0 flex-1">
                    <div
                      className={`bg-[#f0f0f3] rounded-[16px] p-6 shadow-[8px_8px_15px_#d1d1d1,-8px_-8px_15px_#ffffff] hover:shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] transition-all duration-300 ${
                        isEven ? 'md:mr-10' : 'md:ml-10'
                      }`}
                    >
                      <span className="inline-block px-3 py-1 bg-[#74b9ff]/10 text-[#74b9ff] text-xs font-medium rounded-[50px] mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-bold text-[#2d3436] mb-1">
                        {exp.company}
                      </h3>
                      <h4 className="text-[#74b9ff] font-medium mb-3">
                        {exp.role}
                      </h4>
                      <p className="text-[#636e72] text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;