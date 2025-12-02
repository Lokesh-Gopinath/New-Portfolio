import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Briefcase, GraduationCap, Cpu, 
  Code, Trophy, User, Smile, Mail, 
  Github, Linkedin, Layers, Cloud, 
  Terminal, Brain, Clock, RefreshCw, 
  Users, ExternalLink, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StarField from './components/StarField';
import InteractiveShape from './components/InteractiveShape';
import ProjectCard from './components/ProjectCard';
import Loader from './components/Loader';
import { 
  EDUCATION, INTERNSHIPS, SKILLS, 
  PROJECTS, ACHIEVEMENTS, HOBBIES, SOCIALS
} from './constants';

// Icon mapping
const IconMap: Record<string, any> = {
  Layers: Layers, Cloud: Cloud, Code: Code, Terminal: Terminal,
  Cpu: Cpu, Brain: Brain, Clock: Clock, RefreshCw: RefreshCw,
  Users: Users, Briefcase: Briefcase
};

// 3D Scene Wrapper
const Scene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Reusable Section Component with Tech Styling
const Section = ({ 
  id, title, icon: Icon, children 
}: { 
  id: string; title: string; icon?: any; children?: React.ReactNode 
}) => {
  return (
    <section id={id} className="py-24 px-6 md:px-20 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-2">
           <span className="text-secondary font-mono text-sm tracking-widest uppercase">0x{id.toUpperCase()}</span>
           <div className="h-[1px] flex-grow bg-gradient-to-r from-secondary/30 to-transparent"></div>
        </div>
        
        <div className="flex items-center gap-3">
          {Icon && <Icon className="text-primary" size={32} />}
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight glitch" data-text={title}>
            {title}
          </h2>
        </div>
      </motion.div>
      {children}
    </section>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="bg-dark min-h-screen text-gray-200 selection:bg-primary selection:text-white font-sans overflow-x-hidden relative">
      {/* Persistent Cyber Grid Background */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-[1]"></div>
      {/* Persistent Scan Line */}
      <div className="scan-line"></div>
      
      <div className="relative z-[2]">
        <Scene />
        <Navbar />

        {/* Hero Area */}
        <div className="relative">
          <div className="absolute right-0 top-0 h-screen w-full md:w-1/2 z-0 pointer-events-auto opacity-40 mix-blend-screen">
             <Canvas>
               <ambientLight intensity={0.5} />
               <directionalLight position={[10, 10, 5]} intensity={1} />
               <InteractiveShape />
             </Canvas>
          </div>
          <Hero />
        </div>

        {/* About Section */}
        <Section id="about" title="About Me" icon={User}>
          <div className="tech-card p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center gap-10">
            {/* Decorative Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>

            <div className="flex-1 text-lg leading-relaxed text-gray-300">
              <p className="mb-6 font-light">
                <span className="text-secondary font-mono text-xl mr-2">></span>
                I am an <span className="text-white font-bold border-b border-primary">Electronics & Communication Engineering</span> graduate.
              </p>
              <p>
                My specialized systems involve building efficient <span className="text-primary">IoT solutions</span>, automating workflows with <span className="text-white font-mono">Node-RED</span>, and architecting scalable embedded systems. I operate at the intersection of hardware and cloud computing.
              </p>
            </div>
            <div className="relative group w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
               <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
               <img 
                 src="/assets/photo.png" 
                 alt="Lokesh Gopinath K" 
                 className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Lokesh+Gopinath&background=0f172a&color=fff&size=256";
                 }}
               />
               {/* Tech circle overlay */}
               <div className="absolute -inset-4 border border-dashed border-white/20 rounded-full animate-spin-slow pointer-events-none"></div>
            </div>
          </div>
        </Section>

        {/* Education & Internships */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
          <Section id="education" title="Education" icon={GraduationCap}>
             <div className="space-y-8 border-l border-white/10 pl-8 ml-4 relative">
               {EDUCATION.map((edu, idx) => (
                 <div key={edu.id} className="relative group">
                   <span className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-dark border border-secondary group-hover:bg-secondary group-hover:scale-150 transition-all"></span>
                   <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{edu.title}</h3>
                   <p className="text-secondary font-mono text-xs mb-1 uppercase tracking-wide">{edu.subtitle}</p>
                   <span className="text-gray-500 text-xs block mb-2 font-mono">[{edu.year}]</span>
                   <p className="text-gray-400 text-sm border-l-2 border-white/5 pl-4">{edu.description}</p>
                 </div>
               ))}
             </div>
          </Section>

          <Section id="internships" title="Internships" icon={Briefcase}>
             <div className="space-y-4">
               {INTERNSHIPS.map((intern) => (
                 <div key={intern.id} className="tech-card p-6 rounded hover:border-primary/50 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{intern.title}</h3>
                      <span className="text-[10px] font-mono border border-primary text-primary px-1 py-0.5 rounded">{intern.year}</span>
                    </div>
                    <p className="text-secondary text-sm mb-3 font-medium">{intern.subtitle}</p>
                    <p className="text-gray-400 text-sm">{intern.description}</p>
                 </div>
               ))}
             </div>
          </Section>
        </div>

        {/* Skills Section */}
        <Section id="skills" title="Skills" icon={Cpu}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill) => {
              const SkillIcon = IconMap[skill.icon] || Code;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-white/5 p-4 rounded hover:bg-white/10 hover:border-primary/40 transition-all flex flex-col items-center justify-center gap-3 text-center group cursor-crosshair"
                >
                  <div 
                    className="w-12 h-12 rounded flex items-center justify-center bg-dark border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
                    style={{ color: skill.color || '#fff' }}
                  >
                    <SkillIcon size={24} />
                  </div>
                  <span className="font-mono text-xs text-gray-300 uppercase tracking-tighter">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects" icon={Code}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {/* More Projects Card */}
            <motion.a
                href="https://github.com/Lokesh-Gopinath"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card rounded group border-t-2 border-transparent hover:border-primary transition-all duration-300 flex flex-col justify-center items-center p-8 text-center min-h-[300px] relative overflow-hidden"
                whileHover={{ y: -5 }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors"></div>
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, #8B5CF6 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
                
                {/* Scanner effect line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 translate-x-[-100%] group-hover:animate-[scan_1.5s_linear_infinite]"></div>

                {/* Icon */}
                <div className="relative z-10 mb-6 p-4 rounded-full border border-white/10 bg-white/5 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Github size={48} className="text-gray-300 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-white font-display uppercase tracking-wider mb-2 relative z-10">
                    More Projects
                </h3>
                <p className="text-gray-400 text-sm max-w-xs mx-auto mb-6 relative z-10 font-mono text-[11px] leading-relaxed">
                    > ACCESS_LEVEL: PUBLIC<br/>
                    > EXPLORE_REPOSITORIES...
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-primary border border-primary/50 px-6 py-2 uppercase tracking-widest bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all relative z-10">
                    View on GitHub <ArrowRight size={14} />
                </div>
            </motion.a>
          </div>
        </Section>

        {/* Achievements & Hobbies */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 mb-24">
          <div className="tech-card p-8 rounded relative overflow-hidden">
             {/* Background number */}
             <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 font-display">01</div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <Trophy className="text-yellow-500" />
              <h2 className="text-2xl font-bold font-display uppercase">Achievements</h2>
            </div>
            <ul className="space-y-4 relative z-10">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.id} className="flex items-start gap-3 text-gray-300">
                  <span className="text-primary mt-1">►</span>
                  {ach.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-card p-8 rounded relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 font-display">02</div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <Smile className="text-green-500" />
              <h2 className="text-2xl font-bold font-display uppercase">Hobbies</h2>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              {HOBBIES.map((hobby) => (
                <span key={hobby.name} className="border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:text-white hover:border-secondary transition-colors cursor-default font-mono">
                  {hobby.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/10 bg-dark py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
              style={{backgroundImage: 'radial-gradient(circle at center, #8B5CF6 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
          </div>
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8 font-display tracking-widest">TRANSMISSION END</h2>
            
            <div className="flex gap-6 mb-10">
              {SOCIALS.map((social) => {
                const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Mail;
                return (
                  <a 
                    key={social.platform}
                    href={social.url} 
                    className="p-4 bg-white/5 border border-white/10 rounded-none hover:bg-primary hover:border-primary hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label={social.platform}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            <p className="text-gray-600 text-xs font-mono uppercase">
              System Design by Lokesh Gopinath K. © 2025.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;