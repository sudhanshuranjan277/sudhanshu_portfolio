import React from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer
      data-testid="site-footer"
      className="relative z-10 border-t border-white/5 bg-[#05050A]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-cyan-400/40 bg-cyan-400/10 text-cyan-400 font-heading font-bold">
            SR
          </span>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-semibold text-white">Sudhanshu Ranjan</span>
            <span className="font-mono text-[11px] text-gray-500">
              © {new Date().getFullYear()} — Crafted with code & curiosity.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sudhanshuranjan277"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-cyan-400"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/sudhanshuranjan277/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-cyan-400"
          >
            <Linkedin size={16} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-cyan-400">
            <Twitter size={16} />
          </a>
          <a href="mailto:sudhanshuranjan277@gmail.com" aria-label="Email" className="text-gray-400 hover:text-cyan-400">
            <Mail size={16} />
          </a>
          <button
            onClick={goTop}
            data-testid="footer-back-to-top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-400"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
