import { motion } from "framer-motion";
import { socialLinks, profile } from "../data";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/5 overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3.5"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-xl object-contain bg-white/60 dark:bg-white/10 p-1 shadow-sm"
            />
            <div>
              <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {profile.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-white/45">
                Full Stack Developer · Nagpur, India
              </p>
            </div>
          </motion.div>

          {/* Social + Resume */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <a
              href={profile.resumeUrl}
              className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 transition"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.name === "Email" ? `mailto:${profile.email}` : item.href}
                  target={item.name !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 transition"
                  aria-label={item.name}
                  data-cursor
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-white/30"
        >
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with <FiHeart size={11} className="text-red-400" /> using React & Tailwind
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
