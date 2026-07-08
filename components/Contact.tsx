import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#74b9ff]/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#f0f0f3] rounded-[16px] p-12 shadow-[12px_12px_24px_#d1d1d1,-12px_-12px_24px_#ffffff] relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#74b9ff] to-[#a29bfe] rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-6">
            Get In Touch
          </h2>
          <p className="text-[#636e72] text-lg mb-10 max-w-lg mx-auto">
            Currently available for freelance projects and full-time opportunities.
            Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0f0f3] rounded-[50px] text-[#2d3436] font-medium shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:scale-[0.98] active:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] transition-all duration-200"
            >
              <Mail size={20} /> Send Email
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0f0f3] rounded-[50px] text-[#2d3436] font-medium shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:scale-[0.98] active:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] transition-all duration-200"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0f0f3] rounded-[50px] text-[#2d3436] font-medium shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:scale-[0.98] active:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] transition-all duration-200"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-8 text-sm text-[#b2bec3] border-t border-[#e9ecef] pt-8">
            <div className="flex flex-col items-center gap-2">
              <Mail size={16} className="text-[#74b9ff]" />
              {SOCIALS.email}
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin size={16} className="text-[#74b9ff]" />
              {SOCIALS.location}
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 text-[#b2bec3] text-xs">
          <p>&copy; 2025 Lokesh Gopinath K. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;