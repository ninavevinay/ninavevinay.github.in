import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { submitContactForm } from "../api/contactApi";
import { profile } from "../data";
import Section from "./Section";

const initialState = { name: "", email: "", message: "" };

const inputClass =
  "mt-2 w-full rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 px-5 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all duration-300 text-sm shadow-inner backdrop-blur-sm";
const labelClass = "text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/60";

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <Section id="contact" title="Contact" subtitle="Get In Touch">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start max-w-6xl mx-auto">
        {/* ── Form Card ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
          className="glass rounded-[40px] p-8 md:p-12 shadow-glass relative border border-slate-200/50 dark:border-white/10 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          
          <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2 leading-tight">
            Send a message
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">
            I'll reply within 24–48 hours. All fields are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVars} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Vinay Ninave"
              />
            </motion.div>
            <motion.div variants={itemVars} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="you@example.com"
              />
            </motion.div>
            <motion.div variants={itemVars} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <label className={labelClass}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className={inputClass}
                placeholder="Tell me about your project or opportunity..."
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm flex items-center justify-center gap-3 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed group relative overflow-hidden ring-2 ring-transparent hover:ring-slate-900/50 dark:hover:ring-white/50"
              data-cursor
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {status === "loading" ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white dark:border-slate-900/30 dark:border-t-slate-900 inline-block" />
                  Sending…
                </>
              ) : (
                <span className="relative z-10 flex items-center gap-2">
                  Send Message <FiSend className="group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </motion.button>
          </form>

          {/* ── Status Toasts ── */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-6 flex items-center gap-3 glass rounded-2xl px-5 py-4 text-emerald-600 dark:text-emerald-400 text-sm font-bold border border-emerald-500/30 bg-emerald-500/5"
              >
                <FiCheckCircle size={20} />
                Message sent successfully!
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-6 flex items-center gap-3 glass rounded-2xl px-5 py-4 text-red-500 dark:text-red-400 text-sm font-bold border border-red-500/30 bg-red-500/5"
              >
                <FiAlertTriangle size={20} />
                {errorMessage || "Something went wrong. Please try again."}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Info Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 50 }}
          className="space-y-6"
        >
          <div className="glass rounded-[32px] p-8 md:p-10 shadow-glass space-y-8 border border-slate-200/50 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                Let's build something premium.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-body">
                I'm open to full-time roles, freelance projects, and engineering
                leadership opportunities. Share your vision and let's create
                something amazing together.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 group"
                data-cursor
              >
                <span className="p-3 rounded-2xl bg-accent-500/10 text-accent-600 dark:text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <FiMail size={18} />
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-accent-500 transition-colors">
                  {profile.email}
                </span>
              </a>

              <div className="flex items-center gap-4 group">
                <span className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <FiMapPin size={18} />
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-purple-500 transition-colors">
                  {profile.location}, India
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/50 dark:border-white/10 flex gap-4">
              <a
                href="https://github.com/ninavevinay"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-accent-500 transition-all duration-300 hover:scale-110 shadow-sm"
                data-cursor
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-ninave/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110 shadow-sm"
                data-cursor
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="glass rounded-[32px] p-8 shadow-sm border border-slate-200/50 dark:border-white/10 text-center relative overflow-hidden bg-white/40 dark:bg-slate-900/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 pointer-events-none" />
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 relative z-10">
              Availability
            </p>
            <div className="flex items-center justify-center gap-3 relative z-10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-base font-bold text-slate-800 dark:text-white">
                Open to opportunities
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
