import { motion } from 'motion/react';

export default function BrutalButton({ children, className = '', color = 'bg-white', onClick, href, download }) {
  const baseClasses = `border-2 border-ink brutal-shadow px-4 md:px-5 py-2 font-bold transition-colors hover:bg-opacity-90 whitespace-nowrap ${color} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={download}
        whileHover={{ y: -2, x: -2 }}
        whileTap={{ y: 0, x: 0, boxShadow: '0px 0px 0px #111111' }}
        className={`inline-block ${baseClasses}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2, x: -2 }}
      whileTap={{ y: 0, x: 0, boxShadow: '0px 0px 0px #111111' }}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
