import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Leaf, Smartphone, Lock, Grid3X3, Folder } from 'lucide-react';
import type { ProjectData } from '../types';
import projectsData from '../data/projects.json';

const categories = ["All", "IoT", "Web", "Mobile", "Algorithms", "Security"];

const categoryIcon = (category: string): React.ReactNode => {
  const icons: Record<string, React.ReactNode> = {
    IoT: <Leaf size={24} />,
    Web: <Folder size={24} />,
    Mobile: <Smartphone size={24} />,
    Algorithms: <Grid3X3 size={24} />,
    Security: <Lock size={24} />,
  };
  return icons[category] || <Folder size={24} />;
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const projects: ProjectData[] = (projectsData as { projects: ProjectData[] }).projects;

  // Sort: featured first, then by year descending
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.year - a.year;
  });

  const filteredProjects = activeCategory === "All"
    ? sortedProjects
    : sortedProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">
            Projects
          </h2>
          <div className="h-px bg-[#e0e0e0] w-full mt-4" />
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-[50px] text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#74b9ff] text-white shadow-[3px_3px_8px_#d1d1d1,-3px_-3px_8px_#ffffff]'
                  : 'bg-[#f0f0f3] text-[#636e72] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f0f0f3] rounded-[16px] p-8 shadow-[8px_8px_15px_#d1d1d1,-8px_-8px_15px_#ffffff] hover:shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] transition-all duration-300 flex flex-col"
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="text-[#74b9ff] p-3 bg-[#f8f9fa] rounded-[12px] shadow-[inset_2px_2px_4px_#d1d1d1,inset_-2px_-2px_4px_#ffffff]">
                  {categoryIcon(project.category)}
                </div>
                {project.featured && (
                  <span className="text-[10px] font-medium text-[#74b9ff] bg-[#74b9ff]/10 px-2 py-1 rounded-[50px]">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-[#2d3436] mb-3">
                {project.title}
              </h3>

              <p className="text-[#636e72] mb-6 flex-grow leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map(t => (
                  <span
                    key={t}
                    className="text-xs font-medium text-[#636e72] px-2 py-1 bg-[#f8f9fa] rounded-[50px] shadow-[inset_1px_1px_3px_#d1d1d1,inset_-1px_-1px_3px_#ffffff]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-[#e9ecef]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#636e72] hover:text-[#2d3436] transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#636e72] hover:text-[#74b9ff] transition-colors"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* GitHub link card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: filteredProjects.length * 0.1 }}
          >
            <a
              href="https://github.com/Lokesh-Gopinath"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="bg-[#f0f0f3] rounded-[16px] p-8 shadow-[8px_8px_15px_#d1d1d1,-8px_-8px_15px_#ffffff] hover:shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] transition-all duration-300 flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-[#e0e0e0]">
                <div className="mb-4 p-4 bg-[#f8f9fa] rounded-full shadow-[inset_2px_2px_4px_#d1d1d1,inset_-2px_-2px_4px_#ffffff]">
                  <Github size={48} className="text-[#b2bec3]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-2 text-center">
                  More Projects
                </h3>
                <p className="text-[#636e72] text-sm text-center">
                  Check out my GitHub for more projects and source code.
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;