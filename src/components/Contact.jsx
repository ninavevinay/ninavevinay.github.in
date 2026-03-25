import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { submitContactForm } from "../api/contactApi";
import { profile } from "../data";
import Section from "./Section";

const initialState = { name: "", email: "", message: "" };

const inputClass =
  "mt-2 w-full rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-5 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition duration-200 text-sm";
const labelClass = "text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-white/50";

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
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        {/* ── Form Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-10 shadow-glass"
        >
          <h3 className="text-2xl font-display font-semibold text-slate-900 dark:text-white mb-1">
            Send a message
          </h3>
          <p className="text-sm text-slate-500 dark:text-white/50 mb-8">
            I'll reply within 24–48 hours. All fields are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-accent-500 to-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-glow transition disabled:opacity-60 disabled:cursor-not-allowed"
              data-cursor
            >
              {status === "loading" ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white inline-block" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </motion.button>
          </form>

          {/* ── Status Toasts ── */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 flex items-center gap-3 glass rounded-2xl px-5 py-4 text-emerald-500 text-sm font-medium"
              >
                <FiCheckCircle size={18} />
                Message sent! I'll get back to you shortly.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 flex items-center gap-3 glass rounded-2xl px-5 py-4 text-red-400 text-sm font-medium"
              >
                <FiAlertTriangle size={18} />
                {errorMessage || "Something went wrong. Please try again."}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Info Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-5"
        >
          <div className="glass rounded-3xl p-8 shadow-glass space-y-6">
            <div>
              <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                Let's build something premium.
              </h3>
              <p className="text-sm text-slate-600 dark:text-white/60 mt-3 leading-relaxed">
                I'm open to full-time roles, freelance projects, and engineering
                leadership opportunities. Share your vision and let's create
                something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 group"
                data-cursor
              >
                <span className="p-2.5 rounded-xl bg-accent-500/10 text-accent-500 group-hover:bg-accent-500/20 transition">
                  <FiMail size={16} />
                </span>
                <span className="text-sm text-slate-700 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white transition">
                  {profile.email}
                </span>
              </a>

              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                  <FiMapPin size={16} />
                </span>
                <span className="text-sm text-slate-700 dark:text-white/70">
                  {profile.location}, India
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex gap-3">
              <a
                href="https://github.com/ninavevinay"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 transition"
                data-cursor
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-ninave/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 transition"
                data-cursor
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 shadow-glass text-center">
            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40 mb-2">
              Availability
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-800 dark:text-white">
                Open to opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
