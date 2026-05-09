import React from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiPython, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiOpencv,
  SiGit, SiGithub, SiPostman, SiVercel, SiRender,
} from "react-icons/si";

const CATEGORIES = [
  {
    title: "Frontend",
    accent: "cyan",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Backend",
    accent: "blue",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JWT Auth", icon: SiNodedotjs },
    ],
  },
  {
    title: "AI / ML & Python",
    accent: "purple",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "OpenCV", icon: SiOpencv },
    ],
  },
  {
    title: "Tools",
    accent: "emerald",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];

const ACCENT = {
  cyan: { border: "border-cyan-400/40", text: "text-cyan-400", bg: "bg-cyan-400/10", glow: "rgba(0,240,255,0.25)" },
  blue: { border: "border-blue-400/40", text: "text-blue-400", bg: "bg-blue-400/10", glow: "rgba(59,130,246,0.25)" },
  purple: { border: "border-purple-400/40", text: "text-purple-400", bg: "bg-purple-400/10", glow: "rgba(176,38,255,0.25)" },
  emerald: { border: "border-emerald-400/40", text: "text-emerald-400", bg: "bg-emerald-400/10", glow: "rgba(16,185,129,0.25)" },
};

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
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
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">// 02 — stack</p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The toolkit I <span className="text-gradient">ship with</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map((cat, idx) => {
            const a = ACCENT[cat.accent];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                data-testid={`skill-category-${cat.title.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className={`group rounded-2xl border border-white/5 bg-[#0A0A0F] p-6 transition-all duration-300 hover:-translate-y-1 ${a.border.replace("/40", "/0")} hover:${a.border}`}
                style={{ "--g": a.glow }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-white">{cat.title}</h3>
                  <span className={`rounded-full border ${a.border} ${a.bg} px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${a.text}`}>
                    {cat.skills.length} stacks
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-white/15"
                    >
                      <s.icon size={18} className={a.text} />
                      <span className="text-sm text-gray-300">{s.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
