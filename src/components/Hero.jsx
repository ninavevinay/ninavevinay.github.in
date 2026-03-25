import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiGithub, FiDownload } from "react-icons/fi";
import { profile, socialLinks } from "../data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-16 items-center">

          {/* ── Text Content ── */}
          <div className="space-y-7">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-600 dark:text-accent-400 text-xs font-semibold uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                {profile.title}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight"
            >
              {profile.name.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i === 1
                      ? "bg-gradient-to-r from-accent-500 via-sky-400 to-purple-500 bg-clip-text text-transparent"
                      : "text-slate-900 dark:text-white"
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="text-lg text-slate-600 dark:text-white/65 max-w-xl leading-relaxed"
            >
              {profile.intro}
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-500 to-sky-500 text-white font-semibold text-sm flex items-center gap-2 hover:shadow-glow transition-all hover:scale-105"
                data-cursor
              >
                View Projects <FiArrowUpRight size={16} />
              </a>
              <a
                href={profile.resumeUrl}
                className="px-6 py-3 rounded-full glass border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white/80 font-semibold text-sm flex items-center gap-2 hover:border-slate-300 dark:hover:border-white/40 transition-all hover:scale-105"
                data-cursor
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload size={14} /> Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full glass border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white/80 font-semibold text-sm flex items-center gap-2 hover:border-slate-300 dark:hover:border-white/40 transition-all hover:scale-105"
                data-cursor
              >
                <FiMail size={14} /> Contact
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.32)}
              className="flex items-center gap-5 pt-2"
            >
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.name === "Email" ? `mailto:${profile.email}` : s.href}
                    target={s.name !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.name}
                    className="text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition"
                    data-cursor
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
              <span className="h-4 w-px bg-slate-300 dark:bg-white/10" />
              <span className="text-sm text-slate-500 dark:text-white/40">
                {profile.location}, India
              </span>
            </motion.div>
          </div>

          {/* ── Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl animate-pulseGlow" />
            <div className="absolute -bottom-8 -right-8 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl animate-pulseGlow" />
            <div className="glass gradient-border rounded-[36px] p-3 shadow-glass relative">
              <img
                src="/profile.jpeg"
                alt={profile.name}
                className="rounded-[30px] w-full aspect-[4/5] object-cover animate-float"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2.5 shadow-glass flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700 dark:text-white/80">
                  Open to work
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Decorative gradient orb ── */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <motion.div
          className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent-500/25 via-sky-400/10 to-transparent blur-3xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
