import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const tickets = [
  { id: 'KAN-8', title: 'UGSC registration closure', final: 2 },
  { id: 'KAN-7', title: 'LESG registration closure', final: 2 },
  { id: 'KAN-11', title: 'SEO Manager', final: 2 },
  { id: 'SPG', title: 'Sports Promotion site', final: 2 },
  { id: 'TMS', title: 'Tournament UI redesign', final: 1 },
];

const columns = [
  { name: 'TO DO', color: 'text-white/60' },
  { name: 'IN PROGRESS', color: 'text-[#FFD84D]' },
  { name: 'DONE', color: 'text-[#4ade80]' },
];

const ticketStyle = [
  'bg-white/10 border border-white/20 text-white',
  'bg-[#FFD84D] border-2 border-[#111111] text-[#111111] shadow-[2px_2px_0px_#000]',
  'bg-[#4ade80] border-2 border-[#111111] text-[#111111] shadow-[2px_2px_0px_#000]',
];

export default function SprintBoard() {
  const [stages, setStages] = useState(tickets.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const boardRef = useRef(null);

  // Start animation only when ≥50% of the panel is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // fire once; click-to-replay handles reruns
        }
      },
      { threshold: 0.5 }
    );
    if (boardRef.current) observer.observe(boardRef.current);
    return () => observer.disconnect();
  }, []);

  // Ticket animation — only ticks when visible
  useEffect(() => {
    if (!isVisible) return;
    const next = tickets.findIndex((t, i) => stages[i] < t.final);
    if (next === -1) return;
    const timer = setTimeout(() => {
      setStages(prev => prev.map((s, i) => (i === next ? s + 1 : s)));
    }, 650);
    return () => clearTimeout(timer);
  }, [stages, isVisible]);

  const finished = tickets.every((t, i) => stages[i] === t.final);

  return (
    <div
      ref={boardRef}
      onClick={() => setStages(tickets.map(() => 0))}
      title="Click to rerun the sprint"
      className="w-full lg:w-[38%] bg-[#111111] text-white border-3 border-ink brutal-shadow-sm rounded-lg relative overflow-hidden shrink-0 p-4 font-mono text-xs flex flex-col justify-between min-h-[310px] cursor-pointer group"
    >
      <div>
        <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border border-ink" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D] border border-ink" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] border border-ink" />
          </div>
          <span className="text-[10px] text-white/50 tracking-wider font-bold">sportsnext-sprint-board</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {columns.map((col, c) => (
            <div key={col.name} className="min-h-[190px]">
              <div className={`${col.color} text-[9px] font-black tracking-wider border-b border-white/20 pb-1 mb-2`}>
                {col.name}
              </div>
              <div className="space-y-2">
                {tickets.map((t, i) =>
                  stages[i] === c ? (
                    <motion.div
                      layout
                      layoutId={t.id}
                      key={t.id}
                      transition={{ duration: 0.4 }}
                      className={`${ticketStyle[c]} rounded p-1.5`}
                    >
                      <div className="text-[9px] font-bold opacity-70">{t.id}</div>
                      <div className="text-[10px] leading-tight font-bold">{t.title}</div>
                    </motion.div>
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>

        {finished && (
          <div className="mt-3 text-[#111111] font-bold bg-[#4ade80] border border-[#4ade80] px-1.5 py-0.5 rounded w-fit shadow-[2px_2px_0px_#111111]">
            ✓ Sprint synced: 4 shipped · 1 in progress
          </div>
        )}
      </div>

      <div className="text-[9px] text-white/30 border-t border-white/10 pt-2 flex justify-between items-center mt-4">
        <span>60+ tickets · 8+ sprints · team of 4</span>
        <span className="flex items-center gap-1 group-hover:text-[#4ade80] transition-colors">
          <Play size={8} fill="currentColor" /> Rerun Sprint
        </span>
      </div>
    </div>
  );
}
