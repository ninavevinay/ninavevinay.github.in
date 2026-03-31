import { motion } from "framer-motion";
import { socialLinks, profile } from "../data";
import { FiHeart, FiCode } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/50 dark:border-white/10 overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent-500/50 to-transparent shadow-[0_0_10px_rgba(88,230,217,0.5)]" />

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="relative group cursor-pointer" data-cursor>
              <div className="absolute inset-0 bg-accent-500/20 rounded-2xl blur-lg group-hover:bg-accent-500/40 transition-colors duration-300" />
              <img
                src="/logo.png"
                alt="Logo"
                className="relative h-12 w-12 rounded-2xl object-cover glass border border-white/20 p-1 shadow-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="font-display text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                {profile.name}
              </p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                Full Stack Developer · <span className="text-accent-500">Nagpur, India</span>
              </p>
            </div>
          </motion.div>

          {/* Social + Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <a
              href={profile.resumeUrl}
              download="Vinay_Ninave_Resume.pdf"
              className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-sm font-bold text-slate-800 dark:text-white hover:text-white hover:bg-slate-900 dark:hover:bg-accent-500 hover:border-transparent transition-all hover:scale-105 shadow-sm"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <div className="h-6 w-px bg-slate-300 dark:bg-white/10 mx-2" />
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.name === "Email" ? `mailto:${profile.email}` : item.href}
                  target={item.name !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 hover:border-accent-500/50 hover:bg-accent-500/10 transition-all hover:scale-110 shadow-sm hover:shadow-glow"
                  aria-label={item.name}
                  data-cursor
                >
                  <Icon size={18} />
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-slate-200/50 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500 dark:text-slate-400"
        >
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">
            Built with <FiHeart size={14} className="text-red-500 animate-pulse" /> & <FiCode size={14} className="text-accent-500" /> globally
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
