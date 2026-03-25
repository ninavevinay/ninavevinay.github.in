import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic">
      <div className="relative">
        
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-white/10" />

        <div className="space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={`${item.degree}-${index}`}
              className="pl-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-accent-500/20 border border-accent-500 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-accent-500" />
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 shadow-glass">
                
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-display text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>

                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/50">
                    {item.year}
                  </span>
                </div>

                {/* Institute */}
                <p className="text-slate-700 dark:text-white/70 mt-2">
                  {item.institute}
                </p>

                {/* Marks (optional) */}
                {item.marks && (
                  <div className="mt-2 text-sm text-slate-600 dark:text-white/60">
                    {item.marks}
                  </div>
                )}

                {/* Details */}
                {item.details && (
                  <p className="text-slate-600 dark:text-white/60 mt-3 text-sm">
                    {item.details}
                  </p>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}