import { motion } from 'motion/react';

export default function TechBadge({ tech, index }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -4 : 4 }}
      className="inline-block border-2 border-ink px-3 py-1 text-xs font-bold rounded-full bg-white shadow-[2px_2px_0px_#111111] cursor-default"
    >
      {tech}
    </motion.span>
  );
}
