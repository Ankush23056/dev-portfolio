import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import BrutalButton from './ui/BrutalButton';
import { Github, GitCommit, Star, GitPullRequest } from 'lucide-react';

export default function GithubSection() {
  return (
    <section id="github" className="scroll-mt-32">
      <div className="inline-block bg-yellow border-3 border-ink brutal-shadow px-6 py-2 mb-12 rotate-[1deg]">
        <h2 className="text-3xl font-black uppercase tracking-wider">GitHub</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <BrutalCard rotation={0} className="bg-white">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-ink text-white rounded-full flex items-center justify-center border-2 border-ink brutal-shadow-sm">
                <Github size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black">@Ankush23056</h3>
                <p className="font-bold text-ink/70">Frontend Developer</p>
              </div>
            </div>
            <BrutalButton color="bg-yellow" href="https://github.com/Ankush23056">
              View GitHub Profile
            </BrutalButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-ink p-4 rounded-lg bg-blue/10 flex items-center gap-4">
              <GitCommit className="text-blue" />
              <div>
                <p className="font-black text-2xl">150+</p>
                <p className="font-bold text-sm">Contributions</p>
              </div>
            </div>
            <div className="border-2 border-ink p-4 rounded-lg bg-pink/10 flex items-center gap-4">
              <Star className="text-pink" />
              <div>
                <p className="font-black text-2xl">19</p>
                <p className="font-bold text-sm">Repositories</p>
              </div>
            </div>
            <div className="border-2 border-ink p-4 rounded-lg bg-green/10 flex items-center gap-4">
              <GitPullRequest className="text-green" />
              <div>
                <p className="font-black text-2xl">JavaScript</p>
                <p className="font-bold text-sm">Top Language</p>
              </div>
            </div>
          </div>

          {/* Live Contribution Graph */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-2 border-ink p-4 rounded-lg bg-paper overflow-x-auto"
          >
            <p className="font-bold mb-4">Contribution Graph</p>
            <div className="min-w-max">
              <img 
                src="https://ghchart.rshah.org/Ankush23056" 
                alt="Ankush23056's Github Contribution Graph" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </BrutalCard>
      </motion.div>
    </section>
  );
}
