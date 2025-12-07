import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-surface/30">
      <div className="max-w-5xl mx-auto px-6">
         <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            04. TIMELINE
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty space for the other side */}
                  <div className="hidden md:block flex-1" />

                  {/* Icon Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-surface border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    {exp.type === 'education' ? <GraduationCap size={18} className="text-white"/> : <Briefcase size={18} className="text-white"/>}
                  </div>

                  {/* Content Card */}
                  <div className="ml-20 md:ml-0 flex-1">
                    <div className={`bg-background border border-white/10 p-6 rounded-lg hover:border-secondary/50 transition-all duration-300 relative ${isEven ? 'md:mr-10' : 'md:ml-10'}`}>
                      {/* Triangle pointer */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-t border-r border-white/10 rotate-45 transform ${isEven ? 'right-[-9px] border-l-0 border-b-0' : 'left-[-9px] border-t-0 border-r-0 border-l border-b'}`} />
                      
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-mono font-bold rounded mb-2 border border-primary/20">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                      <h4 className="text-lg text-secondary mb-3">{exp.role}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
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