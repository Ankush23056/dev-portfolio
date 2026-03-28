import { motion } from 'motion/react';

export default function BrutalBadge({ children, className = '', color = 'bg-white' }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
      className={`inline-block border-2 border-ink brutal-shadow-sm px-3 py-1 text-sm font-bold rounded-full ${color} ${className}`}
    >
      {children}
    </motion.span>
  );
}
