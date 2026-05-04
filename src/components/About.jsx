import { motion } from 'motion/react';
import BrutalBadge from './ui/BrutalBadge';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  const highlights = ['React Development', 'Frontend UI', 'Responsive Design', 'Problem Solving'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <SectionHeading rotate="rotate-[-2deg]">About</SectionHeading>

        {/* Tactical System Window */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden rotate-[1deg] mt-8">
          
          {/* Window Header */}
          <div className="flex items-center border-b-2 border-ink bg-gray-100 px-4 py-3">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-ink shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-ink shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-ink shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
            </div>
            <div className="mx-auto text-xs font-bold text-ink/80 uppercase tracking-widest mr-12">
              Tactical_System_Overview.exe
            </div>
          </div>

          {/* Window Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 md:p-8 text-lg md:text-xl font-medium leading-relaxed space-y-6"
          >
            <motion.p variants={itemVariants}>
              I’m a developer who enjoys building products that <mark className="bg-yellow text-ink font-bold px-1 py-0.5">solve real problems</mark>, not just showcase features. I’m drawn to ideas that involve decision-making, real-time interaction, or improving everyday experiences through thoughtful design.
            </motion.p>
            <motion.p variants={itemVariants}>
              I like turning complex problems into simple, usable solutions, whether it’s optimizing how things work behind the scenes or making interfaces feel intuitive. Lately, I’ve been exploring ways to build systems that are not only functional, but <mark className="bg-yellow text-ink font-bold px-1 py-0.5">genuinely helpful</mark> in people’s daily lives.
            </motion.p>
            <motion.p variants={itemVariants}>
              I’m always learning, building, and refining — with a focus on creating things that actually matter.
            </motion.p>
          </motion.div>

          {/* Status Bar / Footer */}
          <div className="border-t-2 border-ink bg-gray-50 px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="text-sm font-bold uppercase tracking-widest text-ink/70">System Status: Active</span>
            <div className="flex flex-wrap gap-3 md:ml-auto">
              {highlights.map((h, i) => (
                <BrutalBadge key={h} color={['bg-pink', 'bg-blue', 'bg-yellow', 'bg-green'][i % 4]}>
                  {h}
                </BrutalBadge>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
