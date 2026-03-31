import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { achievements } from "../data";
import { FiStar } from "react-icons/fi";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVars = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3);

  return (
    <Section id="achievements" title="Achievements" subtitle="Highlights">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {visibleAchievements.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVars}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-[32px] p-7 shadow-sm hover:shadow-glow transition-all duration-300 group border border-slate-200/50 dark:border-white/10 hover:border-accent-500/40 relative overflow-hidden bg-white/40 dark:bg-slate-900/40"
            >
              <div className="absolute -bottom-8 -right-8 text-amber-500/10 group-hover:text-amber-500/20 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 pointer-events-none">
                <FiStar size={100} />
              </div>

              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 bg-slate-200/50 dark:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-300/50 dark:border-white/5">
                  {item.year}
                </span>
                <span className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-6 leading-tight group-hover:text-amber-500 transition-colors relative z-10">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed relative z-10 font-body">
                {item.details}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {achievements.length > 3 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="group relative px-8 py-4 rounded-full glass border border-slate-300 dark:border-white/20 text-sm font-bold text-slate-800 dark:text-white transition-all active:scale-95 shadow-md overflow-hidden"
            data-cursor
          >
            <span className="relative z-10">{showAll ? "Show Less" : "Load More Highlights"}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>
        </motion.div>
      )}
    </Section>
  );
}
