import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { certificates } from "../data";
import { FiAward } from "react-icons/fi";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <Section id="certificates" title="Certificates" subtitle="Credentials">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {visibleCertificates.map((item, index) => (
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
              {/* Decorative Background */}
              <div className="absolute -top-10 -right-10 text-slate-100 dark:text-slate-800 opacity-50 group-hover:text-accent-500/10 group-hover:scale-150 transition-all duration-700 pointer-events-none">
                <FiAward size={120} />
              </div>

              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 bg-slate-200/50 dark:bg-white/10 px-3 py-1.5 rounded-lg">
                  {item.year}
                </span>
                <span className="h-3 w-3 rounded-full bg-accent-500 shadow-[0_0_12px_rgba(88,230,217,0.8)]" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-6 leading-tight group-hover:text-accent-500 transition-colors relative z-10">
                {item.title}
              </h3>
              
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 relative z-10">
                {item.issuer}
              </p>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed relative z-10 font-body">
                {item.details}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {certificates.length > 3 && (
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
            <span className="relative z-10">{showAll ? "Show Less" : `View All Certificates (${certificates.length})`}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>
        </motion.div>
      )}
    </Section>
  );
}
