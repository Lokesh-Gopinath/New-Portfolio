import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import TiltCard from './ui/TiltCard';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-right text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-600 mb-4">
            02. ARSENAL
          </h2>
          <div className="h-px bg-gray-700 w-full relative">
             <span className="absolute left-0 -top-1 w-2 h-2 bg-secondary rounded-full"></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 perspective-1000">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="h-full"
            >
              <TiltCard className="group relative h-full">
                 {/* Glow Effect */}
                 <div className="absolute inset-0 bg-primary blur opacity-10 group-hover:opacity-30 transition-opacity duration-300 -z-10 rounded-lg" />
                 
                 <div className="bg-background border border-white/5 p-6 flex flex-col items-center justify-center gap-4 h-full rounded-lg hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group-hover:bg-surface/50">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/5 to-transparent clip-corner opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="text-secondary group-hover:text-white transition-colors p-3 bg-surface rounded-lg relative z-10 shadow-lg group-hover:scale-110 duration-300 transform">
                        {skill.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg relative z-10 text-center">{skill.name}</h3>
                    
                    {/* Progress Bar styled as tech line */}
                    <div className="w-full h-1 bg-gray-800 rounded-full mt-2 relative z-10 overflow-hidden">
                        <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.05) }}
                        className="h-full bg-gradient-to-r from-secondary to-primary shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        />
                    </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;