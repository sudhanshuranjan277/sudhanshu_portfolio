import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Server, Brain } from "lucide-react";

const NODES = [
  { phase: "Started", title: "HTML / CSS / JS", desc: "Crafted my first static sites and learned how the web actually works.", icon: Code },
  { phase: "Frontend", title: "React + Tailwind", desc: "Built component-driven UIs and explored modern animation & state.", icon: Sparkles },
  { phase: "Backend", title: "Node + Express + MongoDB", desc: "Designed REST APIs, auth flows, RBAC and production-grade services.", icon: Server },
  { phase: "AI / ML", title: "Python · Sklearn · TensorFlow", desc: "Moved into machine learning — pipelines, models and ML-powered apps.", icon: Brain },
];

export default function Journey() {
  return (
    <section
      id="journey"
      data-testid="journey-section"
      className="relative px-5 py-16 sm:px-8 sm:py-28 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            // 06 — journey
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From <span className="text-gradient-cyan">frontend</span> to <span className="text-gradient">AI / ML</span>.
          </h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {NODES.map((n, i) => (
            <motion.div
              key={n.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              data-testid={`journey-node-${i}`}
              className="relative rounded-2xl border border-white/5 bg-[#0A0A0F] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-[#05050A] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                phase {String(i + 1).padStart(2, "0")}
              </div>

              <div className="mt-3 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5">
                <n.icon className="text-cyan-400" size={20} />
              </div>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-gray-500">
                {n.phase}
              </p>
              <h3 className="mt-1 font-heading text-lg font-semibold text-white">{n.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{n.desc}</p>

              {i < NODES.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-cyan-400/60 to-transparent xl:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
