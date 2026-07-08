import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const diff = 100 - prev;
        const add = Math.ceil(diff / 10);
        return Math.min(100, prev + Math.floor(Math.random() * add) + 1);
      });
    }, 120);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 600);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#f8f9fa] flex flex-col items-center justify-center z-[100]">
        <div className="relative w-24 h-24 flex items-center justify-center mb-6">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#e0e0e0]" />
          <div className="absolute inset-0 rounded-full border-t-2 border-[#74b9ff] animate-spin" />
          {/* Inner Ring */}
          <div className="absolute inset-2 rounded-full border-2 border-[#e0e0e0]" />
          <div className="absolute inset-2 rounded-full border-b-2 border-[#a29bfe]" style={{ animation: 'spin 1s linear infinite reverse' }} />
        </div>

        <div className="w-48 font-sans text-center mb-4">
          <p className="text-[#636e72] text-sm font-medium">Loading</p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-2 bg-[#e0e0e0] rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#74b9ff] to-[#a29bfe] rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-[#b2bec3] text-xs font-mono">{progress}%</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#74b9ff] selection:text-white">
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
  );
};

export default App;