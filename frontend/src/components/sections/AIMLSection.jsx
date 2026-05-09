import React from "react";
import { motion } from "framer-motion";
import { Database, GitBranch, Cpu, BarChart3, Sparkles, Workflow } from "lucide-react";

const STAGES = [
  { icon: Database, title: "Data", desc: "CSV / API / scraping", accent: "text-cyan-400" },
  { icon: Workflow, title: "Pipeline", desc: "Clean → encode → split", accent: "text-blue-400" },
  { icon: Cpu, title: "Train", desc: "Sklearn · TensorFlow", accent: "text-purple-400" },
  { icon: BarChart3, title: "Evaluate", desc: "Metrics · SHAP · plots", accent: "text-pink-400" },
  { icon: GitBranch, title: "Serve", desc: "FastAPI · REST · websockets", accent: "text-emerald-400" },
  { icon: Sparkles, title: "Iterate", desc: "Monitor · retrain · ship", accent: "text-yellow-300" },
];

export default function AIMLSection() {
  return (
    <section
      id="ai-ml"
      data-testid="aiml-section"
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
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-purple-400">
            // 04 — ai / ml workflow
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From dataset to <span className="text-gradient-cyan">deployed model</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
            Every ML feature I ship moves through this loop — clear, testable, observable.
          </p>
        </motion.div>

        <div className="relative">
          {/* connector line */}
          <div className="absolute left-1/2 top-1/2 hidden h-px w-[90%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-purple-500/0 lg:block" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`aiml-stage-${i}`}
                className="group relative rounded-2xl border border-white/5 bg-[#0A0A0F] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <s.icon className={`${s.accent}`} size={18} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-1 font-heading text-base font-semibold text-white">{s.title}</div>
                <div className="mt-1 text-xs text-gray-400">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* algorithm chips */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            ["Supervised", ["Linear Regression", "Random Forest", "XGBoost", "SVM"]],
            ["Deep Learning", ["CNN", "RNN", "Transformer-basics", "TensorFlow"]],
            ["Tooling", ["Pandas", "NumPy", "Matplotlib", "OpenCV"]],
          ].map(([title, items], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#0A0A0F] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
