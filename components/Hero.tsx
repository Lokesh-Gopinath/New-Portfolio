
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const fonts = [
  'font-mono', 'font-sans', 'font-display', 'font-serif'
];

const Hero: React.FC = () => {
  const name = "Lokesh Gopinath K";
  const fullText = "Electronics & Communication Engineer";
  const [displayText, setDisplayText] = useState('');
  
  // Array to hold the font index for each letter of the name
  const [letterFonts, setLetterFonts] = useState<number[]>(new Array(name.length).fill(0));

  // Randomize fonts for each letter independently
  useEffect(() => {
    const interval = setInterval(() => {
      setLetterFonts(prev => prev.map(() => Math.floor(Math.random() * fonts.length)));
    }, 800); // Slower animation (800ms)
    return () => clearInterval(interval);
  }, []);

  // Robust Typewriter effect using slice to prevent dropped/duplicated chars
  useEffect(() => {
    let i = 1;
    setDisplayText(fullText.slice(0, 1)); // Start with first char
    
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50); // Slightly adjusted speed for smoothness
    
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 relative pt-20 overflow-hidden">
      
      {/* HUD Background Elements */}
      <div className="absolute top-20 right-10 text-xs font-mono text-secondary/40 hidden md:block select-none">
        <div className="flex flex-col items-end gap-1">
          <span>SYS.STATUS: ONLINE</span>
          <span>LOC: TAMIL NADU, IN</span>
          <span>LATENCY: 12ms</span>
          <span>SECURE_CONN: TRUE</span>
        </div>
      </div>
      <div className="absolute bottom-20 left-10 text-xs font-mono text-primary/40 hidden md:block border-l border-primary/30 pl-2 select-none">
        <div>&gt; INITIALIZING PORTFOLIO PROTOCOL</div>
        <div>&gt; RENDER_ENGINE: THREE.JS</div>
        <div>&gt; TARGET: INTERACTIVE_EXPERIENCE</div>
      </div>

      <div className="max-w-5xl z-10 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-secondary font-mono mb-6 text-sm md:text-base tracking-widest uppercase"
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          <span>System Identification</span>
        </motion.div>
        
        {/* Name with independent letter font animation */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight relative whitespace-nowrap overflow-visible">
          {name.split('').map((char, index) => (
            <span key={index} className={`${fonts[letterFonts[index]]} transition-all duration-500 inline-block hover:text-primary cursor-default`}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        {/* Tagline Container */}
        <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-20 blur"></div>
            <h2 className="relative text-lg sm:text-xl md:text-3xl text-gray-300 font-mono border-l-4 border-primary pl-4 py-1">
            {displayText}<span className="animate-blink">|</span>
            </h2>
        </div>
        
        <p className="text-gray-400 max-w-xl mb-10 text-base md:text-lg leading-relaxed border-t border-white/10 pt-6">
          <span className="text-secondary font-mono text-xs block mb-2">// BIOS</span>
          ECE graduate with hands-on experience in IoT, embedded systems, and automation. 
          Expert in bridging hardware with efficient software solutions using Node-RED and Cloud platforms.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a 
            href="/assets/resume.pdf" 
            className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-none border border-primary text-white font-mono uppercase text-sm tracking-wider hover:bg-primary/10 transition-all"
          >
            <span className="absolute inset-0 w-0 bg-primary/20 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            <div className="relative flex items-center gap-2">
                <Download size={18} /> 
                <span>Access Resume</span>
            </div>
            {/* Tech Corners */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></span>
          </a>

          <a 
             href="#contact"
             className="px-8 py-3 bg-white/5 border border-white/10 text-gray-300 font-mono uppercase text-sm tracking-wider hover:text-white hover:border-white/30 transition-all"
          >
            Initiate Contact
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-secondary/50">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
