import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="inline-block bg-yellow border-3 border-ink brutal-shadow px-6 py-2 mb-12 rotate-[-2deg]">
        <h2 className="text-3xl font-black uppercase tracking-wider">Contact</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Let's build something <span className="text-blue underline decoration-wavy decoration-4">amazing</span> together!
          </h3>
          <p className="text-xl font-medium mb-12 text-ink/80">
            I'm always open to opportunities, collaborations, or tech conversations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <a href="mailto:ankush5810kumar@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 border-3 border-ink brutal-shadow bg-yellow hover:bg-white hover:-translate-y-1 transition-all rounded-xl font-bold text-lg group">
              <Mail className="group-hover:scale-110 transition-transform" size={32} />
              <div className="flex flex-col">
                <span className="text-sm text-ink/70 font-black uppercase">Send an Email</span>
                <span className="text-xl">ankush5810kumar@gmail.com</span>
              </div>
            </a>
            <a href="tel:8327235810" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 border-3 border-ink brutal-shadow bg-pink hover:bg-white hover:-translate-y-1 transition-all rounded-xl font-bold text-lg group">
              <Phone className="group-hover:scale-110 transition-transform" size={32} />
              <div className="flex flex-col">
                <span className="text-sm text-ink/70 font-black uppercase">Call Me</span>
                <span className="text-xl">+91 8327235810</span>
              </div>
            </a>
            <a href="http://www.linkedin.com/in/ankush-kumar-9a388a272" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 border-3 border-ink brutal-shadow bg-blue hover:bg-white hover:-translate-y-1 transition-all rounded-xl font-bold text-lg group">
              <Linkedin className="group-hover:scale-110 transition-transform" size={32} />
              <div className="flex flex-col">
                <span className="text-sm text-ink/70 font-black uppercase">Connect on</span>
                <span className="text-xl">LinkedIn</span>
              </div>
            </a>
            <a href="https://github.com/Ankush23056" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 border-3 border-ink brutal-shadow bg-green hover:bg-white hover:-translate-y-1 transition-all rounded-xl font-bold text-lg group">
              <Github className="group-hover:scale-110 transition-transform" size={32} />
              <div className="flex flex-col">
                <span className="text-sm text-ink/70 font-black uppercase">Follow on</span>
                <span className="text-xl">GitHub</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
