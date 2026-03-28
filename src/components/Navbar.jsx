import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import BrutalButton from './ui/BrutalButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Education', 'GitHub', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between border-3 border-ink brutal-shadow bg-yellow px-6 py-3 rounded-xl transition-all`}>
          <a href="#" className="text-2xl font-black tracking-tighter bg-white border-2 border-ink px-2 py-1 rotate-[-2deg] hover:rotate-0 transition-transform">
            AK
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 font-bold">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:underline decoration-2 underline-offset-4">
                {link}
              </a>
            ))}
            <BrutalButton color="bg-blue" href="/ankush-resume.pdf" download="Ankush_Resume.pdf">Resume</BrutalButton>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden border-2 border-ink p-1 bg-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 border-3 border-ink brutal-shadow bg-white p-4 rounded-xl flex flex-col space-y-4 font-bold"
          >
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:bg-yellow/20 p-2 rounded">
                {link}
              </a>
            ))}
            <BrutalButton color="bg-blue" className="w-full" href="/ankush-resume.pdf" download="Ankush_Resume.pdf">Download Resume</BrutalButton>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
