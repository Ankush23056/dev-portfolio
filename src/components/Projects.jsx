import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import BrutalButton from './ui/BrutalButton';
import { ExternalLink, Github, Zap } from 'lucide-react';

/* ─── Project Data ──────────────────────────────────────────────────── */
const projects = [
  {
    title: 'OfferVerify',
    type: 'PERSONAL PROJECT',
    oneLiner: 'AI-Powered Protection Against Fake Job Offers.',
    origin: 'Built after I got scammed. No free tool existed.',
    techCallout: 'Dual AI Pipeline',
    description:
      'Scans job postings using two AI models in sequence to detect red flags, fake recruiter patterns, and fraudulent offers before you apply.',
    stack: ['React', 'Node.js', 'Exa AI', 'Groq'],
    live: 'https://offer-verify.vercel.app/',
    github: 'https://github.com/Ankush23056/OfferVerify.git',
    thumbColor: 'bg-pink',
    rotation: -1,
  },
  {
    title: 'Architex',
    type: 'REAL-TIME / COLLABORATIVE',
    oneLiner: 'Real-Time Collaborative Diagramming for Engineering Teams.',
    origin: 'What if Figma met system design, in real-time?',
    techCallout: 'WebSocket + Redis',
    description:
      'A shared infinite canvas where engineering teams can sketch system diagrams, drop components, and collaborate live — with zero lag.',
    stack: ['React', 'Node.js', 'Socket.io', 'Redis', 'Canvas API'],
    live: 'https://architex-whiteboard.vercel.app/',
    github: 'https://github.com/Ankush23056/Architex.git',
    thumbColor: 'bg-yellow',
    rotation: 1,
  },
  {
    title: 'FairShare',
    type: 'FULL-STACK',
    oneLiner: 'Smart Expense Sharing with Optimized Settlements.',
    origin: 'Splitting bills fairly is a math problem. I solved it properly.',
    techCallout: 'Greedy Debt Settlement Algorithm',
    description:
      'Group expense tracker that minimises the number of transactions needed to settle debts — no more "who owes who" confusion.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    live: 'https://fairsharre.netlify.app/',
    github: 'https://github.com/Ankush23056/FairShare_Smart-split.git',
    thumbColor: 'bg-blue',
    rotation: -1,
  },
  {
    title: 'Crisis-AI',
    type: 'MAJOR COLLEGE PROJECT',
    oneLiner: 'Predictive Emergency Intelligence for Real-Time Disaster Response.',
    origin: 'Emergency systems react. This one predicts.',
    techCallout: 'Predictive ML + Live Feed Parsing',
    description:
      'Ingests real-time disaster feeds and runs predictive models to surface actionable insights for emergency responders before situations escalate.',
    stack: ['React', 'Python', 'FastAPI', 'TensorFlow', 'Tailwind CSS'],
    live: 'https://crisis-ai.netlify.app/',
    github: 'https://github.com/Ankush23056/Crisis_Ai.git',
    thumbColor: 'bg-pink',
    rotation: 1,
  },
  {
    title: 'BasePoint',
    type: 'PERSONAL PROJECT',
    oneLiner: 'Personal Finance Coach That Guards Against Overspending.',
    origin: 'Built it because I needed it. 5 others did too.',
    techCallout: 'PWA — Works Offline',
    description:
      'Budget tracker with category-level spend limits, trend charts, and offline support — so your finances are visible even without a connection.',
    stack: ['React', 'Zustand', 'IndexedDB', 'Recharts', 'PWA'],
    live: 'https://basepoiint.netlify.app/',
    github: 'https://github.com/Ankush23056/BasePoint.git',
    thumbColor: 'bg-yellow',
    rotation: -1,
  },
  {
    title: 'TaskWarrior',
    type: 'PERSONAL PROJECT',
    oneLiner: 'Gamified Task Manager That Makes Productivity Addictive.',
    origin: 'To-do lists are boring. XP and streaks are not.',
    techCallout: 'XP & Streak Engine',
    description:
      'Earn XP, build streaks, and unlock levels by completing tasks. Deadline tracking and persistent local storage keep you accountable.',
    stack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'LocalStorage'],
    live: 'https://taskwarrior.netlify.app/',
    github: 'https://github.com/Ankush23056/taskwarrior.git',
    thumbColor: 'bg-blue',
    rotation: 1,
  },
  /* PillPal — hidden until ready
  {
    title: 'PillPal',
    type: 'FULL-STACK',
    oneLiner: 'Medication Management That Keeps Families Safe.',
    origin: 'Family members were missing medications. I couldn\'t always be there.',
    techCallout: 'FDA Drug Interaction API',
    description: '...',
    stack: [],
    live: '',
    github: '',
    thumbColor: 'bg-green',
    rotation: -1,
  },
  */
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      {/* Section heading */}
      <div className="inline-block bg-yellow border-3 border-ink brutal-shadow px-6 py-2 mb-12 rotate-[-1deg]">
        <h2 className="text-3xl font-black uppercase tracking-wider">Projects</h2>
      </div>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: idx * 0.06, ease: 'easeOut' }}
          >
            <BrutalCard rotation={project.rotation} className="bg-white">
              {/* Two-column grid */}
              <div className="flex flex-col md:flex-row gap-8 items-stretch">

                {/* ── LEFT: Thumbnail placeholder ── */}
                <div
                  className={`
                    w-full md:w-[38%] min-h-[220px] aspect-video
                    ${project.thumbColor}
                    border-3 border-ink brutal-shadow-sm rounded-lg
                    flex items-center justify-center
                    relative overflow-hidden shrink-0
                  `}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ink to-transparent" />
                  <span className="font-black text-3xl text-ink/40 rotate-[-6deg] select-none px-4 text-center">
                    {project.title}
                  </span>
                  {/* Tape corners */}
                  <div className="absolute -top-2 left-6 w-10 h-5 bg-white/60 border border-ink/20 rotate-[-3deg]" />
                  <div className="absolute -bottom-2 right-6 w-10 h-5 bg-white/60 border border-ink/20 rotate-[-3deg]" />
                </div>

                {/* ── RIGHT: Content ── */}
                <div className="flex flex-col justify-between gap-4 flex-1">

                  {/* 1. Title */}
                  <h3 className="text-3xl font-black leading-tight">{project.title}</h3>

                  {/* 2. One-liner — yellow highlight */}
                  <p className="inline-block bg-yellow border-2 border-ink px-3 py-1 font-bold text-base leading-snug w-fit">
                    {project.oneLiner}
                  </p>

                  {/* 3. Origin Story — blockquote */}
                  <blockquote className="border-l-4 border-ink pl-4 text-base italic font-semibold text-ink/75">
                    "{project.origin}"
                  </blockquote>

                  {/* 4. Project Type — uppercase grey label */}
                  <p className="text-xs font-black uppercase tracking-widest text-ink/50">
                    {project.type}
                  </p>

                  {/* 5. Technical Callout — green pill */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-green border-2 border-ink brutal-shadow-sm px-3 py-1 text-sm font-black rounded-full text-ink">
                      <Zap size={13} strokeWidth={3} />
                      {project.techCallout}
                    </span>
                  </div>

                  {/* 6. Tech Stack pills — outline style */}
                  <div className="flex flex-wrap gap-2 pt-2 pb-1">
                    {project.stack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -4 : 4 }}
                        className="inline-block border-2 border-ink px-3 py-1 text-xs font-bold rounded-full bg-white shadow-[2px_2px_0px_#111111] cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* 7. Buttons */}
                  <div className="flex flex-wrap gap-3 pt-1">
                    <BrutalButton color="bg-ink" shadow="shadow-[4px_4px_0px_#6b7280]" className="text-white" href={project.live}>
                      <span className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </span>
                    </BrutalButton>
                    {project.github && project.github !== '#' && (
                      <BrutalButton color="bg-white" shadow="shadow-[4px_4px_0px_#111111]" href={project.github}>
                        <span className="flex items-center gap-2">
                          <Github size={16} />
                          Code
                        </span>
                      </BrutalButton>
                    )}
                  </div>
                </div>
                {/* ── END RIGHT ── */}
              </div>
            </BrutalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
