import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 30);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (top / total) * 100 : 0);

      // active section detection
      const ids = NAV.map((n) => n.id);
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.nav
      data-testid="main-navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <motion.button
          onClick={() => go("home")}
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-2 font-mono text-sm tracking-widest"
          data-testid="navbar-logo"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-cyan-400/40 bg-cyan-400/10 text-cyan-400 font-heading font-bold">
            SR
          </span>
          <span className="hidden text-gray-300 sm:inline">
            sudhanshu<span className="text-cyan-400">.</span>dev
          </span>
        </motion.button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              data-testid={`nav-link-${n.id}`}
              className={`relative rounded-md px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                active === n.id ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
            >
              {n.label}
              {active === n.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            data-testid="nav-cta-hire"
            className="hidden rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] md:inline-block"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-gray-200 lg:hidden"
            data-testid="nav-menu-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* progress bar */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/5">
        <div
          className="h-px bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-black/90 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  data-testid={`mobile-nav-${n.id}`}
                  className="border-b border-white/5 py-3 text-left font-mono text-sm uppercase tracking-widest text-gray-300 hover:text-cyan-400"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
