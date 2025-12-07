import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Tag = "h1" }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <Tag className="relative z-10">{text}</Tag>
      <Tag className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[2px]">
        {text}
      </Tag>
      <Tag className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[-2px] animation-delay-75">
        {text}
      </Tag>
    </div>
  );
};

export default GlitchText;