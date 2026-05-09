import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight, Layers, Cpu } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/projects`)
      .then((r) => setProjects(r.data.projects || []))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
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
              // 03 — featured work
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Selected <span className="text-gradient">projects</span> & systems.
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-400">
            From ML pipelines to role-based dashboards — a curated set of work spanning AI, backend
            and full-stack engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              data-testid={`project-card-${p.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0F] p-7 text-left transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.12)] md:col-span-4 ${p.span || "lg:col-span-6"}`}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                    {String(i + 1).padStart(2, "0")} / {p.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:rotate-45 group-hover:text-cyan-400" />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
                  {p.tagline}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 5 && (
                    <span className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 font-mono text-[11px] text-cyan-400">
                      +{p.tech.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
      data-testid="project-modal"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-cyan-500/30 bg-[#0A0A0F] p-6 sm:p-10 shadow-[0_0_60px_rgba(0,240,255,0.15)]"
      >
        <button
          onClick={onClose}
          data-testid="project-modal-close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400"
          aria-label="Close project details"
        >
          <X size={16} />
        </button>

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
          {project.category}
        </p>
        <h3 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-gray-400">{project.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
              <Cpu size={14} /> Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 font-mono text-[11px] text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400">
              <Layers size={14} /> Architecture
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              {project.architecture.map((a, i) => (
                <li key={a} className="flex gap-2">
                  <span className="font-mono text-purple-400">{String(i + 1).padStart(2, "0")}.</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-testid="project-modal-github"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-gray-200 hover:border-white/40"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            data-testid="project-modal-live"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-cyan-400 hover:bg-cyan-400 hover:text-black"
          >
            <ExternalLink size={14} /> Live demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
