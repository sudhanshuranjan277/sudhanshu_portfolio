import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Github, Mail, Sparkles } from "lucide-react";
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const FLOATING = [
  { Icon: SiPython, color: "#FFD43B", x: "10%", y: "20%", d: 0 },
  { Icon: SiReact, color: "#61DAFB", x: "85%", y: "18%", d: 0.4 },
  { Icon: SiTensorflow, color: "#FF6F00", x: "12%", y: "70%", d: 0.8 },
  { Icon: SiNodedotjs, color: "#3FA037", x: "82%", y: "75%", d: 1.2 },
  { Icon: SiMongodb, color: "#10AA50", x: "5%", y: "45%", d: 1.6 },
  { Icon: SiTypescript, color: "#3178C6", x: "90%", y: "45%", d: 2.0 },
  { Icon: SiTailwindcss, color: "#38BDF8", x: "20%", y: "88%", d: 2.4 },
  { Icon: SiNextdotjs, color: "#F3F4F6", x: "78%", y: "88%", d: 2.8 },
];

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20 sm:px-8 lg:px-12"
    >
      {/* floating tech icons */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        {FLOATING.map(({ Icon, color, x, y, d }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ delay: 0.6 + d * 0.15, duration: 0.6 }}
            style={{ left: x, top: y, color }}
            className="absolute"
          >
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 6 + d, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              style={{ boxShadow: `0 0 30px ${color}33` }}
            >
              <Icon size={26} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
              Available for opportunities
            </span>
          </div>

          <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-gray-400" data-testid="hero-greet">
            &gt; init.developer( )
          </p>

          <h1 className="font-heading text-[40px] font-black leading-[1.02] tracking-tighter break-words sm:text-6xl lg:text-7xl xl:text-[88px]">
            <span className="block text-white">Sudhanshu</span>
            <span className="block text-gradient">Ranjan</span>
          </h1>

          <div className="mt-6 flex items-center gap-3 font-mono text-base text-gray-300 sm:text-lg lg:text-xl">
            <span className="text-cyan-400">{"//"}</span>
            <TypeAnimation
              sequence={[
                "AI/ML Engineer", 1500,
                "Python Developer", 1500,
                "Full Stack Developer", 1500,
                "Backend Developer", 1500,
                "MERN Stack Developer", 1500,
              ]}
              speed={40}
              repeat={Infinity}
              wrapper="span"
              className="text-white"
            />
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-400" />
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            I am a B.Tech Computer Science Engineering student specializing in{" "}
            <span className="text-cyan-400">Artificial Intelligence & Machine Learning</span>,
            focused on building scalable web applications, robust backend systems, and{" "}
            <span className="text-purple-400">AI-powered solutions</span> that solve real problems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              data-testid="hero-resume-button"
              className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-6 py-3 font-mono text-sm uppercase tracking-wider text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
            >
              <Download size={16} />
              Resume
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/sudhanshuranjan277"
              target="_blank"
              rel="noreferrer"
              data-testid="hero-github-button"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-mono text-sm uppercase tracking-wider text-gray-200 transition-all duration-300 hover:border-white/40"
            >
              <Github size={16} />
              GitHub
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              data-testid="hero-contact-button"
              className="inline-flex items-center gap-2 rounded-lg border border-purple-400/50 bg-purple-500/10 px-6 py-3 font-mono text-sm uppercase tracking-wider text-purple-300 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_30px_rgba(176,38,255,0.5)]"
            >
              <Mail size={16} />
              Contact
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-xs">
            {[
              ["10+", "Projects shipped"],
              ["AI/ML", "Specialization"],
              ["MERN", "Stack focus"],
              ["DSA", "500+ problems"],
            ].map(([k, v]) => (
              <div key={v} className="flex flex-col">
                <span className="font-heading text-2xl font-bold text-white">{k}</span>
                <span className="font-mono uppercase tracking-wider text-gray-500">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="code-window p-1">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-gray-500">~/sudhanshu/profile.py</span>
            </div>
            <pre className="overflow-x-auto px-6 py-6 font-mono text-[13px] leading-relaxed text-gray-300">
{`class Developer:
    name = `}<span className="text-cyan-400">"Sudhanshu Ranjan"</span>{`
    role = `}<span className="text-purple-400">"AI/ML + Full Stack"</span>{`
    stack = [`}
              <span className="text-yellow-300">"React"</span>,{" "}
              <span className="text-yellow-300">"Node"</span>,{" "}
              <span className="text-yellow-300">"Python"</span>,{" "}
              <span className="text-yellow-300">"MongoDB"</span>{`]
    focus = `}<span className="text-emerald-400">"scalable systems"</span>{`

    def `}<span className="text-cyan-400">build</span>{`(self, idea):
        return ship(idea, quality=`}
              <span className="text-purple-400">"premium"</span>{`)
`}
            </pre>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {["Python", "MERN", "AI / ML"].map((t) => (
              <div
                key={t}
                className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-3 text-center"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  expertise
                </div>
                <div className="mt-1 font-heading text-sm font-semibold text-white">{t}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        data-testid="scroll-indicator"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
            scroll
          </span>
          <div className="grid h-10 w-6 place-items-start rounded-full border border-cyan-400/40 p-1">
            <motion.span
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="block h-1.5 w-1 rounded-full bg-cyan-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
