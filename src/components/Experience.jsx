import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Job Simulation',
      company: 'Skyscanner – Forage',
      desc: 'Built a small web application using React and implemented features for displaying flight itinerary data.',
      certificate: 'https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/p3xGFkpdot5H8NBih_skoQmxqhtgWmKv2pm_LAbW9zy88PNZDSDCi_1741016130634_completion_certificate.pdf'
    },
    {
      title: 'Software Engineering Virtual Experience',
      company: 'Electronic Arts – Forage',
      desc: 'Proposed a new feature and optimized a bug fix in the EA Sports College Football codebase.',
      certificate: 'https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_LAbW9zy88PNZDSDCi_1740507309062_completion_certificate.pdf'
    }
  ];

  return (
    <section id="experience" className="scroll-mt-32">
      <div className="inline-block bg-yellow border-3 border-ink brutal-shadow px-6 py-2 mb-12 rotate-[-1deg]">
        <h2 className="text-3xl font-black uppercase tracking-wider">Experience & Programs</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <BrutalCard rotation={idx % 2 === 0 ? 1 : -1} className="relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-yellow/20 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-black">{exp.title}</h3>
              <p className="text-xl font-bold text-blue mb-4">{exp.company}</p>
              <p className="text-lg font-medium max-w-3xl relative z-10">{exp.desc}</p>
              {exp.certificate && (
                <a 
                  href={exp.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold underline text-ink hover:text-blue transition-colors relative z-10 inline-block mt-4"
                >
                  View Certificate ↗
                </a>
              )}
            </BrutalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
