import { motion, useScroll } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-yellow origin-left z-[60] border-b-2 border-ink"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
