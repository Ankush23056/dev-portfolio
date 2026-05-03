import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import BrutalBadge from './ui/BrutalBadge';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  const highlights = ['React Development', 'Frontend UI', 'Responsive Design', 'Problem Solving'];

  return (
    <section id="about" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <SectionHeading rotate="rotate-[-2deg]">About</SectionHeading>

        <BrutalCard className="max-w-4xl" rotation={1}>
          <div className="text-lg md:text-xl font-medium leading-relaxed space-y-6">
            <p>
              Web Developer focused on building responsive, performant, and user-centric web applications.
            </p>
            <p>
              Experienced with <span className="bg-blue/30 px-1 font-bold">JavaScript, React.js, and Tailwind CSS</span> to craft clean interfaces and intuitive user experiences. Continuously exploring modern web technologies and applying them to build scalable, real-world solutions.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((h, i) => (
              <BrutalBadge key={h} color={['bg-pink', 'bg-blue', 'bg-yellow', 'bg-green'][i % 4]}>
                {h}
              </BrutalBadge>
            ))}
          </div>
        </BrutalCard>
      </motion.div>
    </section>
  );
}
