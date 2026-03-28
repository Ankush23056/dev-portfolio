import { motion } from 'motion/react';
import BrutalButton from './ui/BrutalButton';
import { Code, Terminal, Save } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-12 pt-0 md:pt-4 pb-16">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6"
      >
        <div className="inline-block">
          <motion.span 
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block text-4xl"
          >
            👋
          </motion.span>
          <span className="text-2xl font-bold ml-2 font-handwriting text-blue">Hi there!</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          I'm <span className="relative inline-block">
            Ankush Kumar
            <svg className="absolute w-full h-4 -bottom-1 left-0 text-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
            </svg>
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-ink/80">
          Frontend Developer | React & JavaScript
        </h2>
        
        <p className="text-lg max-w-xl font-medium leading-relaxed">
          Frontend Developer focused on building fast, responsive, and user-friendly web applications using React, JavaScript, and modern frontend technologies.
        </p>
        
        <div className="flex flex-wrap gap-3 pt-4">
          <BrutalButton color="bg-yellow" href="#projects">View Projects</BrutalButton>
          <BrutalButton color="bg-blue" href="#contact">Get in Touch</BrutalButton>
          <BrutalButton color="bg-white" href="/ankush-resume.pdf" download="Ankush_Resume.pdf">Download Resume</BrutalButton>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 relative"
      >
        {/* Avatar Container */}
        <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
          {/* Tape */}
          <div className="absolute -top-3 right-12 w-24 h-8 bg-yellow/80 border border-ink/20 rotate-6 z-30" />
          
          {/* Avatar Image */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full flex items-center justify-center rounded-lg overflow-hidden border-4 border-ink brutal-shadow bg-[#E5F1FF]"
          >
            <img 
              src="/avatar.png" 
              alt="Ankush Kumar Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Floating Icons */}
          <motion.div animate={{ y: [-5, 5, -5], rotate: [-10, -5, -10] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-8 left-0 bg-blue p-3 border-3 border-ink brutal-shadow rounded-xl z-20">
            <Code size={28} strokeWidth={3} />
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5], rotate: [12, 17, 12] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-32 -right-4 bg-yellow p-3 border-3 border-ink brutal-shadow rounded-xl z-20">
            <Terminal size={28} strokeWidth={3} />
          </motion.div>
          <motion.div animate={{ y: [-8, 8, -8], rotate: [-8, -3, -8] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-16 left-0 bg-green p-3 border-3 border-ink brutal-shadow rounded-xl z-20">
            <Save size={28} strokeWidth={3} />
          </motion.div>

          {/* Badge */}
          <div className="absolute bottom-4 right-4 bg-green border-3 border-ink brutal-shadow px-4 py-2 font-black text-sm rotate-[-2deg] z-20">
            Frontend Ninja
          </div>
        </div>
      </motion.div>
    </section>
  );
}
