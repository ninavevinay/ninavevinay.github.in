import { motion } from "framer-motion";
import Section from "./Section";
import { timeline } from "../data";

export default function Timeline() {
  return (
    <Section id="timeline" title="Experience" subtitle="Timeline">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-white/10" />
        <div className="space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.role}
              className="pl-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-accent-500/20 border border-accent-500 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-accent-500" />
              </div>
              <div className="glass rounded-2xl p-6 shadow-glass">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-display text-slate-900 dark:text-white">{item.role}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/50">
                    {item.year}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-white/70 mt-2">{item.company}</p>
                <p className="text-slate-600 dark:text-white/60 mt-3 text-sm">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
