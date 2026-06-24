import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import TechBadge from './ui/TechBadge';
import SectionHeading from './ui/SectionHeading';
import { Shield, Lock, EyeOff, FileSpreadsheet, Play, Check } from 'lucide-react';

export default function Experience() {
  const stack = ['Next.js', 'React', 'Tailwind CSS'];
  
  // Terminal log animation state
  const [visibleLogs, setVisibleLogs] = useState([]);
  const logs = [
    { text: '$ npm run auth:verify-rbac', color: 'text-white/60' },
    { text: '[INFO] Initiating MoxCRM Guard...', color: 'text-[#4DA6FF] font-bold' },
    { text: '✓ Context-aware Layout Engine: Ready', color: 'text-[#4ade80] font-bold' },
    { text: '✓ Client Access Gates: SECURE', color: 'text-[#4ade80] font-bold' },
    { text: '✓ Permitted UI routes built: 14 loaded', color: 'text-[#4ade80] font-bold' },
    { text: '🛡️ Role Gate: SECURE & ACTIVE', color: 'text-[#111111] font-bold bg-[#4ade80] border border-[#4ade80] px-1.5 py-0.5 rounded w-fit shadow-[2px_2px_0px_#111111]' }
  ];

  useEffect(() => {
    let timer;
    if (visibleLogs.length < logs.length) {
      timer = setTimeout(() => {
        setVisibleLogs(prev => [...prev, logs[prev.length]]);
      }, 700);
    }
    return () => clearTimeout(timer);
  }, [visibleLogs]);

  // Restart logs preview on hover or click
  const restartLogs = () => {
    setVisibleLogs([]);
  };

  return (
    <section id="experience" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[-1deg]">Experience</SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <BrutalCard
          rotation={0}
          borderWidth="border-4"
          className="bg-white !shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:!shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* LEFT: Premium Visual Terminal */}
            <div 
              onClick={restartLogs}
              title="Click to rerun diagnostics log"
              className="w-full lg:w-[38%] bg-[#111111] text-[#4ade80] border-3 border-ink brutal-shadow-sm rounded-lg relative overflow-hidden shrink-0 p-4 font-mono text-xs flex flex-col justify-between min-h-[310px] cursor-pointer group"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border border-ink shadow-[1px_1px_0px_rgba(0,0,0,1)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D] border border-ink shadow-[1px_1px_0px_rgba(0,0,0,1)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] border border-ink shadow-[1px_1px_0px_rgba(0,0,0,1)]" />
                  </div>
                  <span className="text-[10px] text-white/50 tracking-wider font-bold">mox-rbac-daemon.sh</span>
                </div>

                {/* Terminal body */}
                <div className="space-y-2 leading-relaxed">
                  {visibleLogs.map((log, i) => (
                    <div key={i} className={`${log.color} break-all flex items-start gap-1.5`}>
                      {log.text.startsWith('$') ? '' : <span className="text-white/30 font-light select-none">›</span>}
                      <span>{log.text}</span>
                    </div>
                  ))}
                  {visibleLogs.length < logs.length && (
                    <div className="text-white/40 animate-pulse inline-block">█</div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="text-[9px] text-white/30 border-t border-white/10 pt-2 flex justify-between items-center mt-4">
                <span>EaseHawk Intern System</span>
                <span className="flex items-center gap-1 group-hover:text-[#4ade80] transition-colors">
                  <Play size={8} fill="currentColor" /> Rerun Diagnostics
                </span>
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="flex flex-col justify-between gap-6 flex-1">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black leading-tight text-ink">
                      Frontend Engineering Intern
                    </h3>
                    <p className="text-xl font-bold text-[#4DA6FF] mt-0.5">@ EaseHawk</p>
                  </div>

                  {/* Badges Stack */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Live System Uptime indicator */}
                    <span className="inline-flex items-center gap-2 bg-[#111111] text-[#4ade80] border-2 border-ink px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#111111]">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
                      </span>
                      May 2026 – Present
                    </span>

                    {/* Specialized highlight badge */}
                    <span className="inline-flex items-center gap-1 bg-[#4ade80] border-2 border-ink shadow-[2px_2px_0px_#111111] px-3 py-1 text-xs font-black rounded-full text-ink">
                      🛡️ Permission-Aware UI Engine
                    </span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="inline-block bg-[#FFD84D] border-2 border-ink px-3.5 py-1.5 font-bold text-base sm:text-lg leading-snug w-fit shadow-[2px_2px_0px_#111111] rotate-[-0.5deg]">
                  "Building secure, production-grade features for an enterprise CRM used by real teams."
                </p>

                {/* Engineering Bullets */}
                <div className="space-y-4 pt-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#4DA6FF] border-2 border-ink p-1.5 rounded brutal-shadow-sm shrink-0">
                      <Shield size={16} className="text-ink" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="font-sans font-black text-sm uppercase tracking-wider text-ink block">
                        Architecture & RBAC
                      </span>
                      <p className="font-medium text-ink/80 text-sm sm:text-base mt-0.5 leading-relaxed">
                        Designed the permission logic and routing architecture for MoxCRM's Role-Based Access Control system, working alongside a backend engineer who implemented the underlying database queries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#FF6B6B] border-2 border-ink p-1.5 rounded brutal-shadow-sm shrink-0">
                      <Lock size={16} className="text-ink" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="font-sans font-black text-sm uppercase tracking-wider text-ink block">
                        Security Gates
                      </span>
                      <p className="font-medium text-ink/80 text-sm sm:text-base mt-0.5 leading-relaxed">
                        Designed the access-control flow for role assignment and built secure permission gates into the multi-tenant registration UI, collaborating with the backend team on the underlying data layer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#FFD84D] border-2 border-ink p-1.5 rounded brutal-shadow-sm shrink-0">
                      <EyeOff size={16} className="text-ink" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="font-sans font-black text-sm uppercase tracking-wider text-ink block">
                        Conditional UI Router
                      </span>
                      <p className="font-medium text-ink/80 text-sm sm:text-base mt-0.5 leading-relaxed">
                        Engineered a permission-aware navigation layout in React that dynamically strips restricted administration links based on authenticated user roles — fully built end-to-end.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#4ade80] border-2 border-ink p-1.5 rounded brutal-shadow-sm shrink-0">
                      <FileSpreadsheet size={16} className="text-ink" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="font-sans font-black text-sm uppercase tracking-wider text-ink block">
                        Data Pipelines
                      </span>
                      <p className="font-medium text-ink/80 text-sm sm:text-base mt-0.5 leading-relaxed">
                        Designed the Employee Directory UI and structured how relational CSV import data renders across multi-tenant views.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="border-t-2 border-ink/10 pt-4 mt-2">
                <span className="text-xs font-black uppercase tracking-wider text-ink/50 block mb-2">
                  Internship Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech, i) => (
                    <TechBadge key={tech} tech={tech} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BrutalCard>
      </motion.div>
    </section>
  );
}
