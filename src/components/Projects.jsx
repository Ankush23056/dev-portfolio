import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import BrutalBadge from './ui/BrutalBadge';
import BrutalButton from './ui/BrutalButton';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'FairShare',
      subtitle: 'Smart Expense Sharing with Optimized Settlements',
      description: 'A full-stack expense sharing platform that helps groups track expenses and minimize settlement transactions using a Greedy Debt Settlement Algorithm.',
      stack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      live: 'https://fairsharre.netlify.app/',
      github: 'https://github.com/Ankush23056/FairShare_Smart-split.git',
      color: 'bg-blue',
      rotation: -1
    },
    {
      title: 'TaskWarrior',
      subtitle: 'Productivity App with XP & Streaks',
      description: 'Gamified task manager that rewards users with XP and streaks for completing tasks. Includes deadline tracking and persistent data storage.',
      stack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'LocalStorage'],
      live: 'https://taskwarrior.netlify.app/',
      github: 'https://github.com/Ankush23056/taskwarrior.git',
      color: 'bg-yellow',
      rotation: 1
    },
    {
      title: 'WeatherCheck',
      subtitle: 'Real-time Weather Dashboard',
      description: 'Weather application that displays real-time temperature, humidity, and weather conditions using API data.',
      stack: ['HTML5', 'CSS3', 'JavaScript (Vanilla)', 'OpenWeather API'],
      live: 'https://weathechec.netlify.app/',
      github: '#',
      color: 'bg-pink',
      rotation: -1
    }
  ];

  return (
    <section id="projects" className="scroll-mt-32">
      <div className="inline-block bg-yellow border-3 border-ink brutal-shadow px-6 py-2 mb-12 rotate-[-1deg]">
        <h2 className="text-3xl font-black uppercase tracking-wider">Projects</h2>
      </div>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <BrutalCard rotation={project.rotation} className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image Placeholder */}
              <div className={`w-full md:w-2/5 aspect-video ${project.color} border-3 border-ink brutal-shadow-sm rounded-lg flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ink to-transparent" />
                <span className="font-black text-2xl text-ink/50 rotate-[-5deg] text-center px-4">{project.title}</span>
                {/* Decorative tape */}
                <div className="absolute -top-2 -left-2 w-12 h-6 bg-white/50 border border-ink/20 rotate-[-45deg]" />
                <div className="absolute -bottom-2 -right-2 w-12 h-6 bg-white/50 border border-ink/20 rotate-[-45deg]" />
              </div>

              {/* Content */}
              <div className="w-full md:w-3/5 space-y-4">
                <div>
                  <h3 className="text-3xl font-black">{project.title}</h3>
                  <p className="text-lg font-bold text-ink/70">{project.subtitle}</p>
                </div>
                
                <p className="text-lg font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map(tech => (
                    <BrutalBadge key={tech} color="bg-paper">{tech}</BrutalBadge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <BrutalButton color="bg-white" href={project.live}>
                    <span className="flex items-center gap-2">
                      <ExternalLink size={18} /> Live Demo
                    </span>
                  </BrutalButton>
                  {project.github !== '#' && (
                    <BrutalButton color="bg-white" href={project.github}>
                      <span className="flex items-center gap-2">
                        <Github size={18} /> Code
                      </span>
                    </BrutalButton>
                  )}
                </div>
              </div>
            </BrutalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
