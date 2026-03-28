import { motion } from 'motion/react';
import StickyNote from './ui/StickyNote';

export default function Education() {
  const edu = [
    {
      degree: 'B.Tech – Computer Science Engineering',
      school: 'University of Mumbai',
      date: 'Nov 2022 – July 2026',
      score: '',
      color: 'bg-blue',
      rotation: -1
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'CBSE Board',
      date: 'Apr 2021 – May 2022',
      score: 'Score: 77.76%',
      color: 'bg-yellow',
      rotation: 1
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      school: 'CBSE Board',
      date: 'Jul 2019 – Mar 2020',
      score: 'Score: 78.88%',
      color: 'bg-pink',
      rotation: -2
    }
  ];

  return (
    <section id="education" className="scroll-mt-32">
      <div className="inline-block bg-yellow border-3 border-ink brutal-shadow px-6 py-2 mb-12 rotate-[2deg]">
        <h2 className="text-3xl font-black uppercase tracking-wider">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {edu.map((item, idx) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <StickyNote color={item.color} rotation={item.rotation} tapeColor="bg-white/50" className="h-full flex flex-col">
              <h3 className="font-black text-xl mb-2">{item.degree}</h3>
              <p className="font-bold text-ink/80 mb-4">{item.school}</p>
              <div className="mt-auto pt-4">
                <span className="inline-block bg-white border-2 border-ink px-2 py-1 text-sm font-bold mb-2">
                  {item.date}
                </span>
                {item.score && (
                  <p className="font-bold">{item.score}</p>
                )}
              </div>
            </StickyNote>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
