import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { profile } from "../data";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/70 dark:bg-base-900/60 border-b border-slate-200 dark:border-white/5">
      <nav className="max-w-7xl w-full mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3 font-display text-2xl tracking-wide text-slate-900 dark:text-white"
          data-cursor
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-9 w-9 rounded-xl object-contain bg-white/60 dark:bg-white/10 p-1 shadow-sm"
          />
          <span>{profile.name}</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-base">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition"
              data-cursor
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 transition"
            aria-label="Toggle theme"
            data-cursor
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition"
            aria-label="Toggle theme"
            data-cursor
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            className="text-slate-700 dark:text-white/80"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            data-cursor
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass shadow-glass mx-6 mb-4 rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition"
                  onClick={() => setOpen(false)}
                  data-cursor
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
