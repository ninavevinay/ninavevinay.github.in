import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 lg:py-28">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10">
        <motion.div {...fadeUp(0)} className="mb-12">
          <div className="flex items-center gap-4">
            <p className="text-sm uppercase tracking-[0.32em] text-accent-600 dark:text-accent-400 font-display font-semibold">
            {subtitle}
          </p>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-500/35 via-sky-400/20 to-transparent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-3 tracking-tight text-slate-900 dark:text-white">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
