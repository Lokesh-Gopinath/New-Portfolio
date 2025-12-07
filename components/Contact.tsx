import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Footer background element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-surface/50 backdrop-blur-lg p-12 clip-shatter relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            ESTABLISH <span className="text-primary">UPLINK</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-lg mx-auto">
            Currently available for freelance projects and full-time opportunities. 
            Initiate communication sequence below.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
             <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold hover:bg-secondary hover:text-white transition-all duration-300 clip-corner">
                <Mail size={20} /> SEND EMAIL
             </a>
             <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold hover:border-white hover:bg-white/10 transition-all duration-300 clip-corner">
                <Github size={20} /> GITHUB
             </a>
          </div>

          <div className="flex justify-center gap-8 text-sm text-gray-400 font-mono border-t border-gray-800 pt-8">
             <div className="flex flex-col items-center gap-2">
               <Mail size={16} className="text-secondary" />
               {SOCIALS.email}
             </div>
             <div className="flex flex-col items-center gap-2">
               <MapPin size={16} className="text-secondary" />
               {SOCIALS.location}
             </div>
          </div>
        </motion.div>

        <footer className="mt-12 text-gray-500 font-mono text-xs">
          <p>© 2025 LOKESH GOPINATH K. SYSTEM STATUS: ONLINE</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;