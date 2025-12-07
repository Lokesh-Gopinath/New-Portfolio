import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ShatteredBackground from './components/ui/ShatteredBackground';
import ScrollProgress from './components/ui/ScrollProgress';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // Calculate random increment based on remaining progress
        const diff = 100 - prev;
        const add = Math.ceil(diff / 10);
        return Math.min(100, prev + Math.floor(Math.random() * add) + 1);
      });
    }, 150);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 800);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-[100] overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
        
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] pointer-events-none opacity-80" />

        {/* Central Loader HUD */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-8">
           {/* Outer Rotating Ring */}
           <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
           <div className="absolute inset-0 rounded-full border-t-2 border-primary/50 animate-[spin_3s_ease-in-out_infinite]" />
           
           {/* Inner Counter-Rotating Ring */}
           <div className="absolute inset-6 rounded-full border border-secondary/20 animate-[spin_5s_linear_infinite_reverse]" />
           <div className="absolute inset-6 rounded-full border-b-2 border-secondary/50 animate-[spin_2s_ease-in-out_infinite_reverse]" />
           
           {/* Glitchy Center */}
           <div className="absolute inset-0 flex items-center justify-center z-10">
               <span className="font-mono text-5xl font-bold text-white tracking-widest tabular-nums animate-pulse">
                 {progress}%
               </span>
           </div>

           {/* Decorative Bits */}
           <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-xs text-primary/60 tracking-[0.3em] whitespace-nowrap">SYSTEM_BOOT</div>
           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-secondary/60 tracking-[0.3em] whitespace-nowrap">V.2.0.25</div>
        </div>

        {/* System Log Output */}
        <div className="w-80 font-mono text-xs space-y-1 mb-8 text-left bg-black/20 p-4 border border-white/5 rounded backdrop-blur-sm min-h-[120px] flex flex-col justify-end shadow-2xl">
           {progress > 5 && <div className="text-primary/60">&gt; INITIALIZING KERNEL...</div>}
           {progress > 25 && <div className="text-primary/60">&gt; LOADING ASSETS [TEXTURES]...</div>}
           {progress > 45 && <div className="text-primary/60">&gt; VERIFYING SECURITY PROTOCOLS...</div>}
           {progress > 65 && <div className="text-primary/60">&gt; DECRYPTING USER DATA...</div>}
           {progress > 85 && <div className="text-primary/60">&gt; OPTIMIZING NEURAL INTERFACE...</div>}
           {progress === 100 && <div className="text-secondary font-bold animate-pulse">&gt; SYSTEM READY. ACCESS GRANTED.</div>}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
           <div 
             className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_#10b981] transition-all duration-200"
             style={{ width: `${progress}%` }}
           />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-white overflow-hidden">
      {/* Background Layer z-0 */}
      <ShatteredBackground />
      
      {/* Content Layer z-10 */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>

      {/* Overlay Effects Layer z-20+ */}
      <div className="bg-noise z-20" />
      <div className="scanlines z-30" />
      <ScrollProgress />
    </div>
  );
};

export default App;