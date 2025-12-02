import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Octahedron } from '@react-three/drei';
import { Project } from '../types';
import { ExternalLink, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

const MiniModel = ({ type, hovered }: { type: string, hovered: boolean }) => {
  const meshRef = useRef<any>(null!);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.8;
  });

  const color = hovered ? "#06b6d4" : "#8B5CF6";

  const props = {
    ref: meshRef,
    scale: hovered ? 2.2 : 1.8
  };

  switch (type) {
    case 'sphere':
      return <Sphere {...props} args={[0.7, 16, 16]}><meshStandardMaterial color={color} wireframe /></Sphere>;
    case 'torus':
      return <Torus {...props} args={[0.5, 0.2, 16, 32]}><meshStandardMaterial color={color} wireframe /></Torus>;
    case 'octahedron':
      return <Octahedron {...props} args={[0.8]}><meshStandardMaterial color={color} wireframe /></Octahedron>;
    default:
      return <Box {...props} args={[1.2, 1.2, 1.2]}><meshStandardMaterial color={color} wireframe /></Box>;
  }
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="tech-card rounded group border-t-2 border-transparent hover:border-primary transition-all duration-300"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        {/* Holographic Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"></div>

      <div className="h-48 bg-black/40 w-full relative z-0 border-b border-white/5">
         <div className="absolute top-2 right-2 z-10">
            <Maximize size={16} className="text-gray-500 group-hover:text-primary transition-colors" />
         </div>
         <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <MiniModel type={project.modelType} hovered={hovered} />
         </Canvas>
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-2 text-white font-display uppercase tracking-wider group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] font-mono bg-white/5 border border-white/10 text-secondary px-2 py-1 uppercase">
              {t}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          className="inline-flex items-center text-xs font-bold text-white bg-primary/20 border border-primary/50 px-4 py-2 hover:bg-primary hover:border-primary transition-all uppercase tracking-widest"
        >
          Initialize <ExternalLink size={12} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;