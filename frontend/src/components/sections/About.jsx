import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, Server } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Server, label: "Backend Engineering", desc: "Designing REST APIs, auth flows and scalable services with Node + MongoDB." },
  { icon: Brain, label: "AI / ML", desc: "Building ML pipelines, training models and deploying inference endpoints." },
  { icon: Code2, label: "MERN Stack", desc: "Full-stack delivery with React, Node, Express and MongoDB." },
  { icon: GraduationCap, label: "DSA Mindset", desc: "Disciplined problem-solver — algorithms, data structures, system design." },
];

const TIMELINE = [
  {
    year: "2026",
    title: "AI/ML & Backend Focus",
    desc: "Deep work on scalable backend systems, ML pipelines and shipping production-grade apps.",
  },
  {
    year: "2025",
    title: "Full Stack + MERN",
    desc: "Built role-based dashboards, monitoring tools and subscription management platforms.",
  },
  {
    year: "2024",
    title: "Frontend Foundations",
    desc: "Mastered React + Tailwind and component-driven UI; explored TypeScript and Next.js.",
  },
  {
    year: "2023",
    title: "B.Tech CSE — AI/ML Specialization",
    desc: "Started B.Tech in Computer Science with specialization in Artificial Intelligence & Machine Learning.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative px-5 py-16 sm:px-8 sm:py-28 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            // 01 — about
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineer at the <span className="text-gradient">intersection</span> of code & intelligence.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            I love turning hard problems into elegant systems. My work spans backend services,
            scalable architectures, MERN-stack apps, and ML-powered features that move beyond the
            demo and into production.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* highlights */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  data-testid={`about-highlight-${i}`}
                  className="group rounded-xl border border-white/5 bg-[#0A0A0F] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                >
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                    <h.icon size={18} />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">{h.label}</h3>
                  <p className="mt-2 text-sm text-gray-400">{h.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-purple-400" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-purple-300">
                  Education
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl font-semibold text-white">
                B.Tech, Computer Science & Engineering
              </h3>
              <p className="text-sm text-gray-400">Specialization: Artificial Intelligence & Machine Learning</p>
            </div>
          </div>

          {/* timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-testid={`timeline-item-${i}`}
                  className="relative mb-10 last:mb-0"
                >
                  <span className="absolute -left-[18px] top-2 h-3 w-3 rounded-full border-2 border-[#05050A] bg-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.7)]" />
                  <div className="ml-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-cyan-500/30">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                        {t.year}
                      </span>
                      <span className="h-px flex-1 bg-white/5" />
                    </div>
                    <h4 className="mt-2 font-heading text-lg font-semibold text-white">{t.title}</h4>
                    <p className="mt-1 text-sm text-gray-400">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
