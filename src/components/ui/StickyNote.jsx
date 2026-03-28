import { motion } from 'motion/react';

export default function StickyNote({ 
  children, 
  className = '', 
  color = 'bg-yellow', 
  rotation = -2,
  tapeColor = 'bg-yellow/50'
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      className={`relative border-2 border-ink brutal-shadow-sm p-4 sm:p-5 w-[95%] mx-auto sm:w-full ${color} ${className}`}
      style={{ rotate: `${rotation}deg` }}
    >
      {/* Tape */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 ${tapeColor} border border-ink/20 opacity-80 rotate-2`} />
      {children}
    </motion.div>
  );
}
