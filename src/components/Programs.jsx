import { motion } from "motion/react";
import BrutalCard from "./ui/BrutalCard";
import SectionHeading from "./ui/SectionHeading";

export default function Programs() {
  const programs = [
    {
      title: "Front-End Software Engineering Job Simulation",
      company: "Skyscanner – Forage",
      desc: "Built a flight search page using React and the Backpack library, featuring automated testing for UI reliability.",
      certificate:
        "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_LAbW9zy88PNZDSDCi_1774783637600_completion_certificate.pdf",
    },
    {
      title: "Software Engineering Virtual Experience",
      company: "Electronic Arts – Forage",
      desc: "Proposed a new feature and optimized a bug fix in the EA Sports College Football codebase.",
      certificate:
        "https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_LAbW9zy88PNZDSDCi_1740507309062_completion_certificate.pdf",
    },
    {
      title: "Software Engineering Job Simulation",
      company: "Skyscanner – Forage",
      desc: "Built a small web application using React and implemented features for displaying flight itinerary data.",
      certificate:
        "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/p3xGFkpdot5H8NBih_skoQmxqhtgWmKv2pm_LAbW9zy88PNZDSDCi_1741016130634_completion_certificate.pdf",
    },
  ];

  return (
    <section id="programs" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[-1deg]">
        Programs & Simulations
      </SectionHeading>

      <div className="space-y-6">
        {programs.map((prog, idx) => (
          <motion.div
            key={prog.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <BrutalCard
              rotation={idx % 2 === 0 ? 1 : -1}
              className="relative overflow-hidden bg-white"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-yellow/20 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-black">{prog.title}</h3>
              <p className="text-xl font-bold text-blue mb-4">{prog.company}</p>
              <p className="text-lg font-medium max-w-3xl relative z-10">
                {prog.desc}
              </p>
              {prog.certificate && (
                <a
                  href={prog.certificate}
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
