import React from "react";
import { motion } from "framer-motion";
import { Terminal, BookOpen, Trophy, Target } from "lucide-react";

const PLATFORMS = [
  { name: "LeetCode", count: "300+", focus: "Arrays · DP · Graphs", color: "text-yellow-300", border: "border-yellow-300/30" },
  { name: "GeeksforGeeks", count: "150+", focus: "Trees · Strings · Greedy", color: "text-emerald-400", border: "border-emerald-400/30" },
  { name: "HackerRank", count: "5★", focus: "Problem Solving · Python", color: "text-cyan-400", border: "border-cyan-400/30" },
  { name: "CodeChef", count: "Active", focus: "Long & short contests", color: "text-purple-400", border: "border-purple-400/30" },
];

const TOPICS = [
  "Arrays", "Strings", "Hash Maps", "Stacks & Queues", "Linked Lists",
  "Trees", "Graphs", "Recursion", "DP", "Greedy", "Sliding Window", "Two Pointers",
  "Heaps", "Tries", "Sorting", "Binary Search",
];

export default function DSA() {
  return (
    <section
      id="dsa"
      data-testid="dsa-section"
      className="relative px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
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
            // 07 — dsa & problem solving
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Algorithms keep me <span className="text-gradient">sharp</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* terminal preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="code-window p-1 lg:col-span-7"
          >
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span className="font-mono text-xs text-gray-500">~ dsa/two-sum.py</span>
            </div>
            <pre className="overflow-x-auto px-6 py-6 font-mono text-[13px] leading-relaxed text-gray-300">
{`def `}<span className="text-cyan-400">two_sum</span>{`(nums, target):
    seen = `}<span className="text-purple-400">{`{}`}</span>{`
    for i, n in enumerate(nums):
        if (target - n) in seen:
            return [seen[target - n], i]
        seen[n] = i
    return []

# `}<span className="text-emerald-400">O(n) time · O(n) space</span>{`
`}</pre>
          </motion.div>

          {/* metrics */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            {[
              { icon: Trophy, k: "500+", v: "Problems solved" },
              { icon: Target, k: "Daily", v: "Practice cadence" },
              { icon: BookOpen, k: "16", v: "Topics covered" },
              { icon: Terminal, k: "Python", v: "Primary language" },
            ].map((m, i) => (
              <motion.div
                key={m.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-xl border border-white/5 bg-[#0A0A0F] p-5"
              >
                <m.icon className="text-cyan-400" size={18} />
                <div className="mt-3 font-heading text-2xl font-bold text-white">{m.k}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {m.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-[#0A0A0F] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">platforms</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {PLATFORMS.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-lg border ${p.border} bg-white/[0.02] p-4`}
                  data-testid={`dsa-platform-${p.name.toLowerCase()}`}
                >
                  <div className={`font-heading text-base font-semibold ${p.color}`}>{p.name}</div>
                  <div className="mt-1 font-mono text-xs text-gray-400">{p.focus}</div>
                  <div className="mt-3 font-mono text-xs uppercase tracking-widest text-gray-500">
                    {p.count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0A0A0F] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-400">topics</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/5 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-gray-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
