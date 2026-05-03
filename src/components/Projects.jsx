import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import BrutalButton from './ui/BrutalButton';
import TechBadge from './ui/TechBadge';
import FeaturedBadge from './ui/FeaturedBadge';
import SectionHeading from './ui/SectionHeading';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { projects } from '../data/projects';

/* ─── Sub-Component: ProjectCard ────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
    >
      <BrutalCard 
        rotation={project.rotation} 
        className="bg-white" 
        borderWidth={project.featured ? 'border-[5px]' : 'border-3'}
      >
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* LEFT: Screenshot thumbnail */}
          <div
            className="w-full md:w-[38%] min-h-[220px] aspect-video border-3 border-ink brutal-shadow-sm rounded-lg relative overflow-hidden shrink-0 p-4"
            style={{ backgroundColor: project.bgColor }}
          >
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
            {project.featured && <FeaturedBadge />}
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col justify-between gap-4 flex-1">
            <h3 className="text-3xl font-black leading-tight">{project.title}</h3>
            
            <p className="inline-block bg-yellow border-2 border-ink px-3 py-1 font-bold text-base leading-snug w-fit">
              {project.oneLiner}
            </p>

            <blockquote className="border-l-4 border-ink pl-4 text-base italic font-semibold text-ink/75">
              "{project.origin}"
            </blockquote>

            <p className="text-xs font-black uppercase tracking-widest text-ink/50">
              {project.type}
            </p>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-green border-2 border-ink brutal-shadow-sm px-3 py-1 text-sm font-black rounded-full text-ink">
                <Zap size={13} strokeWidth={3} />
                {project.techCallout}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 pb-1">
              {project.stack.map((tech, i) => (
                <TechBadge key={tech} tech={tech} index={i} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <BrutalButton 
                color="bg-ink" 
                shadow="shadow-[4px_4px_0px_#6b7280]" 
                className="text-white" 
                href={project.live}
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  Live Demo
                </span>
              </BrutalButton>
              {project.github && project.github !== '#' && (
                <BrutalButton 
                  color="bg-white" 
                  shadow="shadow-[4px_4px_0px_#111111]" 
                  href={project.github}
                >
                  <span className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </span>
                </BrutalButton>
              )}
            </div>
          </div>
        </div>
      </BrutalCard>
    </motion.div>
  );
};

/* ─── Main Component ────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <SectionHeading>Projects</SectionHeading>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
