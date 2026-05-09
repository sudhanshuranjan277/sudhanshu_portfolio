import React from "react";
import { motion } from "framer-motion";
import { Github, GitCommit, Star, GitFork, Activity } from "lucide-react";

const USER = "sudhanshuranjan277";

const STATS = [
  { label: "Public repos", value: "30+", icon: GitFork },
  { label: "Commits / yr", value: "800+", icon: GitCommit },
  { label: "Stars earned", value: "120+", icon: Star },
  { label: "Streak", value: "180 days", icon: Activity },
];

export default function GitHubStats() {
  return (
    <section
      id="github"
      data-testid="github-section"
      className="relative px-5 py-16 sm:px-8 sm:py-28 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              // 05 — github
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Code is my <span className="text-gradient">canvas</span>.
            </h2>
          </div>
          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer"
            data-testid="github-profile-link"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-gray-200 hover:border-cyan-400/40 hover:text-cyan-400"
          >
            <Github size={14} />@{USER}
          </a>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* stats cards */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-1">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`github-stat-${i}`}
                className="rounded-xl border border-white/5 bg-[#0A0A0F] p-5"
              >
                <s.icon className="text-cyan-400" size={18} />
                <div className="mt-3 font-heading text-2xl font-bold text-white">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* contribution-style heatmap (cosmetic) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/5 bg-[#0A0A0F] p-6 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                contribution graph
              </p>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                last 26 weeks
              </span>
            </div>

            <div className="mt-5 grid grid-cols-[repeat(26,minmax(0,1fr))] grid-rows-7 gap-[3px]">
              {Array.from({ length: 26 * 7 }).map((_, i) => {
                const r = Math.random();
                let c = "bg-white/5";
                if (r > 0.4) c = "bg-cyan-500/20";
                if (r > 0.65) c = "bg-cyan-500/40";
                if (r > 0.82) c = "bg-cyan-400/70";
                if (r > 0.94) c = "bg-cyan-300";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: (i % 60) * 0.005 }}
                    className={`h-3 w-full rounded-[2px] ${c}`}
                  />
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              less
              {["bg-white/5", "bg-cyan-500/20", "bg-cyan-500/40", "bg-cyan-400/70", "bg-cyan-300"].map(
                (c) => (
                  <span key={c} className={`h-3 w-3 rounded-[2px] ${c}`} />
                )
              )}
              more
            </div>
          </motion.div>
        </div>

        {/* live stat images from github-readme-stats (graceful: just images) */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0A0A0F&title_color=00F0FF&icon_color=B026FF&text_color=9CA3AF`}
            alt="GitHub stats"
            data-testid="github-stats-card"
            loading="lazy"
            className="w-full rounded-xl border border-white/5"
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${USER}&theme=tokyonight&hide_border=true&background=0A0A0F&ring=00F0FF&fire=B026FF&currStreakLabel=00F0FF`}
            alt="GitHub streak"
            data-testid="github-streak-card"
            loading="lazy"
            className="w-full rounded-xl border border-white/5"
          />
        </div>
      </div>
    </section>
  );
}
