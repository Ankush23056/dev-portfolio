import { motion } from 'motion/react';

export default function BrutalCard({ children, className = '', color = 'bg-white', rotation = 0 }) {
  return (
    <motion.div
      initial={{ rotate: rotation, scale: 1 }}
      animate={{ rotate: rotation, scale: 1 }}
      whileHover={{ scale: 1.02, rotate: rotation === 0 ? 1 : rotation }}
      className={`border-3 border-ink brutal-shadow rounded-lg p-4 sm:p-6 w-[95%] mx-auto sm:w-full ${color} ${className}`}
    >
      {children}
    </motion.div>
  );
}
