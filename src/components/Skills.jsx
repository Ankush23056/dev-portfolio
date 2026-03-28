import { motion } from 'motion/react';
import StickyNote from './ui/StickyNote';
import BrutalBadge from './ui/BrutalBadge';
import { Layout, Code2, Server, Database, Wrench, Lightbulb } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'FRONTEND',
      icon: <Layout className="text-blue" />,
      color: 'bg-white',
      tapeColor: 'bg-blue/50',
      rotation: -2,
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js', 'Responsive Design']
    },
    {
      title: 'LANGUAGES',
      icon: <Code2 className="text-yellow" />,
      color: 'bg-white',
      tapeColor: 'bg-yellow/50',
      rotation: 1,
      skills: ['JavaScript', 'Python', 'Java']
    },
    {
      title: 'BACKEND',
      icon: <Server className="text-pink" />,
      color: 'bg-white',
      tapeColor: 'bg-pink/50',
      rotation: -1,
      skills: ['Node.js', 'Express.js (basic)']
    },
    {
      title: 'DATABASE',
      icon: <Database className="text-green" />,
      color: 'bg-white',
      tapeColor: 'bg-green/50',
      rotation: 2,
      skills: ['SQL']
    },
    {
      title: 'TOOLS',
      icon: <Wrench className="text-purple-400" />,
      color: 'bg-white',
      tapeColor: 'bg-purple-400/50',
      rotation: -2,
      skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Render', 'Chrome DevTools']
    },
    {
      title: 'CURRENTLY LEARNING',
      icon: <Lightbulb className="text-orange-400" />,
      color: 'bg-white',
      tapeColor: 'bg-orange-400/50',
      rotation: 1,
      skills: ['Express.js', 'System Design', 'AI Integration']
    }
  ];

  return (
    <section id="skills" className="scroll-mt-32">
      <div className="inline-block bg-yellow border-3 border-ink brutal-shadow px-6 py-2 mb-12 rotate-[1deg]">
        <h2 className="text-3xl font-black uppercase tracking-wider">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <StickyNote color={category.color} tapeColor={category.tapeColor} rotation={category.rotation} className="h-full">
              <div className="flex items-center gap-3 border-b-2 border-ink pb-3 mb-4">
                {category.icon}
                <h3 className="font-black text-xl tracking-wide">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <BrutalBadge key={skill} color="bg-paper" className="text-sm">
                    {skill}
                  </BrutalBadge>
                ))}
              </div>
            </StickyNote>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
