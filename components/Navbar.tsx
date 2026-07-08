import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f8f9fa]/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-sans font-bold text-xl tracking-tight text-[#2d3436] hover:text-[#74b9ff] transition-colors"
        >
          LGK<span className="text-[#636e72] font-light">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 font-sans text-sm font-medium text-[#636e72] hover:text-[#2d3436] rounded-[12px] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#2d3436] p-2 rounded-[12px] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f9fa]/95 backdrop-blur-xl border-t border-[#e9ecef]">
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 font-sans text-[#2d3436] hover:text-[#74b9ff] rounded-[12px] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;