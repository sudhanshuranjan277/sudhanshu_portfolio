import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Send, Github, Linkedin, Twitter, MapPin } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SOCIALS = [
  { Icon: Github, label: "GitHub", href: "https://github.com/sudhanshuranjan277" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sudhanshu-ranjan/" },
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
  { Icon: Mail, label: "Email", href: "mailto:sudhanshuranjan277@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill all fields before sending.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
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
            // 09 — contact
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's <span className="text-gradient">build</span> something.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
            Have an idea, internship, or collaboration in mind? Drop me a message — I read everything
            and reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/5 bg-[#0A0A0F] p-7">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">say hello</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                I'm a message away.
              </h3>
              <div className="mt-6 space-y-4 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <a href="mailto:hello@sudhanshu.dev" className="hover:text-cyan-400">
                    hello@sudhanshu.dev
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span>India · Remote-friendly</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  social
                </p>
                <div className="mt-3 flex gap-3">
                  {SOCIALS.map(({ Icon, label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`social-${label.toLowerCase()}`}
                      whileHover={{ y: -3 }}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/70" />
                    <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
                  </span>
                  Available for opportunities
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={submit}
            data-testid="contact-form"
            className="rounded-2xl border border-white/5 bg-[#0A0A0F] p-7 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" id="contact-name">
                <input
                  data-testid="contact-name-input"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Ada Lovelace"
                  className={INPUT}
                />
              </Field>
              <Field label="Email" id="contact-email">
                <input
                  data-testid="contact-email-input"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@domain.com"
                  className={INPUT}
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Subject" id="contact-subject">
                <input
                  data-testid="contact-subject-input"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="Internship · Collaboration · Project"
                  className={INPUT}
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message" id="contact-message">
                <textarea
                  data-testid="contact-message-input"
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me a bit about what you're building..."
                  className={`${INPUT} resize-none`}
                />
              </Field>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
                avg reply &lt; 24h
              </p>
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                disabled={loading}
                data-testid="contact-submit-button"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-6 py-3 font-mono text-xs uppercase tracking-wider text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={14} />
                {loading ? "Sending…" : "Send message"}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

const INPUT =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-cyan-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(0,240,255,0.08)]";

function Field({ label, id, children }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500">
        {label}
      </span>
      {children}
    </label>
  );
}
>
  );
}
