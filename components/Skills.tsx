import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Group skills by category (technical / soft)
  const technicalSkills = SKILLS.filter(s => s.category === "technical");
  // No soft skills in current data, but keeping structure extensible

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-2">
            Skills & Technologies
          </h2>
          <p className="text-[#636e72] text-lg max-w-2xl">
            Technologies and tools I work with regularly.
          </p>
          <div className="h-px bg-[#e0e0e0] w-full mt-6" />
        </motion.div>

        <div className="space-y-10">
          {/* Technical Skills Block */}
          <div>
            <h3 className="text-sm font-semibold text-[#b2bec3] uppercase tracking-widest mb-5">
              Technical
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="group"
                >
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#f0f0f3] rounded-[12px] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] transition-all duration-200 cursor-default">
                    <span className="text-[#74b9ff] group-hover:text-[#a29bfe] transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-[#2d3436]">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;