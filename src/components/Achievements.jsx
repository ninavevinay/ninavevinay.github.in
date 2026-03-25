import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { achievements } from "../data";

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3);

  return (
    <Section id="achievements" title="Achievements" subtitle="Highlights">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleAchievements.map((item, index) => (
          <motion.div
            key={item.title}
            className="glass rounded-2xl p-6 shadow-glass hover:shadow-glow transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/50">
                {item.year}
              </span>
              <span className="h-2 w-2 rounded-full bg-accent-500" />
            </div>
            <h3 className="text-lg font-display text-slate-900 dark:text-white mt-4">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-white/60 mt-3">
              {item.details}
            </p>
          </motion.div>
        ))}
      </div>
      {achievements.length > 3 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 rounded-full border border-slate-300/80 dark:border-white/25 text-sm font-medium text-slate-700 dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/10 transition"
            data-cursor
          >
            {showAll ? "Show Less" : "More"}
          </button>
        </div>
      )}
    </Section>
  );
}
