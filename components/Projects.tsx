import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, Droplet, CloudSun, Leaf, Smartphone, Lock, Folder, Grid3X3 } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const iconMap: Record<string, React.ReactNode> = {
  droplet: <Droplet size={32} />,
  "cloud-sun": <CloudSun size={32} />,
  leaf: <Leaf size={32} />,
  smartphone: <Smartphone size={32} />,
  lock: <Lock size={32} />,
  grid: <Grid3X3 size={32} />,
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            03. DEPLOYMENTS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {PROJECTS.map((project, index) => (
            <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
            >
            <TiltCard
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-primary blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10 rounded-xl" />
              
              <div className="bg-surface/80 backdrop-blur-md border border-white/10 h-full p-8 rounded-xl hover:border-primary/50 transition-all duration-300 flex flex-col relative overflow-hidden">
                {/* Decorative Tech Lines */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent clip-corner" />
                
                <div className="mb-6 text-primary group-hover:text-accent transition-colors duration-300 transform translate-z-20">
                  {iconMap[project.icon] || <Folder size={32} />}
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-secondary px-2 py-1 bg-secondary/10 rounded border border-secondary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                   <a 
                     href={project.link || "#"} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                   >
                     <Github size={16} /> CODE
                   </a>
                </div>
              </div>
            </TiltCard>
            </motion.div>
          ))}

          {/* New "More Projects" Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: PROJECTS.length * 0.1 }}
            className="h-full"
          >
            <TiltCard className="group relative h-full min-h-[300px]">
                <a 
                    href="https://github.com/Lokesh-Gopinath" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                >
                    <div className="absolute inset-0 bg-secondary blur opacity-10 group-hover:opacity-30 transition-opacity duration-300 -z-10 rounded-xl" />
                    <div className="bg-surface/80 backdrop-blur-md border-2 border-dashed border-white/20 h-full p-8 rounded-xl hover:border-secondary/50 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-surface/90">
                        <div className="mb-4 p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <Github size={48} className="text-gray-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2 text-center group-hover:text-secondary transition-colors">
                            More Projects
                        </h3>
                        <p className="text-gray-400 font-mono text-sm text-center">
                            Check out my GitHub for more hacks & source code.
                        </p>
                    </div>
                </a>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;