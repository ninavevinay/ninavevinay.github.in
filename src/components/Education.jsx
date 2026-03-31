import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "../data";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVars = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
};

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic">
      <div className="relative max-w-4xl mx-auto">
        
        {/* Glow Line Behind Timeline */}
        <div className="absolute left-[27px] top-0 h-full w-[2px] bg-gradient-to-b from-accent-500/0 via-accent-500/50 to-purple-500/0 blur-sm" />
        
        {/* Actual Timeline line */}
        <div className="absolute left-7 top-0 h-full w-px bg-slate-300 dark:bg-white/10" />

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {education.map((item, index) => (
            <motion.div
              key={`${item.degree}-${index}`}
              variants={itemVars}
              className="pl-16 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[14px] top-1.5 h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-white/20 flex items-center justify-center group-hover:border-accent-500 group-hover:scale-125 transition-all duration-300 shadow-sm z-10">
                <div className="h-2 w-2 rounded-full bg-slate-400 dark:bg-white/40 group-hover:bg-accent-500 group-hover:shadow-[0_0_10px_rgba(88,230,217,1)] transition-colors duration-300" />
              </div>

              {/* Card */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass rounded-3xl p-7 shadow-sm border border-slate-200/50 dark:border-white/10 group-hover:shadow-glow group-hover:border-accent-500/30 transition-all duration-300 bg-white/40 dark:bg-slate-900/40 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-32 bg-accent-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent-500/10 transition-colors" />

                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-accent-500 transition-colors">
                    {item.degree}
                  </h3>

                  <span className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 bg-slate-200/50 dark:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-300/50 dark:border-white/5">
                    {item.year}
                  </span>
                </div>

                {/* Institute */}
                <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {item.institute}
                </p>

                {/* Marks (optional) */}
                {item.marks && (
                  <div className="inline-block mt-1 mb-4 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm">
                    {item.marks}
                  </div>
                )}

                {/* Details */}
                {item.details && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200/50 dark:border-white/10 pt-4 mt-2">
                    {item.details}
                  </p>
                )}

              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}