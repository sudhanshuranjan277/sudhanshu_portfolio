import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Award, Trophy } from "lucide-react";

const ITEMS = [
  { type: "Certification", title: "Python for Data Science", issuer: "Coursera / IBM", year: "2025" },
  { type: "Certification", title: "Machine Learning Specialization", issuer: "Coursera / DeepLearning.AI", year: "2025" },
  { type: "Certification", title: "MERN Full Stack Development", issuer: "Online programme", year: "2024" },
  { type: "Achievement", title: "Hackathon Finalist", issuer: "College tech-fest", year: "2024" },
  { type: "Achievement", title: "Top Performer — Coding Club", issuer: "Internal cohort", year: "2024" },
  { type: "Certification", title: "Deep Learning Fundamentals", issuer: "Self-paced + projects", year: "2025" },
];

const ICON = { Certification: BadgeCheck, Achievement: Trophy };

export default function Certifications() {
  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="relative px-5 py-16 sm:px-8 sm:py-28 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            // 08 — credentials
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Certifications & <span className="text-gradient-cyan">achievements</span>.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => {
            const Icon = ICON[it.type] || Award;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`cert-card-${i}`}
                className="group rounded-2xl border border-white/5 bg-[#0A0A0F] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    {it.year}
                  </span>
                </div>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                  {it.type}
                </p>
                <h3 className="mt-1 font-heading text-base font-semibold leading-snug text-white">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{it.issuer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
