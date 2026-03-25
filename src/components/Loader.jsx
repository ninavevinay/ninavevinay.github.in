import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-white dark:bg-base-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex items-center justify-center">
        <div className="h-20 w-20 rounded-full border-2 border-accent-500/40" />
        <motion.div
          className="absolute h-20 w-20 rounded-full border-t-2 border-accent-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <span className="absolute text-xs tracking-[0.4em] text-slate-600 dark:text-white/60">LOADING</span>
      </div>
    </motion.div>
  );
}
